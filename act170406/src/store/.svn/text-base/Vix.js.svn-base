const Vix = {
  version: '0.0.1'
};

function install(Vue){
  var _init = Vue.prototype._init;
  Vue.prototype._init = function (options) {
    // if ( options === void 0 ) options = {};

    // options.init = options.init
    //   ? [vuexInit].concat(options.init)
    //   : vuexInit

    if (options.store) {
      this.$store = options.store
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
    }
    _init.call(this, options)
  }
}

function createStore( modules ){

  const state = {};
  const mutators = {};
  const getters = {};

  modules.forEach(a=>{
    // shallowly merge a.state into state
    for( var key in a.state ){
      if( state[key]!==undefined ){
        throw new Error(`[Vix] state.${key} is already occupied.`);
      }else{
        state[key] = a.state[key];
      };
    };
    // mutator is a function that takes the action
    // and mutate the state
    for( var key in a.mutators ){
      if( mutators[key]!==undefined ){
        throw new Error(`[Vix] mutators.${key} is already occupied.`);
      }else{
        mutators[key] = a.mutators[key];
      };
    };

    if( a.getters ){
      for( let key in a.getters ){
        if( getters[key]!==undefined ){
          throw new Error(`[Vix] getters.${key} is already occupied.`);
        }else{
          Object.defineProperty( getters, key, {
            enumerable: true,
            configurable: true,
            // writable: elKey?true:false,
            get: function(){
              return a.getters[key]({state,getters});
            }
          })
          // getters[key] = function(){
          //   return a.getters[key]({state,getters});
          // };
        };
      };
    }
  })

  // make state reactive
  new Vue({
    data: state
  });

  const store = {
    state: state,
    mutators: mutators,
    getters: getters,
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
    // call the mutator with the same name of action.type
    if( typeof mutators[action.type]==='function' ){
      mutators[action.type].call( vm,{state,dispatch,getters},action );
    }else{
      throw new Error(`[Vix] \"${action.type}\" is an invalid action-type.`);
    }
  }

}

Vix.install = install;
Vix.createStore = createStore;
// console.log(Vix)
export default Vix;