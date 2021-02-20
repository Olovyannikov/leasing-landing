const inputMask = () => {
    let inputPhone = document.getElementById("maskTel");
    inputPhone.oninput = () => phoneMask(inputPhone)

    function phoneMask(inputEl) {
        let patStringArr = "+7(___)___-__-__".split('');
        let arrPush = [3, 4, 5, 7, 8, 9, 11, 12, 14, 15]
        let val = inputEl.value;
        let arr = val.replace(/\D+/g, "").split('').splice(1);
        let n;
        let ni;
        arr.forEach((s, i) => {
            n = arrPush[i];
            patStringArr[n] = s
            ni = i
        });
        arr.length < 10 ? inputEl.style.color = '#F59595' : inputEl.style.color = '#5AB772';
        arr.length < 10 ? inputEl.style.border = '2px solid #F59595' : inputEl.style.border = '2px solid #5AB772'
        inputEl.value = patStringArr.join('');
        n ? inputEl.setSelectionRange(n + 1, n + 1) : inputEl.setSelectionRange(17, 17)
    }
}

export default inputMask;
