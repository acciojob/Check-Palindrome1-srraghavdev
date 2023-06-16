// complete the given function

function palindrome(str){
let start=0
let end= str.length-1
	while(end>start){
		if(s[start]!== s[end]){
			return false
		}
		end--
		start++
	}
	return true
}
module.exports = palindrome
