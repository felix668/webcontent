const data = {
    "isLogin": true,
    "isVip": null,
    "code": 0,
    "isGuest": true,
    "grownModuleNum": 0,
    "bgcolor": "#000",
    "fontcolor": "#fff",
    "btncolor": '#ff0000',
    "share": {
        "title": "新书运营标题",
        "desc": "新书运营描述",
        "cover": "分享的封面"
    },
    "share2": {
        "title": "新书运营标题",
        "desc": "新书运营描述",
        "cover": "分享的封面"
    },
    "userinfo": {
        "coin": 10000,
        "ticket": 200
    },
    "modules": [
        //banner
        {
            "mid": "m101",
            "id": "m1010",
            "index": 0,
            "status": 0,
            "banner": "https://www.baidu.com/img/gaokao_pc_22894732028445b2e2caaf21ebc5e508.png"
        },
        //活动规则
        {
            "mid": "m102",
            "id": "m1021",
            "content": [
                "1、规则1",
                "2、规则113331122222222"
            ],
            "title": "2017书香中国 全民阅读",
            "index": 1,
            "status": 0
        },
        //模块标题
        {
            "mid": "m103",
            "id": "m1032",
            "index": 2,
            "status": 0,
            "background": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3794371817,2637991827&fm=58"
        },
        //单书展示
        {
            "mid": "m104",
            "id": "m1043",
            "fontcolor": "#ff0000",
            "pricecolor": "green",
            "publish": 1,
            "index": 3,
            "status": 0,
            "list": [{
                "bid": 788041,
                "name": "侯卫东官场笔记（1-8册+巴国侯氏）",
                "cover": "https://static.reader.qq.com/cover/41/788041/b_788041.jpg",
                "author": "小桥老树",
                "price": 10.00,
                "intro": [
                    "有史以来全联想有有史以来全,", "有史以来想有史以来全,", "有史以来全联想有有史以来全,"
                ],
                "pricetype": 1 //0按本 1按章节
            }]
        },
        //立即阅读按钮
        {
            "mid": "m211",
            "id": "m2113",
            "index": 10,
            "status": 1, //不可用 
            "operStatus": 0, //可用  
            "rid": "m1043",
            "btn0": "src/images/buybtn2.png", //可点
            "btn1": "src/images/buybtn1.png", //不可点
            "btntype": 1, //0静态 1动态
            "scontent": "",
            "dcontent1": "动态文案1",
            "dcontentNum": "数字",
            "dcontent2": "动",
            "fontcolor": "green",
            "highcolor": "red",
            "btnCols":2
        },
        //加书架按钮
        {
            "mid": "m203",
            "id": "m2032",
            "index": 10,
            "status": 1, //不可用 
            "operStatus": 0, //可用  
            "rid": "m1043",
            "btn0": "src/images/buybtn2.png", //可点
            "btn1": "src/images/buybtn1.png", //不可点
            "btntype": 1, //0静态 1动态
            "scontent": "我",
            "dcontent1": "动态文案1",
            "dcontentNum": "数字",
            "dcontent2": "动",
            "fontcolor": "green",
            "highcolor": "red",
            "btnCols":2
        },
        //加书架并阅读到第n章按钮
        {
            "mid": "m204",
            "id": "m2048",
            "index": 10,
            "status": 1, //可用 
            "operStatus": 0, //可用  
            "rid": "m1043",
            "btn0": "src/images/buybtn2.png", //可点
            "btn1": "src/images/buybtn1.png", //不可点
            "btntype": 1, //0静态 1动态
            "scontent": "我是静态文案",
            "dcontent1": "动态文案1",
            "dcontentNum": "数字",
            "dcontent2": "动态文案2",
            "fontcolor": "green",
            "highcolor": "red",
            "btnCols":1
        },
        //购买按钮
        {
            "mid": "m201",
            "id": "m2012",
            "index": 10,
            "status": 1, //可用 
            "operStatus": 0, //未操作   
            "rid": "m1043",
            "btn0": "src/images/buybtn2.png", //可点
            "btn1": "src/images/buybtn1.png", //不可点
            "btntype": 1, //0静态 1动态
            "scontent": "我是静态文案",
            "dcontent1": "动态文案1",
            "dcontentNum": "数字",
            "dcontent2": "动态文案2",
            "fontcolor": "green",
            "highcolor": "red",
            "btnCols":2
        },
        // 视频（站内资源）
        {
            "mid": "m105",
            "id": "m1054",
            "index": 4,
            "status": 0,
            "area": "", //描边色值
            "list": [{
                "cover": "http://qidian.qpic.cn/qdbimg/349573/1008984041/180",
                "url":"http://wfqqreader.3g.qq.com/cover/bookeventV2/4/vedio_1504247646534.mp4"
            }],
            "type": 0
        },
        // 音频
        {
            "mid": "m106",
            "id": "m1065",
            "index": 5,
            "status": 0,
            "bgpic": "",
            "url": "https://ptsolomo.reader.qq.com/book_res/event/act170509/src/media/t.mp3"
        },
        // 作者简介
        {
            "mid": "m107",
            "id": "m1076",
            "index": 6,
            "status": 0,
            "pic": "http://facepic.qidian.com/qd_face/349573/a3553718/0",
            "author": "是章鱼",
            "fontcolor": "green",
            "content": [
                "是是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章鱼是章"
            ]
        },
        //倒计时
        {
            "mid": "m108",
            "id": "m1087",
            "time": 1168148081,
            "index": 7,
            "status": 0,
            "content": "新年的倒计时已经开始，让我们共同迎接新的一年的到来",
            "fontcolor": "#ff0000", //介绍文案颜色
            "numcolor": "green", //数字色值
            "hourcolor": "yellow" //时分色值
        },
        //新书试看
        {
            "mid": "m109",
            "title": "琅琊榜",
            "btnpic0": "src/images/newbook.png",
            "btnpic1": "src/images/newbook.png",
            "content": [
                "新年的倒计时已经开始，让我们共同迎接新的一年的到来新年的倒计时已经开始，让我们共同迎接新的一年的到来新年的倒计时已经开始，让我们共同迎接新的一年的到来新年的倒计时已经开始，让我们共同迎接新的一年的到来新年的倒计时已经开始，让我们共同迎接新的一年的到来",
                "新年的倒计时已经开始，让我们共同迎接新的一年的到来新年的倒计时已经开始，让我们共同迎接新的一年的到来新年的倒计时已经开始，让我们共同迎接新的一年的到来",
                "新年的倒计时已经开始，让我们共同迎接新的一年的到来"
            ],
            "id": "m1098",
            "index": 8,
            "status": 1,
            "fontcolor": "",
            "bgcolor": "",
            "btnCols":2
        },
        //视频（腾讯站外资源）
        {
            "mid": "m110",
            "id": "m1101",
            "index": 4,
            "status": 0,
            "area": "#ff0000", //描边色值
            "bgcolor": "#ff0000",
            "fontcolor1": "#6b686b", //非必填
            "fontcolor2": "#fff",
            "list": [{
                    "cover": "http://qidian.qpic.cn/qdbimg/349573/1008984041/180",
                    "url": "https://v.qq.com/iframe/player.html?vid=t0023ymie4d&tiny=0&auto=0",
                    "superscript": 0 //是否带角标
                },
                {
                    "cover": "http://qidian.qpic.cn/qdbimg/349573/1008984041/180",
                    "url": "https://v.qq.com/iframe/player.html?vid=u0023ickfto&auto=0",
                    "superscript": 1 //是否带角标
                },
                {
                    "cover": "http://qidian.qpic.cn/qdbimg/349573/1008984041/180",
                    "url": "https://v.qq.com/iframe/player.html?vid=t0023ymie4d&tiny=0&auto=0"
                },
                {
                    "cover": "http://qidian.qpic.cn/qdbimg/349573/1008984041/180",
                    "url": "https://v.qq.com/iframe/player.html?vid=u0023ickfto&auto=0"
                },
                {
                    "cover": "http://qidian.qpic.cn/qdbimg/349573/1008984041/180",
                    "url": "https://v.qq.com/iframe/player.html?vid=t0023ymie4d&tiny=0&auto=0"
                },
                {
                    "cover": "http://qidian.qpic.cn/qdbimg/349573/1008984041/180",
                    "url": "https://v.qq.com/iframe/player.html?vid=u0023ickfto&auto=0"
                },
                {
                    "cover": "http://qidian.qpic.cn/qdbimg/349573/1008984041/180",
                    "url": "https://v.qq.com/iframe/player.html?vid=t0023ymie4d&tiny=0&auto=0"
                },
                {
                    "cover": "http://qidian.qpic.cn/qdbimg/349573/1008984041/180",
                    "url": "https://v.qq.com/iframe/player.html?vid=u0023ickfto&auto=0"
                }
            ],
            "type": 0
        },
        //多书展示
        {
            "mid": "m111",
            "id": "m1112",
            "index": 11,
            "status": 0,
            "fontcolor": "#ff0000",
            "pricecolor": "green",
            "btn0": "src/images/btn0.png",
            "btn1": "src/images/btn1.png",
            "btn2": "src/images/btn2.png",
            "list": [{
                    "author": "舒静庐",
                    "bid": 223001,
                    "cover": "https:\/\/static.reader.qq.com\/cover\/1\/223001\/b_223001.jpg",
                    "price": "1",
                    "name": "儿女的孝心：把幸福与健康送给老爸老妈",
                    "publish": 1
                },
                {
                    "author": "吉米",
                    "bid": 222999,
                    "cover": "https:\/\/static.reader.qq.com\/cover\/999\/222999\/b_222999.jpg",
                    "price": "1",
                    "name": "月光下的迷情女孩：帅哥真坏，美眉真野"
                },
                {
                    "author": "侯书森 邱卫东",
                    "bid": 223000,
                    "cover": "https:\/\/static.reader.qq.com\/cover\/0\/223000\/b_223000.jpg",
                    "price": "1",
                    "name": "猪八戒是个好男人"
                },
                {
                    "author": "曹金洪",
                    "bid": 223048,
                    "cover": "https:\/\/static.reader.qq.com\/cover\/48\/223048\/b_223048.jpg",
                    "price": "1",
                    "name": "人是自身幸福的设计师（经典智慧系列）"
                },
                {
                    "author": "椰海",
                    "bid": 223049,
                    "cover": "https:\/\/static.reader.qq.com\/cover\/49\/223049\/b_223049.jpg",
                    "price": "1",
                    "name": "梦惑"
                },
                {
                    "author": "曹金洪",
                    "bid": 223050,
                    "cover": "https:\/\/static.reader.qq.com\/cover\/50\/223050\/b_223050.jpg",
                    "price": "400",
                    "name": "容易走的都是下坡路（经典智慧系列）"
                },
            ],
            "discountBagMoney": "400",
            "originalBagMoney": "500"
        },
        //预约按钮
        {
            "mid": "m209",
            "id": "m2097",
            "index": 10,
            "status": 1, //可用  
            "operStatus": 0, //可用
            // "rid": "m1112",
            "rid": "m1043",
            "btn0": "src/images/buybtn2.png", //可点
            "btn1": "src/images/buybtn1.png", //不可点
            "btntype": 1, //0静态 1动态
            "scontent": "我是静态文案",
            "dcontent1": "动态文案1",
            "dcontentNum": "数字",
            "dcontent2": "动态文案2",
            "fontcolor": "green",
            "highcolor": "red"
        },
        //抽奖
        {
            "mid": "m307",
            "id": "m30810",
            "picked": [1],
            "index": 10,
            "count": 0, //抽奖次数
            "status": 0,
            "fullpic": "src/images/gift-main-yue.png",
            "lamp": "src/images/lamp4.png",
            "arrow": "src/images/arrow.png", //旋转指针图
            "btnpic": "src/images/start.png", //开始抽奖图
            "hasIncrement": 1, //没有成长值
            "prizeList": [{
                    "prizeid": "p308001", //这个和抽奖后返回给我的prizeid不是一样的吧
                    "prizetype": "p100",
                    "prizename": "谢谢参与",
                    "prizepic": "https://pic.cnblogs.com/face/1113490/20170225191209.png",
                    "link": 1 //是否是实物奖？？
                },
                {
                    "prizeid": "p308002",
                    "prizename": "奖品1",
                    "prizepic": "https://pic.cnblogs.com/face/1113490/20170225191209.png"
                },
                {
                    "prizeid": "p308003",
                    "prizename": "书券", //阅
                    "prizepic": "https://pic.cnblogs.com/face/1113490/20170225191209.png",
                    "link": 0
                },
                {
                    "prizeid": "p308004",
                    "prizename": "奖品4",
                    "prizepic": "https://pic.cnblogs.com/face/1113490/20170225191209.png"
                },
                {
                    "prizeid": "p308005",
                    "prizename": "奖品5",
                    "prizepic": "https://pic.cnblogs.com/face/1113490/20170225191209.png"
                },
                {
                    "prizeid": "p308006",
                    "prizename": "奖品6",
                    "prizepic": "https://pic.cnblogs.com/face/1113490/20170225191209.png"
                }
            ],
        },
        //领取礼包
        {
            "mid": "m306",
            "id": "m3069",
            "index": 9,
            "status": 0, //0不可用 1可用
            "prizeid": 1,
            "link": 1,
            "operStatus": 0, //0未操作 1已操作
            "hasIncrement": 0,
            "prizepic": "http:\/\/qidian.qpic.cn\/qdbimg\/349573\/86464\/180",
            "name": "我是奖品名称",
            "btn0": "http:\/\/qidian.qpic.cn\/qdbimg\/349573\/86464\/180", //可点状态
            "btn1": "http:\/\/qidian.qpic.cn\/qdbimg\/349573\/86464\/180", //不可点击状态 
            "intro": "本地提供免费领取书券1000万份，先来先得",
            "fontcolor": "green"
        },
        //选书
        {
            "mid": "m302",
            "id": "m3021",
            "index": 11,
            "status": 0,
            "operStatus": 0,
            "selectBids": [],
            "selectIndex": [],
            "fontcolor": "#ff0000",
            "pricecolor": "green",
            "btn0": "src/images/btn0.png",
            "btn1": "src/images/btn1.png",
            "btn2": "src/images/btn2.png",
            "num": 5,
            "list": [{
                    "author": "舒静庐",
                    "bid": 223001,
                    "cover": "https:\/\/static.reader.qq.com\/cover\/1\/223001\/b_223001.jpg",
                    "price": "1",
                    "name": "儿女的孝心：把幸福与健康送给老爸老妈"
                },
                {
                    "author": "吉米",
                    "bid": 222999,
                    "cover": "https:\/\/static.reader.qq.com\/cover\/999\/222999\/b_222999.jpg",
                    "price": "1",
                    "name": "月光下的迷情女孩：帅哥真坏，美眉真野"
                },
                {
                    "author": "侯书森 邱卫东",
                    "bid": 223000,
                    "cover": "https:\/\/static.reader.qq.com\/cover\/0\/223000\/b_223000.jpg",
                    "price": "1",
                    "name": "猪八戒是个好男人"
                },
                {
                    "author": "曹金洪",
                    "bid": 223048,
                    "cover": "https:\/\/static.reader.qq.com\/cover\/48\/223048\/b_223048.jpg",
                    "price": "1",
                    "name": "人是自身幸福的设计师（经典智慧系列）"
                },
                {
                    "author": "椰海",
                    "bid": 223049,
                    "cover": "https:\/\/static.reader.qq.com\/cover\/49\/223049\/b_223049.jpg",
                    "price": "1",
                    "name": "梦惑"
                },
                {
                    "author": "曹金洪",
                    "bid": 223050,
                    "cover": "https:\/\/static.reader.qq.com\/cover\/50\/223050\/b_223050.jpg",
                    "price": "400",
                    "name": "容易走的都是下坡路（经典智慧系列）"
                },
            ],
        },
        //领取限免按钮
        {
            "mid": "m207",
            "id": "m2077",
            "index": 10,
            "status": 0, //可用  
            "operStatus": 0, //可用
            "rid": "m3021",
            "btn0": "src/images/buybtn2.png", //可点
            "btn1": "src/images/buybtn1.png", //不可点
            "btntype": 1, //0静态 1动态
            "scontent": "我是静态文案",
            "dcontent1": "动态文案1",
            "dcontentNum": "数字",
            "dcontent2": "动态文案2",
            "fontcolor": "green",
            "highcolor": "red",
            "btnCols":1
        },
        //加书架按钮
        {
            "mid": "m203",
            "id": "m2031",
            "index": 10,
            "status": 1, //可用  
            "operStatus": 0, //可用
            "rid": "m3021",
            "btn0": "src/images/buybtn2.png", //可点
            "btn1": "src/images/buybtn1.png", //不可点
            "btntype": 1, //0静态 1动态
            "scontent": "我是静态文案",
            "dcontent1": "动态文案1",
            "dcontentNum": "数字",
            "dcontent2": "动态文案2",
            "fontcolor": "green",
            "highcolor": "red",
            "btnCols":1
        },
        //跳转按钮
        {
            "mid": "m212",
            "id": "m2121",
            "index": 10,
            "status": 1,
            "operStatus": 0,
            "linktype": 0, //0 跳转主线客户端 1跳转活动
            "url": "",
            "rid": "m3021",
            "btn0": "src/images/buybtn2.png", //可点
            "btn1": "src/images/buybtn1.png", //不可点
            "fontcolor": "green",
            "highcolor": "red",
            "btnCols":1
        },
        //分享按钮
        {
            "mid": "m202",
            "id": "m2021",
            "index": 10,
            "status": 1,
            "operStatus": 0,
            "rid": "m3021",
            "btn0": "src/images/buybtn2.png", //可点
            "btn1": "src/images/buybtn1.png", //不可点
            "btnCols":1
        }
    ],
    "msg": "初始化页面成功"
}
module.exports = data;
// export {data};