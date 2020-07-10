<template>
	<div class="zhutiww">
		<div class="zhutia">
			<div class="zhutia_left">
				<div class="zhutia_left_a"><img src="../../assets/aHR0cHM6Ly81ZDRiYzY5YjRmYTFhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDgvMjBhNWY3ZTMxNjdkYzExZmE2ZGVhNWNmNGM5ZWM5NmYtOTAud2.webp" alt=""></div>
				<div class="zhutia_left_b">
					<div><img src="../../assets/aHR0cHM6Ly81ZDRiYzY5YjRmYTFhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDgvNmU2ZWM1OGRjN2M1YzFkOTdmMjZjN2MwYzMxYjk3YjYtOTAud2.webp" alt=""></div>
					<div><img src="../../assets/aHR0cHM6Ly81ZDRiYzY5YjRmYTFhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDgvNDY5NzA2ZmJjZjA2YzRmN2VlYzQyZmU5MTEwZjAyM2UtOTAud2.webp" alt=""></div>
				</div>
			</div>
			<div class="zhutia_right"><img src="../../assets/aHR0cHM6Ly81ZDRiYzY5YjRmYTFhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDgvZDllOWI4MTQ2NGZjNGQ1Zjg0ODI0ODVhNjc5ZGMyOTQtOTAud2.webp" alt=""></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'zhutiww',
		data(){
			return{
				
			}
		},
		components:{
			
		}
	}
</script>

<style lang='less' scoped>
	.zhutiww{
		width: 100%;
		padding: 5% 0;
		background-color: #FFF;
		.zhutia{
			width: 60%;
			margin:0 auto;
			
			display: flex;
			justify-content: space-between;
			.zhutia_left{
				width: 45%;
				height: 100%;
				
				.zhutia_left_a{
					width: 100%;
					height: 70%;
				}	
				.zhutia_left_b{
					width: 100%;
					margin: 10% 0 0 0;
					height: 20%;
					
					display: flex;
					justify-content: space-between;
					div{
						width: 45%;
						
					}
				}
			}
			.zhutia_right{
				width: 50%;
				height: 100%;
				
			}
		}
	}
	img{
		width:100%;
		height: 100%;
	}
</style>
