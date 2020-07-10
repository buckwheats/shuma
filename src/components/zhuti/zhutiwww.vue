<template>
	<div class="zhutiwwwtop">	
			<h1>热卖产品</h1>	
			<span>您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标、按钮、图片等常用元素您还可以添加图标，按钮，图片等常用元素</span>
		<div>
			<div class="xunhuan" v-for="(itme,index) in zhutiwwwlist" :key="index">
				<div>
					<img :src="itme.IMG">
				</div>
				<div>
				<h4>{{itme.adw}}</h4>
				<p>{{itme.xiaozi}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'zhutiwww',
		data(){
			return{
				zhutiwwwlist:[
					{
						IMG:require('../../assets/img1.webp'),
						adw:'无线消噪耳机',
						xiaozi:'Price: $325.00'
					},
					{
						IMG:require('../../assets/img2.webp'),
						adw:'头戴式无线蓝牙耳机',
						xiaozi:'Price: $325.00'
					},
					{
						IMG:require('../../assets/img3.webp'),
						adw:'影音娱乐平板电脑',
						xiaozi:'Price: $455.00'
					},
					{
						IMG:require('../../assets/img4.webp'),
						adw:'全画幅微单数码相机',
						xiaozi:'Price: $455.00'
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.zhutiwwwtop{
		width: 100%;
		h1{
			text-align: center;
		}
		span{
			width: 35%;
			display: block;
			
			text-align: center;
			line-height: 1.875rem;
			margin:  1% auto;
		}
		div{
			width: 66%;
			margin:  0 auto;
			overflow: hidden;
			.xunhuan{
				width: 20%;
				height: 100%;
				margin: 0 1%;
				padding: 1%;
				background-color: #f6f6f6;
				float:left;
				
				div{
					width: 100%;
					height: 80%;
					img{
						width: 100%;
						height: 100%;
					}
				}
				div:nth-child(2){
					width: 100%;
					height: 20%;
					
					margin: 10% 0 0 0;
					p{
						margin: 3% 0;
					}
				}
			}
			.xunhuan:hover{
				transition: all 0.3s ease;
				box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
				-ms-transform:scale(1.1,1.1); /* IE 9 */
				-webkit-transform: scale(1.1,1.1); /* Safari */
				transform: scale(1.1,1.1); /* 标准语法 */
				}
			.xunhuan:hover P{
				color: #7B68EE;
				}
		}
	}
</style>
