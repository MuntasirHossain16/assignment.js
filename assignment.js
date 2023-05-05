function binaryXOR(m, k) {
  let result = "";
  for (let i = 0; i < m.length; i++) {
    result += m[i] === k[i] ? "0" : "1";
  }
  return result;
}

let m = "11001010110";
let k = "10011100011";
let c = binaryXOR(m, k);
console.log("Ciphertext: " + c);
