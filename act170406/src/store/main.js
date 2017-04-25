const actors = [{
  id: 0,
  name: '黄轩',
  intro: '黄轩，著名男演员，作品《推拿》《芈月传》《亲爱的翻译官》《芳华》《妖猫传》等',
  book: {
    bid: 749907,
    zid: {
      adr: 326461,
      ios: 326462
    },
    name: '《牧羊少年奇幻之旅》',
    author: '保罗·柯艾略',
    intro: '一本“足以改变读者心灵一生”的寓言，政要、巨星隆重推荐！'
  }
},{
  id: 1,
  name: '严屹宽',
  intro: '严屹宽，著名男演员，代表作《爵迹》、《三生三世十里桃花》、《倾世皇妃》等 ',
  book: {
    bid: 713429,
    zid: {
      adr: 326646,
      ios: 326647
    },
    name: '《云雀叫了一整天》',
    author: '木心',
    intro: '现代文学史中一位金句纷披的大家，收录代表诗篇《从前慢》'
  }
},{
  id: 2,
  name: '马可',
  intro: '马可，男演员，代表作《花千骨》《思美人》等',
  book: {
    bid: 630052,
    zid: {
      adr: 326643,
      ios: 326664
    },
    name: '《寂静的春天》',
    author: '蕾切尔·卡森',
    intro: '柴静关注的现代环保运动肇始之作，刘慈欣《三体》的直接源头'
  }
},{

  id: 3,
  name: '付辛博',
  intro: '付辛博，著名男演员，代表作《寻找前世之旅》《乱世丽人行》《青丘狐传说》《古剑奇谭二》等',
  book: {
    bid: 813820,
    zid: {
      adr: 326660,
      ios: 326700
    },
    name: '《瓦尔登湖》',
    author: '亨利·戴维·梭罗',
    intro: '名家翻译，全译本，适合在寂寞和恬静时静静地读，读得静静。'
  }
},{
  id: 4,
  name: '颖儿',
  intro: '颖儿，著名女演员，代表作：《千山暮雪》、《解密》、《古剑奇谭二》等 ',
  book: {
    bid: 812684,
    zid: {
      adr: 326716,
      ios: 326742
    },
    name: '《当你老了》',
    author: '叶芝',
    intro: '央视新闻推荐版本，浪漫主义者献给女神的100首炽热诗篇'
  }
},{
  id: 5,
  name: '李一桐',
  intro: '李一桐，新生代小花旦，代表作《新射雕英雄传》《半妖倾城》《海棠经雨胭脂透》等 ',
  book: {
    bid: 812451,
    zid: {
      adr: 326745,
      ios: 326757
    },
    name: '《沿着塞纳河到翡冷翠》',
    author: '黄永玉',
    intro: '收入黄永玉先生在此次艺术之旅中创作的大量油画、水彩、素描'
  }
},{

  id: 6,
  name: '宋威龙',
  intro: '宋威龙，新生代男演员，代表作《凤囚凰》《三好差生》《半妖倾城》等',
  book: {
    bid: 216212,
    zid: {
      adr: 326746,
      ios: 326747
    },
    name: '《小王子》',
    author: '安托万·德·圣-埃克苏佩里',
    intro: '唯一官方认可简体中文译本，全套官方正版插图，畅销二百万册'
  }
},{
  id: 7,
  name: '秦俊杰',
  intro: '秦俊杰，90后演技派小生，代表作《大唐荣耀》《青云志》《网球王子》《满城尽带黄金甲》等',
  book: {
    bid: 623386,
    zid: {
      adr: 326749,
      ios: 326753
    },
    name: '《一个人的朝圣》',
    author: '蕾秋·乔伊斯',
    intro: '首席畅销小说！他以为人生就这么过去了，直到收到那封信……'
  }
},{
  id: 8,
  name: '靳梦佳',
  intro: '靳梦佳，湖南卫视娱乐频道当家主持人，主持湖南娱乐《娱乐急先锋》等节目。',
  book: {
    bid: 446536,
    name: '《乖，摸摸头》',
    author: '大冰',
    intro: '别那么孤独，请相信，这个世界上真的有人在过着你想要的生活'
  }
},{

  id: 9,
  name: '张宸',
  intro: '张宸，中国跳水运动员。一战成名：2005年国际泳联跳水大奖赛珠海站男子单人10米台冠军。',
  book: {
    bid: 813816,
    name: '《稻草人》',
    author: '叶圣陶',
    intro: '中国现代第一本为儿童而写的童话集，国家教育部推荐读物！'
  }
},{
  id: 10,
  name: '薛泽源',
  intro: '薛泽源，中央戏剧学院学生，代表作《愿有人陪你颠沛流离》。',
  book: {
    bid: 414951,
    name: '《愿有人陪你颠沛流离》',
    author: '卢思浩',
    intro: '能接吻就不要说话，能拥抱就不要吵架，能行动就不要发呆……'
  }
},{
  id: 11,
  name: '北京猎手冰球队',
  intro: '北京猎手冰球队',
  book: {
    bid: 166655,
    name: '《少年中国说》',
    author: '梁启超',
    intro: '精选梁启超在政论、文论、讲演和诗词等方面最具代表性的作品'
  }
},{

  id: 12,
  name: '四川北川羌族民族艺术团',
  intro: '羌族少数民族，中国西部的一个古老的民族，被称为“云朵上的民族”。',
  book: {
    bid: 166655,
    name: '《少年中国说》',
    author: '梁启超',
    intro: '精选梁启超在政论、文论、讲演和诗词等方面最具代表性的作品'
  }
},{
  id: 13,
  name: '麦麦&马俊熙',
  intro: '麦麦&马俊熙',
  book: {
    bid: 166655,
    name: '《少年中国说》',
    author: '梁启超',
    intro: '精选梁启超在政论、文论、讲演和诗词等方面最具代表性的作品'
  }
},{
  id: 14,
  name: '史文翔',
  intro: '史文翔，内地男演员。代表作《周末父母》《谈判官》；综艺《一年级》。',
  book: {
    bid: 832013,
    zid: {
      adr: 326816,
      ios: 326820
    },
    name: '《生如夏花，死如秋叶：泰戈尔经典诗选》',
    author: '泰戈尔',
    intro: '至真至美的文学经典，典藏百年的美文精粹，郑振铎权威译本！'
  }
}];

const state = {
  cards: (function(){
    var arr = [];
    var ids = [];
    var date = new Date().getDate();
    var hours = new Date().getHours();
    console.log(`[date] ${date}`);
    console.log(`[hours] ${hours}`)
    if( date===20 ){
      if( hours>=13 ){
        ids = [5,0,1,2,3,4,8,9,10,11,12,13];
      }else{
        ids = [0,1,2,3,4,8,9,10,11,12,13];
      };
      ids.forEach(id=>{
        arr.push( actors[id] );
      });
      console.log(arr)
      return arr;
    }else if( date===21 ){
      if( hours>=13 ){
        ids = [6,0,1,2,3,4,5,8,9,10,11,12,13];
      }else{
        ids = [5,0,1,2,3,4,8,9,10,11,12,13];
        // ids = [0,1,2,3,4,5,8,9,10,11,12,13];
      };
      ids.forEach(id=>{
        arr.push( actors[id] );
      });
      return arr;
    }else if( date===22 ){
      if( hours>=13 ){
        ids = [7,0,1,2,3,4,5,6,8,9,10,11,12,13];
      }else{
        ids = [6,0,1,2,3,4,5,8,9,10,11,12,13];
        // ids = [0,1,2,3,4,5,6,8,9,10,11,12,13];
      }
      ids.forEach(id=>{
        arr.push( actors[id] );
      });
      return arr;
    }else{
      ids = [0,1,2,3,4,5,6,7,14,8,9,10,11,12,13];
      arr = ids.map(a=>{
        return actors[a];
      })
      return arr;
    }
  })(),
  lottery: {
    state: 'ready',
    coins: '--',
  },
  card: {
    current: 0
  }
};

const mutators = {
	INIT_MAIN ({state,dispatch},action) {

    if( state.meta.share ){
      dispatch({
        type: 'SET_SECOND_SHARING'
      })
      state.page = 'ready';
    }else{
      Local.forceLog( common.param('act_f'),`enter` );
      // dispatch({
      //   type: 'SET_ICON'
      // })
      if( state.dev ){
        state.page = 'ready';
      }else{
        state.page = 'ready';
      }
    }
	},
  CHANGE_CARD ({state,dispatch},action) {
    state.card.current = action.to;
  },
  // DRAW_LOTTERY ({state,dispatch},action) {
  //   state.lottery.state = 'pending';

  //   if( state.dev ){
  //     setTimeout(()=>{
  //       // state.lottery.coins = 200;
  //       // state.lottery.state = 'success';
  //       state.lottery.state = 'out';
  //     },1000);
  //   }else{
  //     Local.reqaObj( common.server()+`pkg${state.conf.id}/pick`, function(data) {
  //       console.log(data);
  //       if( data.code===1 ){
  //         state.lottery.coins = data.money;
  //         state.lottery.state = 'success';
  //       }else if( data.code===-4 ){
  //         state.lottery.state = 'out';
  //       }else{
  //         Local.showToast( data.msg );
  //       }
  //     }, [], function() {
  //       Local.showToast("网络异常，请稍候重试");
  //     }, 1);
  //   }

  // }
}

export default {state,mutators};