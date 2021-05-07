<template>
  <el-descriptions class="margin-top" :title="message.category" :column="3" :size="size" border>
    <template #extra>
      <el-button size="small" @click="deseek" type="danger" icon="el-icon-delete" circle></el-button>
      <el-tag :type="status[message.status]">{{statusInfo[message.status]}}</el-tag>
    </template>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        丢失物品
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
        丢失位置
      </template>
      {{message.location}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-tickets"></i>
        丢失时间
      </template>
      {{message.time}}
    </el-descriptions-item>
  </el-descriptions>
  <el-divider></el-divider>
</template>

<script>

export default {
  name: "MySeekMessage",
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
    }
  },
  props:['message'],
  methods: {
    deseek(){
      this.axios.post('http://10.181.39.60:5001/deleteSeekProperty',{
        seekID:this.message.seekID
      }).then((response) => {
        console.log(response)
        // location.reload();
      })
    }
  },
}
</script>

<style scoped>
.el-button {
  margin-right: 10px;
}
</style>
