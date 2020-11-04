var login_template = `
<div id="app" class="container">
<br>
<h4 class="text-center">用户登录</h4><br>
<template v-if="login">

    <div class="form-group">
        <label for="username">用户名:</label>&nbsp;
        <input type="text" v-model="username" class="form-control" id="username">
    </div>
    <div class="form-group">
        <label for="pwd">密码:</label>&nbsp;
        <input type="password" v-model="pwd" class="form-control" id="pwd">
    </div>
    <div class="form-group">
        <button v-on:click="login_1" class="btn btn-primary btn-block">登录</button>
    </div>
    <h6 style="color:red">{{returnvalue}}</h6>
</template>
<template v-else>
    <h6>欢迎你：{{username}}！ <button v-on:click="logout" class="btn btn-link float-right">退出</button></h6><br><br>
    <p><button v-on:click="goback" class="btn btn-block btn-primary">返回上一页面</button></p>
    <p><router-link to="/" class="btn btn-block btn-primary">到主页</router-link></p>

</template>

</div>
  `
const login = {
  data() {
    return {
      login: true,
      username: '',
      pwd: '',
      returnvalue: '',
      shareurl: store.state.url,
      name: '',
    }
  },
  created() {  //这里mounted和created生命周期函数区别
    //发送get请求
    axios.get(this.shareurl + 'islogin')
      .then(response => {
        var temps = response.data
        if (temps.status == 'login') {
          this.login = false
          this.username = temps.msg
        } else {
          this.login = true
        }
      })
      .catch(error => console.log(error));// 请求失败处理
  },
  methods: {
    login_1() {
      axios.post(this.shareurl + 'login?username=' + this.username + '&password=' + this.pwd)
        .then(response => {
          var temps = response.data;
          if (temps.status == 'success') {
            //this.returnvalue = '登录成功';
            this.login = false;
            alert(temps.msg)
          } else {
            this.returnvalue = temps.msg;
            alert(temps.msg)
          }
        })
        .catch(error => console.log(error));// 请求失败处理
    },
    getname: function () {
      //发送get请求
      axios.get(this.shareurl + 'username')
        .then(response => {
          this.name = response.data.msg
        })
        .catch(error => this.home = error.message);// 请求失败处理
    },
    logout() {
      axios.post(this.shareurl + 'logout')
        .then(response => {
          var temps = response.data;
          if (temps.status == 'success') {
            //this.returnvalue = '退出成功';
            this.login = true;
          } else {
            this.returnvalue = temps.msg;
          }
        })
        .catch(error => console.log(error));// 请求失败处理
    },
    goback() {
      router.go(-1)
    },

  },
  template: login_template
}
