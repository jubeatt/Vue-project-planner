<template>
  <div class="form">
    <div class="container">
      <el-form @submit.prevent="onSubmit">
        <el-form-item label="TITLE">
          <el-input type="text" v-model="title" clearable required />
        </el-form-item>
        <el-form-item label="DETAIL">
          <el-input type="textarea" :rows="5" v-model="detail" required />
        </el-form-item>
        <el-form-item class="el-button-item">
          <button class="btn">{{ id ? 'Update' : 'Add Project' }}</button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // init form
    if (this.id) {
      try {
        const record = JSON.parse(localStorage.getItem('projects'))
        const project = record.find((project) => project.id === parseInt(this.id, 10))
        this.title = project.title
        this.detail = project.detail
      } catch (error) {
        this.$notify({
          title: 'Error',
          message: error.message,
          type: 'error'
        })
        this.$router.go(-1)
      }
    }
  },
  data() {
    return {
      title: '',
      detail: ''
    }
  },
  props: ['id'],
  methods: {
    onSubmit() {
      this.id ? this.editProject() : this.addProject()
    },
    addProject() {
      try {
        const record = JSON.parse(localStorage.getItem('projects'))
        const newRecord = [
          {
            id: Date.now(),
            title: this.title,
            detail: this.detail,
            isCompleted: false
          },
          ...record
        ]
        localStorage.setItem('projects', JSON.stringify(newRecord))
        this.$notify({
          title: 'Success',
          message: 'Create new record succuss!',
          type: 'success'
        })
      } catch (error) {
        this.$notify({
          title: 'Error',
          message: error.message,
          type: 'error'
        })
      }
      this.$router.push('/')
    },
    editProject() {
      try {
        const record = JSON.parse(localStorage.getItem('projects'))
        const newRecord = record.map((project) =>
          project.id === parseInt(this.id, 10)
            ? {
                ...project,
                title: this.title,
                detail: this.detail
              }
            : project
        )
        localStorage.setItem('projects', JSON.stringify(newRecord))
        this.$notify({
          title: 'Success',
          message: 'Update new record succuss!',
          type: 'success'
        })
      } catch (error) {
        this.$notify({
          title: 'Error',
          message: error.message,
          type: 'error'
        })
      }
      this.$router.push('/')
    }
  }
}
</script>

<style>
.form .container {
  background: white;
  border-radius: 8px;
}
.form .el-form-item {
  flex-direction: column;
}
.form .el-form-item__label {
  justify-content: flex-start;
  color: #999;
  font-weight: bold;
  letter-spacing: 1px;
}
.form .el-button-item .el-form-item__content {
  justify-content: center;
}
</style>
