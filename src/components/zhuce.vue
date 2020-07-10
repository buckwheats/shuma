<template>
    <div class="zhucewaitao">
        <div>
            <div><img :src="img" alt=""></div>
        </div>
        <div>
            <input type="text" placeholder="请输入账号" v-model="zh">
            <input type="password" placeholder="请输入密码" v-model="mm" @click="biyan" @mouseout="zhenyan">
            <input type="password" placeholder="请确认密码" v-model="bb"  @click="biyan" @mouseout="zhenyan">
        </div>
        <div><button @click="add">注册</button></div>
    </div>
</template>

<script>
export default {
     name:'zhuce',
    data(){
       
      return{
        img:require('../assets/timg.jpg'),
        zh:'',
        mm:'',
        bb:''
     }
    },
    methods: {
        add(){
            if(this.zh === '' || this.mm === '' || this.bb ===""){
                alert("不能留空哦！")
            }else if(this.mm != this.bb){
                alert('两次输入密码不一致！')
            }else{
                alert('注册成功！')
                this.$router.push('/denglu')
            }

        },
      biyan(){
         this.img =   require('../assets/biyan.jpg')
        },
      zhenyan(){     
          this.img =  require('../assets/timg.jpg')
      }
    }
}
</script>

<style lang="less" scoped>
    .zhucewaitao{
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
     .zhucewaitao:hover{
         transition: all 0.5s ease;
         box-shadow: 3px 10px 10px 3px #E5E5E5;            
     }

</style>