<template>
  <div class="project" :class="{ active: project.isCompleted }">
    <div class="header">
      <div class="title" @click="isShowDetail = !isShowDetail">{{ project.title }}</div>
      <div class="option">
        <div class="icon">
          <el-icon :size="22" color="#ccc" @click="onDelete(project.id)">
            <DeleteFilled />
          </el-icon>
        </div>
        <div class="icon">
          <el-icon
            :size="22"
            color="#ccc"
            @click="$router.push({ name: 'EditProject', params: { id: project.id } })"
          >
            <EditPen />
          </el-icon>
        </div>
        <div class="icon">
          <el-icon :size="22" color="#ccc" @click="onToggleComplete(project.id)">
            <Check />
          </el-icon>
        </div>
      </div>
    </div>
    <div v-if="isShowDetail" class="body">
      {{ project.detail }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['project', 'onDelete', 'onToggleComplete'],
  data() {
    return {
      isShowDetail: false
    }
  }
}
</script>

<style>
.project {
  background: white;
  border-radius: 4px;
  border-left: 4px solid var(--color-pink);
  padding: 20px 15px;
  margin: 20px 0;
}
.project .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.project .title {
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #555;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
}
.project .option {
  display: flex;
  gap: 10px;
}
.project .icon {
  display: flex;
  cursor: pointer;
}
.project .icon:hover svg path {
  fill: #555;
}
.project .body {
  margin-top: 20px;
  text-align: left;
}

/* active */
.project.active {
  border-left: 4px solid var(--color-green);
}
.project.active .icon:last-child svg path {
  fill: var(--color-green);
}
</style>
