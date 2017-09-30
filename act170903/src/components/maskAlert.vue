<template>
<div class="chestbox">
    <div class="userbox">
        <div class="userface"><img :src="userin.avor"></div>
        <span v-if="log">我的碎片：{{ userin.debris }}</span><a @click="login" v-else>我的碎片：<span>登录查看</span></a>
        <div v-if="log" class="tomyprize" @click="gomyprize"></div>
    </div>
    <div class="chestinfo">
        <p class="prizeintroduce">iPhone 8 等千万好礼等你来拿</p>
        <p class="chance"><em v-if="log">已打开{{ userin.openedNum }}次，还可打开<span>{{ userin.chanceNum }}</span>次宝箱</em></p>
        <ul>
            <li @click="openchest('0')">10碎片开1次</li>
            <li @click="openchest('1')">45碎片开5次</li>
        </ul>
    </div>
    <div class="mask" v-if='maskshow'>
         <div class="teaparea" v-if="msktype==-10">  <!--碎片不足-->
            <h4>碎片不足</h4>
            <p class="online">开宝箱需要{{debrisarr.openDebris}}碎片,还差{{debrisarr.needDebris}}碎片可开宝箱</p>
            <a @click="closemask">我知道了</a>
        </div>
        <div class="teaparea" v-if="msktype==1"> <!--抽一次-->
          <div class="closeicon" v-if="prizeInfo[0].type<8 || prizeInfo[0].type==10 || prizeInfo[0].type==13" @click="closemask"></div>
            <h4>恭喜你，获得<span v-if="prizeInfo[0].type>7">{{prizeInfo[0].count}}</span>{{prizeName[prizeInfo[0].type].pzName}}</h4>
            <div class="img"><img :src="prizeName[prizeInfo[0].type].img"></div>
            <p>{{prizeInfo[0].type==11?'':(prizeInfo[0].type==8 || prizeInfo[0].type==9 || prizeInfo[0].type==10 || prizeInfo[0].type==13)?'已及时到账，有效期7日':'请认真填写联系方式，以便客服联系到您'}}</p>
            <a @click="closemask" v-if="prizeInfo[0].type==8 || prizeInfo[0].type==9 || prizeInfo[0].type==11">我知道了</a>
            <a @click="gomaice(prizeInfo[0].type)" v-if="prizeInfo[0].type==10 || prizeInfo[0].type==13">{{verok?'立即使用':'我知道了'}}</a>
            <a v-if="prizeInfo[0].type<8" @click="gocontact">填写联系方式</a>
        </div>
        <div class="teaparea" v-if="msktype==2"> <!--抽五次-->
         <div class="closeicon" @click="closemask"></div>
            <h4>恭喜你中奖</h4>
            <div class="prizelist">
                <p>获得以下奖品</p>
                <ul>
                    <li v-for="(item,index) in prizeInfo">
                        <img :class="{'bookimg':item.type==12}" :src="item.type==12?item.img:prizeName[item.type].img">
                        <em v-if="item.type>7 && item.type!=12">{{item.count}}</em>{{ item.type==12?'限免《'+item.name+'》':prizeName[item.type].pzName }}
                    </li>
                </ul>
            </div>
            <a @click="gomyprize">去使用</a>
        </div>
        <div class="teaparea" v-if="msktype==3"> <!--送免费书-->
             <div class="closeicon" @click="closemask"></div>
            <h4>恭喜你，获得{{ prizeInfo[0].count }}天免费读</h4>
            <img class="freebook" :src="prizeInfo[0].img">
            <p class="bookname">{{ prizeInfo[0].name }}</p>
            <a @click="goread(prizeInfo[0].bid)">立即阅读</a>
            <!-- <ul class="btnbox"><li @click="addshelf(prizeInfo[0])"></li><li @click="goread(prizeInfo[0].bid)"></li></ul> -->
        </div>
        <div class="teaparea" v-if="msktype==4"><!--谢谢参与-->
            <h4>未中奖</h4>
            <div class="img"><img :src="'src/images/prize/thanks.png'"></div>
            <p>很遗憾，未中奖，下次再来</p>
            <a @click="closemask">我知道了</a>
        </div>
    </div>
</div>	
</template>
<script>
	export default {
		props:['log','userin','verok'],
		data(){
			return{
				maskshow:false,
				clickok:true,
                debrisarr:{
                    openDebris:10,
                    needDebris:3
                },
                msktype:-10,
                prizeName:[{

                },{
                    pzName:'iPhone 8',img:'src/images/prize/iPhone-8.png'
                },{
                    pzName:'QQ阅读电子书',img:'src/images/prize/yueduqi.png'
                },{
                    pzName:'500元京东卡',img:'src/images/prize/jd500.png'
                },{
                    pzName:'200元京东卡',img:'src/images/prize/jd200.png'
                },{
                    pzName:'耳机',img:'src/images/prize/erji.png'
                },{
                    pzName:'小米手环',img:'src/images/prize/shouhuan.png'
                },{
                    pzName:'1Q币',img:'src/images/prize/Qbi.png'
                },{
                    pzName:'书券',img:'src/images/prize/shuq.png'
                },{
                    pzName:'阅券',img:'src/images/prize/yueq.png'
                },{
                    pzName:'漫画抵扣券',img:'src/images/prize/dikouq.png'
                },{
                    pzName:'成长值',img:'src/images/prize/chengzhzhi.png'
                },{

                },{
                    pzName:'书籍抵扣券',img:'src/images/prize/dikouq.png'
                }],
                prizeInfo:[{
                    bid:'',
                    type:13,
                    img:'src/images/prize/book.jpg',
                    name:'最强天庭系统最强天庭系统',
                    count:''
                }]
			}
		},
	 	methods:{
            closemask(){
                this.maskshow=false;
                this.clickok=true;
                this.$parent.initPage();
            },
            gocontact(){
                Local.forceLog(common.param("act_f"),"GQJSPgocontact");
                this.closemask();
                let url=`${common.front()}contact/index.html`;
                Local.gotoQUrl(url);
                //Local.openInside(url);
            },
            gomyprize(){
                Local.forceLog(common.param("act_f"),"GQJSPgomyprize");
                Local.gotoQUrl(common.front()+'act170903/myprize.html');
                //Local.openInside();
            },
	 		login(){
                Local.forceLog(common.param("act_f"),"GQJSPgologin");
                Local.login();
            },
            gomaice(type){
                if(this.verok){
                    if(type==10){
                        Local.forceLog(common.param("act_f"),"GQJSPgomanhua");
                        window.location.href ='uniteqqreader://nativepage/client/voucherdetail';
                    }else{
                        Local.forceLog(common.param("act_f"),"GQJSPgodikouquan");
                        window.location.href ='uniteqqreader://nativepage/client/voucherdetail';
                    }
                }           
                this.closemask(); 
            },
            goread(bid){
                Local.forceLog(common.param("act_f"),"GQJSPgoread_"+bid);
                Local.goRead(bid);
                this.closemask();
            },
            addshelf(book){
                Local.forceLog(common.param("act_f"),"GQJSPaddshelf_"+book.bid);
                let bkinfo={
                    bid: book.bid,
                    title: book.name,
                    intro: '',
                    author:''
                };
                Local.addToShelf(bkinfo,0);
                Local.showToast('已在书架');
            },
            openchest(type){//type＝0代表一次，＝1代表五次
                if(this.log){
                    if(this.clickok){
                        this.clickok=false;
                        Local.forceLog(common.param("act_f"),"GQJSPchest_"+type);
                         if(type==0){//type＝0代表一次，＝1代表五次
                                this.debrisarr.openDebris=10;
                                Local.reqaObj(common.server() + "pkg170903/dolottery", data=>{
                                    console.log(data);
                                    if(data.code==-10){//碎片不足
                                        this.maskshow=true;
                                        this.msktype=-10;
                                        this.debrisarr.needDebris=data.scoreneed;
                                    }else if(data.code==0){
                                        this.prizeInfo[0]=data.prizes;
                                        if(this.prizeInfo[0].type==12){
                                           this.msktype=3; 
                                        }else{
                                            this.msktype=1; 
                                        }
                                        this.maskshow=true;
                                    }else if(data.code==-19){
                                        this.maskshow=true;
                                        this.msktype=4;//谢谢参与
                                    }else{
                                        Local.showToast(data.msg);
                                        this.closemask();
                                    }
                                },[],_=>{
                                    Local.showToast('网络异常，请稍候重试');
                                });
                            }
                            if(type==1){//type＝0代表一次，＝1代表五次
                                this.debrisarr.openDebris=45;
                                Local.reqaObj(common.server() + "pkg170903/dolotterybatch", data=>{
                                    console.log(data);
                                    if(data.code==-10){//碎片不足
                                        this.maskshow=true;
                                        this.msktype=-10;
                                        this.debrisarr.needDebris=data.scoreneed;
                                    }else if(data.code==0){
                                        this.prizeInfo=data.prizes;
                                        this.maskshow=true;
                                        this.msktype=2;//其它奖
                                    }else if(data.code==-19){
                                        this.maskshow=true;
                                        this.msktype=4;//谢谢参与
                                    }else{
                                        Local.showToast(data.msg);
                                    }
                                },[],_=>{
                                    Local.showToast('网络异常，请稍候重试');
                                });
                            }
                       
                    }
                }else{
                   Local.login(); 
                }
                
            }
	 	}
	}
</script>
<style lang='less' >
    @redcolor:#d14343;
    @ft20:.2rem;
    @ft24:.24rem;
    @ft28:.28rem;
	.chestbox{
        width: 6.48rem; height: 4.34rem; padding: .68rem .4rem .4rem; background:url(../images/chestbg.png) no-repeat; background-size: 100% 100%; margin:0 auto; 
        .userbox{  padding-left: 1rem; position: relative;z-index: 1; height: .86rem; line-height: .86rem; font-size: @ft28;
            .userface{ position: absolute;left: 0 ;top: 0; border:2px solid #dd8f60; width: 38px; height: 38px; border-radius: 100%; box-shadow: 0 2px 4px rgba(201,120,85,.45); 
                img{ width: 100%; height: 100%; border-radius: 100%; display: block; }
            }
            a{ display: block; height: 38px;
                span{ color: #00adfc; text-decoration:underline; }
            }
            .tomyprize{ position: absolute; top:.16rem; right: .16rem; width: 1.42rem; height: .88rem; background:url(../images/myprize.png) no-repeat; background-size: 100% 100%; }
        }
        .chestinfo{
            width: 5.78rem;margin:0 auto; background: url(../images/chest.png) no-repeat center .28rem; background-size: 4.66rem auto;
            .prizeintroduce{ font-size:@ft20; margin-bottom: 1.76rem; height: .56rem; line-height: @ft28;color: @redcolor; text-align:center; }
            .chance{ text-align: center; font-size: @ft24; color: @redcolor; line-height: .56rem; height: .56rem; 
                span{font-size: .36rem;}
            }
            ul{ display: -webkit-flex; -webkit-justify-content:space-between; -webkit-align-items:center; 
                li{ width: 2.34rem; height: .66rem; line-height: .58rem; text-align: center; font-size: @ft28; color: #fff; background: url(../images/redbtn.png) no-repeat; background-size: 100% 100%;
                    &:last-child{ width:2.36rem; background: url(../images/orangebtn.png) no-repeat; background-size: 100% 100%; }
                }
            }
        }  
    }
</style>

