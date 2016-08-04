# react-minimalist-portal
A minimalist portal for react.
Create a new React tree in document.body to create modal etc ..

[![npm version](https://badge.fury.io/js/react-minimalist-portal.svg)](https://badge.fury.io/js/react-minimalist-portal)
[![Build Status](https://travis-ci.org/pradel/react-minimalist-portal.svg?branch=master)](https://travis-ci.org/pradel/react-minimalist-portal)
[![devDependency Status](https://david-dm.org/pradel/react-minimalist-portal/dev-status.svg)](https://david-dm.org/pradel/react-minimalist-portal#info=devDependencies)

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
