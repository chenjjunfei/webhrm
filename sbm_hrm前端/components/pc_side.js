var side_template = `
<ul class="nav flex-column" style="margin-bottom:250px;margin-top:30px;">
  <li class="nav-item">
    <router-link to="/empsel" v-bind:class="['nav-link',item==1 ? 'text-danger' : 'text-dark']" >查询</router-link>
  </li>
  <li class="nav-item">
   <router-link to="/empedit" :class="['nav-link',item==2 ? 'text-danger' : 'text-dark']">添加</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/dept" :class="['nav-link',item==3 ? 'text-danger' : 'text-dark']">部门</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/job" :class="['nav-link',item==4 ? 'text-danger' : 'text-dark']">职位</router-link>
  </li>
</ul>
  `
Vue.component('side', {
  props: {
    item : String,
  },
  data: function () {
    return {
    }
  },
  template: side_template,
});
