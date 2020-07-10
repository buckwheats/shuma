<template>
  <div id="app">
	  
		<HelloWorld></HelloWorld>
		
  </div>
</template>

<script>
import HelloWorld from './components/home.vue'
export default {
	data(){
		return{
			
		}
	},
  components: {
    HelloWorld,
	
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
#app {
  
}
</style>
