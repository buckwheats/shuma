<template>
	<div class="xiangqing">
		<div class="xiangqingcenter">
			<div v-if="$route.params.id==1">
				<img :src="$store.state.zhinengshumalist[$store.state.xiabiao].IMGSRC" alt="">
			</div>
			<div v-else-if="$route.params.id==2">
				<img :src="$store.state.yulelist[$store.state.xiabiao].IMGSRC" alt="">
			</div>
			<div v-else-if="$route.params.id==3">
				<img :src="$store.state.shoujilist[$store.state.xiabiao].IMGSRC" alt="">
			</div>
			<div v-else>
				<img :src="$store.state.sheyinglist[$store.state.xiabiao].IMGSRC" alt="">
			</div>
			<div>
				<div v-if="$route.params.id==1">
				<h2>{{$store.state.zhinengshumalist[$store.state.xiabiao].text}}</h2>
				<p>Price:{{$store.state.zhinengshumalist[$store.state.xiabiao].monnine}}</p>
				</div>
				<div v-else-if="$route.params.id==2">
				<h2>{{$store.state.yulelist[$store.state.xiabiao].text}}</h2>
				<p>Price:{{$store.state.yulelist[$store.state.xiabiao].monnine}}</p>
				</div>
				<div v-else-if="$route.params.id==3">
				<h2>{{$store.state.shoujilist[$store.state.xiabiao].text}}</h2>
				<p>Price:{{$store.state.shoujilist[$store.state.xiabiao].monnine}}</p>
				</div>
				<div v-else>
				<h2>{{$store.state.sheyinglist[$store.state.xiabiao].text}}</h2>
				<p>Price:{{$store.state.sheyinglist[$store.state.xiabiao].monnine}}</p>
				</div>
				
				<div>
				掌中世界网,雅安掌中世界网是四川专业的手机在线销售网站,为您提供行货手机、品牌手机、摩托罗拉手机、三星手机、htc手机、诺基亚手机、苹果手机的专业销售和优质的售后服务，包括刷机服务、手机维修服务，正版软件安装等服务，依托掌中世界手机论坛的强大技术支持，真正为您提供手机技术支持、资源下载、价格咨询、手机咨询、手机评测、热门机型推荐、手机使用经验分享等全方位的服务!
				</div>
				<p id="cu">产品参数：</p>
				<p>品牌: Beats</p>
				<p>材质: 塑料耳机</p>
				<p>售后服务: 全国联保</p>
				<p>颜色分类: 黑色 红色</p>
				<p>插头直径: 3.5mm</p>
				<p>生产企业: 美国苹果公司</p>
				<p>耳机类别: 无线耳机</p>
				<p>有无麦克风: 带麦</p>
				<p>插头类型: 蓝牙</p>
				<button v-if="actin" @click='sc({img:$store.state.zhinengshumalist[$store.state.xiabiao].IMGSRC,name:$store.state.zhinengshumalist[$store.state.xiabiao].text,qian:$store.state.zhinengshumalist[$store.state.xiabiao].monnine,shuliang:1})'>加入购物车</button>
				<button v-else style="background-color: #000;">已加入购物车</button>
				</div>
		</div>
		<div class="xiangqing_center">
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="详细介绍" name="first">
				<div class="xiangqing_center_left">
				<p>双彩屏运动相机，正反俱佳
前置彩屏让自拍构图更精准，从此告别盲拍，自拍更有型，时
刻展现好状态。640x360分辨率背屏显示清晰细腻，触控灵
敏高速，只需轻点、滑动屏幕即可轻松操控相机。
4K HDR视频，尽显充沛细节
HDR视频可提升3档动态范围，还原亮部及暗部细节，并让明
暗过渡更加自然，无论身处强光还是逆光环境，你都能通过
HDR视频功能记录色彩饱满、层次分明的4K画面。</p>
				<img src="../assets/aHR0cHM6Ly81ZDRiYzY5YjRmYTFhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDgvNDY5NzA2ZmJjZjA2YzRmN2VlYzQyZmU5MTEwZjAyM2UtOTAud2.webp" alt="">
				<p>4K/60fps，精彩逼真
4K/60fps视频清晰流畅还原每一个 运动瞬间，100Mbps 高码
流助力记录更多丰富细节，配合高解析镜头和出色的声音录制
性能，轻松记录声音清晰、画面细腻的流畅影像。
高效，畅快的操控体验
Action OS交互系统结合三实体按键带来高效的操作体验，你可
灵活使用一键息屏、一键拍录、自定义拍摄模式、模式间快速
切换等功能，操控如智能手机般顺畅灵活，可以更快进入拍摄
状态。
模式快速切换
自定义模式快速切换列表，还可支持预设最多5种自定义模式，
模式转换灵活顺畅。长按可实现前、后彩屏的切换，-键多用，
随心所欲。</p>
				</div>
			</el-tab-pane>
		    <el-tab-pane label="售后保障" name="second">
				<div class="xiangqing_center_right">
					<h2>服务承诺</h2>
					<p>1.免费质保1-5年(不同产品、质保期不同)<br />
2.产品实行三包，质保期内出现质量问题无条件免费上门维护处理，更换产品。<br />
3.用户在正常使用时出现性能故障，我公司响应时间1小时，24小时内上门维修。<br />
4.项目完毕后，客户归入售后管理档案，每年不定期对产品进行跟踪服务。<br />
5.超过质保期的产品进行保养和维修应由客户承担维修、易损易耗零件及往返运输费用的成本费。</p>
					<h2>配件质保细则及注意事项：</h2>
					<p>1、所有配件类产品未拆封均可享受7天包退；以下产品激活使用后，不支持退换货服务：平衡车、滑板车、儿童手表、智能手表、电视盒子以及个人护理；<br />
2、产品故障情况与否及故障原因归属问题存在争议的以厂家授权售后检测界定为准；<br />
3、产品故障由厂家承保，掌中世界免费为您代送至厂家售后处理，流程为：故障产品送掌中世界门店→掌中世界送至就近授权服务站点→站点检测维修（或返厂维修）→返回掌中世界门店→通知您取货；<br />
4、半价换新：<br />
钢化膜：购买钢化膜后，同一会员再次购买同机型钢化膜享受新钢化膜半价换新服务；例：首次购买iPhone X钢化膜，再次购买iPhone X钢化膜售价为129元，实际只需支付64.5元；<br />
保护壳：购买保护壳后，换新的保护壳需大于或等于订单保护壳的交易价，同一会员再次购买其他款保护壳，新保护壳换新立减原订单交易价格</p>
				</div>
			</el-tab-pane>
		  </el-tabs>
		 </div>
	</div>	
</template>

<script>
	import Heade from './head.vue'
	export default{
		name:'xiangqing',
		data(){
			return{
				 activeName: 'second',
				actin:true
				 }
		},
		methods:{
			handleClick(){
				
			},
			sc(index){
				alert('已加入购物车')
				this.actin = !this.actin
				this.$store.getters.tianjia(index)
				//console.log(this.$store.state.gouwuche)
			}
		},
		components:{
			Heade
		},
	}
</script>

<style lang="less" scoped="scoped">
	.xiangqing{
		width: 100%;
		margin: 5% 0;
		background-color: #FFF;
		.xiangqingcenter{
			width: 60%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			div{
				width: 48%;
				height: 100%;
				
				img{
					width: 100%;
				}
				div{
					width: 100%;
					margin: 2% 0;
				}
				p{
					margin: 2% 0;
					font-size: 0.875rem;
				}
				button{
					float: right;
					width: 20%;
					background-color: rgb(255,0,54);
					line-height: 1.875rem;
					outline: none;
					border: 0;
					cursor: pointer;
					color: #FFF;
				}
				#cu{
					font-weight: bold;
				}
			}
		}
		.xiangqing_center{
			width: 60%;
			margin: 5% auto;
			background-color: rgb(246,246,246);
			.xiangqing_center_left{
				width: 96%;
				margin: 0 auto;
				img{
					width: 100%;
				}
				p{
					line-height: 3.125rem;
					font-size: 1.125rem;
				}
			}
			.xiangqing_center_right{
				width: 96%;
				margin: 0 auto;
				padding: 3% 2%;
				h1{
					margin-bottom: 2%;
					
				}
				p{
					margin-bottom: 5%;
					line-height: 3.125rem;
					font-size: 1.25rem;
					padding: 0 2%;
					
				}
			}
		}
	}
</style>
