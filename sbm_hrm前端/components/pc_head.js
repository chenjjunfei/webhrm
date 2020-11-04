var head_template = `
  <nav class="navbar bg-info">
      <span class="mx-auto text-white">人事管理系统</span>
      <div class="container navbar-right"><button @click="out_login()" class="btn btn-danger">退出</button></div>
  </nav>
  `
Vue.component('head1', {
  props: {
  },
  data: function () {
    return {
    }
  },
  methods: {
    out_login(){
        axios.post(store.state.url + 'logout')
          .then(response => {
            var temps = response.data;
            if (temps.status == 'success') {
              //this.returnvalue = '退出成功';
              this.login = true;
              alert(temps.msg)
              router.go(0)
            } else {
              this.returnvalue = temps.msg;
            }
          })
          .catch(error => console.log(error));// 请求失败处理
      },
  },
  template: head_template,
});
