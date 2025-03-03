// Description:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.




//SOLUTIONS:

function accum(s) {
	return s.split('').map((el,i)=> el.repeat(i+1).toLowerCase().replace(/^./, char => char.toUpperCase())).join('-')
}


function accum(s) {
	return s.split('').map((el,i) => el.toUpperCase()+el.toLowerCase().repeat(i)).join('-')
}