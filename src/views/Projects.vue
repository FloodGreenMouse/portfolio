<template lang="pug">
  .page.projects
    .flex.wrap
      .project.col-xs-12.col-md-4.col-4(
        v-for="(project, i) in projects"
        :key="i"
        :style="{'animation-delay': `0.${i + 1}s`}")
        projectCard.prj(:project="project")
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
        },
        {
          title: 'title',
          description: 'description',
          demoLink: '',
          githubLink: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .page.projects {
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
