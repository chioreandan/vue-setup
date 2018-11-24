<template lang="pug">
  .container
    .sub.bla
      | {{buff}}
</template>
<script>
export default {
  data () {
    return {
      buff: 'Sub1:'
    }
  },
  mqtt: {
    'smarthome/livingroom' (data) {
      this.buff = this.buff + data + '<br>'
    }
  }
}
</script>
