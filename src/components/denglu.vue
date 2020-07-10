<template>
    <div class="dengluwaitao">
        <div>
            <div><img :src="img" alt=""></div>
        </div>
        <div>
            <input type="text" placeholder="请输入账号" v-model="zhh">
            <input type="password" placeholder="请输入密码" @click="add(1)" @mouseout="zy" v-model="mima">
        </div>
        <div><button @click="sc(1)">登录</button></div>
    </div>
</template>

<script>
export default {
     name:'denglu',
    data(){
       
      return{
        img:require('../assets/timg.jpg'),
        zhh:'',
        mima:''
     }
    },
    methods: {
        add(){
            this.img  = require('../assets/biyan.jpg')
        },
        zy(){
            this.img = require('../assets/timg.jpg')
        },
        sc(index){
            if( this.zhh === '' || this.mima === ""){
                alert('密码或账号不能为空！')
            }else{
            this.$store.commit('MUTATIONS', index)
             console.log(this.$store.state.ok)
            this.$router.push('/abje')
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .dengluwaitao{
        width: 40%;
        
        border: 1px solid #E5E5E5;
        margin: 2% auto;
        padding: 2% 0;
        div{
            width: 100%;
        
            div{
                width: 15%;
                height: 100px;
                background-color: red;
                margin: 0% auto;
                border-radius: 50%;
                overflow: hidden;
                
                img{
                    width: 100%;
                }
            }
            input{
                width: 20%;
                margin: 2% auto;
                display: block;
                height: 50px;
                border-radius: 30px;
                border:none;
                outline: none;
                text-align: center;
                border: 1px solid #E5E5;
            }
            input:hover{
                transition: all 0.8s ease;
                width: 40%;
            }
            button{
                display: inline-block;
                width: 40%;
                height: 30px;
                margin-left:30%;
                border: none;
                outline: none;
                cursor: pointer;
                background-color: rgba(255,105,180);
                color: #FFF;
            }
            button:hover{
             transition: all 0.5s ease;
        
             background-color: rgba(255,20,147);   
            }
            
        }
    }
     .dengluwaitao:hover{
         transition: all 0.5s ease;
         box-shadow: 3px 10px 10px 3px #E5E5E5;            
     }

</style>