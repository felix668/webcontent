const Components={
	// m102:(resolve,reject) => {
	// 	require.ensure([],() => {
	// 		resolve(require('./rule'))
	// 	},() => {
	// 		//调用reject(reason)进行失败处理
	// 	},'rule');
	// },
	// m102:() => {
	// 	return import(/*webpackChunkName:"rule"*/'./rule');
	// },
	// maskOver:() => {
	// 	return import(/*webpackChunkName:"over"*/'./common/over');
	// },
	maskLoad:require('./common/load'),
	maskOver:require('./common/over'),
	tipMask:require('./tipMask'),
	m101:require('./banner.vue'),
	m102:require('./rule.vue'),
	m103:require('./title'),
	m104:require('./singleBook'),
	m105:require('./videoBox'),//站内资源
	m106:require('./audioBox'),
	m107:require('./author'),
	m108:require('./timeCounter'),
	m109:require('./newBookbtn'),
	m110:require('./videoBoxs'),//腾讯视频
	m111:require('./showBooks'),
	m302:require('./selBooks'),
	m306:require('./getPack'),
	m307:require('./lottery'),
	m201:require('./buybtn'),
	m202:require('./sharebtn'),
	m203:require('./shelfbtn'),
	m204:require('./shelfreadbtn'),
	m207:require('./freebtn'),
	m209:require('./orderbtn'),
	m211:require('./readbtn'),
	m212:require('./linkbtn')
}
export default Components;