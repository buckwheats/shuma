<template>
	<div class="gycenter">
		<div v-for="(gyitme,index) in gylist" :key="index">
			<img :src="gyitme.IMG" alt="">
			<h1>{{gyitme.shuzi}}</h1>
			<p>{{gyitme.ser}}</p>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'gycenter',
		data(){
			return{
				gylist:[
					{
						IMG:require('../../assets/tiaoxin.webp'),
						shuzi:'89652',
						ser:'实名用户'
						
					},
					{
						IMG:require('../../assets/jiangbei.webp'),
						shuzi:'125',
						ser:'科技奖项'
						
					},
					{
						IMG:require('../../assets/dianzan.webp'),
						shuzi:'5623',
						ser:'用户好评'
						
					},
					{
						IMG:require('../../assets/xingxing.webp'),
						shuzi:'865',
						ser:'星标产品'
						
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.gycenter{
		width: 100%;
		margin: 3% 0;
		background-color: rgb(244,244,244);
		display: flex;
		justify-content: center;
		div{
			width: 10%;
		
			margin: 0 4%;
			padding: 1% 0;
			img{
				width: 20%;
				margin-left: 40%;
			}
			h1,p {
				text-align: center;
				margin: 4% 0;
			}
		}
	}
</style>
