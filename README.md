# react-minimalist-portal

A minimalist portal for react.
Create a new React tree in document.body to create modal etc ..
This package is compatible with react 15 and 16.

[![npm version](https://badge.fury.io/js/react-minimalist-portal.svg)](https://badge.fury.io/js/react-minimalist-portal)
[![npm](https://img.shields.io/npm/dm/react-minimalist-portal.svg)](https://www.npmjs.com/package/react-minimalist-portal)
[![Build Status](https://travis-ci.org/pradel/react-minimalist-portal.svg?branch=master)](https://travis-ci.org/pradel/react-minimalist-portal)
[![Coverage Status](https://coveralls.io/repos/github/pradel/react-minimalist-portal/badge.svg?branch=master)](https://coveralls.io/github/pradel/react-minimalist-portal?branch=master)

## Usage

```javascript
import React from 'react';
import Portal from 'react-minimalist-portal';

export default class App extends React.Component {
  render() {
    return (
      <Portal>
        <p>I am in document body.</p>
      </Portal>
    );
  }
}

// If you want to render the portal inside your own container
const container = document.getElementById('my-custom-container-id');

export default class App extends React.Component {
  render() {
    return (
      <Portal container={container}>
        <p>I am in my-custom-container-id.</p>
      </Portal>
    );
  }
}
```

## Props

- `container` - optional - You can specify a container prop which should be of `Element` type. The portal will be rendered inside that element. The default behavior will create a div node and render it at the at the end of `document.body`.
