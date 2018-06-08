function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
  
  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc
  
  // the correctly sorted array should be returned.
  let kek = []
  let  j = 0
  let k = 0
  let lel = []
  let z = 0
  let pop = []
  for(let i = 0; i<array.length; i++){
    if(array[i]!= 0 || array[i] + '' == 'false'){
      kek[j] = array[i]
    }
    else{    
      if(array[i] == 0){
        if(typeof(array[i]) == 'string'){
          lel[z] = '0'
          z++
        }
        else{
          lel[z] = 0
          z++
        }
      }     
      j--
    }
    j++
  }
  j = 0
  for(let i = 0; i<kek.length + lel.length; i++){
    if(i<kek.length){
      pop[i] = kek[i]
    }
    else{
      pop[i] = lel[j]
      j++
    }
  }
  return pop;
}
console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, '0', 19, 14]))