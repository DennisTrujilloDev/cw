//https://www.codewars.com/kata/56e9ac87c3e7d512bc001363


function asciiEncrypt(plaintext) {
  let arr = []
  for(let i=0; i<plaintext.length; i++){
    arr.push(String.fromCharCode(plaintext.charCodeAt(i) + i)) 
  }  
  return arr.join("")
}
    
function asciiDecrypt(ciphertext) {
    let arrs = []
    for (let i=0; i<ciphertext.length; i++){
      arrs.push(String.fromCharCode(ciphertext.charCodeAt(i) - i))
    }
 return arrs.join("")
}




// function asciiEncrypt(plaintext) {
//   let crypted = [];
//   for (var i = 0; i < plaintext.length; i++) {
//     crypted.push(String.fromCharCode(plaintext.charCodeAt(i) + i));
//   } 
//   return crypted.join("")
// };
    
// function asciiDecrypt(ciphertext) {
//   let decrypted = [];
//   for (var i = 0; i < ciphertext.length; i++) {
//     decrypted.push(String.fromCharCode(ciphertext.charCodeAt(i) - i));
//   } 
//   return decrypted.join("")
// };
        
