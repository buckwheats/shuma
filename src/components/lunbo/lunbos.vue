<template>
	<div class="lunbo_top">
	  <el-carousel :interval="2000" type="card" height="400px">
	    <el-carousel-item v-for="(item,index) in lunbolist" :key="index">
	      <img :src="item" alt="">
	    </el-carousel-item>
	  </el-carousel>
	</div>
</template>

<script>
	export default{
		name:'lunbo',
		data(){
			return{
				lunbolist:[
					require('../../assets/20182.jpg'),
					require('../../assets/20183.jpg'),
					require('../../assets/20184.jpg'),
					require('../../assets/20186.jpg'),
					require('../../assets/20187.jpg')
				]
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.lunbo_top{
		width: 100%;
		margin: 0 auto;
		padding: 1% 0;
	}
	 .el-carousel__item img {
	   width: 100%;
	   height: 100%;
	  }
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
</style>
