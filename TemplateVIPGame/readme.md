测试链接
安卓
http://solomotest4.3g.qq.com/book_res/event/TemplateVIPGame/index.html?tpcId=331470&act_f=170902
ios
https://ptsolomo.reader.qq.com/book_res/event/TemplateVIPGame/index.html?tpcId=331470&act_f=170902

正式ios
https://yuedu.reader.qq.com/event/TemplateVIPGame/index.html?act_f=170803
正式安卓
http://iyuedu.qq.com/event/TemplateVIPGame/index.html?act_f=170803

ios6 375*603
mate8 360*532
mate9 393*586
开始游戏－触发ready go动画，进入点击物品得积分动画，10s时间倒计时开始，动画结束纪录用户所得积分，向下取整计算书券，点击再来一次，重新开始动画，动画结束纪录本次游戏用户所得积分，并计算相应书券，同时计算用户所得积分的最高值，展示给用户，点击提交最高分，提交用户最熬积分，根据积分让用户领取书券，开通包月活动10倍书券，用户开通几个月获得N＊10倍的书券（之所以这样处理是用户开通N个包月，在玩游戏后必须在次开通才可以领取10倍书券，这样会造成多发书券），包月用户在次玩游戏不开通的话只能领取正常书券
1、积分动画使用了js实现
2、注意vue是虚拟dome，显示元素后不能立即获取到元素，对元素的操作要放在requestAnimationFrame函数里
3、光转动动画，动画时长小于3s动画无法匀速转动
4、随机数概率
5、数组从小到大排序
6、提交积分后，页面状态没发生变化
7、ios开通包月返回不能刷新页面，用弹框来重发请求
8、小米3动画延时失效，js添加动画延时