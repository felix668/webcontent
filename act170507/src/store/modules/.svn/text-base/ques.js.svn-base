const results = [{
	title: '属于《巫神纪》主角姬昊型',
	desc: '自信勇敢又积极向上，果敢坚毅的你有着超强的人格魅力，在团队中是众人最坚强的后盾！',
	text: '我是姬昊型的主角'
},{
	title: '属于《三界血歌》主角殷血歌型',
	desc: '处变不惊，心思缜密的你，可能让敌人觉得阴冷腹黑，但朋友却会认为你内向稳重让人感到安心。',
	text: '我是殷血歌型的主角'
},{
	title: '属于《光明纪元》主角林齐型',
	desc: '有些小贪心，但是却并不小气！脾气有些火爆，但对心爱的人却异常温和！有着些许缺点，但却能始终坚守自己心中的原则！',
	text: '我是林齐型的主角'
}];

const state = {
	ques: {
		state: '',
		status: 'resolved',
		picked: -1,

		questions: [{
			ask: '一觉醒来你发现自己穿越在一个山洞中，你会:',
			options: [{
				option: 'A | 立刻起身出山洞看看',
				score: 20
			},{
				option: 'B | 先观察山洞中的环境',
				score: 5
			},{
				option: 'C | 查看自身情况',
				score: 1
			}]
		},{
			ask: '出山洞后你加入了门派，一次任务中兄弟被人欺负了，你会:',
			options: [{
				option: 'A | 回门派集合兄弟一起打回去',
				score: 20
			},{
				option: 'B | 先回营地，晚上摸黑一个个修理他们',
				score: 5
			},{
				option: 'C | 冲上去暴揍他们，不管打不打得过',
				score: 1
			}]
		},{
			ask: '外出组队历练，你觉得你在队伍中的角色会是？',
			options: [{
				option: 'A | 队长类的角色，擅长指挥和组织',
				score: 20
			},{
				option: 'B | 刺客类的角色，杀敌时一击毙命',
				score: 5
			},{
				option: 'C | 战士类的角色，冲锋在前',
				score: 1
			}]
		},{
			ask: '历练过程中居然遇见了你生命中的女神，你觉得她？',
			options: [{
				option: 'A | 温柔美丽，让人如沐春风',
				score: 20
			},{
				option: 'B | 性感知性，还带一些冷艳',
				score: 5
			},{
				option: 'C | 活泼俏皮，像个小公主',
				score: 1
			}]
		},{
			ask: '你和女神准备金盆洗手，你希望在哪里隐居？',
			options: [{
				option: 'A | 一个开满油菜花的美丽平原村庄',
				score: 20
			},{
				option: 'B | 一个深山中的世外桃源',
				score: 5
			},{
				option: 'C | 一个能看到蔚蓝大海的海边渔村',
				score: 1
			}]
		}],
		current: 0,

		result: {
			title: '--',
			desc: '--',
			text: '--'
		}, 

		res: 0,
		finalScore: 0,
	},
	
};

const mutators = {
	ANSWER_ONE ({state,dispatch},action) {
		console.log(action.i)
		var qu = state.ques;
		if( qu.status!=='pending' ){
			qu.status = 'pending';
			qu.picked = action.i;
			qu.finalScore += qu.questions[qu.current].options[action.i].score;
			setTimeout(()=>{
				if( qu.current<4 ){
					qu.current++;
					qu.picked = -1;
					qu.status = 'resolved';
				}else{
					dispatch({
						type: 'SUBMIT_QUES',
						score: qu.finalScore
					})
				}
			},400);
		};
	},
	SUBMIT_QUES ({state,dispatch},action) {
		if( state.dev===false ){
			Local.forceLog( common.param('act_f'),`one_finishedQues` );
			Local.reqaObj( common.server()+`pkg170301/testsubmit?result=${action.score}`, function(data) {
				console.log(data)
				if( data.code===0 ){
					dispatch({
						type: 'FINISH_QUES',
						score: state.ques.finalScore
					})
				}else{
					Local.showToast(data.msg);
				}
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		}else{
			dispatch({
				type: 'FINISH_QUES',
				score: state.ques.finalScore
			})
		};
	},
	FINISH_QUES ({state,dispatch},action) {
		(function(score){
			var qu = state.ques;
			qu.finalScore = score;
			if( score>55 ){
				qu.res = 0;
			}else if( score<25 ){
				qu.res = 2;
			}else{
				qu.res = 1;
			}
			qu.result = results[qu.res];
			qu.state = 'done';
		})(action.score);
	}
}

export default {state,mutators};