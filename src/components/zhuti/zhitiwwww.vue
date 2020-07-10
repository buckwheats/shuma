<template>
	<div class="zhutiwwwwtop">	
			<h1>尽享精彩</h1>	
			<span>您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标、按钮、图片等常用元素您还可以添加图标，按钮，图片等常用元素</span>
			<div>
				<img src="../../assets/henping.webp" alt="">
				<div class="heu">
					<div>
						<div>
						<img src="../../assets/qqq1.svg" alt="">
						</div>
						<h2>AI芯智能</h2>
					</div>
					<div>
						<div>
						<img src="../../assets/qqq2.svg" alt="">
						</div>
						<h2>智能HDR</h2>
					</div>
					<div>
						<div>
						<img src="../../assets/qqq3.svg" alt="">
						</div>
						<h2>超广角镜头</h2>
					</div>
					<div>
						<div>
						<img src="../../assets/qqq4.svg" alt="">
						</div>
						<h2>超低耗电能</h2>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
	export default{
		name:'zhutiwwww',
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.zhutiwwwwtop{
		width: 100%;
		height: 25rem;
		margin: 3% 0;
		
		h1{
			text-align: center;
		}
		span{
			width: 35%;
			display: block;
			text-align: center;
			line-height: 1.875rem;
			margin:  1% auto 5%;
		}
		div{
			width: 66%;
			height: 100%;
			margin:  -1.5% auto 0;
			
			img{
				width: 100%;
			}
			.heu{
				width: 100%;
				
				display: flex;
				justify-content: space-around;
				div{
					width: 20%;
					height: 100%;
					
					div{
						width: 50%;
						height: 40%;
						img{
						width: 100%;
						height: 100%;
						}
					}
					h2{
						text-align: center;
						margin: 5% 0;
						color: rgb(36,124,198)
					}
				}
				
			}
		}
	}
</style>
