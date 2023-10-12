module.exports = function toReadable (number) {
  let number1 = String(number);

let word = '';
let one = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
let ten = {0: 'ten', 1: 'eleven', 2: 'twelve', 3: 'thirteen', 4: 'fourteen', 5: 'fifteen', 6: 'sixteen', 7: 'seventeen', 8: 'eighteen', 9: 'nineteen'}
let ty = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}
let strCopy = number1.split('');
if (number1.length === 3) {
	num1 = Number(strCopy[0]);
	num2 = Number(strCopy[1]);
	num3 = Number(strCopy[2]);
	str_num1 = one[num1];	
	word = str_num1 + ' hundred';
	if (num2 === 1) {
	word = word + ' ' + ten[num3];
	}else{
		if (num2 > 0) {
			word = word + ' ' + ty[num2];
			}	
			if (num3 > 0) {
			word = word + ' ' + one[num3];
			}	
	}	
}

if (number1.length === 2) {
	num1 = Number(strCopy[0]);
	num2 = Number(strCopy[1]);	
	if (num1 === 1) {
	word = word + ten[num2];
	}else{
	word = word + ty[num1];
		if (num2 > 0) {
	word = word + ' ' + one[num2];
	}	
	}	
}

if (number1.length === 1) {
	num1 = Number(strCopy[0]);	
	if (num1 > 0) {
	word = word + one[num1];
	}else{
	word = 'zero';
	}		
}
return(String(word));
}
