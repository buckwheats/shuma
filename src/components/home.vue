<template>
	<div class="home">
		<div class="home_top">
		<Head></Head>
		</div>
		<div class="lunbow">
			<Lunbos></Lunbos>
		</div>
		<transition mode="out-in" name="shet_ser">		
		<router-view></router-view>
		</transition>
		<Button></Button>	
	</div>
	
</template>	

<script>
	import Head from './head.vue'
	import Lunbos from './lunbo/lunbos.vue'
	import Button from './button.vue'
	
	export default {
		data(){
			return{
				
			}
		},	
		components:{
			Head,
			Lunbos,
			Button
		},
		methods:{
			
		
		},
		
	}
</script>

<style lang="less" scoped="scoped">
	.home{
		width: 100%;
		.home_top{
			  /* position: fixed;
			   width: 100%;
			  z-index: 999;*/
		}
	}
	.heae_lunbo{
		width: 100%;
	}
	.lunbow{
		width: 100%;
		background-color: #e5e5e5;
	}
	.shet_ser-enter,.shet_ser-leave-to{
		transform: scale(0.2);
		
	}
	.shet_ser-enter-active,.shet_ser-leave-active{
		transition:  all 0.5s ease;
		opacity: 0;
	}
	.shet_ser-enter-to,.shet_ser-leave{
		transform: scale(1);
		opacity: 1;
	}
	
</style>
