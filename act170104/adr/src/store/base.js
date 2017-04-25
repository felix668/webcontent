const state = {
	img: '../adr/img/booksList',

	dev: true,

	page: 'pending',
	loaded: false,

	z_type: common.param('z_type')||'none',

	ios: (function(){
		if( window.env!==undefined ){
			return env.pt==='ios'?true:false;
		}else{
			var el = document.querySelector('[config]');
			var val = el.getAttribute('config');
			console.log(val)
			return /ios/.test( val )?true:false
		};
	})(),
	share: (function(){
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		console.log(val)
		return /share/.test( val )?true:false
	})(),

	loggedIn: false,

	mask_rules: {
		show: false
	},
	mask_download: {
		show: false
	},
	mask_info: {
		show: false
	},
	mask_black: {
		show: false
	},
	mask_prize: {
		show: false
	}
}

function reducer( state,action ){
	var self = this;
	switch( action.type ){
		case 'TO_LOGIN':
			if( self.dev ){
				self.loggedIn = true;
			}else{
				Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_login` );
				Local.login();
			};
			break;

		case 'TO_PAGE':
			var href;
			if( self.hasDiscount ){
				href = location.href.replace( /books_\d_discount\.html/g,'books_'+action.id+'_discount.html' );
			}else{
				href = location.href.replace( /books_\d\.html/g,'books_'+action.id+'.html' );
			};
			if( /\?/.test(location.href) ){
				href = href.replace(/\?/,'?z_replay=true&');
			}else{
				href += '?z_replay=true';
			};
			if( self.dev ){
				location.href = href;
			}else{

				if( self.id===action.id ){
					Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_replay` );
				}else{
					Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_to${action.id}${self.hasDiscount?'discount':''}` );
				}
				Local.openPage( href );
				
			};
			break;

		case 'TO_CONTACT':
			if( self.share ){
				self.act({type:'TO_APP'});
			}else{
				if( !self.loggedIn ){
					self.act({type:'TO_LOGIN'});
				}else{
					Local.openPage( location.href.replace( /(writers|actors|lottery)\.html/g,'contact.html' ) );
				}
			};
			break;

		case 'TO_CHARGE':
			Local.doCharge( 'act',true,action.money*100 );
			break;
		case 'TO_BOOK':
			if(!self.share){
				Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_toBook` );
				ABook.gotoDetail( action.bid );
			}else{
				self.act({type:'TO_APP'});
			}
			break;
		case 'TO_READ':
			Local.$toRead(action.bid);
			break;


		// For sharing:
		case 'SET_ICON':
			var pre = (function(){
				// 如果当前环境为测试环境：
				if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
					return 'https://ptsolomo.reader.qq.com/book_res/event';
				}else{
					return 'https://yuedu.reader.qq.com/event';
				}
			})();
			var type = (function(){
				return /writers\.html/.test(location.href)?'writers':'actors';
			})();
			var title = type==='writers'?'大神作家喊你来投票！':'明星爱豆喊你来投票！';
			var desc = type==='writers'?'多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】':'多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】';
			Local.$setIconForShareing(
				pre + '/act161202/com/share_'+type+'.html?tf=1',
				'http'+(self.ios?'s':'')+'://ptsolomo.reader.qq.com/book_res/event/act161202/adr/img/common/thumb.png',
				title,
				desc
			);
			break;
		case 'SHARE':
			if( self.dev ){
				if( !self.loggedIn ){
					self.loggedIn = true;
				}else{
					self.writers[self.current].unlocked = true;
				}
			}else{
				//Local.forceLog( common.param('act_f'),self.what+'_share_'+self.current );
				if( !self.loggedIn ){
					self.act({
						type: 'LOGIN'
					})
				}else{

					Local.$share(
		                self.href,
		                location.href.replace( /act161203.+/,'act161203/adr/img/qqreader.png' ),
		                'QQ阅读6周年，大神请客，经典免费读',
		                '我领到免费神作，你也快来吧'
		            )
				}
			}
			break;

		// For pages shared out:
		case 'SET_SECOND_SHARING':
			var type = (function(){
				return /writers\.html/.test(location.href)?'writers':'actors';
			})();
			var title = type==='writers'?'大神作家喊你来投票！':'明星爱豆喊你来投票！';
			var desc = type==='writers'?'多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】':'多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】';
			sns.share({
				url: location.href,
				//cover: location.href.replace( /act161202.+/,'act161202/adr/img/qqreader.png' ),
				cover: 'http://solomotest4.3g.qq.com/book_res/event/act161202/adr/img/common/thumb.png',
				title: title,
				desc: desc
			},'111')
			break;
		case 'TO_APP':
			var type = (function(){
				return /writers\.html/.test(location.href)?'writers':'actors';
			})();
			var test = (function(){
				if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
					return true;
				}else{
					return false;
				}
			})();
			var href = (function(){
				if( test ){
					if( env.pt==='adr' ){
						return 'http://solomotest4.3g.qq.com/book_res/event/act161202/adr/'+type+'.html?act_f=170105';
					}else{
						return 'https://ptsolomo.reader.qq.com/book_res/event/act161202/ios/'+type+'.html?act_f=170105';
					}
				}else{
					if( env.pt==='adr' ){
						return 'http://iyuedu.qq.com/event/act161202/adr/'+type+'.html?act_f=170105';
					}else{
						return 'https://yuedu.reader.qq.com/event/act161202/ios/'+type+'.html?act_f=170105';
					}
				};
			})();
			if( env.vw==='wx'&&env.pt==='adr' ){
				sns.open(function(installStat,plat){
					if( installStat === -2 ){//浏览器
						// window.location.href="uniteqqreader://nativepage/client/bookshelf";
						// showmask();
					}else if(installStat){//已安装
						bnative.openPage( href );
						self.show_mask_download = true;
					}else{			
						self.show_mask_download = true;
					}
				});
			}else{
				console.log('haha');
				bnative.openPage( href );
				setTimeout(()=>{
					self.show_mask_download = true;
				},2000);
			};
			break;
		case 'TO_DOWNLOAD':
			bnative.downLoad( '10003531' );
			break;


		case 'SHOW':
			self[action.what].show = true;
			break;
		case 'HIDE':
			console.log('hide')
			self[action.what].show = false;
			break;
	}
}

export default {state,reducer};