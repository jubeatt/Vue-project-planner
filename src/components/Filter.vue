<template>
  <div class="filter">
    <el-tabs @tab-click="onTabChange" :model-value="filter">
      <el-tab-pane label="VIEW ALL" name="all" />
      <el-tab-pane label="COMPLETED" name="completed" />
      <el-tab-pane label="ONGOING" name="onGoing" />
    </el-tabs>
  </div>
</template>

<script>
export default {
  props: ['filter', 'onFilter'],
  methods: {
    onTabChange(tab) {
      this.onFilter(tab.paneName)
    }
  }
}
</script>

<style>
.filter .el-tabs__item {
  font-weight: bold;
  color: #555;
}
.filter .el-tabs__item:hover,
.filter .el-tabs__item.is-active {
  color: var(--color-green);
}
.filter .el-tabs__active-bar {
  background-color: var(--color-green);
}
</style>
