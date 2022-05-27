//https://www.codewars.com/kata/58ad09d6154165a1c80000d1




function zeroAndOne(s) {
	  let counting = 0 
	  for (let i=0; i<s.length; i++){
		      if((s[i] === "0" && s[i+1] ==="1") || (s[i] === "1" && s[i+1] === "0")) i++
		      else counting++
		      }
	    return counting 
	  }
