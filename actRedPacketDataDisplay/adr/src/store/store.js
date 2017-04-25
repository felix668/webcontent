function createStore( modules ){

	const state = {};
	const reducers = [];
	modules.forEach(a=>{
		for( var key in a.state ){
			state[key] = a.state[key];
		};
		reducers.push(a.reducer);
	})

	const store = {
		state: state,
		act: $act,
		dispatch: $act,
		enhance: enhance,
		merge: enhance
	};
	console.log(store)
	return store; 

	function enhance( _data,_act ){
		var store = this;
		for( var key in _data ){
			store.data[key] = _data[key]
		};
		reducers.push( _act );
		return store;
	}

	function $act(action){
		var vm = this;
		reducers.forEach(a=>{
			a.call( vm,store.state,action );
		})
	}

}

export {createStore};