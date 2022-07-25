<template>
  <div class="home">
    <FilterNav @onFilterChange="filter = $event" :filter="filter" />
    <div v-if="projects.length">
      <div v-for="project of filteredProjects" :key="project.id">
        <SingleProject
          @onDelete="onDelete"
          @onToggleComplete="onToggleComplete"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'Home',
  data() {
    return {
      projects: [],
      filter: 'all'
    }
  },
  components: { SingleProject, FilterNav },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((response) => response.json())
      .then((data) => (this.projects = data))
      .catch((error) => console.log(error.message))
  },
  methods: {
    onDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id)
    },
    onToggleComplete(id) {
      this.projects = this.projects.map((project) =>
        project.id === id ? { ...project, complete: !project.complete } : project
      )
    }
  },
  computed: {
    filteredProjects() {
      return this.projects.filter((project) => {
        if (this.filter === 'all') return true
        if (this.filter === 'completed') return project.complete
        if (this.filter === 'ongoing') return !project.complete
      })
    }
  }
}
</script>
