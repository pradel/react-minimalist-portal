# react-minimalist-portal
A minimalist portal for react.
Create a new React tree in document.body to create modal etc ..

[![Build Status](https://travis-ci.org/pradel/react-minimalist-portal.svg?branch=master)](https://travis-ci.org/pradel/react-minimalist-portal)

## Usage
```
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
```
