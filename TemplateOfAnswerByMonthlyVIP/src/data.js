const data={
	name: '包月活动',//标题
	pictureAndStyle:{
		banner: '../adr/public/images/banner.png',//banner头图
		btn_bg:'../adr/public/images/btn_bg.png',//首页按钮背景图
		font_color:'#f9ebcd',//按钮字体颜色
		priv_img:'../adr/public/images/vipimg.jpg',//未开通包月特权图
		gobook_btnbg:'../adr/public/images/gobook.png',//提示按钮背景图
		gobookcolor:'#f9ebcd',
        btnbg:'../adr/public/images/nextbg.png',//提交答案按钮背景图
        btncolor:'#f9ebcd',
		bodybg:'../adr/public/images/bg.png',//全页面背景图
	},
	rule: {
		text: [//规则
            '活动时间：2017年3月7日—3月13日；',
            '活动仅限包月VIP用户参与（体验卡开通、系统赠送的包月用户不算；',
            '用户做完题后，点击提交按钮，上传答案；每答对一题，获得5书券／阅券；',
            '活动期间，用户只能提交答案一次；',
            '安卓／iOS平台，奖励互通，不能重复领取。'
        ],
        priv_text:[
			'包月库内10万册书籍在线免费阅读','非包月库存内书籍、看书听书8折优惠'
        ]
	},
	card:{
		quannum:5,
		selresulte:[],
		tonext:false,
		list:[
			{
				bid:'121',
				bookname:'书名1',
				answerName:'1. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult:['2016年7月7日15点—7月15日啊索朗','多吉哈萨克和打瞌睡叠好地为','阿拉山口参加啊深刻检查','阿安莎社卡刷卡后说'],
			},
			{
				bid:'122',
				bookname:'书名2',
				answerName:'2. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult:['2016年7月7日15点—7月15日啊索朗','多吉哈萨克和打瞌睡叠好地为','阿拉山口参加啊深刻检查','阿安莎社卡刷卡后说'],
			},
			{
				bid:'123',
				bookname:'书名3',
				answerName:'3. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult:['2016年7月7日15点—7月15日啊索朗','多吉哈萨克和打瞌睡叠好地为','阿拉山口参加啊深刻检查','阿安莎社卡刷卡后说'],
			},
			{
				bid:'124',
				bookname:'书名4',
				answerName:'4. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult:['2016年7月7日15点—7月15日啊索朗','多吉哈萨克和打瞌睡叠好地为','阿拉山口参加啊深刻检查','阿安莎社卡刷卡后说'],
			}
		]
	},
	resultData:{
		resulenum:0,
		resultquan:'',
		resultbooks:[{
			bid:'223',
			author:'银子浩',
			bookname:'丈量世界',
			bookface:'../adr/public/images/bookface1.jpg'
		},{
			bid:'221',
			author:'言七',
			bookname:'旅行摄影圣经',
			bookface:'../adr/public/images/bookface2.jpg'
		}]
	}
};
export default data;
