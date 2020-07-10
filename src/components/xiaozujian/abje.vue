<template>
	<div class="abje_top">
	<ZhutiW></ZhutiW>
	<ZhutiWw></ZhutiWw>
	<zhutiwww></zhutiwww>
	<zhutiwwww></zhutiwwww>
	<zhutiwwwww></zhutiwwwww>
	<zhutiwwwwww></zhutiwwwwww>
	</div>
</template>

<script>
	import ZhutiW from '../zhuti/zhutiw.vue'
	import ZhutiWw from '../zhuti/zhutiww.vue'
	import zhutiwww from '../zhuti/zhutiwww.vue'
	import zhutiwwww from '../zhuti/zhitiwwww.vue'
	import zhutiwwwww from '../zhuti/zhutiwwww.vue'
	import zhutiwwwwww from '../zhuti/zhutiwwwww.vue'
	export default{ 
		data(){
			return{
				
			}
		},
		components:{
			ZhutiW,
			ZhutiWw,
			zhutiwww,
			zhutiwwww,
			zhutiwwwww,
			zhutiwwwwww
		}
	}
</script>

<style lang="less" scoped="scoped">
	.abje_top{
		width: 100%;
	}
</style>
