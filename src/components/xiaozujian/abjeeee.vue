<template>
	<div class="abjeee_kuang">
		<div class="abjeee_center">
			<div class="abjeeee_top" v-show="$store.state.actiion">
				<ul>
					<li></li>
					<li>商品名称</li>
					<li>商品单价</li>
					<li>数量</li>
					<li></li>
				</ul>
			</div>
			<div class="liebiao" v-for="(abjitme,index) in this.$store.state.gouwuche">
				<ul>
					<li><img :src="abjitme.img" alt=""></li>
					<li>{{abjitme.name}}</li>
					<li>￥{{abjitme.qian}}</li>
					<li>
						<span @click="jia(index)">-</span><input type="text" :value="abjitme.shuliang"><span @click="jian(index)">+</span>
					</li>
					<li @click="delet(index)">删除</li>
				</ul>
			</div>
			<div id="fukuan" @click="qingkong" v-show="$store.state.actiion"><div>付款</div><h1>￥{{$store.state.zongjia}}</h1></div>
			<div class="kong" v-show="!$store.state.actiion">您的购物车空空的哦！快去选购吧</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			
			}
		},
		methods:{
			jia(index){
				if(this.$store.state.gouwuche[index].shuliang == 1){
					alert('不能在减了')
				}else{
					this.$store.commit('jianjian',index)
				}
			},
			jian(index){
				this.$store.commit('jiajia',index)
			},
			delet(index){
				this.$store.commit('dele',index)
				
			},
			qingkong(){
				
				this.$store.commit('jinrushanchu')
				alert('付款成功！')
			}
		},
		created() {
			this.$store.commit('sss')
		}
	}
</script>

<style lang="less" scoped="scoped">
	.abjeee_kuang{
		width: 100%;
		
		background-color:#FFF;
		.abjeee_center{
			width: 60%;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			
			margin: 2% auto;
			.abjeeee_top{
				width: 100%;
				ul{
					width: 100%;
					height:3.125rem;
					display: flex;
					justify-content: space-between;
					li{
						width: 18%;
						height: 100%;
						border-right: 1px solid rgba(0, 0, 0, 0.1);
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			
			}
			.liebiao{
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				ul{
					width: 100%;
					height:3.125rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 2% 0;
					li{
						width: 18%;
						height: 5rem;
						border-right: 1px solid rgba(0, 0, 0, 0.1);
						
						display: flex;
						justify-content: center;
						align-items: center;
						img{
							width: 100%;
							height: 100%;
						}
						input{
							width: 20%;
							text-align: center;
						}
						span{
							
							width: 10%;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color: red;
							cursor: pointer;
						}
					}
				}
				}
		
	
	#fukuan{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 20%;
		
		margin: 2% 0 2% 80%;
		div{
			width: 40%;
			background-color: red;
			display: flex;
			justify-content: center;
			align-items: center;
			line-height: 3.125rem;
			cursor: pointer;
		}
		
	}
	.kong{
		width: 100%;
		height: 12.5rem;
		background-color: #E5E5E5;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	}
}
</style>