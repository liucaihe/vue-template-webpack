# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
{{#if_eq autoInstall "npm"}}
{{ autoInstall }} install
{{/if_eq}}
{{#if_eq autoInstall "yarn"}}
{{ autoInstall }}
{{/if_eq}}

# serve with hot reload at http://localhost:{{ hostport }}
{{ autoInstall }} run dev

# build for preview with minification
{{ autoInstall }} run preview

# build for preview and view the bundle analyzer report
{{ autoInstall }} run preview --report


# build for production with minification
{{ autoInstall }} run build

# build for production and view the bundle analyzer report
{{ autoInstall }} run build --report
{{#unit}}

# run unit tests
{{ autoInstall }} run unit
{{/unit}}
{{#e2e}}

# run e2e tests
{{ autoInstall }} run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
{{ autoInstall }} test
{{/if_or}}
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Documents

- [Vue Style Guide](https://vuejs.org/v2/style-guide/)
- [Vue Style Guide 中文](https://cn.vuejs.org/v2/style-guide/)
- [Vue docs](https://cn.vuejs.org/)
- [vue-loader docs](http://vuejs.github.io/vue-loader)
- [vue-router docs](https://vue-loader.vuejs.org/zh/)
- [Axios docs](https://github.com/axios/axios)
- [Vuex docs](https://vuex.vuejs.org/zh/)
- [Cookie docs](https://github.com/js-cookie/js-cookie)
- [Stylus docs](http://stylus-lang.com/)
- [Less 中文网](http://lesscss.cn/)
