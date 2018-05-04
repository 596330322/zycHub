<template>
  <div id="app">
    <nav v-if='$store.state.step>0'>
      <div class="nav_container">
        <img src="./assets/img_logo.png" alt="" class='logo'>
        <div class="user_info" @mouseenter='show' @mouseleave='hide'>
          <div class="userin">
            <p>
              <b class='user_img'></b>
              <span class="user_name">王晓晓<b class='arrow_down'></b></span>
            </p>

          </div>
          <div class="logout" v-show='movein'>
            <button type="button" name="button" @click='logout'>退出登录</button>
          </div>
        </div>
      </div>
    </nav>
    <div class="" v-if='$store.state.step==0'>
      <login></login>
    </div>
    <div class="box" v-if='$store.state.step==1'>
      <user1></user1>
    </div>
  </div>
</template>

<script>
import login from './components/login'
import user1  from './components/userPage1'
export default {
  name: 'App',
  data(){
    return{
      movein:false
    }
  },
  methods:{
    show(){
      this.movein = true;
    },
    hide(){
      this.movein = false;
    },
    logout(){
      this.$store.state.step = 0;
      this.movein = false;
    }
  },
  components: {
    login,
    user1
  }
}
</script>

<style>
  p{
    margin: 0;
  }
  nav{
    height: 86px;
    background: #fff;
    font-size: 14px;
    box-shadow:0 0 10px -2px #4fbfbd;
    text-align: center;
  }
  html,body{
    margin: 0;
    height: 100%;
    background: #f5f5f5;
  }
  button{
    cursor: pointer;
  }
  .nav_container{
    width: 1200px;
    display: inline-block;
    height: 100%;
  }
  .box{
    padding-top: 60px;
  }
  .nav_container .logo{
    float: left;
  }
  .logo{
    margin-top: 30px;
  }
  .user_img{
    display: inline-block;
    vertical-align: middle;
    height: 30px;
    background: url('./assets/logo.png');
    background-size: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .arrow_down{
    display: inline-block;
    width: 14px;
    height: 8px;
    margin-left: 10px;
    background: url('./assets/ic_arrow_down.png') no-repeat;
  }
  .user_info:hover .arrow_down{
    background: url('./assets/ic_arrow_up.png') no-repeat;
  }
  .user_info{
    float: right;
    display: inline-block;
    height: 86px;
  }
  .user_info:hover{
    background: #4fbfbd;
    color: #fff;
  }
  button:focus{
    outline: none;
  }
  button:hover{
    opacity: .9
  }
  .userin{
    line-height: 86px;
    height: 86px;
    width: 162px;
  }
  .logout{
    box-shadow: 0 0 1px 0px #4fbfbd;
    background: #fff;
    color:#333;
    line-height: 40px;
    text-align: left;
    padding: 10px 20px;
    width: 122px;
    height: 40px;
  }
  .logout button{
    background: #fff;
    border: none;
  }
  .el-picker-panel{
    left:calc((100vw - 1200px)/2 + 52px) !important;
    /* top:3px !important; */
  }
  .el-picker-panel__body{
    height: 334px !important;
  }
  .el-picker-panel__shortcut{
    color:#999;
  }
  .el-range-editor--small.el-input__inner{
    width: 272px;
  }
</style>
