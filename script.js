// complete the given function

function palindrome(str){
let start=0
let end= str.length-1
	while(end>start){
		if(s.charAt(start)!= s.charAt(end)){
			return false
		}
		end--
		start++
	}
	return true
}
module.exports = palindrome
