<template lang="pug">
.project-card-component.flex.column.j-between
  .head
    .title
      span Заголовок
  .body
    .image
    .description
  .footer
    .utils
    .buttons.flex.j-between.a-center
      a.demo(href="#") Открыть
      a.github(href="#")
        span.title Код на GitHub
        iconGithub
</template>

<script>
import iconGithub from '../icons/github'

export default {
  name: 'project-card-component',
  components: {
    iconGithub
  }
}
</script>

<style lang="scss">
  .project-card-component {
    .footer {
      .buttons {
        .github {
          @include svg($color-white)
        }
      }
    }
  }
</style>

<style lang="scss" scoped>
  .project-card-component {
    padding: 15px 20px 25px 20px;
    border-radius: $border-radius;
    height: 250px;
    background-color: $color-dark;
    margin: 20px;
    transition: $trs3;
    border: 1px solid rgba($color-white, 0.1);
    transform: translate3d(0, 0, 0);
    overflow: hidden;
    &:hover {
      transform: translate3d(0, -5px, 30px);
      box-shadow: 4px 10px 10px rgba(black, 0.5), -4px 0 10px rgba(black, 0.5);
      .body {
        flex: 0 0 calc(100% - 80px);
      }
      .footer .buttons {
        height: 100%;
        opacity: 1;
        transform: translateY(0);
      }
    }
    .head {
      .title {
        border-bottom: 1px solid rgba($color-white, 0.1);
        padding-bottom: 5px;
        span {
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 900;
        }
      }
    }
    .body {
      margin: 10px 0;
      width: 100%;
      flex: 0 0 calc(100% - 30px);
      background-color: $color-background;
      transition: $trs3;
    }
    .footer {
      .buttons {
        opacity: 0;
        height: 0;
        transition: $trs3;
        align-self: flex-end;
        overflow: hidden;
        transform: translateY(20px);
        .demo {
          border-radius: $border-radius;
          background-color: $color-primary;
          color: $color-white;
          text-decoration: none;
          padding: 8px 24px;
          transition: $trs3;
          &:hover {
            background-color: darken($color-primary, 10%);
          }
        }
        .github {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .title {
            color: $color-white;
            margin-right: 5px;
            white-space: nowrap;
            overflow: hidden;
            font-size: 12px;
            transition: $trs3;
            text-align: center;
            width: 0;
            opacity: 0;
          }
          svg {
            width: 32px;
            height: 32px;
          }
          &:hover {
            .title {
              width: calc(100% - 37px);
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
