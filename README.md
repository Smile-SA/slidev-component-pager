# slidev-component-pager

[![NPM version](https://img.shields.io/npm/v/slidev-component-pager?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-component-pager)

Pager component for `Slidev`.

## Installation

```bash
npm i slidev-component-pager
```

## Configuration

Define this package into your slidev addons.

In your slides metadata (using frontmatter):
```
---
addons:
  - slidev-component-pager
---
```

Or in your `package.json`:
```json
{
  "slidev": {
    "addons": [
      "slidev-component-pager"
    ]
  }
}
```

## Usage

Create a `./global-top.vue` file in your `Slidev` project and use the component:
```vue
<template>
  <Pager/>
</template>
```

## Components

### Pager

Component that displays the pager:
```vue
<Pager/>
```
