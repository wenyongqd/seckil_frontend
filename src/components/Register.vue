<template>

  <portal-template>
    <div id="register">
      <el-form label-position="top" label-width="80px" :model="user"
       :rules="rules" ref="ruleForm">
        <el-form-item label="Username" prop="username">
          <el-input v-model="user.username" placeholder="Please input your username  "></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="user.password" placeholder="Please input your password  "></el-input>
        </el-form-item>
        <el-form-item label="Confirm password" prop="repassword">
          <el-input type="password" v-model="user.repassword" placeholder="please confirm your password  "></el-input>
        </el-form-item>
        <el-button class="submit-btn" type="primary" @click="register('ruleForm')">Register</el-button>
      </el-form>

      <router-link to="/login"><el-button type="text" icon="el-icon-edit">Login</el-button></router-link>
    </div>
  </portal-template>
</template>

<script>
import PortalTemplate from './PortalTemplate'
import qs from 'qs'
import axios from 'axios'


export default {
  name: 'register',
  components: {
    PortalTemplate
  },
  data () {
    return {
      user: {
        username: '',
        password: '',
        repassword: ''
      },

      msg: 'Welcome to Your Vue.js App',
      rules: {
        username: [
           { required: true, message: 'Please input your username', trigger: 'blur' }
         ],
         password: [
          { required: true, message: 'Please input your password ', trigger: 'blur' }
        ],
        repassword: [
         { required: true, message: 'Please confirm password ', trigger: 'blur' },
         { validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('Please confirm password again'));
            } else if (value !== this.user.password) {
              callback(new Error('The passwords are not equal!'));
            } else {
              callback();
            }
          }, trigger: 'blur' }
       ]
      }
    }
  },
  methods: {
    register(formName) {
      
      var self = this;
      self.$refs[formName].validate((valid) => {
         if (valid) {
           alert("Success!")
           self.axios.post('/api/registerAPI',JSON.stringify({
             username: self.user.username,
             password: self.$md5(self.user.password + 'springboot')
           }), {
            headers: {
              'Content-Type': 'application/json'
            }
           })
               .then((response) => {
                 debugger;
            self.$message.success(response.data.message)
             console.log(response.data)
             self.$router.push('/login');
           })


        //    this.axios.post('/api/registerAPI',qs.stringify({ 
        //         usename: this.user.usename,
        //         password: this.user.password
        // }))
      //       this.axios({
      //         method: 'post',
      //         url: '/api/registerAPI',
      //         dateType:"json",
      //         contentType : 'pplication/x-www-form-urlencoded',
      //         data: Qs.stringify({          //axios的post方法访问后端this.qs.stringify(
      //           usename: 'this.usename',
      //           password: 'this.password'
      //   }),
      // })
      // .then(res=>{                    //请求成功后执行函数
      //   console.log(res)              //在浏览器后台打印返回的响应数据
      // })
      // .catch(err=>{                   //请求错误后执行函数
      //   console.log(err)
      // })
          // self.axios.post('/api/registerAPI/', Qs.stringify({username: 'wee', password: '123456'}))
          //  self.$store.dispatch('register', {username: self.user.username, password: self.user.password})
          //  .then((response) => {
            //  console.log(response.data)
            //  self.$message.success(response.data.message)
            //  self.$router.push('/login');
          //  })
          //  .catch((response) => {
          //    self.$message.error(response.data.message)
          //  })
         }
       });
    }
  }
}
</script>

<style lang="scss">
</style>
