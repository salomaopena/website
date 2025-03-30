const { encrypt, decrypt } = require("../middlewares/cryptoMiddleware");

// Teste com número
const num = 12345;
const encryptedNum = encrypt(num);
console.log("Número Criptografado:", encryptedNum);
console.log("Número Descriptografado:", decrypt(encryptedNum.encryptedData, encryptedNum.iv));

// Teste com string
const text = "Minha mensagem secreta";
const encryptedText = encrypt(text);
console.log("Texto Criptografado:", encryptedText);
console.log("Texto Descriptografado:", decrypt(encryptedText.encryptedData, encryptedText.iv));

// Teste com objeto
const obj = { id: 1, nome: "João", ativo: true };
const encryptedObj = encrypt(obj);
console.log("Objeto Criptografado:", encryptedObj);
console.log("Objeto Descriptografado:", decrypt(encryptedObj.encryptedData, encryptedObj.iv));

// Teste com array
const arr = [10, 20, 30, "teste"];
const encryptedArr = encrypt(arr);
console.log("Array Criptografado:", encryptedArr);
console.log("Array Descriptografado:", decrypt(encryptedArr.encryptedData, encryptedArr.iv));



