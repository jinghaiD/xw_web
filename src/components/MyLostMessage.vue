<template>
  <el-descriptions class="margin-top" :title="message.category" :column="3" :size="size" border>
    <template #extra>
      <el-button size="small" type="primary" @click="openChange">修改</el-button>
      <el-button size="small" type="danger" icon="el-icon-delete" circle @click="delost"></el-button>
      <el-tag :type="status[message.status]">{{statusInfo[message.status]}}</el-tag>
    </template>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        拾取的物品
      </template>
      {{message.category}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        描述
      </template>
      {{message.description}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        放置位置
      </template>
      {{message.location}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-tickets"></i>
        拾取时间
      </template>
      {{message.pick_time}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
        发布时间
      </template>
      {{message.release_time}}
    </el-descriptions-item>
  </el-descriptions>
  <el-divider></el-divider>
</template>

<script>
export default {
  name: "MyLostMessage",
  data () {
    return {
      size: '',
      status:{
        "1":"success",
        "2":"danger"
      },
      statusInfo:{
        "1":"发布中",
        "2":"审核中",
        "3":"已完成"
      }
    };
  },
  props:['message'],
  methods: {
    delost(){
      this.axios.post('http://10.181.39.60:5001/deleteLostProperty',{
          lostID:this.message.lostID
      }).then((response) => {
        console.log(response)
        location.reload();
      })
    },
    openChange(){
      console.log(this.$parent.$parent.$parent.$parent.drawer)
      console.log(this.$parent.$parent.$parent.$parent.form2)
      console.log(this.message)
      this.$parent.$parent.$parent.$parent.drawer = true;
      this.$parent.$parent.$parent.$parent.form2.description = this.message.description;
      this.$parent.$parent.$parent.$parent.form2.category = this.message.category;
      this.$parent.$parent.$parent.$parent.form2.location = this.message.location;
      this.$parent.$parent.$parent.$parent.form2.pick_time = this.message.pick_time;
      this.$parent.$parent.$parent.$parent.form2.lostID = this.message.lostID;
      this.$parent.$parent.$parent.$parent.form2.status = this.message.status;
    }
  },
}
</script>

<style scoped>
.el-button {
  margin-right: 10px;
}
</style>
