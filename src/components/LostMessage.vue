<template>
  <el-descriptions class="margin-top" :title="message.category" :column="3" :size="size" border>
    <template #extra>
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
  name: "LostMessage",
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
  props:['message']
}
</script>

<style scoped>

</style>
