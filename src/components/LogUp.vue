<template>
  <el-row style="height: 400px">
    <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple-light">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input v-model="form.realname"></el-input>
          </el-form-item>
          <el-form-item label="证件号">
            <el-input v-model="form.validID"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="form.gender"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.mail"></el-input>
          </el-form-item>
          <el-form-item label="个人简介">
            <el-input v-model="form.individual_resume"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">注册</el-button>
          </el-form-item>
        </el-form>
      </div></el-col>
    <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row style="height: 300px">
    <el-col :span="24" ><div class="grid-content bg-purple-dark"></div></el-col>
  </el-row>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  name: "LogUp",
  data() {
    return {
      form: {
        username: '',
        password: '',
        realname:'',
        validID:'',
        gender:'',
        phone:'',
        mail:'',
        individual_resume:''
      }
    }
  },
  mounted() {
    if(localStorage.getItem("login") == '1'){
      this.$router.push("/my/"+localStorage.getItem("username"))
    }
  },
  methods: {
    onSubmit() {
      this.axios.post('http://10.181.39.60:5001/register',{
        username:this.form.username,
        password:this.form.password,
        realname:this.form.realname,
        validID:this.form.validID,
        gender:this.form.gender,
        phone:this.form.phone,
        mail:this.form.mail,
        individual_resume:this.form.individual_resume
      }).then((response) => {
        console.log(response)
        if(response.data == "1")
        {
          this.$router.push("/my/"+localStorage.getItem("username"))
          ElMessage.success("注册成功，已经自动登录")
          localStorage.setItem('login', '1')
          localStorage.setItem('username', this.form.username)
        }else if(response.data == "2")
        {
          ElMessage.error("用户名不存在")
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
