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
            <el-input v-model="form.username"></el-input>
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
import { ElMessage } from 'element-plus'
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
  mounted() {
    if(localStorage.getItem("login") == '1'){
      this.$router.push("/my/"+localStorage.getItem("username"))
    }
  },
  methods: {
    logIn() {
      console.log(this.form.username)
      console.log(this.form.password)
      this.axios.post('http://10.181.39.60:5001/login',{
        username:this.form.username,
        password:this.form.password
      }).then((response) => {
        console.log(response)
        if(response.data == 1){
          this.$router.push('/hall')
          localStorage.setItem('login', '1')
          localStorage.setItem('username', this.form.username)
        }else if(response.data == 2){
          ElMessage.error("用户名不存在")
        }else if(response.data == 3){
          ElMessage.error("密码错误")
        }
      })
    },
    goLogUp(){
      this.$router.push('LogUp')
    }
  }
}
</script>

<style scoped>

</style>
