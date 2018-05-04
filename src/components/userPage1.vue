<template lang="html">
  <div class="userPage1">
    <button :class="$store.state.user==='admin'?'btn':'only-btn'" @click="changePage('write')">录入工时</button>
    <button v-if='$store.state.user==="admin"' class='btn exportBtn' @click="changePage('exports')">导出信息</button>
    <hr :class="{'admin':$store.state.user==='admin'}"class='head-hr'>
    <div class="create" v-if='unsubmit && !active'>
      <div class="outer">
        <div class="table-box">
          <table>
            <thead>
              <tr>
                <td>工作项目名称</td>
                <td>工作类型</td>
                <td>工作时长</td>
                <td>工作说明</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for='(item,key) in items'>
                <td>
                  <span class='must'>*</span><input :list="'list'+key" type="text" class='in_name input' :value='item.name' @input="item.name = $event.target.value">
                  <datalist :id="'list'+key">
                    <option value="深圳">深圳</option>
                    <option value="昆明">昆明</option>
                    <option value="大理">大理</option>
                    <option value="洱海">洱海</option>
                  </datalist>
                </td>
                <td>
                  <span class='must'>*</span><select class="in_type input" name="" @change="item.typeActive = $event.target.value">
                    <option value="" v-show='false'>选择类型</option>
                    <option value="" v-for='type in item.type' :data-key="item.typeActive"  :value='type' v-if='type == item.typeActive' selected>{{type}}</option>
                    <option v-if='type != item.typeActive' v-for='type in item.type' :value='type'>{{type}}</option>
                  </select>
                </td>
                <td>
                  <span class='must'>*</span><input type="number" min=0 class="in_time input" :value="item.time" step="0.5" @blur='cal(key)' @input="item.time = $event.target.value">
                </td>
                <td>
                  <input type="text" class="in_discribe input" :value="item.discribe" @input="item.discribe = $event.target.value" maxlength="200">
                </td>
                <td>
                  <button :disabled='items.length == 1' @click='remove(key)'  :class="[{'disabled':items.length == 1},'edit']">删除</button>
                  <span v-if='key == items.length-1' @click="add" class='edit'>新增项目</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-footer">
          <p>当前录入工时：<span :class="{'must':sumHour<5.6}">{{sumHour}}</span></p>
          <hr>
          <button class='btn exportBtn' @click='submiting'>提交</button>
          <button class="btn">保存</button>
        </div>
      </div>
    </div>

    <div class="callBack" v-show='!unsubmit'>
        <img src="../assets/ic_illustration.png" alt="">
        <p>提交成功</p>
        <button type="button" name="button" class="btn exportBtn" @click='rewrite'>录入其他日期</button>
    </div>
    <div class="manager"  v-show='active'>
      <div class="manager_box">
        <datePicker></datePicker>
        <div class="box-footer">
          <hr>
          <button class='btn downBtn'>导出考勤信息</button>
          <button class="btn downBtn">导出工时信息</button>
        </div>
      </div>
    </div>
    <div class="copyright">
      <hr class='footer-hr'>
      <span>Copyright © 2017</span>
      &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
      <span>All Rights Reserved.</span>
      &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
      <span>深圳前海大数金融服务有限公司 版权所有</span>
      &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
      <span>粤ICP备：14098199号</span>
    </div>
  </div>
</template>

<script>
import datePicker from './datePicker';
export default {
  data(){
    return{
      items:[
        {
          name:'',
          type:[1,2],
          typeActive:0,
          time:0,
          discribe:'',
        }
      ],
      unsubmit:true,
      active:false
    }
  },
  components:{
    datePicker
  },
  computed:{
    sumHour(){
      let hours = 0;
      for(let i = 0;i<this.items.length;i++){
        hours+=Number(this.items[i].time);
      }
      return hours;
    }
  },
  methods:{
    cal(index){
      this.items[index].time = Number(this.items[index].time);
      if(this.items[index].time<0){
        this.items[index].time = 0;
      }
      if(this.items[index].time - parseInt(this.items[index].time) > 0.5){
        this.items[index].time = Math.ceil(this.items[index].time);
      }else if (this.items[index].time - parseInt(this.items[index].time) == 0.5) {
        this.items[index].time = this.items[index].time;
      }else{
        this.items[index].time = Math.floor(this.items[index].time);
      }
    },
    add(){
      this.items.push({
        name:'',
        type:[1,2],
        typeActive:0,
        time:0,
        discribe:'',
      });
    },
    remove(index){
      this.items[index];
      this.items.splice(index,1);
    },
    submiting(){
      this.unsubmit = false;
    },
    rewrite(){
      this.unsubmit = true;
      this.items = [
        {
          name:'',
          type:[1,2],
          typeActive:0,
          time:0,
          discribe:'',
        }
      ]
    },
    changePage(e){
      if(e==='write'){
        this.active = false;
      }else{
        this.active = true;
      }
    }
  },
  created(){
    if(this.$store.state.user === 'admin'){
      this.active = true;
    }
  }
}
</script>

<style lang="css" scoped>
  .callBack,.manager,.create{
    width: 1200px;
    background: #fff;
    height: 624px;
    box-shadow:0 0 10px -4px #4fbfbd;
  }
  .callBack img{
    padding-top: 160px;
    padding-bottom: 20px;
  }
  .callBack p{
    margin: 0;
    color: #4fbfbd;
    font-size: 24px;
    padding-bottom: 105px;
  }
  .callBack button{
    margin: 0;
  }
  .downBtn{
    border-color:#4fbfbd !important;
    color: #4fbfbd !important;
  }
  table{
    border-collapse: collapse;
  }
  .table-box{
    height: 400px;
    overflow: auto;
  }
  thead{
    border-bottom: 1px solid #d6d6d6;
  }
  thead td{
    font-size: 18px;
    color: #333;
    font-weight: bold;
    padding-bottom: 20px;
  }
  tbody td{
    padding-top: 20px;
  }
  .userPage1{
    width: 1200px;
    margin: 0 auto;
    height: 100%;
  }
  .outer,.manager_box{
    width: 1080px;
    padding: 60px;
    height: 504px;
    background: #fff;
  }
  .btn{
    background: #fff;
    width: 200px;
    height: 40px;
    margin-right: 30px;
    border:1px solid #999;
    color: #999;
    font-size: 18px;
  }
  .exportBtn{
    background: #4fbfbd;
    border: 1px solid #4fbfbd;
    color: #fff;
  }
  .input{
    height: 28px;
    padding: 0;
    border:1px solid #999;
    margin-right: 30px;
  }
  .input:focus{
    outline: none;
  }
  .must{
    color:red;
    margin-right: 5px;
  }
  .edit{
    color: #41b1c2;
    font-size: 14px;
    border: none;
    padding: 0;
    background: #fff;
  }
  span.edit{
    margin-left: 12px;
    cursor: pointer;
  }
  .disabled{
    cursor: not-allowed;
    color: #999 !important;
  }
  .in_name{
    width: 212px;
  }
  .in_type{
    width: 152px;
  }
  .in_time{
    width: 102px;
  }
  .in_discribe{
    width: 330px;
  }
  .only-btn{
    color: #333;
    font-size: 22px;
    border: none;
    background: transparent;
    width: 88px;
    border-bottom: 4px solid #333;
    padding: 0;
  }
  .head-hr{
    margin: 0;
    color: #ccc;
    margin-bottom: 110px;
  }
  .footer-hr{
    margin-top: 60px;
    margin-bottom: 30px;
    color: #d6d6d6;
  }
  .box-footer p{
    margin: 10px 0;
    font-size: 14px;
  }
  .copyright{
    text-align: center;
    color: #999;
    font-size: 14px;
    margin-bottom: 60px;
  }
  .box-footer{
    position: absolute;
    width: 1080px;
  }
  .admin{
    margin-top: 20px;
    margin-bottom: 60px;
  }
</style>
