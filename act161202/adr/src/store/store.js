function createStore(data,act){

	const reducers = [act];

	const store = {
		data: data,
		act: $act,
		dispatch: $act,
		enhance: enhance,
		merge: enhance
	};

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
			a.call( vm,action );
		})
	}

}

export {createStore};