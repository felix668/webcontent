
var _ = {
	bubbleSort: bubbleSort,
	camelCase: camelCase,
	copy: copy,
	//each
	deepClone: deepClone,
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

/**
 * Traverse an array or an array-like object.
 * 
 * @param  {array|object}   arr      [description]
 * @param  {Function} callback [description]
 */
function forEach( src,callback ){
	if( typeof src==='object' ){
		for( var i=0;i<src.length;i++ ){
			callback( src[i],i );
		}
	}else{
		throw new TypeError('src must be an object or an array.').stack;
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
 * 
 * @param  {object} obj [description]
 * @return {object}     [description]
 */
function extend ( target,src,deep ){
	for( var key in src ){
		if( deep&&src[key]==='object' ){
			target[key] = extend( target[key],src[key],true );
		}else{
			target[key] = src[key];
		};
	}
	return target;
}
function deepExtend( target,src ){
	return extend( target,src,true );
}

function copy ( src,deep ){
	var __copy;
	if( typeof src === "object" ){
		if( src.length ){
			__copy = [];
		}else{
			__copy = {};
		};
		for( var key in src ){
			if( deep && typeof src[key] === "object" ){
				__copy[key] = copy( src[key],true );
			}else{
				__copy[key] = src[key];
			};
		};
		return __copy;
	}else{
		throw new TypeError('src must be an object.').stack;
	}
};
function shallowCopy(src){
	return copy(src,false)
}
function deepClone(src){
	return copy(src,true)
}

window._ = _;

export {_};