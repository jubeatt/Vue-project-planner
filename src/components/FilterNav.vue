<template>
  <nav class="filter-nav">
    <button
      v-for="option in options"
      :key="option"
      @click="onFilterChange(option)"
      :class="{ active: filter === option }"
    >
      {{ option }}
    </button>
  </nav>
</template>

<script>
export default {
  props: ['filter'],
  data() {
    return {
      options: ['all', 'completed', 'ongoing']
    }
  },
  methods: {
    onFilterChange(filterBy) {
      this.$emit('onFilterChange', filterBy)
    }
  }
}
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>
