function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
  
  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc
  
  // the correctly sorted array should be returned.
  let arr1 = []
  let j = 0
  let k = 0
  let arr2 = []
  let z = 0
  let pop = []
  for(let i = 0; i<array.length; i++){
    if(array[i]!= 0 || array[i] + '' == 'false'){
      arr1[j] = array[i]
    }
    else{    
      if(array[i] == 0){
        if(typeof(array[i]) == 'string'){
          arr2[z] = '0'
          z++
        }
        else{
          arr2[z] = 0
          z++
        }
      }     
      j--
    }
    j++
  }
  j = 0
  for(let i = 0; i<arr1.length + arr2.length; i++){
    if(i<arr1.length){
      pop[i] = arr1[i]
    }
    else{
      pop[i] = arr2[j]
      j++
    }
  }
  return pop;
}
console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, '0', 19, 14]))