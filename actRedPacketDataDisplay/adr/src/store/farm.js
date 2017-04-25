const data = {

};

function act(action){
	var self = this;
	switch(action.type){

		case 'INIT':
			if( self.dev ){
				self.page = 'ready';
			}else{
				self.page = 'ready';
			};
			break;
	}
}

export default {data,act};