globalThis.message ="globalA";
module.exports = () => globalThis.message; //글로벌 변수를 내보낸다. 