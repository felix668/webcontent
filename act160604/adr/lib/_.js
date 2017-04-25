
var _ = {
	bubbleSort: bubbleSort,
	camelCase: camelCase,
	copy: copy,
	//each
	extend: extend,
	forEach: forEach
	//map
};

// Functions to process strings.
/**
 * Make a string camelcased.
 * @param  {string} string
 * @return {string}
 */
function camelCase( string ){
	string = string.replace(/(-[a-z]?)|(_[a-z]?)/ig,function(match){
		return match.replace(/-|_/,'').toUpperCase();
	});			
	return string;
}

// Functions to process arrays.
function forEach( arr,callback ){
	for( var i=0;i<arr.length;i++ ){
		callback( arr[i],i );
	}
}
function bubbleSort(arr){
	var i = 0;
	while( i<arr.length-1 ){
		for( var j=i+1;j<arr.length-1;j++ ){
			if( arr[i]>arr[j] ){
				var x = arr[i];
				arr[i] = arr[j];
				arr[j] = x;
			};
		};
		i++;
	}
	return arr;
}

// Functions to process objects.
/**
 * Extend an object.
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function extend ( obj ){
	var target = this;
	for( var p in obj ){
		target[p] = obj[p];
	}
	return target;
}

function copy ( src,deep ){
	var __copy;
	if( typeof src === "object" ){
		if( src.length ){
			__copy = [];
		}else{
			__copy = {};
		};
		for( var x in src ){
			if( deep && typeof src[x] === "object" ){
				__copy[x] = Zeal.copy( src[x],true );
			}else{
				__copy[x] = src[x];
			};
		};
		return __copy;
	};
};

window._ = _;

export {_};