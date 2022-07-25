<template>
  <form @submit.prevent="onSubmit">
    <label>Title</label>
    <input type="text" v-model="title" required />
    <label>Details</label>
    <textarea v-model="details" required />
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  mounted() {
    fetch(this.uri)
      .then((response) => response.json())
      .then((project) => {
        this.title = project.title
        this.details = project.details
      })
  },
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/projects/' + this.id
    }
  },
  methods: {
    onSubmit() {
      const updatedProject = {
        title: this.title,
        details: this.details
      }
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProject)
      })
        .then(() => this.$router.push('/'))
        .catch((error) => console.log(error.message))
    }
  }
}
</script>

<style></style>
