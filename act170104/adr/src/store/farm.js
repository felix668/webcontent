const state = {

	change: {
		changing: false,
		stage: 0,
		page: 0,
	},
	mask_author: {
		show: false
	},
	mask_comments: {
		show: false
	}
};

function mutator({state,dispatch},action){
	var $ = state;
	switch(action.type){

		case 'INIT':
			if( state.dev ){
				state.page = 'ready';
				// setTimeout(()=>{
				// 	state.stage++;
				// },2000);
			}else{
				state.page = 'ready';
			};
			break;
		case 'SWITCH':
			console.log(action)
			if( !state.change.changing ){
				//state.change.changing = true;
				if( action.stage ){
					state.change.stage = action.stage;
				}else if( action.page ){
					state.change.page = action.page;
				}
			};
			break;
		case 'SWITCH_OVER':
			state.change.changing = false;
			break;
		case 'REPLAY':
			location.href = location.href;
			break;
	}
}

export default {state,mutator};