<template>
      <q-icon :name="icon" class="container" color="primary" size="4rem">
        <q-tooltip>{{ icon }}</q-tooltip>
      </q-icon>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      icon: 'add_box'
    }
  }
}
</script>
<style lang="sass" scoped>
.container
  margin-top: 450px
  margin-left: 280px
</style>
