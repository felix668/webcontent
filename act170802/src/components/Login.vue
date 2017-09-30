<template>
	<div class="loginbox">
		<div class="topimg"></div>
		<a class="loginbtn" @click="tologin"></a>
		<div class="mask" v-if='show'>
			<div class="tiparea">
				<h4>暂不支持游客账号，<br>去设置－退出登录，<br>点击QQ或微信登录参与</h4>
				<div class="closebtn" @click="closemask">我知道了</div>
			</div>
	    </div>
	</div>
</template>
<script>
	export default {
		props:['login','guest'],
		data(){
			return{
				plat: window.pt,
				show:false
			}
		},
	 	methods:{
	 		tologin(){
	 			let self=this;
	 			Local.forceLog(common.param("act_f"),"SQPLlogin");
	 			if(self.login && self.guest){
	 				self.show=true;
	 			}else{
	 				Local.login();
	 			}
	 		},
	 		closemask(){
	 			this.show=false;
	 		}
	 	}

	}
</script>
<style lang='less'>
@ft28:.28rem;
@bgcolor:#5bd3ee;
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
.loginbox{
	position: fixed; left: 0; top: 0; z-index: 111; width: 100%; height: 100%; background: @bgcolor;
	.topimg{ display: block; width: 100%; height: 8.08rem; background: url(../images/logimgs.jpg) no-repeat;background-size: 100% 100%; margin:0 0 .4rem; }
	p{text-align: center; font-size: @ft28; color: #b38059; line-height: .5rem;
		span{ display: block; font-weight: bold; color: #d56761; }
	}
	.loginbtn{ display: block; width: 2.76rem; height: 1.12rem; margin:0 auto; background: url(../images/btnlogs.png) no-repeat; background-size: 100% 100%; position: relative; z-index: 2 }
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