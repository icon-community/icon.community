---
title: "Interacting with ICON Wallets in the Browser"
date: 2023-04-01
author: espanicon
slug: interacting-with-icon-wallets-in-the-browser
description: Learn how to communicate with ICON Wallets in the browser.
draft: false
tags:
- wallets
- javascript
- react
---

## Introduction

Interacting with ICON wallets in the browser is an essential part of building decentralized applications on the ICON network. This tutorial will show you how to connect with ICON wallets in the browser using the [ICON Provider JS API](https://github.com/icon-project/IIPs/blob/master/IIPS/iip-49.md) which is a protocol that wallets in the ICON Blockchain use to allow dapps to communicate with the wallet in the browser. The first section will cover how to do it with vanilla JS, and the second section will cover how to do it using React.

## Prerequisites

To follow along with this tutorial, you will need the following:

* An IDE or text editor
* Node.js and npm installed on your computer
* Basic understanding of JavaScript

## Understanding Browser Events

The ICON JS provider uses browser events to communicate with ICON wallets (ICONex, Hana). When you send a request to the wallet using `window.dispatchEvent()`, you're essentially dispatching a custom event with a specific name and detail.

The wallet listens for these custom events and responds by dispatching its own custom events with specific names and details. These events are then captured by the event listener you previously register in the browser.

## Section 1: Vanilla JavaScript

In this section, we'll show you how to connect with ICON wallets in the browser using vanilla JavaScript.

To communicate with ICON wallets in the browser using JavaScript, you can use the ICON JS provider and browser events. Here's how to do it in four simple steps:

### Step 1: Register an Event Listener

To communicate with the ICON wallets, you need to register an event listener that listens for events triggered by the wallet.

```javascript
window.addEventListener('ICONEX_RELAY_RESPONSE', (event) => {
  console.log(event.detail);
  });
```
In this example, we're registering an event listener for `ICONEX_RELAY_RESPONSE` events, which are triggered by the ICON wallet when a user performs an action.

### Step 2: Send a Request to the Wallet
To send a request to the wallet, you need to create an object with the request data and send it to the wallet using the `window.dispatchEvent()` method.

```javascript
const request = {
  type: 'REQUEST_ADDRESS'
};

window.dispatchEvent(new CustomEvent('ICONEX_RELAY_REQUEST', {
  detail: request
  }
));
```

In this example, we're sending a request to the wallet to get the user's wallet address.

### Step 3: Handle the Response from the Wallet
When the user approves the request in the wallet, the `ICONEX_RELAY_RESPONSE` event will be triggered, and you can handle the response in the event listener you registered in Step 1.

```javascript
window.addEventListener('ICONEX_RELAY_RESPONSE', (event) => {
  const { type, payload } = event.detail;

    if (type === 'RESPONSE_ADDRESS') {
    console.log(payload);
    }
});
```

In this example, we're handling the `RESPONSE_ADDRESS` response type and logging the user's wallet address to the console.


## Section 2: React

In this section, we'll show you how to connect with ICON wallets in the browser using React.

In the sample code provided, we have a React component that communicates with the wallet using events to retrieve the user's address and display it on the screen.

### Step 1: Set up the React component

Create a new React component called `App`. In the component, we'll use the `useState` hook to store the user's address, and the `useEffect` hook to listen for events from the wallet.

```jsx
import { useState, useEffect } from 'react';

function App() {
    const [address, setAddress] = useState('');

    useEffect(() => {
      window.addEventListener('ICONEX_RELAY_RESPONSE', (event) => {
          const { type, payload } = event.detail;

          if (type === 'RESPONSE_ADDRESS') {
              setAddress(payload);
          }
      });
    }, []);

    return (
        <div>
            <div>Wallet Address: {address}</div>
        </div>
    );
}

export default App;
```

### Step 2: Send a request to the wallet for the user's address

In order to retrieve the user's address, we need to send a request to the wallet using the `ICONEX_RELAY_REQUEST` event. We can do this by creating a function called `handleConnect` that dispatches a custom event with the `REQUEST_ADDRESS` type:

```javascript
function handleConnect() {
  window.dispatchEvent(new CustomEvent('ICONEX_RELAY_REQUEST', {
      detail: {
        type: 'REQUEST_ADDRESS',
      },
  }));
}
```

We can then call this function from a button in our component:

```jsx
return (
  <div>
    <button onClick={handleConnect}>Connect to Wallet</button>
    <div>Wallet Address: {address}</div>
  </div>
);
```

### Step 3: Listen for the response from the wallet
After sending the request to the wallet, we need to listen for the response. We can do this using the useEffect hook to add an event listener for the ICONEX_RELAY_RESPONSE event. When the response is received, we can update the address state variable with the user's address:

```jsx
useEffect(() => {
  function handleResponse(event) {
    const { type, payload } = event.detail;

    if ( type === 'RESPONSE_ADDRESS') {
      setAddress(payload);
    }
  }

  window.addEventListener('ICONEX_RELAY_RESPONSE', handleResponse);

  return() => {
    window.removeEventListener('ICONEX_RELAY_RESPONSE', handleResponse);
  };
}, []);
```

In the useEffect hook, we've added a named function `handleResponse` to handle the `ICONEX_RELAY_RESPONSE` event, and passed it to `addEventListener`. We've also added a return function that removes the event listener using `removeEventListener` when the component unmounts.

By cleaning up the event listener, we ensure that it's not active after the component is removed from the DOM, preventing potential memory leaks and bugs.

The `[]` at the end of the useEffect hook ensures that the event listener is only added once when the component mounts, and not every time the component re-renders.

### Step 4: Putting it all together
Here's the final code that combines all the steps together:

```jsx
import { useState, useEffect } from 'react';

function App() {
  const [address, setAddress] = useState('');

  function handleConnect() {
    window.dispatchEvent(new CustomEvent('ICONEX_RELAY_REQUEST', {
      detail: {
        type: 'REQUEST_ADDRESS',
      },
    }));
  }

  useEffect(() => {
    function handleResponse(event) {
      const { type, payload } = event.detail;

      if ( type === 'RESPONSE_ADDRESS') {
        setAddress(payload);
      }
    }

    window.addEventListener('ICONEX_RELAY_RESPONSE', handleResponse);

    return() => {
      window.removeEventListener('ICONEX_RELAY_RESPONSE', handleResponse);
    };
  }, []);

  return (
    <div>
      <button onClick={handleConnect}>Connect to Wallet</button>
      <div>Wallet Address: {address}</div>
    </div>
  );
}

export default App;
```

With a little bit of CSS sugar on it this is how our button will look like:

{{< video url="vid.mp4" controls="yes" autoplay="true" loop="true">}}

## Conclusion
Using the ICON JS provider and browser events, you can easily communicate with ICON wallets in the browser using JavaScript. By following the steps outlined in this tutorial, you can send requests to the wallet and handle the responses in your code.

## Further Resources
* https://github.com/icon-project/IIPs/blob/master/IIPS/iip-49.md
