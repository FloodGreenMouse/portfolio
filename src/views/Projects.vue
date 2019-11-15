<template lang="pug">
  .page.projects
    h1.t-center ✏️&nbsp;Мои проекты
    div(v-if="frontendProjects.length")
      .subtitle
        h2 💻 Фронтенд
      .flex.wrap
        .project.col-sm-8.col-md-4.col-4(
          v-for="(project, i) in frontendProjects"
          :key="i"
          :style="{'animation-delay': `0.${i + 1}s`}")
          projectCard(:project="project")
      hr
    div(v-if="layoutProjects.length")
      .subtitle
        h2 📃 Верстка
      .flex.wrap
        .project.col-sm-8.col-md-4.col-4(
          v-for="(project, i) in layoutProjects"
          :key="i"
          :style="{'animation-delay': `0.${i + 1}s`}")
          projectCard(:project="project")
      hr
    div(v-if="otherProjects.length")
      .subtitle
        h2 👨‍💻 Прочее
      .flex.wrap
        .project.col-sm-8.col-md-4.col-4(
          v-for="(project, i) in otherProjects"
          :key="i"
          :style="{'animation-delay': `0.${i + 1}s`}")
          projectCard(:project="project")
</template>

<script>
import projectCard from '../components/project-card'

export default {
  components: {
    projectCard
  },
  data () {
    return {
      name: 'projects-page',
      frontendProjects: [
        {
          title: 'Админ-панель',
          description: 'Приложение для администрирования клиентской части',
          preview: '/img/projects/admin_panel.png',
          inDevelopment: true,
          demoLink: '',
          githubLink: '',
          tags: ['nuxt', 'pug', 'sass', 'html']
        },
        {
          title: 'Заметки',
          description: 'Приложение для создания/редактирования заметок',
          preview: '/img/projects/notes.png',
          inDevelopment: true,
          demoLink: '',
          githubLink: '',
          tags: ['vue', 'pug', 'sass', 'html']
        }
      ],
      layoutProjects: [],
      otherProjects: [
        {
          title: 'Start HTML5 template',
          description: 'Start HTML5 template with Bootstrap 4 (basic/grid only), Semantic UI, Normalize.css, SASS and Gulp (browserSync, autoprefixer, minify, clean-css, imagemin, etc.).',
          preview: '/img/projects/gulp.png',
          inDevelopment: false,
          demoLink: '',
          githubLink: 'https://github.com/FloodGreenMouse/start-template',
          tags: ['gulp', 'js']
        }
      ]
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
  .page.projects {

    .subtitle {
      h2 {
        margin: 0;
        line-height: 1;
        font-size: 2rem;
      }
      margin: 30px 20px 10px 20px;
    }
    .project {
      animation: project 0.3s ease 1 forwards;
      opacity: 0;
      transform: translateY(10px);
    }
    @keyframes project {
      0% {
        transform: translateY(10px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
</style>
