---
title: "How to Create a Custom Testnet"
date: 2023-03-26
author: espanicon
slug: how-to-create-a-custom-testnet
description: Learn how to create your own custom testnet.
draft: false
tags:
- node-management
- networking
---

During the development phase of your new project in the ICON Ecosystem, depending on the requirements of your project and the tests you might need to run during development, it might be necessary to create your own testnet, some of the reasons for this might be:

* You need amounts of ICX bigger than the ones that can be obtained via the faucets in the current testnet.
* You need to have one or more main validators in the testnet for doing specific tasks like creating network proposals.

In these cases where using one of the existing testnet is not the best approach, you can setup your own custom testnet by running a multi-node local network on a server and configuring access to the server with a reverse proxy like `nginx`.

## Prerequisites

To be able to run this project you need to first install the following programs:
* `docker` and `docker compose`. [Installation steps](https://docs.docker.com/engine/install/ubuntu/).
* `nodejs`. [Installation steps](https://nodejs.org/en/download).
* `nginx`. [Installation steps](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/).

## Creating and decentralizing the network

The first thing we are going to do is organize our project. We are going to be working on a folder named `custom-testnet` located in the `home` folder.

```bash
cd ~
mkdir custom-testnet
cd ~/custom-testnet
```

Inside this folder we are going to clone two repositories:

* [gochain-local](https://github.com/icon-community/gochain-local-decentralize): A repo with a set of scripts to create and run gochain docker containers as a local network.
* [gochain-local-decentralize](https://github.com/icon-community/gochain-local-decentralize): A script to decentralize a local network created with the `gochain-local` repo.

We are going to start by cloning the `gochain-local` repo.

```bash
git clone https://github.com/icon-project/gochain-local.git
```

Now we clone the `gochain-local-decentralize` repo.
```bash
git clone https://github.com/icon-community/gochain-local-decentralize.git
```

After cloning the `gochain-local-decentralize` repo, go inside the folder and install the dependencies.

```bash
cd ~/custom-testnet/gochain-local-decentralize
npm install
```

Our `custom-testnet` project folder should look like this right now:
```bash
$ tree -L 2
.
├── gochain-local
│   ├── README.md
│   ├── compose-multi.yml
│   ├── compose-single.yml
│   ├── data
│   ├── run_gochain.sh
│   └── tracker
└── gochain-local-decentralize
    ├── README.md
    ├── index.js
    ├── package-lock.json
    ├── package.json
    ├── src
    └── wallets

6 directories, 8 files
```

To finish up the setting up process lets create a `Makefile` in our project root folder (`~/custom-testnet`):

```bash
touch ~/custom-testnet/Makefile
```

And add the following content to that `Makefile`
```bash
info:
    @echo "Run 'make start' or 'make stop' to run the docker commands"

start:
    @sudo docker compose -f ./gochain-local/compose-multi.yml up -d
    @(cd ./gochain-local-decentralize && node ./index.js)

stop:
    @sudo docker compose -f ./gochain-local/compose-multi.yml down

reboot: start stop
```

Now the `custom-testnet` is ready. To run the testnet we just need to move inside the `~/custom-testnet` and run  the command `make start` and to stop it run the command `make stop`.

## Setting up access to the network

At this point you have a local multi node network already decentralized that you can access locally at `http://localhost:9080` or from the outside of your server (previosly verifying that the 9080 port is open) with `http://IP_ADDRESS:9080`.

To improve this access point we can use `nginx` as a reverse proxy.

If you followed the `prerequisites` section you already have `nginx` installed, so the first thing to do is open the `/etc/nginx/nginx.conf` file, and edit it to have the following data:

```bash
events {}
http {

    upstream local_cluster {
        zone upstreams 64k;
        server 127.0.0.1:9080 max_fails=1 fail_timeout=2s;
        keepalive 2;
    }

    server {
        listen 80;
        # server_name www.example.com; # in the case you have a domain name

        location /admin {
            proxy_set_header Host $host;
            proxy_pass http://local_cluster/admin;
            proxy_next_upstream error timeout http_500;
        }

        location /api {
            proxy_set_header Host $host;
            proxy_pass http://local_cluster/api;
            proxy_next_upstream error timeout http_500;
        }
    }
}
```

Restart the nginx service by running:

```bash
sudo systemctl restart nginx.service
```
You can then run the following command to make sure that the nginx service is up and running correctly:

```bash
sudo systemctl status nginx.service
```
After finishing the configuration process now you can access your node using the default http port (80) like so:

```bash
curl -X POST --data '{"jsonrpc": "2.0", "id": 1, "method": "icx_call", "params": {"to": "cx0000000000000000000000000000000000000000", "dataType": "call", "data": {"method": "getPReps", "params": {"startRanking": "0x1"}}}}' http://localhost:9080/api/v3
```

## Further Resources
* https://docs.icon.community/getting-started/how-to-run-a-local-network
* https://github.com/icon-project/gochain-local
* https://github.com/icon-community/gochain-local-decentralize
