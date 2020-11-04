var job_template = `
<div>
    <head1></head1>
        <div class="row">
            <div class="col-md-1 bg-light text-center">
                <br>
                <side :item="4"></side>
            </div>
            <div class="col-md-11">
               
            <table class="table table-bordered table-striped text-center" style="margin-top:20px;">
            <thead>
                <tr>
                    <td>职位编号</td>
                    <td>职位名称</td>
                    <td>备注</td>
                    <td colspan="2">操作</td>
                </tr>
            </thead>
            <tr>
                <td><input v-bind:readOnly="isedit" type="text" v-model="rowtp.id" class="form-control" placeholder="">
                </td>
                <td><input type="text" v-model="rowtp.name" class="form-control" placeholder=""></td>
                <td><input type="text" v-model="rowtp.remark" class="form-control" placeholder=""></td>
                <td><button type="button" class="btn btn-primary" v-on:click="Save()">保存</button></td>
                <td><button type="button" class="btn btn-primary" v-on:click="Clear()">放弃</button></td>
            </tr>
            <tr v-for="(row,index) in depts">

                <td>{{ row.id}}</td>
                <td>{{ row.name}}</td>
                <td>{{ row.remark}}</td>
                <td><button type="button" class="btn btn-outline-primary" v-on:click="Edit(row)">编辑</button></td>
                <td><button type="button" class="btn btn-outline-primary" v-on:click="Delete(index)">删除</button></td>
            </tr>

        </table>

            </div>
        </div>
    <foot1></foot1>
</div>
        `
const job = {
    data() {
        return {
            depts: [],
            shareurl: store.state.url,
            rowtp: { id: '', name: '', remark: '' },
            isedit: false
        }
    },

    mounted: function () {
        //发送get请求
        axios.get(this.shareurl + 'job/select')
            .then(response => this.depts = response.data)
            .catch(error => console.log(error));// 请求失败处理

    },
    methods: {
        Save() {
            if (this.rowtp.id == '' || this.rowtp.name == '') {
                alert("部门编号、名称不能为空!");
                return;
            }
            var temp = this.rowtp;
            if (this.isedit == false) {
                //增加数据库

                axios.post(this.shareurl + 'job/insert', temp)
                    .then(response => {
                        this.depts.push(temp);
                    })
                    .catch(error => console.log(error));// 请求失败处理

            } else {
                //修改数据库

                axios.put(this.shareurl + 'job/update', temp)
                    .then(response => {
                        for (var i = 0; i < this.depts.length; i++) {
                            if (this.depts[i].id == temp.id) {
                                this.depts[i].name = temp.name;
                                this.depts[i].remark = temp.remark;
                                break;
                            }
                        };
                    })
                    .catch(error => console.log(error));// 请求失败处理

            }
            //还原模板
            this.Clear();
            this.isedit = false;
        },
        Delete(index) {
            //数据库操作

            axios.delete(this.shareurl + 'job/delete/' + this.depts[index].id)
                .then(response => {
                    this.depts.splice(index, 1);//从下标i开始删除1个元素：删除下标为i的元素
                    this.Clear();
                })
                .catch(error => console.log(error));// 请求失败处理

        },
        Edit(row) {
            this.rowtp.id = row.id;
            this.rowtp.name = row.name;
            this.rowtp.remark = row.remark;
            this.isedit = true;
        },
        Clear() {
            this.rowtp = { id: '', name: '', remark: '' };
            this.isedit = false;
        }

    },
    template: job_template
}
