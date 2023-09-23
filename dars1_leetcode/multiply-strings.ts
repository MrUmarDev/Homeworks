// leetcode link: https://leetcode.com/problems/multiply-strings/

function multiply(num1: string, num2: string): string {
    const m = num1.length;
    const n = num2.length;
    const productArray = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const product = parseInt(num1[i]) * parseInt(num2[j]);
            const sum = product + productArray[i + j + 1];
            productArray[i + j] += Math.floor(sum / 10);
            productArray[i + j + 1] = sum % 10;
        }
    }

    const result = productArray.join('').replace(/^0+(?=\d)/, '');

    return result === '' ? '0' : result;
}

// misol uchun:
const num1 = "123";
const num2 = "456";
const result = multiply(num1, num2);
console.log(result); // javob: 56088
