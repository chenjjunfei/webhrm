var empedit_template = `
  <div>
    <head1></head1>
      <div class="row">
      <div class="col-md-1 bg-light text-center">
        <br>
        <side :item="2"></side>
      </div>
      <div class="col-md-11">
        <br>
        <form>
        <table class="table border-0">
        <tr>
            <td class="border-0">
                <div class="form-group form-inline">
                    <label for="id" class="control-label">编号：</label>
                    <input type="text" v-bind:readOnly="edit" v-model="employee.id" class="form-control" id="id" placeholder="必须填写">
                </div>
            </td>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="name" class="control-label">姓名：</label>
                    <input type="text" v-model="employee.name" class="form-control" id="name" placeholder="必须填写">
                </div>
            </td>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="sex" class="control-label">性别：</label>
                    <select v-model="employee.sex" class="form-control" id="sex">
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>&nbsp;&nbsp;
                </div>
            </td>
        </tr>
    
        <tr>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="dept_id" class="control-label">部门：</label>
                    <select v-model="employee.deptid" class="form-control" id="dept_id">
                        <option value="">请选择部门</option>
                        <option  v-for="d in depts" v-bind:value="d.id">{{d.name}}</option>
                    </select>必选
                </div>
            </td>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="job_id" class="control-label">职位：</label>
                    <select v-model="employee.jobid" class="form-control" id="job_id">
                        <option value="">请选择职位</option>
                        <option  v-for="d in jobs" v-bind:value="d.id">{{d.name}}</option>
                    </select>必选
                </div>
            </td>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="card_id" class="control-label">身份证：</label>
                    <input type="text" v-model="employee.cardid" class="form-control" id="card_id" placeholder="">
                </div>
            </td>
        </tr>
    
        <tr>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="tel" class="control-label">固话：</label>
                    <input type="text" v-model="employee.tel" class="form-control" id="tel" placeholder="">
                </div>
            </td>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="phone" class="control-label">手机：</label>
                    <input type="text" v-model="employee.phone" class="form-control" id="phone" placeholder="">
                </div>
            </td>
            <td  class="border-0">
                <div class="form-group form-inline">
                   <label for="qq_num" class="control-label">QQ号：</label>
                    <input type="text" v-model="employee.qqnum" class="form-control" id="qq_num" placeholder="">
                </div>
            </td>
        </tr>
    
        <tr>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="email" class="control-label">邮箱：</label>
                    <input type="text" v-model="employee.email" class="form-control" id="email" placeholder="">
                </div>
            </td>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="address" class="control-label">住址：</label>
                    <input type="text" v-model="employee.address" class="form-control" id="address" placeholder="">
                </div>
            </td>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="post_code" class="control-label">邮编：</label>
                    <input type="text" v-model="employee.postcode" class="form-control" id="post_code" placeholder="">
                </div>
            </td>
        </tr>
    
        <tr>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="party" class="control-label">政貌：</label>
                    <input type="text" v-model="employee.party" class="form-control" id="party" placeholder="">
                </div>
            </td>
            <td  class="border-0">
                <div class="form-group form-inline">
                   <label for="birthday" class="control-label">生日：</label>
                    <input type="date" v-model="employee.birthday" class="form-control" id="birthday" placeholder="">
                </div>
            </td>
            <td  class="border-0">
                <div class="form-group form-inline">
                     <label for="race" class="control-label">民族：</label>
                    <input type="text" v-model="employee.race" class="form-control" id="race" placeholder="">
                </div>
            </td>
        </tr>
    
        <tr>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="education" class="control-label">学历：</label>
                    <select v-model="employee.education" class="form-control" id="education">
                        <option value="">请选择学历</option>
                        <option value="本科">本科</option>
                        <option value="硕士">硕士</option>
                        <option value="博士">博士<option>
                    </select>
                </div>
            </td>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="speciality" class="control-label">专业：</label>
                    <input type="text" v-model="employee.speciality" class="form-control" id="speciality" placeholder="">
                </div>
            </td>
            <td  class="border-0">
                <div class="form-group form-inline">
                    <label for="hobby" class="control-label">爱好：</label>
                    <input type="text" v-model="employee.hobby" class="form-control" id="hobby" placeholder="">
    
                </div>
            </td>
        </tr>
    
        <tr>
            <td class="border-0">
                <div class="form-group form-inline">
                    <label for="remark" class="control-label">备注：</label>
                    <input type="text" v-model="employee.remark" class="form-control" id="remark" placeholder="">&nbsp;&nbsp;
               </div>
            </td>
            <td class="border-0">
              <button type="submit" v-on:click="add" class="btn btn-primary btn-block">保存</button>
            </td>
            <td class="border-0">
                <h5>{{returnvalue}}</h5>
            </td>
        </tr>
 
    </table>

    </form>

    </div>
    </div>
    <foot1></foot1>
  </div>
  `
const empedit = {
    data() {
        return {
            edit: false,
            editid: '',
            shareurl: store.state.url,
            employee: '',
            depts: '',
            jobs:'',
            returnvalue: ''
        }
    },
    methods: {
        add() {
            if (this.employee.id == '' || this.employee.name == '' || this.employee.deptid == '' || this.employee.jobid == '') {
                alert("必填项不能为空!");
                return;
            };

            //sex字符串处理
            this.employee.sex = String(this.employee.sex);
            //var ejson = JSON.stringify(this.employee);

            if (this.edit) {
                axios.put(this.shareurl + 'employee/update', this.employee)
                    .then(response => {
                        this.returnvalue = response.data;
                    })
                    .catch(error => console.log(error));// 请求失败处理

            } else {
                axios.post(this.shareurl + 'employee/insert', this.employee)
                    .then(response => {
                        this.returnvalue = response.data;
                        if (this.returnvalue > 0) {
                            this.employee = { id: '', name: '', sex: this.employee.sex, dept_id: this.employee.dept_id, job_id: this.employee.job_id, card_id: '', post_code: '', tel: '', phone: '', qq_num: '', email: '', address: '', party: '', birthday: '', race: '', education: '', speciality: '', hobby: '', remark: '' };
                        }
                    })
                    .catch(error => console.log(error));// 请求失败处理
            }
        },

    },
    mounted() {  //这里mounted和created生命周期函数区别

        axios.get(this.shareurl + 'dept/select')
            .then(response => this.depts = response.data)
            .catch(error => console.log(error));// 请求失败处理

        axios.get(this.shareurl + 'job/select')
        .then(response => this.jobs = response.data)
        .catch(error => console.log(error));// 请求失败处理

        //判断是录入新员工，还是编辑已有员工
        if (this.$route.query.id == '' || this.$route.query.id == null) {
            this.edit = false;
            this.employee = { id: '', name: '', sex: '男', deptid: '', jobid: '', cardid: '', postcode: '', tel: '', phone: '', qqnum: '', email: '', address: '', party: '', birthday: '2000-09-09', race: '', education: '', speciality: '', hobby: '', remark: '' };
        } else {
            this.edit = true;
            this.editid = this.$route.query.id;

            axios.get(this.shareurl + 'employee/selectone/' + this.editid)
                .then(response => this.employee = response.data)
                .catch(error => console.log(error));// 请求失败处理

        }
    },
    template: empedit_template
}
