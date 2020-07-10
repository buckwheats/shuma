<template>
	<div class="zhutiwwwwtop">
		<div class="wais">
			<div class="waiss">
				<div class="wais_left">
				<h1>限时折扣</h1>
				<h3>HURRY UP AND GET 25% DISCOUNT</h3>
				<button>立即抢购</button>
				<span>{{nowTime}}</span>
				</div>
			</div>
			<div class="waiss">
				<img src="../../assets/shuangshouji.webp" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'zhutiWWWW',
		data() {
		        return {
		            nowTime: "",    // 当前时间
		            
		        };
		    },
		    methods: {
		        currentTime() {
		            setInterval(this.getDate, 1000);
		        },
		        getDate: function() {
		            var _this = this;
		            let hh = new Date().getHours();
		            let mf =
		                new Date().getMinutes() < 10
		                    ? "0" + new Date().getMinutes()
		                    : new Date().getMinutes();	 
					let ms = new Date().getSeconds();
					 if(ms < 10){
						 ms = "0"+ms;
					 }
		            _this.nowTime = hh + ":" + mf+":"+ms;
		    }
		},
		    mounted() {
		        this.currentTime();
		    },
		    // 销毁定时器
		    beforeDestroy: function() {
		        if (this.getDate) {
		            clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
		        }
		    },
	}
</script>

<style lang="less" scoped="scoped">
	.zhutiwwwwtop{
		width: 100%;
		height: 50rem;
		background-color: rgb(244,247,251);
		.wais{
			width: 70%;
			height: 100%;
			
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			.waiss{
				width: 48%;
				height: 100%;
				
				display: flex;
				justify-content: center;
				align-items: center;
				.wais_left{
					width: 100%;
					height: 40%;
					
					text-align: center;
					h1{
						text-align: center;
						margin: 1% 0;
					}
					button{
						width: 30%;
						margin: 0 auto;
						line-height: 1.5625rem;
						height: 3.125rem;
						border-radius: 2.25rem;
						border: 4px solid rgb(36,124,198);
						background-color: rgb(244,247,251);
						outline:none;
						margin: 5% 0;
					}
					button:hover{
						transition:  all 0.3s ease;
						border: 4px solid #FFF;
						background-color: #FFF;
						}
					span{
						display: block;
						z-index: 99999;
						color: #FFF;
						font-size:5.75rem;
						-moz-animation:shijian 5s ease infinite; /* Firefox */
						-webkit-animation:shijian 5s ease infinite; /* Safari and Chrome */
						-o-animation:shijian 5s ease infinite; /* Opera */
					}
				}
				img{
					width: 100%;
					height: 80%;
				}
			}
		}
	}
	@-webkit-keyframes shijian {
	0% {
	    	color: #ff0052;
	    	text-shadow: -3px 0 5px #ff0052, 0 0 2px #ff0052;
		}
		30%, 50% {
	    	color: #00b8ff;
	    	text-shadow: -3px 0 5px #00b8ff, 0 0 2px #00b8ff;
			}
		51%, 53%, 55% {
	    	color: #222;
	    	text-shadow: -3px 0 5px #222, 0 0 2px #222;	
				}
		52%, 54%, 56% {
	    	color: #00b8ff;
	    	text-shadow: -3px 0 5px #00b8ff, 0 0 2px #00b8ff;
		}
		57% {
	    color: #222;
	    text-shadow: -3px 0 5px #222, 0 0 2px #222;
		}
		65%, 67%, 69% {
	    color: #222;
	    text-shadow: -3px 0 5px #222, 0 0 2px #222;
		}
		66%, 68%, 70% {
	    color: #ff0052;
	    text-shadow: -3px 0 5px #ff0052, 0 0 2px #ff0052;
		}
		100% {
	    color: #ff0052;
	    text-shadow: -3px 0 5px #ff0052, 0 0 2px #ff0052;
		}
	}
	@-o-keyframes shijian {
		0% {
		    	color: #ff0052;
		    	text-shadow: -3px 0 5px #ff0052, 0 0 2px #ff0052;
			}
			30%, 50% {
		    	color: #00b8ff;
		    	text-shadow: -3px 0 5px #00b8ff, 0 0 2px #00b8ff;
				}
			51%, 53%, 55% {
		    	color: #222;
		    	text-shadow: -3px 0 5px #222, 0 0 2px #222;	
					}
			52%, 54%, 56% {
		    	color: #00b8ff;
		    	text-shadow: -3px 0 5px #00b8ff, 0 0 2px #00b8ff;
			}
			57% {
		    color: #222;
		    text-shadow: -3px 0 5px #222, 0 0 2px #222;
			}
			65%, 67%, 69% {
		    color: #222;
		    text-shadow: -3px 0 5px #222, 0 0 2px #222;
			}
			66%, 68%, 70% {
		    color: #ff0052;
		    text-shadow: -3px 0 5px #ff0052, 0 0 2px #ff0052;
			}
			100% {
		    color: #ff0052;
		    text-shadow: -3px 0 5px #ff0052, 0 0 2px #ff0052;
			}
	}
	@-moz-keyframes shijian {
		0% {
		    	color: #ff0052;
		    	text-shadow: -3px 0 5px #ff0052, 0 0 2px #ff0052;
			}
			30%, 50% {
		    	color: #00b8ff;
		    	text-shadow: -3px 0 5px #00b8ff, 0 0 2px #00b8ff;
				}
			51%, 53%, 55% {
		    	color: #222;
		    	text-shadow: -3px 0 5px #222, 0 0 2px #222;	
					}
			52%, 54%, 56% {
		    	color: #00b8ff;
		    	text-shadow: -3px 0 5px #00b8ff, 0 0 2px #00b8ff;
			}
			57% {
		    color: #222;
		    text-shadow: -3px 0 5px #222, 0 0 2px #222;
			}
			65%, 67%, 69% {
		    color: #222;
		    text-shadow: -3px 0 5px #222, 0 0 2px #222;
			}
			66%, 68%, 70% {
		    color: #ff0052;
		    text-shadow: -3px 0 5px #ff0052, 0 0 2px #ff0052;
			}
			100% {
		    color: #ff0052;
		    text-shadow: -3px 0 5px #ff0052, 0 0 2px #ff0052;
			}
	}
	@keyframes shijian {
		0% {
		    	color: #ff0052;
		    	text-shadow: -3px 0 5px #ff0052, 0 0 2px #ff0052;
			}
			30%, 50% {
		    	color: #00b8ff;
		    	text-shadow: -3px 0 5px #00b8ff, 0 0 2px #00b8ff;
				}
			51%, 53%, 55% {
		    	color: #222;
		    	text-shadow: -3px 0 5px #222, 0 0 2px #222;	
					}
			52%, 54%, 56% {
		    	color: #00b8ff;
		    	text-shadow: -3px 0 5px #00b8ff, 0 0 2px #00b8ff;
			}
			57% {
		    color: #222;
		    text-shadow: -3px 0 5px #222, 0 0 2px #222;
			}
			65%, 67%, 69% {
		    color: #222;
		    text-shadow: -3px 0 5px #222, 0 0 2px #222;
			}
			66%, 68%, 70% {
		    color: #ff0052;
		    text-shadow: -3px 0 5px #ff0052, 0 0 2px #ff0052;
			}
			100% {
		    color: #ff0052;
		    text-shadow: -3px 0 5px #ff0052, 0 0 2px #ff0052;
			}
			}
</style>
