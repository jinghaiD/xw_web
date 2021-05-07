<template>
  <el-row>
    <el-col :span="2" ></el-col>
    <el-col :span="2" :offset="16">
      <el-button type="text" @click="show = 1">大厅</el-button>
    </el-col>
    <el-col :span="2" >
      <el-button type="text" @click="show = 2">我的</el-button>
    </el-col>
    <el-col :span="2" >
      <el-button type="text" @click="logOut">登出</el-button>
    </el-col>
  </el-row>
  <el-divider></el-divider>
  <el-row v-if="show == 1" class="tac" style="height: 1000px">
    <el-col :span="4">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          >
        <el-menu-item index="1" @click="index = 1">
          <i class="el-icon-document"></i>
          <template #title>寻人信息</template>
        </el-menu-item>
        <el-menu-item index="2" @click="index = 2">
          <i class="el-icon-document"></i>
          <template #title>寻物信息</template>
        </el-menu-item>
        <el-menu-item>
          <el-button @click="dialogFormVisible = true">新建发布</el-button>

          <el-dialog title="新建发布" v-model="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="物品名称" :label-width="formLabelWidth">
                <el-input v-model="form.category" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="简要描述" :label-width="formLabelWidth">
                <el-input v-model="form.description" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="捡拾地址" :label-width="formLabelWidth">
                <el-input v-model="form.location" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="拾取时间" :label-width="formLabelWidth">
                <span class="demonstration"></span>
                <el-date-picker
                    v-model="form.pick_time"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="fabuLost">发 布</el-button>
              </span>
            </template>
          </el-dialog>
        </el-menu-item>
        <el-menu-item>
          <el-button @click="dialogFormVisible1 = true">新建寻找</el-button>

          <el-dialog title="新建寻找" v-model="dialogFormVisible1">
            <el-form :model="form1">
              <el-form-item label="物品名称" :label-width="formLabelWidth">
                <el-input v-model="form1.category" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="简要描述" :label-width="formLabelWidth">
                <el-input v-model="form1.description" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="捡拾地址" :label-width="formLabelWidth">
                <el-input v-model="form1.location" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="拾取时间" :label-width="formLabelWidth">
                <span class="demonstration"></span>
                <el-date-picker
                    v-model="form1.fabu_time"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="fabuSeek">发 布</el-button>
              </span>
            </template>
          </el-dialog>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18">
      <div v-if="index == 1">
        <LostMessage v-for="message in messages" :key="message.lostID" v-bind:message="message"></LostMessage>
      </div>
      <div v-if="index == 2">
        <SeekMessage v-for="message in seeks" :key="message.seekID" v-bind:message="message"></SeekMessage>
      </div>
    </el-col>
  </el-row>
  <el-row v-if="show == 2" class="tac" style="height: 1000px">
    <el-col :span="4">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
      >
        <el-menu-item index="1" @click="index1 = 1">
          <i class="el-icon-document"></i>
          <template #title>我发布的寻人信息</template>
        </el-menu-item>
        <el-menu-item index="2" @click="index1 = 2">
          <i class="el-icon-document"></i>
          <template #title>我发布的寻物信息</template>
        </el-menu-item>
        <el-menu-item index="3" @click="index1 = 3">
          <i class="el-icon-document"></i>
          <template #title>我的通知</template>
        </el-menu-item>
        <el-menu-item index="4" @click="index1 = 4">
          <i class="el-icon-document"></i>
          <template #title>发布信息</template>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18">
      <div v-if="index1 == 1">
        <MyLostMessage v-for="message in my_lost" :key="message.lostID" v-bind:message="message"></MyLostMessage>
      </div>
      <div v-if="index1 == 2">
        <MySeekMessage v-for="message in my_seek" :key="message.seekID" v-bind:message="message"></MySeekMessage>
      </div>
      <div v-if="index1 == 3">
        <h1>迭代二</h1>
      </div>
      <div v-if="index1 == 4">
        <h1>迭代二</h1>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import LostMessage from "./LostMessage";
import SeekMessage from "./SeekMessage";
import MyLostMessage from "./MyLostMessage";
import MySeekMessage from "./MySeekMessage";
export default {
  name: "my",
  data() {
    return {
      index:'1',
      index1:'1',
      show:'1',
      messages:[],
      seeks: [],
      my_lost:[],
      my_seek:[],
      dialogFormVisible: false,
      form: {
        category:'',
        description:'',
        location:"",
        pick_time: ''
      },

      dialogFormVisible1: false,
      form1: {
        category:'',
        description:'',
        location:"",
        fabu_time: ''
      },
      formLabelWidth: '120px'
    };
  },
  mounted() {
    if(localStorage.getItem("login") == '1'){
      this.$router.push("/my/"+localStorage.getItem("username"))
      this.axios.post('http://10.181.39.60:5001/getWallLostProperties',{

      }).then((response) => {
        console.log(response)
        this.messages = response.data
      })
      this.axios.post('http://10.181.39.60:5001/getWallSeekProperties',{

      }).then((response) => {
        console.log(response)
        this.seeks = response.data
      }),
      this.axios.post('http://10.181.39.60:5001/getLostPropertiesByUsername',{
          username:localStorage.getItem("username")
      }).then((response) => {
        console.log(response)
        this.my_lost = response.data
      }),
      this.axios.post('http://10.181.39.60:5001/getSeekPropertiesByUsername',{
        username:localStorage.getItem("username")
      }).then((response) => {
        console.log(response)
        this.my_seek = response.data
      })
    }
    else {
      this.$router.push("/")
    }

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logOut(){
      localStorage.clear()
      this.$router.push('/')
    },
    fabuLost(){
      this.dialogFormVisible = false
      this.axios.post('http://10.181.39.60:5001/postLostProperty',{
        category:this.form.category,
        description:this.form.description,
        location:this.form.location,
        pick_time:this.form.pick_time,
        release_userID:localStorage.getItem("userid")
      }).then((response) => {
        console.log(response)
        location.reload();
      })
    },
    fabuSeek(){
      this.dialogFormVisible = false
      this.axios.post('http://10.181.39.60:5001/postSeekProperty',{
        category:this.form1.category,
        description:this.form1.description,
        location:this.form1.location,
        time:this.form1.fabu_time,
        userID:localStorage.getItem("userid")
      }).then((response) => {
        console.log(response)
        location.reload();
      })
    }
  },
  components:{
    LostMessage,
    SeekMessage,
    MyLostMessage,
    MySeekMessage
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 1000px;
}
</style>
