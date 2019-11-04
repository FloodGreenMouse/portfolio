<template lang="pug">
  .page.error
    .container.flex.center.column
      h1.title 404
      span.text Увы, такой странички не&nbsp;существует
      span.text 😟
      router-link.default-link(to="/") На главную
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page.error {
  .container {
    .title {
      font-size: 128px;
      line-height: 1;
      margin-bottom: 40px;
    }
    .text {
      display: block;
      margin-bottom: 20px;
      font-size: 20px;
      text-align: center;
      line-height: 24px;
    }
   }
 }
</style>
