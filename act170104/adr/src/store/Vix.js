const Vix = {};

function createStore( modules ){

	const state = {};
	const mutators = [];

	modules.forEach(a=>{
		// shallowly merge a.state into state
		for( var key in a.state ){
			if( state[key]!==undefined ){
				throw new Error(`state.${key} is already occupied.`);
			}else{
				state[key] = a.state[key];
			};
		};
		// mutator is a function that takes the action
		// and mutate the state
		mutators.push(a.mutator);
	})

	const store = {
		state: state,
		act: dispatch,
		dispatch: dispatch,
		enhance: enhance,
		merge: enhance
	};
	//console.log(store)
	return store; 

	function enhance({state,reducer}){
		var store = this;
		for( var key in state ){
			store.state[key] = state[key]
		};
		mutators.push( mutator );
		return store;
	}

	// dispatch an action which will change the state
	function dispatch(action){
		var vm = this;
		// call the mutators one by one
		mutators.forEach(a=>{
			a.call( vm,{state,dispatch},action );
		})
	}

}

Vix.createStore = createStore;

export default Vix;