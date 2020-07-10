<template>
	<div class="zhutiwwwww">
		<h1>最新动态</h1>
		<span class="sspan">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标、按钮、图片等常用元素您还可以添加图标，按钮，图片等常用元素</span>
		<div class="zhutiwwwww_center">
			<div v-for="(zhutiwitme,index) in zhutiwwwwlist">
				<img :src="zhutiwitme.Img" alt="">
				<p>{{zhutiwitme.pwe}}</p>
				<span>{{zhutiwitme.oiy}}</span>
				<a href="javascript:;">Read More</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'zhutiwwwww',
		data(){
			return{
				zhutiwwwwlist:[
					{
						Img:require('../../assets/buttonimg1.webp'),
						pwe:'智能物流大潮，谁将领航？',
						oiy:'当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。支持打字传图、自由拖拽，不需要专业编写代码，无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。'
					},
					{
						Img:require('../../assets/buttonimg2.webp'),
						pwe:'电子商务促进快递行业发展',
						oiy:'当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。支持打字传图、自由拖拽，不需要专业编写代码，无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。'
					},
					{
						Img:require('../../assets/buttonimg3.webp'),
						pwe:'荣威RX-5改装案例',
						oiy:'当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。支持打字传图、自由拖拽，不需要专业编写代码，无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。'
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.zhutiwwwww{
		width: 100%;
		margin: 3% 0;
	
			h1{
				text-align: center;
			}
			.sspan{
					width: 35%;
					text-align: center;
				    display: block;
				    text-align: center;
				    line-height: 1.875rem;
				    margin: 1% auto 5%;
				}
				.zhutiwwwww_center{
					width: 60%;
					height: 100%;
					margin:0 auto;
					display: flex;
					justify-content: space-between;
					div{
						width: 30%;
						height: 100%;
						
		
						img{
							width: 100%;
						}
						p{
							display: inline-block;
							
							font-size: 1.5rem;
							font-weight: bold;
							line-height: 1.875rem;
							
							margin: 3% 0;
						}
						span{
							display: block;
							width: 100%;
							overflow:hidden;
							text-overflow:ellipsis;
							white-space:nowrap;
							margin: 3% 0;
						}
						a{
							
							color: rgb(111,169,217);
							
						}
					}
					div:hover p{
							transition: all 0.3s ease;
							width: 100%;
							border-bottom: 2px solid rgb(36,124,198);
					}
					div:hover img{
							transition: all 0.3s ease;
							transform: scale(1.02);
					}
				}
					
			
		}
	
</style>
