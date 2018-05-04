<template>
  <div class="">
    <div class="container">
      <el-date-picker
        size='small'
        v-model="value"
        type="daterange"
        align="right"
        unlink-panels
        value-format="yyyy-MM-dd"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions2"
        @change='change'>
      </el-date-picker>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }],
          firstDayOfWeek:1,
          disabledDate:(time)=>{
              return time.getTime() > Date.now() - 8.64e6
          }
        },
        value: ''
      };
    },
    methods:{
      change(){
        console.log(this.value);
        this.$store.state.time = this.value;
      }
    }
  };
</script>
<style scoped>
  .container{
    height: 446px;
  }
</style>
