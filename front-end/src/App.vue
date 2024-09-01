
<template>
  <div id="app">
    <h1>HELOO</h1>
  </div>
</template>

<script>
import {api} from './helpers/helpers'
import Welcome from './views/Welcome.vue';

export default {
  name: 'App',
  components: {
    Welcome
  }
}
</script>
