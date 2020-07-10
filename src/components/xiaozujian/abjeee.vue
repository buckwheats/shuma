<template>
	<div class="abjeeewaitao">
		<div class="abjeee_center">
		<ul>
			<router-link :to="{name:wenzi.path}" tag="li" v-for='(wenzi,index) in zbjeelist' :key="index">{{wenzi.wenziw}}</router-link>
		</ul>
		<transition mode="out-in" name="fengxue">
		<router-view></router-view>
		</transition>
	  </div>
	</div>
	 
</template>

<script>
	export default{
		data(){
			return{
				zbjeelist:[
					{
						path:'zhinengshuma',
						wenziw:'智能数码'
					},
					{
						path:'sheying',
						wenziw:'摄影摄像'
					},
					{
						path:'yuleyingying',
						wenziw:'娱乐影音'
					},
					{
						path:'shoujipeijian',
						wenziw:'手机配件'
					}				
				],
				
			}
		},
		methods:{
			
		}
	
	}
</script>

<style lang="less" scoped="scoped">
	.abjeeewaitao{
		width: 100%;
		height: auto;
	.abjeee_center{
		width: 60%;
		margin: 3% auto;
		ul{
			width: 60%;
			height: 100%;
			display: flex;
			margin: 0 auto;
			justify-content: space-between;
			align-items: center;
			li{
				width: 22%;
				height: 3.125rem;
				list-style: none;
				color: #000;
				background-color: rgb(221,221,221);
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
			}
			li:hover{
				color: #FFF;
				background-color: rgb(36,124,198);
				}
		}
		.router-link-exact-active{
			color: #FFF;
			background-color: rgb(36,124,198);
		}
	}
	}
	.fengxue-enter,.fengxue-leave-to{
		transform: translateX(-360px);
		
	}
	.fengxue-enter-active,.fengxue-leave-active{
		transition:  all 0.8s ease;
		opacity: 0;
	}
	.fengxue-enter-to,.fengxue-leave{
		transform: translateX(0px);
		opacity: 1;
	}
</style>
