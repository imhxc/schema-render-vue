<template>
  <div class="container">
    <SchemaRenderVue :schema="schema" :components="components"/>
  </div>
</template>

<script>
import { Button, Step, Steps } from 'iview';
import UserAvatar from './UserAvatar.vue';
import SchemaRenderVue from "../../../dist/SchemaRenderVue.esm.js";
import schema from '../schema';
export default {
  data: () => ({
    schema: schema,
    model: {},
    components: {
      UserAvatar
    }
  }),
  created() {
    
  },
  mounted() {
    console.log('SchemaRenderVue: ', SchemaRenderVue)
  },
  methods: {
  },
  components: { SchemaRenderVue }
};
</script>

<style>
</style>
