<template lang="pug">
  #app
    transition(name="loader")
      vLoader(v-if="showLoader")
    vMenu
    vue-page-transition(name="page" mode="out-in")
      router-view.router-view(:class="{'first-load': loaded}")
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import VuePageTransition from 'vue-page-transition'
import vLoader from './components/loader'
import vMenu from './components/menu'

Vue.use(VuePageTransition)

export default {
  components: {
    vLoader,
    vMenu
  },
  data () {
    return {
      showLoader: true
    }
  },
  computed: {
    ...mapState({
      loaded: state => state.startAnimationEnabled
    })
  },
  mounted () {
    setTimeout(() => {
      this.showLoader = false
      this.$store.dispatch('disableStartAnimation')
    }, 500)
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    &:after {
      display: none;
      content: url('/static/img/avatar.jpg');
    }
  }

  .router-view {
    will-change: transform;
    transform: scale(1);
  }

  .first-load {
    will-change: transform;
    animation: first-load 1s ease 1;
    transform-origin: center;
  }
  @keyframes first-load {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
