<template lang="pug">
  .page.experience
    h1.t-center 📝 Опыт
    .flex.wrap.j-center
      .container.col-sm-8.col-md-8.col-5
        .content-section
          h2.t-center 📚 Образование
          .text-block
            .text
              p
                strong 📅 2012 - 2016г.
              .company
                p
                  strong.marked Сибирский Федеральный Университет
                p
                  strong Институт Космических и&nbsp;Информационных Технологий
          .text-block.flex.wrap
            .text.col-sm-8.col-5
              p
                strong Специальность:&nbsp;
            .text.col-sm-8.col-7
              p Информационные системы и&nbsp;технологии
          .text-block.flex.wrap
            .text.col-sm-8.col-5
              p
                strong Направление:&nbsp;
            .text.col-sm-8.col-7
              p Информационно&mdash;управляющие системы
          p.t-right
            strong 🏙️ г. Красноярск
      .container.col-sm-8.col-md-8.col-6
        .content-section.flex.column
          h2.t-center 👨‍💻 Опыт работы
          .text-block
            .text
              p
                strong 📅 Март 2018 — май 2018
              .company
                p
                  strong.marked ООО "СОФТ-Центр"
            .text-block.flex.wrap
              .text.col-sm-8.col-5
                p
                  strong Должность:&nbsp;
              .text.col-sm-8.col-7
                p Web-разработчик (стажер)
            .text-block.flex.wrap
              .text.col-sm-8.col-5
                p
                  strong Обязанности:&nbsp;
              .text.col-sm-8.col-7
                p Разработка client-side\server-side веб-приложений. Работа с Angular JS, Codeigniter, MySQL
            p.t-right
              strong 🏙️ г. Красноярск
          hr.col-4
          .text-block
            .text
              p
                strong 📅 Февраль 2019 — по настоящее время
              .company
                p
                  strong.marked
                    nobr Студия Александра Лебедева
                  | &nbsp;&nbsp;&nbsp;
                  a.default-link.default-link--small(href="https://lebedev-studio.com" target="_blank")
                    nobr lebedev-studio.com
                      iconLink
            .text-block.flex.wrap
              .text.col-sm-8.col-5
                p
                  strong Должность:&nbsp;
              .text.col-sm-8.col-7
                p Junior frontend-developer
            .text-block.flex.wrap
              .text.col-sm-8.col-5
                p
                  strong Обязанности:&nbsp;
              .text.col-sm-8.col-7
                p Верстка по макетам в Figma/Zeplin, разработка приложений на Vue.js/Nuxt.js
            p.t-right
              strong 🏙️ г. Санкт-Петербург
          hr.col-4
          .text-block
            .text
              p.t-center
                strong.marked Также имеется опыт удаленной работы (верстка/фронтенд)
              h2.t-center 💻
</template>

<script>
import iconLink from '../components/icons/link'

export default {
  name: 'experience-page',
  components: {
    iconLink
  }
}
</script>

<style lang="scss" scoped>
  .page.experience {
    padding: 40px 0;

    .container {
      margin-bottom: 1rem;
      .content-section {
        height: auto;
        h2 {
          font-size: 32px;
          margin-top: 0;
          margin-bottom: 24px;
          line-height: 1;
        }
        .text-block {
          margin-bottom: 10px;
          .text {
            .company {
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }

  @include md {
    .page.experience {
      .container {
        .content-section {
          .text-block {
            margin: 0;
            padding-top: 0;
            .text {
              margin: 0;
            }
          }
        }
      }
    }
  }

  @include sm {
    .page.experience {
      .container {
        .content-section {
          h2 {
            font-size: 24px;
            margin-bottom: 24px;
          }
          .text-block {
            .text {
              .title {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
  }
</style>
