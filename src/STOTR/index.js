import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
	  actiion:false,
    zhinengshumalist:[
    	{
    		IMGSRC:require('../assets/img1.webp'),
    		text:'无线消噪耳机',
    		monnine:'325.00'
    	},
    	{
    		IMGSRC:require('../assets/img2.webp'),
    		text:'头戴式无线蓝牙耳机',
    		monnine:'325.00'
    	},
    	{
    		IMGSRC:require('../assets/img3.webp'),
    		text:'影音娱乐平板电脑',
    		monnine:'3250.00'
    	},
    	{
    		IMGSRC:require('../assets/img4.webp'),
    		text:'全画幅单数码相机',
    		monnine:'325.00'
    	},
    	{
    		IMGSRC:require('../assets/xiangji.webp'),
    		text:'佳能单反套机',
    		monnine:'855.00'
    	},
    	{
    		IMGSRC:require('../assets/xiangji2.webp'),
    		text:'智能全景摄像机',
    		monnine:'425.00'
    	},
    	{
    		IMGSRC:require('../assets/xiangji3.webp'),
    		text:'星光夜视记录仪',
    		monnine:'325.00'
    	},
    	{
    		IMGSRC:require('../assets/xiangji4.webp'),
    		text:'专业高清摄像机',
    		monnine:'325.00'
    	}
    ],
	sheyinglist:[
		{
			IMGSRC:require('../assets/img1.webp'),
			text:'无线消噪耳机',
			monnine:'325.00'
		},
		{
			IMGSRC:require('../assets/img2.webp'),
			text:'头戴式无线蓝牙耳机',
			monnine:'325.00'
		},
		{
			IMGSRC:require('../assets/xiangji4.webp'),
			text:'专业高清摄像机',
			monnine:'325.00'
		}
		],		
	shoujilist:[
		{
			IMGSRC:require('../assets/img1.webp'),
			text:'无线消噪耳机',
			monnine:'Price: $325.00'
		},
	{
		IMGSRC:require('../assets/img4.webp'),
		text:'全画幅单数码相机',
		monnine:'325.00'
	},
	{
		IMGSRC:require('../assets/xiangji4.webp'),
		text:'专业高清摄像机',
		monnine:'325.00'
	},
	{
		IMGSRC:require('../assets/img2.webp'),
		text:'头戴式无线蓝牙耳机',
		monnine:'325.00'
	}
		],
	gouwuche:[],
	xiabiao:0,
	yulelist:[
		{
			IMGSRC:require('../assets/img3.webp'),
			text:'影音娱乐平板电脑',
			monnine:'3250.00'
		},
		{
			IMGSRC:require('../assets/xiangji.webp'),
			text:'佳能单反套机',
			monnine:'855.00'
		},
	{
		IMGSRC:require('../assets/xiangji2.webp'),
		text:'智能全景摄像机',
		monnine:'425.00'
	},
	{
		IMGSRC:require('../assets/xiangji3.webp'),
		text:'星光夜视记录仪',
		monnine:'325.00'
	}
		],
	zongjia:0,
	ok:0
		
  },
  mutations: {
		MUTATIONS(state,index){
			state.ok = index
		},
		setaicet(state,data){
			console.log(data)
			state.xiabiao = data
		},
		jianjian(state,data){
			state.gouwuche[data].shuliang--
			state.zongjia = 0
			for(var i = 0;i<state.gouwuche.length;i++){
			    state.zongjia += state.gouwuche[i].shuliang*state.gouwuche[i].qian
			}
		},
		jiajia(state,data){
			state.gouwuche[data].shuliang++
			state.zongjia = 0
			for(var i = 0;i<state.gouwuche.length;i++){
			    state.zongjia +=	state.gouwuche[i].shuliang*state.gouwuche[i].qian
			}
		},
		dele(state,index){
			state.gouwuche.splice(index,1)
			if(state.gouwuche.length === 0){
				state.actiion = false
			}
		},
		
		jinrushanchu(state){
			state.actiion = false
			state.gouwuche =[]
		},
		sss(state){
				state.zongjia = 0
			for(var i = 0;i<state.gouwuche.length;i++){
			    state.zongjia +=	state.gouwuche[i].shuliang*state.gouwuche[i].qian
			}
		}
	
  },
  getters:{
	  tianjia(state){
		  return function(data){
			  state.actiion = true
			return state.gouwuche.push(data) 
		  }	 
	  }
  },
  actions:{
	  
  },
  modules:{
	  
  }
})

export default store