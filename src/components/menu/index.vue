<template lang="pug">
  .menu-component
    transition(name="fade")
      .container(v-show="!isHomePage" @click="toggleMenu" ref="menu")
        transition-group(name="menu" mode="out-in")
          .menu-icon(v-show="!showMenu" :key="1")
            iconMenu
          .menu-icon(v-show="showMenu" :key="2")
            iconClose
        transition(name="fastFade")
          .menu.flex.column.a-start(v-if="showMenu")
            router-link(to="/") Главная
            router-link(to="/skills") Skills
            router-link(to="/experience") Опыт
            router-link(to="/projects") Мои проекты
            router-link(to="/contacts") Контакты
</template>

<script>
import iconMenu from '../icons/menu'
import iconClose from '../icons/close'

export default {
  components: {
    iconMenu,
    iconClose
  },
  data () {
    return {
      isHomePage: false,
      showMenu: false
    }
  },
  watch: {
    '$route' () {
      this.showMenu = false
      this.isHomePage = this.$route.name.includes('home')
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu ? this.showMenu = false : this.showMenu = true
    }
  },
  mounted () {
    document.addEventListener('click', e => {
      if (!this.$refs.menu.contains(e.target)) {
        this.showMenu = false
      }
    })
    if (this.$route.name === null) {
      this.isHomePage = false
    } else {
      this.isHomePage = this.$route.name.includes('home')
    }
  },
  beforeDestroy () {
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
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 0;
      background-color: $color-dark;
      width: 45px;
      height: 45px;
      border: 1px solid rgba($color-white, 0.1);
      border-radius: $border-radius;
      z-index: 20;
      cursor: pointer;
      &:hover {
        .menu-icon svg {
          transform: scale(1.2);
        }
      }
      .menu {
        padding: 15px;
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        margin: auto;
        background-color: $color-dark;
        border: 1px solid rgba($color-white, 0.1);
        border-radius: $border-radius;
        box-shadow: 4px 4px 10px rgba(black, 0.5), -4px 4px 10px rgba(black, 0.5);
        cursor: default;
        &:after {
          content: '';
          top: -20px;
          right: 10px;
          position: absolute;
          border: 10px solid;
          border-color: transparent transparent $color-dark transparent;
        }
        a {
          position: relative;
          display: inline;
          color: $color-white;
          text-decoration: none;
          font-size: 16px;
          white-space: nowrap;
          margin-bottom: 10px;
          transition: $trs2;
          user-select: none;
          z-index: 1;
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
      }
      .menu-icon {
        position: absolute;
        width: 24px;
        height: 24px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        svg {
          transition: $trs3;
          transform: scale(1);
        }
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
