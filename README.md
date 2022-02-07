# icon.community – The Official ICON Community Website

This repository contains the code and assets for the icon.community site. To preview the site in a local environment, you'll need to install the Hugo static site generator.

## How to Install Hugo

Hugo supports multiple platforms including macOS, Windows, and Linux.

### macOS and Linux

For macOS and Linux users, we recommend using Homebrew to install Hugo.

```
brew install hugo
```

### Windows

For Windows users, we recommend using Chocolatey to install Hugo.

```
choco install hugo -confirm
```

## How to Preview the Site Locally

After installing Hugo, navigate to the project directory and install the npm dependencies with the command below.

```
npm install
```

Once the dependencies have been installed, run the command below to start a local Hugo server.

```
hugo server
```

Whenever you make a change to the site code or content, Hugo will automatically rebuild the site.