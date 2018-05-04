<template lang="html">
  <div class="container">
    <div class="log_div">
      <div class="left_box">
        <div class="left1">
          <img src="../assets/img_logo.png" alt="">
        </div>
        <div class="left2">
          <input type="text" name="" value="" v-model='username' placeholder="请输入用户名">
        </div>
        <div class="left3">
          <input type="password" name="" value="" v-model='password' @keyup='enter($event)' placeholder="请输入密码">
        </div>
        <button type="button" name="button" class='btn exportBtn' @click='login'>登录</button>
      </div>
      <div class="line">

      </div>
      <div class="right_box">
        <div id="qrCode">

        </div>
        <p>企业微信扫码登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username:'',
      password:'',
      error:''
    }
  },
  methods:{
    enter(e){
      if (e.keyCode==13) {
        this.login();
      }
    },
    login(){
      this.$store.state.step = 1;
    }
  }
}
</script>

<style lang="css" scoped>
  .btn{
    width: 320px;
    height: 40px;
    margin-right: 30px;
    border:1px solid #999;
    color: #999;
    font-size: 20px;
  }
  .exportBtn{
    background: #4fbfbd;
    border: 1px solid #4fbfbd;
    color: #fff;
  }
  .container{
    width: 100%;
    height: 100vh;
    background: url('../assets/img_bgi.png') no-repeat;
    display: flex;
    justify-content:center;
    align-items:center;
  }
  .log_div{
    width: 810px;
    height: 404px;
    background: #fff;
    box-shadow:0 0 10px 2px #4fbfbd;
  }
  .left_box,.right_box{
    padding: 60px;
  }
  .left_box{
    text-align: center;
    width: 320px;
    float: left;
    height: 284px;
  }
  .left_box input{
    border: none;
    background: #fff;
    font-size: 16px;
    color: #4a4a4a;
  }
  .right_box{
    width: 248px;
    height: 284px;
    float: right;
  }
  input:focus{
    outline: none;
  }
  .left1{
    margin-bottom: 60px;
  }
  .left2,.left3{
    padding-bottom: 10px;
    text-align: left;
    padding-left: 28px;
    border-bottom: 1px solid #cacaca;
  }
  .left2{
    background: url('../assets/ic_username.png') no-repeat;
  }
  .left3{
    margin-top: 30px;
    margin-bottom: 60px;
    background: url('../assets/ic_password.png') no-repeat;
  }
  input::-webkit-input-placeholder{
    color: #ccc;
    font-size: 16px;
  }
  .line{
    display: inline-block;
    width: 0;
    height: 284px;
    border: 1px solid #ccc;
    margin: 60px 0;
  }
  .right_box p{
    margin-top: 20px;
    color: #4a4a4a;
    font-size: 16px;
    text-align: center;
  }
  #qrCode{
    width: 250px;
    height: 250px;
    display: inline-block;
    background: url('../assets/2weima.png') no-repeat;
    background-size: 100%;
  }
</style>
