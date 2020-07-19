<template>
  <portal-template>
    <div id="login">
      <el-form label-position="top" label-width="80px" :model="user"
       :rules="rules" ref="ruleForm">
        <el-form-item label="Username" prop="username">
          <el-input v-model="user.username" placeholder="Please input your username.  "></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="user.password" placeholder="Please input your password.  "></el-input>
        </el-form-item>
        <el-button class="submit-btn" type="primary" @click="login('ruleForm')">Login</el-button>
      </el-form>
      <router-link to="/registerAPI"><el-button type="text" icon="el-icon-edit">Sign Up</el-button></router-link>
    </div>
  </portal-template>
</template>

<script>
import PortalTemplate from './PortalTemplate'
export default {
  name: 'login',
  components: {
    PortalTemplate
  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      msg: 'Welcome to Your Vue.js App',
      rules: {
        username: [
           { required: true, message: 'Please input your username.', trigger: 'blur' }
         ],
         password: [
          { required: true, message: 'Please input your password. ', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login(formName) {
      var self = this;
      self.$refs[formName].validate((valid) => {
         if (valid) {

           self.$store.dispatch('login', {username: self.user.username, password: self.user.password})
           .then((response) => {
             debugger;
             self.$message.success(response.data.message)
             self.$router.push('/home/course/list');
           })
           .catch((response) => {
             self.$message.error(response.data.message)
           })
       }
       });
    }
  }
}
</script>

<style lang="scss">
</style>