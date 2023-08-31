const voucher_codes = require('voucher-code-generator');
const code = voucher_codes.generate({
    length: 8,
    count: 5
});
module.exports = code