# slidev-component-pager

[![NPM version](https://img.shields.io/npm/v/slidev-component-pager?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-component-pager)

Pager component for `Slidev`.

## Installation

```bash
npm i slidev-component-pager
```

## Usage

Create a `./setup/main.ts` file in your `Slidev` project and register the plugin:
```js
import { defineAppSetup } from '@slidev/types'
import Pager from 'slidev-component-pager'

export default defineAppSetup(({ app, router }) => {
  app.use(Pager)
})
```

Create a `./global-top.vue` file in your `Slidev` project and use the component:
```vue
<template>
  <Pager/>
</template>
```
