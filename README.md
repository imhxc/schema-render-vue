# schema-render-vue

[中文文档](https://github.com/imhxc/schema-render-vue/blob/master/README_zh.md)

Use a json file is used to describe the page structure and a UI page is automatically generated.

## Demo

## Install

`npm install --save schema-render-vue`

## Usage

In your Vue file:

````vue
<template>
  <SchemaRenderVue :schema="schema" :components="components" />
</template>

<script>
import SchemaRenderVue from 'schema-render-vue'
import Avatar from 'Avatar.vue'
import schema from 'schema.js'
export default {
  data() {
    return {
      schema: schema,
      components: {
        Avatar
      }
    }
  }
}
</script>
````

The sample of schema:

````
export default {
  component: 'Avatar',
  attributes: {
    props: {
      // your props
    }
  },
  children: [
    // child components
    {
      component: 'Name',
      attributes: {}
    }
  ]
}
````

## API

### props
- `schema` ***Object*** `default: {}`

  The JSON Schema object.  

- `components` ***Object*** `default: {}`

  Custom component list




