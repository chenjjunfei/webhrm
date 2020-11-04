var empsel_template = `
<div>
<head1></head1>
    <div class="row">
        <div class="col-1 bg-light text-center">
          <br>
          <side :item="1"></side>
        </div>
        <div class="col-11">
            <br>
            <form class="form-inline">
                <label for="name" class="control-label">姓名：</label>
                <input type="text" v-model="condition.name" class="form-control" id="name" placeholder="">&nbsp;&nbsp;
               
                <label class="control-label" for="dept">部门：</label>
                <select v-model="condition.dept" class="form-control" id="dept">
                  <option value="">请选择部门</option>
                  <option  v-for="d in depts" v-bind:value="d.id">{{d.name}}</option>
                </select>&nbsp;&nbsp;

                <label for="job" class="control-label">职位：</label>
                <select v-model="condition.job" class="form-control" id="job">
                  <option value="">请选择职位</option>
                  <option  v-for="d in job" v-bind:value="d.id">{{d.name}}</option>
                </select>&nbsp;&nbsp;
                <button type="buttom" v-on:click="select" class="btn btn-primary">查询</button>&nbsp;&nbsp;
            </form>
    
            <table class="table table-bordered table-striped text-center" style="margin-top:30px">
                <tr>
                    <td>编号</td>
                    <td>姓名</td>
                    <td>性别</td>
                    <td>电话</td>
                    <td>邮箱</td>
                    <td>职位</td>
                    <td>学历</td>
                    <td>身份证</td>
                    <td>部门</td>
                    <td>住址</td>
                    <td>建档日期</td>
                    <td colspan="2">操作</td>
                </tr>
                <tr v-for="e in employees ">
                    <td>{{e.id}}</td>
                    <td>{{e.name}}</td>
                    <td>{{e.sex}}</td>
                    <td>{{e.phone}}</td>
                    <td>{{e.email}}</td>
                    <td>{{e.job.name}}</td>
                    <td>{{e.education}}</td>
                    <td>{{e.cardid}}</td>
                    <td>{{e.dept.name}}</td>
                    <td>{{e.address}}</td>
                    <td>{{e.createdate}}</td>
                    <td><button type="buttom" v-on:click="edit(e.id)" class="btn btn-outline-primary">修改</button></td>
                    <td><button type="buttom" v-on:click="del(e.id)" class="btn btn-outline-primary">删除</button></td>
                </tr>
             </table>
            <span class="float-left"> 共计：{{employees.length}}人</span>
        </div>
    </div>
<foot1></foot1>
</div>

  `
const empsel = {
  data() {
    var myDate = new Date();
    return {
      condition: { name: '', dept: '', job: '' },
      depts: [],
      job:[],
      shareurl: store.state.url,
      employees: [],
    }
  },
  methods: {
    select() {

      axios.post(this.shareurl + 'employee/select', this.condition)
        .then(response => this.employees = response.data)
        .catch(error => console.log(error));// 请求失败处理
    },
    del(id) {
      axios.delete(this.shareurl + 'employee/delete/' + id)
        .then(response => {
          for (var i = 0; i < this.employees.length; i++) {
            if (id == this.employees[i].id) {
              this.employees.splice(i, 1)
              break
            }
          }
          console.log(response)
        })
        .catch(error => console.log(error));// 请求失败处理
    },
    edit(id) {
      router.push({
        path: 'empedit',
        query: { id: id }
      });
    }
  },
  mounted() {  //这里mounted和created生命周期函数区别
    //发送get请求
    // get部门
    axios.get(this.shareurl + 'dept/select')
      .then(response => this.depts = response.data)
      .catch(error => console.log(error));// 请求失败处理

      // get职位
    axios.get(this.shareurl + 'job/select')
    .then(response => this.job = response.data)
    .catch(error => console.log(error));// 请求失败处理
  },

  template: empsel_template
}
