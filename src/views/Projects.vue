<template lang="pug">
  .page.projects
    vMenu
    .flex.wrap
      .project.col-xs-12.col-md-4.col-3(
        v-for="(project, i) in projects"
        :key="i"
        :style="{'animation-delay': `0.${i + 1}s`}")
        projectCard.prj(:project="project")
</template>

<script>
import projectCard from '../components/project-card'
import vMenu from '../components/menu'

export default {
  components: {
    projectCard,
    vMenu
  },
  data () {
    return {
      projects: [
        {
          title: 'title',
          description: 'description'
        },
        {
          title: 'title',
          description: 'description'
        },
        {
          title: 'title',
          description: 'description'
        },
        {
          title: 'title',
          description: 'description'
        },
        {
          title: 'title',
          description: 'description'
        },
        {
          title: 'title',
          description: 'description'
        },
        {
          title: 'title',
          description: 'description'
        },
        {
          title: 'title',
          description: 'description'
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
