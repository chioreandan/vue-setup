<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Publish from './components/Publish'
import Sub1 from './components/Sub1'
// import Sub2 from './components/Sub2'
// import Sub3 from './components/Sub3'



export default {
  name: 'App',
  components: {
    Publish, Sub1
  },
  mounted () {
    this.$mqtt.subscribe('smarthome/livingroom')
  }
}
</script>
<style lang="scss">
@import "assets/style/index.scss";
</style>
