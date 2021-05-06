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
            <el-button type="primary" @click="logIn">登录</el-button>
            <el-button @click="goLogUp">注册</el-button>
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
  name: "LogIn",
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    logIn() {

      // this.axios.post('http://localhost:8080/test',{
      //   username:this.form.username,
      //   passwd:this.form.password
      // }).then((response) => {
      //   console.log(response)
      // })
    },
    goLogUp(){
      this.$router.push('LogUp')
    }
  }
}
</script>

<style scoped>

</style>
