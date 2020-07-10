<template>
	<div class="button_waitao">
		<div class="button_center">
			<div class="button_center_top">
				<ul>
					<li v-for="(itmez,index) in 6"><img src="../assets/iuy.webp" alt=""></li>
				</ul>
			</div>
			<div class="button_center_button">
				<div>
					
				</div>
				<div>
					<span>服务支持</span>
					<p>关于我们</p>
					<p>最新服务</p>
					<p>定价计划</p>
					<p>特色服务</p>
				</div>
				<div>
					<span>快速链接</span>
					<p>关于我们</p>
					<p>最新服务</p>
					<p>定价计划</p>
					<p>特色服务</p>
				</div>
				<div>
					<span>联系我们</span>
					<p>邮箱：9875112@fox.com</p>
					<p>地址：苏州市金鸡湖大道886号</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Button',
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.button_waitao{
		width: 100%;
		background-color: rgb(0,0,0);
		.button_center{
			width: 60%;
			height: 100%;
			margin: 0 auto;
			.button_center_top{
				width: 100%;
				border-bottom: 1px solid rgb(51,51,51);
				padding: 4% 0;
				ul{
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					
					li{
						width: 15%;	
						display: flex;
						justify-content: center;
						
						img{
							width: 50%;
							height: 50%;
						}
					}
				}
			}
			.button_center_button{
				width: 100%;
				height: 70%;
				margin: 5% 0 0 0;
				display: flex;
				justify-content: space-between;
				div{
					width: 22%;
					height: 100%;
					color: #FFF;
					span{
						display: inline-block;
						font-size: 1.25rem;
						font-weight: bold;
						margin: 5% 0;
						border-bottom: 2px solid #FFF;
					}
					p{
						margin: 5% 0;
						color: rgb(112,112,112);
					}
				}
			}
		}
	}
</style>
