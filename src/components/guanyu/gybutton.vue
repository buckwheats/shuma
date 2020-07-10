<template>
	<div class="gybutton_wai">
		<div class="gybutton__wai_center">
			<div>
				<img src="../../assets/xinxi.webp" alt="">
				<h1>邮箱</h1>
				<p>admin@uxhaven.com</p>
				<p>info@uxhaven.com</p>
			</div>
			<div>
				<img src="../../assets/ditu.webp" alt="">
				<h1>地址</h1>
				<p>苏州市金鸡湖大道886号</p>
			</div>
			<div>
				<img src="../../assets/dianhua.webp" alt="">
				<h1>电话</h1>
				<p>+86-18233556644</p>
				<p>+86-18023569874</p>
			</div>
		</div>
		<div class="gybutton__wai_button">
			<h1>留言信箱</h1>
			<div>
			<input type="text" placeholder="姓名" v-model="xm">
			<input type="text" placeholder="邮箱" v-model="yx">
			<input type="text" placeholder="服务" v-model="fw">
			<input type="text" placeholder="内容" v-model="nr">
			<input type="button" value="提交内容" @click="open2()">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'gybutton',
		data(){
			return{
				xm:"",
				yx:'',
				fw:'',
				nr:''
			}
		},
		  methods: {
		       open2() {
					
		             this.$message({
		               message: '您的信息已提交，多谢',
		               type: 'success',
					   
		             })
					  this.xm = this.yx = this.fw = this.nr = ''
		           },
		   
			
		 },
	}
</script>

<style lang="less" scoped="scoped"> 
.gybutton_wai{
	width: 100%;
	.gybutton__wai_center{
		width: 60%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		margin: 3% auto;
		div{
			width: 30%;
			height: 15.3125rem;
			text-align: center;
			border: 1px solid rgba(229,229,229, .8 );
			
			img{
				margin: 5% 0;
			}
			h1{
				margin: 4% 0;
			}
			p{
				margin: 3% 0;
				
			}
		}
		div:hover{
			transition:  all 0.3 ease 0;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
			}
	}
	.gybutton__wai_button{
		width: 60%;
		height: 31.25rem;
	
		margin: 0 auto;
		
		div{
			display: flex;
			flex-wrap: wrap;
			input{
				width: 45%;
				line-height: 3rem;
				border-radius: 1.875rem;
				margin: 2% 2% ;
				text-indent:2%;
				outline:none;
				border: 1px solid rgba(229,229,229, 1 );
			}
			input:nth-child(3){
				width: 100%;
			}
			input:nth-child(4){
				width: 100%;
			}
			input:nth-child(5){
				width: 15%;
				background-color: rgb(36,125,198);
				border: none;
				color: #FFF;
				cursor: pointer;
				font-size: 1rem;
			}
			input:nth-child(5):hover{
				
				background-color: #e5e5e5;
				
				
				
			}
		}
		
	}
}
</style>
