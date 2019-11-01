<template lang="pug">
  .menu-component
    .container.flex.column.a-start
      .menu-icon
        iconMenu
      router-link(to="/") Главная
      router-link(to="/contacts") Обо мне
      router-link(to="/about") Skills
      router-link(to="/about") Опыт
      router-link(to="/projects") Мои проекты
</template>

<script>
import iconMenu from '../icons/menu'

export default {
  components: {
    iconMenu
  }
}
</script>

<style lang="scss">
  .router-link-exact-active {
    display: none !important;
  }
  .menu-component {
    .container {
      .menu-icon {
        @include svg($color-white);
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
</style>

<style lang="scss" scoped>
  .menu-component {
    height: 50px;
    width: 100%;
    .container {
      padding: 0;
      position: fixed;
      right: 10px;
      top: 10px;
      background-color: $color-dark;
      width: 45px;
      height: 45px;
      border: 1px solid rgba($color-white, 0.1);
      border-radius: $border-radius;
      z-index: 20;
      transition: all ease 0.3s, border-radius 0.2s linear;
      &:hover {
        padding: 15px 25px;
        width: 150px;
        height: 150px;
        box-shadow: 0 0 5px rgba(black, 0.5);
        a {
          transition: $trs5;
          opacity: 1;
        }
        .menu-icon {
          animation: menu-icon 0.2s ease 1 forwards;
        }
      }
      a {
        display: inline;
        position: relative;
        color: $color-white;
        text-decoration: none;
        font-size: 16px;
        white-space: nowrap;
        opacity: 0;
        margin-bottom: 10px;
        transition: $trs2;
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -5px;
          width: calc(100% + 10px);
          height: 0;
          background-color: $color-white;
          transition: $trs2;
          z-index: -1;
          border-radius: $border-radius;
        }
        &:hover {
          color: $color-dark;
          &:after {
            height: 100%;
          }
        }
      }
      overflow: hidden;
      .menu-icon {
        position: absolute;
        width: 24px;
        height: 24px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
    @keyframes menu-icon {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
</style>
