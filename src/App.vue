<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: 'app',
  components: {

  },
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    // storage的使用
    // storage.setItem('a',1)
    // storage.setItem('user',{a:1});
    // storage.setItem('abc',{a:1},'user');
    // storage.clear('a');
    // storage.clear('a','user');

    // mock的使用
    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res =res
    // easy-mock平台实现数据mock
      this.axios.get('/user/login').then((res)=>{
      this.res =res;
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
