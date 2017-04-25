
const state = {
	audio: {
		on: false
	},
	change: {
		stage: 0
	}
};

const mutators = {
	INIT ({state,dispatch},action) {
		if( state.meta.share ){
			dispatch({
				type: 'SET_SECOND_SHARING'
			});
			state.page = 'ready';
		}else{
			Local.forceLog( common.param('act_f'),`enter` );
			dispatch({
				type: 'SET_ICON'
			});
			state.page = 'ready';

		}
	},
	TURN_AUDIO ({state,dispatch},action) {
		Local.forceLog( common.param('act_f'),`play` );
		state.audio.on = !state.audio.on;
	},
	CHANGE ({state,dispatch},action) {
		if( action.to===4 ){
			Local.forceLog( common.param('act_f'),`end` );
		};
		state.change.stage = action.to;
	},
	CLICK_BTN ({state,dispatch},action) {
		if( state.meta.share ){
			dispatch({
				type: 'TO_APP'
			})
		}else{
			dispatch({
				type: 'SHARE'
			})
		}
	}
}

export default {state,mutators};