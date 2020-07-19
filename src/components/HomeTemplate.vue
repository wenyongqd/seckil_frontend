<template>
  <div id="home-template">
    <el-container>
      <el-header>
        <div class="main-menu">
          <a href="/"><img class="logo" src="../assets/images/logo.png" alt="秒杀logo" /></a>
          <el-menu :default-active="$route.path" mode="horizontal" router>
            <el-menu-item index="/home/course/list">Courses</el-menu-item>
            <el-menu-item index="/home/order/list">Orders</el-menu-item>
          </el-menu>
        </div>
        <div id="user-setting">
          <!--<i class="el-icon-setting" />-->
          <el-menu mode="horizontal">
            <el-submenu index="1">
              <template slot="title">{{getUsername}}</template>
              <el-menu-item index="1-1" >Logout</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-header>
      <el-main>
        <div class="my-container">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>
        All rights reserved. &copy; 2020 WENYONG PERSONAL WEBSITE
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'home-template',
  data () {
    return {
    }
  },
  computed: {
    getUsername: function() {
      return this.$store.getters.getUsername
    }
  }
}
</script>

<style >
@import '../assets/css/home-template.css';
</style>
