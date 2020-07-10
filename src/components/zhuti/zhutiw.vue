<template>
	<div class="zhutitop">
		<div>
			<div>闪电发货</div>
			<div>安全支付</div>
			<div>安全防护</div>
			<div>24小时客服</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'zhutiw',
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.zhutitop{
		width: 100%;
		background: 	#F5F5F5;
		height: 5rem;
		display: flex;
		justify-content: center;
		div{
			width: 60%;
			display: flex;
			height: 100%;
			justify-content: flex-start;
			align-items: center;
			div{
				width: 25%;
				height: 100%;
				display: flex;
				font-weight: bold;
				font-size: 1.5rem;
				justify-content: center;
				border-left: 1px solid #C0C0C0;
				border-right: 1px solid #C0C0C0;
				align-items: center;
			}
		}
	}
</style>
