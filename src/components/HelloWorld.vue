<template lang="pug">
  .container
    h3
      | {{text}}
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      text: 'Hello World'
    }
  }
}
</script>
