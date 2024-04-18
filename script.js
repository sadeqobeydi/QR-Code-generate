const inputqr = document.querySelector('input')
const btnQr = document.querySelector('button')
const boxQrcode = document.querySelector('.qr-code')
const img = document.querySelector('img')

btnQr.addEventListener('click' , ()=>{
    let inputValue = inputqr.value;
    
    if(!inputValue){
        return alert("لطفا متن یا آدرسی وارد کنید")
    }
    btnQr.innerText="درحال تولید کیو آر کد"
    img.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
    
    img.addEventListener('load' , ()=>{
        boxQrcode.classList.remove('hidden');
        btnQr.innerText="تولید QR Code"
    })
})

inputqr.addEventListener("input" , ()=>{
    if(!inputqr.value){
        boxQrcode.classList.add('hidden');
    }
})