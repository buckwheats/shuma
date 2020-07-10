<template>
	<div class="head_top">
		<div class="head_top_center">
			<div>
				<img src="../assets/logo1.png" alt="">
			</div>
			<div>
				<ul>
					<router-link to="/abje" tag="li">首页</router-link>
					<router-link to="/abjee" tag="li">企业介绍</router-link>
					<router-link to="/abjeee" tag="li">商品列表</router-link>	
				</ul>
			</div>
			</div>
			<div class="guc">
				<router-link to='/denglu' tag="div" v-show="this.$store.state.ok === 0">登录</router-link>
				<router-link to='/zhuce' tag="div" v-show="this.$store.state.ok === 0">注册</router-link>
				<router-link to="/abjeeee" tag="div"  v-show="this.$store.state.ok === 1">购物车
				<span v-show="$store.state.actiion">{{$store.state.gouwuche.length}}</span>
				</router-link>
			</div>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				restaurants: [],
				        state3: ''
			}
		},
		methods:{
			   
		},
		 mounted() {
		    //  this.restaurants = this.loadAll();
		    }
		
	}
</script>

<style lang="less" scoped="scoped">
	.head_top{		
		width: 100%;
		height:4rem;
		background-color: rgba(242,242,242);
		display: flex;
		justify-content: space-around;
		.head_top_center{
			width: 50%;
			height: 100%;
			
			display: flex;
			justify-content: space-around;
			div:nth-child(1){
				width: 20%;
				height: 100%;
				background-color: beige;
				img{
					width:100%;
					height:100%;
				}
			}
			div:nth-child(2){
				width: 50%;
				height: 100%;
				
				ul{
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					li{
						width: 30%;
						height: 80%;
						cursor: pointer;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					li:hover{
						transition: all 0.5s ease;
						color: #ff69b4;
						 border: 2px dashed #ff1493;
						 }
				}
			}
		}
		.guc{
			width: 20%;
			height: 100%;
			
			display: flex;
			justify-content: center;
			align-items: center;
			div{
				width: 20%;
				height: 50%;
				cursor: pointer;
				display: flex;
				justify-content: center;
				align-items: center;
				span{
					display: inline-block;
					width: 1.25rem;
					height: 1.25rem;
					background-color: #E5E5E5;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					top:  -0.0625rem;
					margin-left: 2%;
					
				}
				
			}
			div:hover{
				transition: all 0.5s ease;
				color: #ff69b4;
				 border: 2px dashed #ff1493;
			}
			
		}
	}
		
	.router-link-active{
			color: #ff69b4;
		   border: 2px dashed #ff1493;
	}
</style>
