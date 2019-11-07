<template lang="pug">
  .page.projects
    h1.t-center ✏️Мои проекты
    .subtitle
      h2 💻 Фронтенд
    .flex.wrap
      .project.col-sm-8.col-md-4.col-4(
        v-for="(project, i) in projects"
        :key="i"
        :style="{'animation-delay': `0.${i + 1}s`}")
        projectCard(:project="project")
      hr.col-3
    .subtitle
      h2 📃 Верстка
    .flex.wrap
      .project.col-sm-8.col-md-4.col-4(
        v-for="(project, i) in projects"
        :key="i"
        :style="{'animation-delay': `0.${i + 1}s`}")
        projectCard(:project="project")
      hr.col-3
    .subtitle
      h2 👨‍💻 Прочее
    .flex.wrap
      .project.col-sm-8.col-md-4.col-4(
        v-for="(project, i) in projects"
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
      projects: [
        {
          title: 'title',
          description: 'description',
          demoLink: '',
          githubLink: ''
        },
        {
          title: 'title',
          description: 'description',
          demoLink: '',
          githubLink: ''
        },
        {
          title: 'title',
          description: 'description',
          demoLink: '',
          githubLink: ''
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
