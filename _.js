const _ = {
  //1
  clamp: function(number, lower, upper) {
  lowerClampedValue = Math.max(number, lower);
  clampedValue = Math.min(lowerClampedValue,upper);
  return clampedValue;
},
  //2
  inRange: function (number, start, end){
  if (end === undefined){
    end = start;
    start = 0;
  }
   if (start > end){
     temp = end;
     end = start;
     start = temp;
   }
  if (start <= number && number < end){
    return true;
  } else {
    return false;
  }
  
},
  //3
  words: function(string) {
    words = string.split(' ');
    console.log(words)
    return words;
  },
  //4
  pad: function(string, length){
  if (length <=string.length){
    return string;
  } else {
    startPaddingLength = Math.floor((length - string.length)/2);
    endPaddingLength = (length - string.length) - startPaddingLength;
    console.log('startPaddingLength ='+startPaddingLength);
    console.log('endPaddingLength ='+endPaddingLength);
    paddedString = ' '.repeat(startPaddingLength)+string+' '.repeat(endPaddingLength);
    console.log('padded string >'+paddedString+'<');
    return paddedString;
    
  }
},
  //5
  has: function(object,key){
    return object != null && hasOwnProperty.call(object,key);
  },
 //6
  invert: function(object){
    var invertedObject = {}; 
    for (var key in object){
      invertedObject[object[key]] = key;
    }
    return invertedObject;
  },
  //7
  findKey: function(object,predicate){
    for (var key in object){
      let value = object[key];
    	let predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return key;
      }
    }
    return undefined;
  },
  //8
  drop: function(array,n){
    if( n ===undefined){
      var n = 1;
    }
    const droppedArray = array.slice(n);
    return droppedArray;
  },
	//9
  dropWhile: function(array,predicate){
  const dropNumber = array.findIndex(function(element, index){
    return !predicate(element, index, array) //returning the negative of
    //the predicate. Remember the predicate is a function invoked per 
    // iteration of findIndex() and we want the negative of the predicate
  });
  console.log(""+dropNumber);
    
  const dropArray = this.drop(dropNumber); //once we have drop number we
                                           //pass it to .drop()
  return dropArray; //at last we return dropArray
  },
  //10
  chunk: function (array,size){
     if( size ===undefined){
      var size = 1;
    }
    var arrayChunks=[];
    for (i = 0; i < array.length; i = i+size){
      var arrayChunk = array.slice(i,i+size);
     // console.log(i+' '+arrayChunk);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
  
}







// Do not write or modify code below this line.
module.exports = _;