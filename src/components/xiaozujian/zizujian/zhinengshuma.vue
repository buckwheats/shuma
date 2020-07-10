<template>
	<div class="zhinegsh_top">
		<div  v-for="(itmes,index) in $store.state.zhinengshumalist" :key="index" >
			<a href="javascript:;" @click="add(index)">
			<img :src="itmes.IMGSRC" alt="">
			</a>
			<h3>{{itmes.text}}</h3>
			<p>Price:￥{{itmes.monnine}}</p>
		</div>
		
	</div>
</template>

<script>
	
	export default{
		name:'zhinengshuma',
		data(){
			return{
				
			}
		},
			
		methods:{
			add(index){
				//window.open('#/xiangqing','_blank')
				this.$store.commit('setaicet',index)
				this.$router.push('/xiangqing/1')
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.zhinegsh_top{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		div{
			text-align: center;
			width: 23%;
			margin: 2% 1%;
			cursor: pointer;
			img{
				width: 100%;
				
			}
			h3{
				margin: 3% 0;
			}
			p{
				color: rgb(36,124,207);
			}
			button{
				background-color: pink;
			}
		}
		
	div:hover{
		transition:  all 0.8s ease;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3)
		}
		
	}
</style>