<template lang="pug">
  .page.skills
    h1.t-center 🔧 Skills
    .flex.center.wrap
      .content-section.col-md-12.col-7
        h2.t-center Преимущественно использую связку
        .flex.center.wrap
          .skill.col-3
            iconNuxt
          .col-1.t-center
            span.plus +
          .skill.col-3
            iconPug
          .col-1.t-center
            span.plus +
          .skill.col-3
            iconSass
      .content-section.col-md-12.col-7
        h2.t-center На данный момент осваиваю:
        .flex.wrap.j-evenly.a-end
          vSkill
            iconVuetify
            span Vuetify
      .content-section.col-md-12.col-7
        h2.t-center Знаю и успешно применяю
        .flex.wrap.j-evenly.a-end
          vSkill
            iconVue
            span Vue.js
          vSkill
            iconNuxt
            span Nuxt.js
          vSkill
            iconJs
            span JS ES6
        .flex.center
          hr.col-12
        .flex.wrap.j-evenly.a-end
          vSkill
            iconHtml
            span HTML5
          vSkill
            iconPug
            span Pug
          vSkill
            iconCSS
            span CSS3
          vSkill
            iconSass
            span
              | SASS
              br
              | SCSS
        .flex.center
          hr.col-12
        .flex.wrap.j-evenly.a-end
          vSkill
            iconGulp
            span Gulp
        .flex.center
          hr.col-12
        .flex.wrap.j-evenly.a-end
          vSkill
            iconNpm
            span NPM
          vSkill
            iconYarn
            span Yarn
        .flex.center
          hr.col-12
        .flex.wrap.j-evenly.a-end
          vSkill
            iconBootstrap
            span Bootstrap
        .flex.center
          hr.col-12
        .flex.wrap.j-evenly.a-end
          vSkill
            iconFigma
            span Figma
          vSkill
            iconZeplin
            span Zeplin
        .flex.center
          hr.col-12
        .flex.wrap.j-evenly.a-end
          vSkill
            iconPhpstorm
            span PhpStorm
          vSkill
            iconWebstorm
            span Webstorm
</template>

<script>
import iconHtml from '../components/icons/html'
import iconVue from '../components/icons/vue'
import iconSass from '../components/icons/sass'
import iconGulp from '../components/icons/gulp'
import iconCSS from '../components/icons/css'
import iconNuxt from '../components/icons/nuxt'
import iconJs from '../components/icons/js'
import iconNpm from '../components/icons/npm'
import iconYarn from '../components/icons/yarn'
import iconPug from '../components/icons/pug'
import iconFigma from '../components/icons/figma'
import iconZeplin from '../components/icons/zeplin'
import iconPhpstorm from '../components/icons/phpstorm'
import iconWebstorm from '../components/icons/webstorm'
import iconBootstrap from '../components/icons/bootstrap'
import iconVuetify from '../components/icons/vuetify'
import vSkill from '../components/skill'

export default {
  name: 'skill-page',
  components: {
    iconHtml,
    iconVue,
    iconSass,
    iconGulp,
    iconCSS,
    iconNuxt,
    iconJs,
    iconNpm,
    iconYarn,
    iconPug,
    iconFigma,
    iconZeplin,
    iconPhpstorm,
    iconWebstorm,
    iconBootstrap,
    iconVuetify,
    vSkill
  }
}
</script>

<style lang="scss" scoped>
  .page.skills {
    hr {
      margin: 50px 0;
    }
    .container {
      margin-bottom: 10px;
    }
    .skill {
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
    .plus {
      display: block;
      text-align: center;
      vertical-align: middle;
      font-size: 4vw;
      line-height: 0;
    }
  }

  @include md {
    .page.skills {
      hr {
        margin: 10px 0;
      }
      h2 {
        font-size: 16px;
      }
    }
  }

  @include sm {
    .page.skills {
      .skill {
        span {
          margin-top: 2px;
          font-size: 12px;
        }
      }
    }
  }
</style>
