function isValidIP(str) {
	let a = 0
	let b = 0
	let c = 0
	if(str ==''){
		return false
	}
	str = str.split('')
	for(let  i = 0; i<str.length; i++){
   		if(str[i] == ' '){
			return false
		}

		if(str[i] == '.'){
   			a += 1
  		}
	}
	if(a != 3){
		return false
	}
 	str = str.join('')
	str = str.split('.')
	for(let  i = 0; i<str.length; i++){
		if(+str[i]>=0 && +str[i]<=255){
			b +=1
			if(+str[i] == 0){
				c +=1 
			}
		}
	}
	if(b == 4){
		return true
	}
	else{
		return false
	}
}
console.log(isValidIP('0.0.0.0'))