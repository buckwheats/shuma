<template>
	<div class="shouji_top">
		
		<div v-for="(itmes,index) in $store.state.shoujilist" :key="index">
			<a href="javascipt:;" @click="add(index)">
			<img :src="itmes.IMGSRC" alt="">
			<h3>{{itmes.text}}</h3>
			<p>Price:￥{{itmes.monnine}}</p>
			</a>
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
				//console.log(index)
				this.$store.commit('setaicet',index)
				this.$router.push('/xiangqing/3')
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.shouji_top{
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
					height: 80%;
				}
				h3{
					margin: 3% 0;
				}
				p{
					color: rgb(36,124,207);
				}
			}
		div:hover{
			transition:  all 0.8s ease;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3)
			}
		}
</style>
