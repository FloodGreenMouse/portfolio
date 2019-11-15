<template lang="pug">
.page.home
  .flex.wrap.j-center
    .container.col-sm-8.col-md-8.col-5
      .content-section.flex.column.center
        .avatar
        .text-block.t-center
          .text
            p Привет! 👋
            p Меня зовут Сергей и&nbsp;я&nbsp;фронтенд-разработчик.
            p Я&nbsp;обожаю Vue, котиков и&nbsp;тёмные темы.
    .container.menu-container.col-sm-8.col-md-8.col-4
      .content-section.flex.column
        .menu.flex.column.a-start
          router-link.default-link(to="/projects") ✏️&nbsp;Мои проекты
          router-link.default-link(to="/skills") 🔧 &nbsp;Skills
          router-link.default-link(to="/experience") 📝 &nbsp;Опыт
          router-link.default-link(to="/contacts") 📇 &nbsp;Контакты
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

    .avatar {
      max-width: 350px;
      width: 100%;
      height: 350px;
      overflow: hidden;
      border: 1px solid rgba($color-white, 0.2);
      border-radius: $border-radius;
      box-shadow: 0 0 15px rgba(black, 0.5);
      user-select: none;
      background-image: url("/img/main_avatar.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: center;
      margin-bottom: 25px;
    }

    .container {
      margin: 20px;
      &.menu-container {
        max-height: 350px;
        height: auto;
      }
    }
  }

  @include md {
    .page.home {
      padding: 0 0 20px 0;

      .container {
        margin: 10px;
      }

    }
  }
</style>
