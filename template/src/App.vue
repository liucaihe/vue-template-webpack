<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import HelloWorld from './views/index/HelloWorld'
{{/unless}}

export default {
  name: 'App'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
}
</script>

{{#if_eq preprocessor "less"}}
<style lang="less">
  @import "../src/styles/index.less";
</style>
{{/if_eq}}

{{#if_eq preprocessor "stylus"}}
<style lang="stylus">
  @import "../src/styles/index.styl";
</style>
{{/if_eq}}