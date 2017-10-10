# react-minimalist-portal

A minimalist portal for react.
Create a new React tree in document.body to create modal etc ..
This package is compatible with react 15 and 16.

[![npm version](https://badge.fury.io/js/react-minimalist-portal.svg)](https://badge.fury.io/js/react-minimalist-portal)
[![npm](https://img.shields.io/npm/dm/react-minimalist-portal.svg)](https://www.npmjs.com/package/react-minimalist-portal)
[![Build Status](https://travis-ci.org/pradel/react-minimalist-portal.svg?branch=master)](https://travis-ci.org/pradel/react-minimalist-portal)
[![Coverage Status](https://coveralls.io/repos/github/pradel/react-minimalist-portal/badge.svg?branch=master)](https://coveralls.io/github/pradel/react-minimalist-portal?branch=master)
[![devDependency Status](https://david-dm.org/pradel/react-minimalist-portal/dev-status.svg)](https://david-dm.org/pradel/react-minimalist-portal#info=devDependencies)

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/TPcxj3ZMAXdSxzhvJ7SzjaQY/pradel/react-minimalist-portal'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/TPcxj3ZMAXdSxzhvJ7SzjaQY/pradel/react-minimalist-portal.svg' />
</a>

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
```
