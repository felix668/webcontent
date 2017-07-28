<template>
    <div class="mask">
        <div class="tiparea">
        <div v-if="recomend">
            <div class="votes" v-if="recomendN==0 || tktype==101">
                <h4>推荐票数量不足</h4>
                <p>提升VIP等级可获得更多推荐票</p>
                <a  class="closebtn" @click="closemask">我知道了</a>
            </div>
            <div class="votes" v-if="tktype==0">
                <h4>投票成功</h4>
                <p>《{{bookname}}》获得1张推荐票，30积分次日到账</p>
                <a  class="closebtn" @click="closemask">我知道了</a>
            </div>
        </div>
        <div v-else>
            <div class="votes" v-if="voteyue==0 || tktype==-10000">
                <h4>月票数量不足</h4>
                <p>订阅消费及打赏可获得更多月票</p>
                <a  class="closebtn" @click="closemask">我知道了</a>
            </div>
            <div class="votes" v-if="tktype==0">
                <h4>投票成功</h4>
                <p>《{{bookname}}》获得1张月票，300积分次日到账</p>
                <a  class="closebtn" @click="closemask">我知道了</a>
            </div>
            <div class="votes" v-if="!ismengzhu && (tktype==-10001 || tktype==-10002)">
                <h4>投票失败</h4>
                <p>普通VIP 用户对单本作品每日最多投2票，每月最多投5票。您投票已超出限制</p>
                <a  class="closebtn" @click="closemask">我知道了</a>
            </div>
            
            <div class="votes" v-if="ismengzhu && (tktype==-10001 || tktype==-10002)">
                <h4>投票失败</h4>
                <p>该书盟主用户每日最多5票，每月最多投5票，您投票已超出限制</p>
                <a class="closebtn" @click="closemask">我知道了</a>
            </div>
        </div>   
            
        </div>
    </div>
</template>
<script>
    module.exports = {
        props:['voteyue','tktype','ismengzhu','recomendN','recomend','bookname'],
        data: function(){
            return {
                plat: window.pt,
            }
        },
        methods: {
            closemask:function(){
                if(this.tktype==0){
                    this.$parent.initPage();
                }
                this.$parent.showmask=false;
                this.$parent.recomendmask=false;
            }
        }
    }
</script>
<style lang='less' >
.centerflex{
    display: -webkit-flex;
    -webkit-align-items:center;
    -webkit-justify-content: center;
    display: -webkit-box;
    display: box;
    -webkit-box-align:center;
    -webkit-box-pack:center;
}
.tkstyle{
    background: #fff7e7;
    width: 5.2rem;
    border-radius: .2rem;
    padding-bottom: .46rem;
    position: relative;
    z-index: 1;
}
.mask{
    background: rgba(0,0,0,.4); position: fixed; z-index: 1000; left: 0; top: 0 ;.centerflex;width: 100%; height: 100%;
    .tiparea{ text-align: center; .tkstyle; padding-top: .96rem;-webkit-animation:scalse .2s linear forwards; -webkit-transform-origin:50% 50%; -webkit-transform: scale(0); opacity: 0;
        &:before{
            content:'';
            position: absolute;
            left: 0;
            top: -.2rem;
            width: 100%;
            height: .82rem;
            background: url(../images/tktopbg.png) no-repeat top left;
            background-size: 100% auto;
            
        }
        @-webkit-keyframes scalse {
          0%{ -webkit-transform: scale(0); opacity: 0;}
          100%{-webkit-transform: scale(1);opacity: 1;}
        }
        h4{
            font-size: .32rem;
            color: #333;
            font-weight: normal;
            line-height: .6rem;
            margin:0 .36rem;
        }
        p{
            font-size: .24rem;
            color: #f08c59;
            margin:0 .36rem;
        }
        
        .closebtn{
            display: block;
            width: 4.4rem;
            height: .78rem;
            margin:.32rem auto 0;
            border-radius: 5px;
            background: #e77c6e;
            border-bottom: 2px solid #cfe2d5;
            text-align: center;
            line-height: .78rem;
            font-size: .32rem;
            color: #fff;
        }
    }
}
</style>

