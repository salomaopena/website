const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const secretKey = crypto.randomBytes(32); // Chave de 256 bits
const iv = crypto.randomBytes(16); // Vetor de Inicialização (IV)

// Função para criptografar qualquer tipo de dado
function encrypt(data) {
    const jsonData = JSON.stringify(data); // Convertendo para string JSON
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    let encrypted = cipher.update(jsonData, "utf8", "hex");
    encrypted += cipher.final("hex");
    return {
        iv: iv.toString("hex"),
        encryptedData: encrypted
    };
}


// Função para descriptografar e converter de volta ao tipo original
function decrypt(encryptedData, ivHex) {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(ivHex, "hex"));
    let decrypted = decipher.update(encryptedData, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return JSON.parse(decrypted); // Convertendo de volta ao tipo original
}

// Exportando as funções
module.exports = { encrypt, decrypt };
