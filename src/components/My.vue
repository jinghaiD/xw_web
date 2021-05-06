<template>
  <el-row class="tac" >
    <el-col :span="4">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          >
        <el-menu-item index="1" @click="index = 1">
          <i class="el-icon-document"></i>
          <template #title>导航1</template>
        </el-menu-item>
        <el-menu-item index="2" @click="index = 2">
          <i class="el-icon-document"></i>
          <template #title>导航2</template>
        </el-menu-item>
        <el-menu-item index="3" @click="index = 3">
          <i class="el-icon-document"></i>
          <template #title>导航3</template>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <h5 v-if="index == 2">dasdasd</h5>
      <h5 v-if="index == 1">214314</h5>
      <h5 v-if="index == 3">fvcs45</h5>
    </el-col>

  </el-row>
</template>

<script>
export default {
  name: "my",
  data() {
    return {
      index:'1'
    };
  },
  mounted() {

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
