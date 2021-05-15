<template>
  <div>
    <el-row class="bg1">
      <el-col :span="3" >
        <h5 style="margin:12px 0">创新港失物招领系统</h5>
      </el-col>
      <el-col :span="1" :offset="18">
        <el-button type="text" @click="show = 1" icon="el-icon-s-home">大厅</el-button>
      </el-col>
      <el-col :span="1" >
        <el-button type="text" @click="show = 2" icon="el-icon-user-solid">我的</el-button>
      </el-col>
      <el-col :span="1" >
        <el-button type="text" @click="logOut" icon="el-icon-s-release">登出</el-button>
      </el-col>
    </el-row>
    <el-divider style="margin-top: 8px;margin-bottom: 8px"></el-divider>
    <el-row v-if="show == 1" style="height: 950px">
      <el-col :span="2">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo bg1"
            style="width: 100%"
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
            <el-button @click="dialogFormVisible = true">寻找失主</el-button>

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
            <el-button @click="dialogFormVisible1 = true">寻找物品</el-button>

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
      <el-divider direction="vertical" style="height: 100%"></el-divider>
      <el-col :span="18">
        <el-scrollbar height="950px">
        <div v-if="index == 1">
          <LostMessage v-for="message in messages" :key="message.lostID" v-bind:message="message"></LostMessage>
        </div>
        <div v-if="index == 2">
          <SeekMessage v-for="message in seeks" :key="message.seekID" v-bind:message="message"></SeekMessage>
        </div>
        </el-scrollbar>
      </el-col>
    </el-row>
    <el-row v-if="show == 2" class="tac" style="height: 1000px">
      <el-col :span="2">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo bg1"
            style="width: 100%"
        >
          <el-menu-item index="1" @click="index1 = 1">
            <i class="el-icon-document"></i>
            <template #title>我的寻人信息</template>
          </el-menu-item>
          <el-menu-item index="2" @click="index1 = 2">
            <i class="el-icon-document"></i>
            <template #title>我的寻物信息</template>
          </el-menu-item>
          <el-menu-item index="3" @click="index1 = 3">
            <i class="el-icon-document"></i>
            <template #title>我的通知</template>
          </el-menu-item>
          <el-menu-item index="4" @click="index1 = 4">
            <i class="el-icon-document"></i>
            <template #title>我的信息</template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-divider direction="vertical" style="height: 100%"></el-divider>
      <el-col :span="18">
        <el-scrollbar height="950px">
        <div v-if="index1 == 1">
          <MyLostMessage v-for="message in my_lost" :key="message.lostID" v-bind:message="message"></MyLostMessage>
        </div>
        <div v-if="index1 == 2">
          <MySeekMessage v-for="message in my_seek" :key="message.seekID" v-bind:message="message"></MySeekMessage>
        </div>
        <div v-if="index1 == 3">
          <h1>迭代二</h1>
        </div>
        <div v-if="index1 == 4" style="margin-left: 20px">
          <h1 style="float: left">{{people.realname}}</h1>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <h4 style="float: left">学生卡号：{{people.validID}}</h4>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>

          <h4 style="float: left">性别：{{people.gender}}</h4>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>

          <h4 style="float: left">联系电话：{{people.phone}}</h4>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>

          <h4 style="float: left">联系邮箱：{{people.mail}}</h4>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>

          <p style="float: left">个人简介：{{people.resume}}</p>
          <br>
          <br>
          <br>
          <br>
          <el-button size="small" type="primary" style="float: left" @click="openPeople">修改</el-button>

        </div>
        </el-scrollbar>
      </el-col>
    </el-row>
    <el-drawer
        title="请填写修改的内容"
        v-model="drawer_people"
        :direction="direction"
        destroy-on-close>
      <el-form :model="people" style="margin-right: 20px">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="people.realname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学生卡号" :label-width="formLabelWidth">
          <el-input v-model="people.validID" autocomplete="off" type = "textarea"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="people.gender" placeholder="请选择">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="people.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱" :label-width="formLabelWidth">
          <el-input v-model="people.mail" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="个人简介" :label-width="formLabelWidth">
          <el-input v-model="people.resume" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button  type="primary" @click="editPeople">修改</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <el-drawer
        title="请填写修改的内容"
        v-model="drawer"
        :direction="direction"
        destroy-on-close>
      <el-form :model="form2" style="margin-right: 20px">
        <el-form-item label="物品名称" :label-width="formLabelWidth">
          <el-input v-model="form2.category" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="简要描述" :label-width="formLabelWidth">
          <el-input v-model="form2.description" autocomplete="off" type = "textarea"></el-input>
        </el-form-item>
        <el-form-item label="捡拾地址" :label-width="formLabelWidth">
          <el-input v-model="form2.location" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="拾取时间" :label-width="formLabelWidth">
          <span class="demonstration"></span>
          <el-date-picker
              v-model="form2.pick_time"
              type="datetime"
              placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button  type="primary" @click="editLost">修改</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <el-drawer
        title="请填写修改的内容"
        v-model="drawer2"
        :direction="direction"
        destroy-on-close>
      <el-form :model="form3" style="margin-right: 20px">
        <el-form-item label="物品名称" :label-width="formLabelWidth">
          <el-input v-model="form3.category" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="简要描述" :label-width="formLabelWidth">
          <el-input v-model="form3.description" autocomplete="off" type = "textarea"></el-input>
        </el-form-item>
        <el-form-item label="捡拾地址" :label-width="formLabelWidth">
          <el-input v-model="form3.location" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="丢失时间" :label-width="formLabelWidth">
          <span class="demonstration"></span>
          <el-date-picker
              v-model="form3.pick_time"
              type="datetime"
              placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button  type="primary" @click="editSeek">修改</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
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
      drawer: false,
      drawer2: false,
      drawer_people: false,
      direction: 'rtl',
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
      form2: {
        category:'',
        description:'',
        location:"",
        pick_time: '',
        lostID:'',
        status:''
      },
      form3: {
        category:'',
        description:'',
        location:"",
        pick_time: '',
        seekID:'',
        status:''
      },
      formLabelWidth: '120px',
      people:{
        realname:'',
        validID:'',
        gender:'',
        phone:'',
        mail:'',
        resume:''
      }
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
      this.people.realname = localStorage.getItem('realname')
      this.people.validID = localStorage.getItem('validID')
      this.people.gender = localStorage.getItem('gender')
      this.people.phone = localStorage.getItem('phone')
      this.people.mail = localStorage.getItem('mail')
      this.people.resume = localStorage.getItem('resume')
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
    editLost(){
      this.drawer = false
      this.axios.post('http://10.181.39.60:5001/editLostProperty',{
        category:this.form2.category,
        description:this.form2.description,
        location:this.form2.location,
        pick_time:this.form2.pick_time,
        release_userID:localStorage.getItem("userid"),
        lostID:this.form2.lostID,
        status:this.form2.status
      }).then((response) => {
        console.log(response)
        location.reload();
      })
    },
    editSeek(){
      this.drawer2 = false
      this.axios.post('http://10.181.39.60:5001/editSeekProperty',{
        category:this.form3.category,
        description:this.form3.description,
        location:this.form3.location,
        time:this.form3.pick_time,
        userID:localStorage.getItem("userid"),
        seekID:this.form3.seekID,
        status:this.form3.status
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
    },
    openPeople(){
      this.drawer_people = true
    },
    editPeople(){
      var gen = 1
      if(this.people.gender == '男'){
        gen = 1
      }else{
        gen = 0
      }
      this.axios.post('http://10.181.39.60:5001/editUser', {
        userID:localStorage.getItem('userid'),
        username:localStorage.getItem('username'),
        password:localStorage.getItem('password'),
        realname:this.people.realname,
        validID:this.people.validID,
        IDphoto:'fsdfsd',
        gender:gen,
        phone:this.people.phone,
        mail:this.people.mail,
        individual_resume:this.people.resume,
      }).then((response) => {
        console.log(gen)
        console.log(response)
        this.drawer_people = false

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
  min-height: 950px;
}
.bg{
  background-color: lightblue;
}
.bg1{
  background-color: #057ab8;
}
</style>
