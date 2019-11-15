<template lang="pug">
.project-card-component.flex.column.j-between
  .head.flex.center.j-between
    .title
      span {{ project.title }}
    .tools.flex
      .tool(v-for="(tag, i) in project.tags" :key="i")
        component(:is="`icon${capitalize(tag)}`")
  .body
    .image(:style="{'background-image': `url(${project.preview})`}" title="Project preview")
    .description.flex
      span.text {{ project.description }}
  .footer
    .buttons.flex.j-between.a-center(v-if="!project.inDevelopment")
      a.demo(v-if="project.demoLink.length"
        :href="project.demoLink"
        target="_blank") Демо
      div(v-else)
      a.github(v-if="project.githubLink.length"
        :href="project.githubLink"
        target="_blank")
        span.title Код на GitHub
        iconGithub
    .in-development.flex.j-center(v-else)
      span В разработке
</template>

<script>
import tags from './tags'

const icons = []

tags.forEach(tag => {
  let icon = null
  try {
    icon = require(`../icons/${tag}`).default
  } catch (e) {
    icon = {
      template: '',
      render: () => ''
    }
  }
  icons[`icon${tag.charAt(0).toUpperCase() + tag.slice(1)}`] = icon
})

export default {
  name: 'project-card-component',
  components: {
    ...icons
  },
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    capitalize (tag) {
      return tag.charAt(0).toUpperCase() + tag.slice(1)
    }
  }
}
</script>

<style lang="scss">
  .project-card-component {
    .head {
      .tools {
        .tool {
          svg {
            width: 24px;
            height: 24px;
          }
        }
      }
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
    height: 300px;
    background-color: $color-dark;
    margin: 20px;
    margin-top: 10px;
    transition: $trs3;
    border: 1px solid rgba($color-white, 0.1);
    transform: translateY(0);
    overflow: hidden;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 4px 4px 10px rgba(black, 0.5), -4px 4px 10px rgba(black, 0.5);
      .body {
        flex: 0 0 calc(100% - 80px);
        .description {
          opacity: 1;
        }
      }
      .footer {
        .in-development {
          opacity: 1;
        }
        .buttons {
          height: 100%;
          opacity: 1;
          transform: translateY(0) rotateX(0);
        }
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
      .tools {
        .tool {
          margin-left: 8px;
        }
      }
    }
    .body {
      position: relative;
      margin: 10px 0;
      width: 100%;
      flex: 0 0 calc(100% - 30px);
      background-color: $color-background;
      transition: $trs3;
      .image {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
      .description {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background-color: rgba($color-dark, 0.9);
        transition: $trs3;
        cursor: default;
        opacity: 0;
        overflow-y: auto;
        padding: 10px;
        &::-webkit-scrollbar {
          width: 8px;
          background-color: rgba($color-dark, 0.5);
        }
        &::-webkit-scrollbar-thumb {
          background-color: rgba($color-white, 0.5)
        }
      }
    }
    .footer {
      .in-development {
        transition: $trs3;
        text-transform: uppercase;
        opacity: 0;
      }
      .buttons {
        opacity: 0;
        height: 0;
        transition: $trs3;
        align-self: flex-end;
        overflow: hidden;
        transform: translateY(20px) rotateX(-90deg);
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

  @include sm {
    .project-card-component {
      transform: translateY(-2px);
      box-shadow: 4px 4px 10px rgba(black, 0.5), -4px 4px 10px rgba(black, 0.5);
      .body {
        flex: 0 0 calc(100% - 80px);
        .description {
          opacity: 1;
        }
      }
      .footer {
        .in-development {
          opacity: 1;
        }
        .buttons {
          height: 100%;
          opacity: 1;
          transform: translateY(0) rotateX(0);
        }
      }
    }
  }
</style>
