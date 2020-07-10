<template>
	<div class="abjee_top">
	<div class="yuku">
		<div>
			<h1>企业介绍</h1>
			<p>
				掌中世界网,雅安掌中世界网是四川专业的手机在线销售网站,为您提供行货手机、品牌手机、摩托罗拉手机、三星手机、htc手机、诺基亚手机、苹果手机的专业销售和优质的售后服务，包括刷机服务、手机维修服务，正版软件安装等服务，依托掌中世界手机论坛的强大技术支持，真正为您提供手机技术支持、资源下载、价格咨询、手机咨询、手机评测、热门机型推荐、手机使用经验分享等全方位的服务!
			</p>
			<p>
			掌中世界网,雅安掌中世界网是四川专业的手机在线销售网站,为您提供行货手机、品牌手机、摩托罗拉手机、三星手机、htc手机、诺基亚手机、苹果手机的专业销售和优质的售后服务，包括刷机服务、手机维修服务，正版软件安装等服务，依托掌中世界手机论坛的强大技术支持，真正为您提供手机技术支持、资源下载、价格咨询、手机咨询、手机评测、热门机型推荐、手机使用经验分享等全方位的服务!	
				</p>
		</div>
		<div><img src="../../assets/buttonimg3.webp" alt=""></div>
	</div>
	<div class="yuku">
		<div><img src="../../assets/buttonimg2.webp" alt=""></div>
		<div>
			<h1>企业介绍</h1>
			<p>
				掌中世界网,雅安掌中世界网是四川专业的手机在线销售网站,为您提供行货手机、品牌手机、摩托罗拉手机、三星手机、htc手机、诺基亚手机、苹果手机的专业销售和优质的售后服务，包括刷机服务、手机维修服务，正版软件安装等服务，依托掌中世界手机论坛的强大技术支持，真正为您提供手机技术支持、资源下载、价格咨询、手机咨询、手机评测、热门机型推荐、手机使用经验分享等全方位的服务
			</p>
			<p>
				掌中世界网,雅安掌中世界网是四川专业的手机在线销售网站,为您提供行货手机、品牌手机、摩托罗拉手机、三星手机、htc手机、诺基亚手机、苹果手机的专业销售和优质的售后服务，包括刷机服务、手机维修服务，正版软件安装等服务，依托掌中世界手机论坛的强大技术支持，真正为您提供手机技术支持、资源下载、价格咨询、手机咨询、手机评测、热门机型推荐、手机使用经验分享等全方位的服务!

				</p>
		</div>
	</div>
	<Gycenter></Gycenter>
	<Gybutton></Gybutton>
</div>	
	 
	  
</template>

<script>
	import Gycenter from '../guanyu/gycenter.vue'
	import Gybutton from '../guanyu/gybutton.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			Gycenter,
			Gybutton
		}
	}
</script>

<style lang="less" scoped="scoped">
	.abjee_top{
		width: 100%;
		height: auto;
	}
	.yuku{
		width: 60%;
		display: flex;
		
		
		justify-content: space-between;
		margin:  4% auto 0;
		div{
			width: 48%;
			height: 100%;
			
			h1{
				margin: 1% 0 0 0;
			}
			p{
				margin: 4% 0;
				font-size: 0.875rem;
				line-height: 1.875rem;
			}
			img{
				width: 100%;
			}
		}
	}
</style>