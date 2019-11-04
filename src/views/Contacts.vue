<template lang="pug">
  .page.contacts
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
            router-link.default-link(to="/projects") ✏️Мои проекты
            router-link.default-link(to="/skills") 🔧 Skills
            router-link.default-link(to="/experience") 📝 Опыт
            router-link.default-link(to="/contacts") 📇 Контакты
</template>

<script>
import iconGithub from '../components/icons/github'
import iconMail from '../components/icons/mail'
import iconTelegram from '../components/icons/telegram'

export default {
  name: 'home-page',
  components: {
    iconGithub,
    iconMail,
    iconTelegram
  }
}
</script>

<style lang="scss">
  .page.contacts {
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
  .page.contacts {
    padding: 40px 0;

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
  }
</style>
