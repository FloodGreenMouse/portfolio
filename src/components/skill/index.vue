<template lang="pug">
  .skill-component.col-sm-3.col-2
    slot
</template>

<script>

export default {
  name: 'skill-component'
}
</script>

<style lang="scss" scoped>
  .skill-component {
    text-align: center;
    span {
      margin-top: 20px;
      display: block;
      font-size: 1rem;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  }
</style>
