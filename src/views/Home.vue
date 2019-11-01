<template lang="pug">
.page.home
  .flex.wrap.j-center
    .col-md-12.col-5
      .content-section.flex.column.center
        .avatar
          img(src="../static/img/avatar.jpg")
        .text-block.t-center
          .text
            span Сергей Платицин
          .text.small
            span [FloodGreenMouse]
        .text-block.t-center
          .text
            a.link(href="https://github.com/FloodGreenMouse" target="_blank")
              iconGithub
              | GitHub
          .text
            a.link(href="mailto:sergeypltinfo@gmail.com")
              iconMail
              | sergeypltinfo@gmail.com
          .text
            a.link(href="https://t.me/GreenMouse")
              iconTelegram
              | Telegram
    .col-md-12.col-4
      .content-section.flex.column
        .menu.flex.column.a-start
          router-link(to="/contacts") Обо мне
          router-link(to="/about") Skills
          router-link(to="/about") Опыт
          router-link(to="/projects") Мои проекты
</template>

<script>
import iconGithub from '../components/icons/github'
import iconMail from '../components/icons/mail'
import iconTelegram from '../components/icons/telegram'

export default {
  components: {
    iconGithub,
    iconMail,
    iconTelegram
  }
}
</script>

<style lang="scss">
  .page.home {
    .text-block {
      .text {
        @include svg($color-white);
        svg {
          width: 24px;
          height: 24px;
          margin-right: 5px;
        }
      }
    }
  }
</style>

<style lang="scss" scoped>
  .page.home {
    padding: 20px 0;

    .content-section {
      background-color: $color-dark;
      padding: 25px 30px;
      margin: 0 20px;
      border-radius: $border-radius;
      box-shadow: 0 0 10px rgba(black, 0.3);
    }

    .avatar {
      width: 150px;
      height: 150px;
      overflow: hidden;
      border: 1px solid rgba($color-white, 0.2);
      border-radius: 50%;
      box-shadow: 0 0 15px rgba(black, 0.5);
      user-select: none;
      img {
        width: 100%;
      }
    }

    .text-block {
      padding-top: 20px;
      .text {
        margin-bottom: 5px;
        font-size: 16px;
        &.small {
          span {
            font-size: 12px;
            color: rgba($color-white, 0.8);
          }
        }
        .link {
          display: inline-flex;
          align-items: center;
          color: $color-white;
        }
      }
    }

    .menu {
      a {
        position: relative;
        color: $color-white;
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 24px;
        z-index: 1;
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
    }
  }
</style>
