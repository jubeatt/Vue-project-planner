<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="isShowDetails = !isShowDetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span class="material-icons">edit</span>
        </router-link>
        <span @click="onDelete" class="material-icons">delete</span>
        <span @click="onToggleComplete" class="material-icons tick">done</span>
      </div>
    </div>
    <div v-if="isShowDetails" class="details">
      {{ project.details }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      isShowDetails: false,
      uri: 'http://localhost:3000/projects/' + this.project.id
    }
  },
  methods: {
    onDelete() {
      fetch(this.uri, { method: 'DELETE' })
        .then(() => this.$emit('onDelete', this.project.id))
        .catch((error) => console.log(error.message))
    },
    onToggleComplete() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ complete: !this.project.complete })
      })
        .then(() => this.$emit('onToggleComplete', this.project.id))
        .catch((error) => console.log(error.message))
    }
  }
}
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--color-red);
}
.project h3 {
  cursor: pointer;
}
.project .actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project .icons {
  display: flex;
}
.project .material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.project .material-icons:hover {
  color: #777;
}
.project.complete {
  border-left: 4px solid var(--color-green);
}
.project.complete .tick {
  color: var(--color-green);
}
</style>
