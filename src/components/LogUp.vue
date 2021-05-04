<template>
  <el-row style="height: 400px">
    <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple-light">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">注册</el-button>
          </el-form-item>
        </el-form>
      </div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row style="height: 300px">
    <el-col :span="24" ><div class="grid-content bg-purple-dark"></div></el-col>
  </el-row>
</template>

<script>
export default {
  name: "LogUp",
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>

</style>
