<template>
<div class="receivebox">
    <div class="title"></div>
    <div class="freeRe">
        <p>今日可免费领取{{ debrisNum }}碎片</p>
        <span v-if="freceived">已领取<em v-if="!lastday">明日再来</em></span>
        <a v-else @click="freeReceive">领取</a>

    </div>
    <ul class="buybox">
        <li><p>10碎片</p> <a @click="buydebriss('100')">100{{plat=='adr'?'书币':'阅点'}}领取</a></li>
        <li><p>60碎片</p> <a @click="buydebriss('500')">500{{plat=='adr'?'书币':'阅点'}}领取</a></li>
    </ul>
    <div class="readexchange">
        <p>每阅读60分钟获10个碎片</p>
        <a @click="readTreceive">领取碎片</a>
    </div>
    <div class="mask" v-if="mask">
        <div class="teaparea" v-if="masktype==1">
            <h4 :class="{online:lastday}">恭喜获得{{debrisNum}}个碎片</h4>
            <p class="online" v-if="!lastday">明日来可获{{nextReceive}}个碎片</p>
            <a @click="closemask">我知道了</a>
        </div>
        <div class="teaparea" v-if="masktype==2">
            <h4 class="online">每天只能领取5次哦<em v-if="!lastday">，明日再来</em></h4>
            <a @click="closemask">我知道了</a>
        </div>
        <div class="teaparea" v-if="masktype==3">
            <h4 class="online">再阅读{{needTime}}分钟可领取</h4>
            <a @click="closemask">我知道了</a>
        </div>
        <div class="teaparea" v-if="masktype==4">
            <div class="closeicon" @click="closemask"></div>
            <h4>余额不足{{buydebris.changeNum}}{{plat=='adr'?'书币':'阅点'}}</h4>
            <p class="online">先充值</p>
            <a @click="gocharge">充值</a>
        </div>
        <div class="teaparea" v-if="masktype==5">
            <div class="closeicon" @click="closemask"></div>
            <p class="online">确认购买{{buydebris.debris}}碎片?</p>
            <a @click="buy(buydebris.changeNum)">确认</a>
        </div>

    </div> <!---->
</div>
</template>
<script>
	export default {
		props:['log','freceived','debrisNum','balance','systim'],
		data(){
			return{
				plat: window.pt,
                nextReceive:20,
                mask:false,
                masktype:1000,
                chargeNum:100,
                buydebris:{
                    changeNum:100,
                    debris:10
                },
                clickok:true,
                needTime:10,
                lastday:false
			}
		},
        computed:{
            lastday(){
                let nowDay=new Date(this.systim).getDate();
                if(nowDay==8){
                    return true;
                }else{
                    return false;
                }
            }
        },
	 	methods:{
            closemask(){
                this.mask=false;
                this.clickok=true;
                this.$parent.initPage();
                //this.freceived=true;
            },//免费领取碎片
	 		freeReceive(){
                if(this.log){
                    if(this.clickok){
                        this.clickok=false;
                        Local.forceLog(common.param("act_f"),"GQJSPpickdaily");
                        Local.reqaObj(common.server() + "pkg170903/pickdaily", data=>{
                        console.log(data);
                        if(data.code==0){
                            this.debrisNum=data.score;
                            this.nextReceive=data.scoretomorrow;
                            this.mask=true;
                            this.masktype=1;
                        }else{
                            Local.showToast(data.msg);
                            this.closemask();
                        }    
                        },[],_=>{
                            Local.showToast('网络异常，请稍候重试');
                        });
                    }
                    
                }else{
                    Local.login();
                }
            },
            buydebriss(change){
                if(this.log){
                    this.$parent.initPage();
                    Local.forceLog(common.param("act_f"),"GQJSPbuybtn_"+change);
                    this.buydebris.changeNum=change;
                    if(this.buydebris.changeNum==100){
                        this.buydebris.debris=10;
                    }else{
                        this.buydebris.debris=60;
                    }
                    if(this.balance>=change){
                        this.mask=true;
                        this.masktype=5;
                    }else{
                        this.mask=true;
                        this.masktype=4;
                    }
                }else{
                    Local.login();
                }
            },
            gocharge(){
                Local.forceLog(common.param("act_f"),"GQJSPcharge");
                Local.openCharge();
                let timer=setTimeout(()=>{
                    this.closemask();
                    clearTimeout(timer);
                    timer=null;
                },1000);
            },
            buy(change){
                console.log(change);
                if(this.clickok){
                    this.clickok=false;
                    //Local.forceLog(common.param("act_f"),"GQJSPchange_"+change);
                    Local.reqaObj(common.server() + "pkg170903/dobuy?change="+change, data=>{
                        console.log(data);
                        if(data.code==1){
                            Local.showToast(data.msg);
                        }else{
                            Local.showToast(data.msg);
                        } 
                        this.closemask(); 
                    },[],_=>{
                        Local.showToast('网络异常，请稍候重试');
                    });
                }
            },
            readTreceive(){
                if(this.log){
                    if(this.clickok){
                        this.clickok=false;
                        Local.forceLog(common.param("act_f"),"GQJSPaddbyread");
                        Local.reqaObj(common.server() + "pkg170903/addbyread", data=>{
                            console.log(data);
                            if(data.code==-11){//时间不足
                                this.needTime=Math.ceil(data.timeneed/60000);
                                this.mask=true;
                                this.masktype=3;
                            }else if(data.code==-10){//已超过五次
                                this.mask=true;
                                this.masktype=2;
                            }else if(data.code==0){
                                Local.showToast('成功领取'+data.scoreget+'碎片!');
                                this.closemask();
                            }
                        },[],_=>{
                            Local.showToast('网络异常，请稍候重试');
                        });
                    }
                    
                }else{
                    Local.login();
                }
            }
	 	}
	}
</script>
<style lang='less' >
@ft28:.28rem;
.receivebox{width: 100%;margin:0; position: relative; z-index:6;
    &:after{ content:''; position: absolute;left: 0 ;top: .46rem; z-index: -1; width: 7.5rem; height: 4.9rem; background: url(../images/clund.png) no-repeat; background-size: 100% 100%;  }
    .title{ width: 2.68rem; height: 1.1rem;margin:0 auto;  background: url(../images/tt.png) no-repeat; background-size: 100% 100%; }
    .freeRe,.readexchange{/*display: -webkit-flex;-webkit-flex-direction: row;-webkit-align-items:center;-webkit-justify-content:center; */width: 6.4rem; padding-left: .62rem; height: 1.3rem;margin:0 auto; background: url(../images/freerebg.png) no-repeat;background-size: 100% 100%; line-height: 1.2rem; color: #fff; font-size:  @ft28; position: relative; z-index:2;
        a,span{display: block; position: absolute;top: 50%;  right:.32rem; margin-top: -.33rem; width: 2.36rem; height: .66rem; line-height: .58rem; text-align: center; font-size:  @ft28; background: url(../images/bluebtn.png) no-repeat; background-size: 100% 100%;}
        span{background: none;line-height: .42rem;display: -webkit-flex;-webkit-flex-direction: column;-webkit-align-items:center;-webkit-justify-content:center; height: .82rem; margin-top: -.41rem; color: #6e391d;}
    }
    .readexchange{ width: 6.52rem; padding-left: .76rem; height: 1.98rem; line-height: 1.92rem; color: #ad622a; background: url(../images/readtimebg.png) no-repeat; background-size: 100% 100%; 
        a{background: url(../images/redbtn.png) no-repeat; background-size: 100% 100%; color: #fff;}
    }
    .buybox{ width: 7.02rem; display: -webkit-flex;-webkit-justify-content:space-between; -webkit-align-items:center; margin:.1rem auto;
        li{width: 3.46rem; height: 1.7rem; background: url(../images/buybg.png) no-repeat; background-size: 100% 100%; position: relative; z-index: 1; text-align: center;display: -webkit-flex;-webkit-flex-direction: column;-webkit-align-items:center;-webkit-justify-content:center; line-height:.7rem;
            a{display: block; width: 2.34rem; height: .66rem; line-height: .58rem; text-align: center;color: #fff; font-size:  @ft28;background: url(../images/redbtn.png) no-repeat; background-size: 100% 100%;}
            &:last-child{
                &:after{ content: ''; position: absolute; left: .1rem; top: -.04rem; width: .62rem; height: .6rem; background: url(../images/icon.png) no-repeat; background-size: 100% 100%;} 
            }
        }
    }
}
</style>

