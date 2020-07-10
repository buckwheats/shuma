import Vue from 'vue'
import VueRouter from 'vue-router'
import abje from '../components/xiaozujian/abje.vue'
import abjee from '../components/xiaozujian/abjee.vue'
import abjeee from '../components/xiaozujian/abjeee.vue'
import abjeeee from '../components/xiaozujian/abjeeee.vue'
import sheying from'../components/xiaozujian/zizujian/sheying.vue'
import zhinengshuma from'../components/xiaozujian/zizujian/zhinengshuma.vue'
import yuleyingying from'../components/xiaozujian/zizujian/yuleyingying.vue'
import shoujipeijian from'../components/xiaozujian/zizujian/shoujipeijian.vue'
import xiangqing from '../components/xiangqing.vue'
import denglu from '../components/denglu.vue'
import zhuce from '../components/zhuce.vue'
Vue.use(VueRouter)

const routes =[{
			path:"",
	       redirect:"/abje"
		},
	{
		'path':'/abje',
		  component:abje,
	},
	{
		'path':'/abjee',
		  component:abjee,
	},
	{
		'path':'/abjeee',
		  component:abjeee,
		   
		  children:[
			  {
			  				  path:'/',
			  				 redirect: '/abjeee/zhinengshuma',
			  },
			  {
				  path:'/abjeee/zhinengshuma',
				  name:'zhinengshuma',
				  component:zhinengshuma
			  },
			  {
				path:'/abjeee/sheying',
				 name:'sheying',
			  	component:sheying
			  },
			  {
			  	path:'/abjeee/yuleyingying',
				 name:'yuleyingying',
			  	 component:yuleyingying
			  },
			  {
			  	path:'/abjeee/shoujipeijian',
				 name:'shoujipeijian',
			  	component:shoujipeijian
			  },
		  ]
	},
	{
		'path':'/abjeeee',
		component:abjeeee
	},
	{
		'path':'/xiangqing/:id',
		component:xiangqing
	},
	{
		'path':'/denglu',
		component:denglu
	},
	{
		'path':'/zhuce',
		component:zhuce 
	}

	
]

const router = new VueRouter({
	routes,
	
})

export default  router