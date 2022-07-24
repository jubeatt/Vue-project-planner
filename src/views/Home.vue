<template>
  <div class="home">
    <Filter :filter="filter" :onFilter="onFilter" />
    <div v-if="filteredProject && filteredProject.length">
      <template v-for="project of filteredProject" :key="project.id">
        <SingleProject
          :project="project"
          :onDelete="onDelete"
          :onToggleComplete="onToggleComplete"
        />
      </template>
    </div>
    <div v-else>
      <p class="message">No Projects...</p>
    </div>
  </div>
</template>

<script>
import Filter from '../components/Filter.vue'
import SingleProject from '../components/SingleProject.vue'

export default {
  mounted() {
    try {
      const record = JSON.parse(localStorage.getItem('projects'))
      this.projects = record
    } catch (error) {
      this.$notify({
        title: 'Error',
        message: error.message,
        type: 'error'
      })
      this.projects = []
    }
  },
  data() {
    return {
      projects: null,
      filter: 'all'
    }
  },
  components: {
    Filter,
    SingleProject
  },
  methods: {
    onDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id)
    },
    onToggleComplete(id) {
      this.projects = this.projects.map((project) =>
        project.id !== id
          ? project
          : {
              ...project,
              isCompleted: !project.isCompleted
            }
      )
    },
    onFilter(type) {
      this.filter = type
    }
  },
  computed: {
    filteredProject() {
      return this.projects
        ? this.projects.filter((project) => {
            if (this.filter === 'all') return true
            if (this.filter === 'completed') return project.isCompleted
            if (this.filter === 'onGoing') return !project.isCompleted
          })
        : null
    }
  },
  watch: {
    projects: {
      handler(current) {
        localStorage.setItem('projects', JSON.stringify(current))
      },
      deep: true
    }
  }
}
</script>
