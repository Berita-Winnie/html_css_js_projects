let imgBox = document.getElementById('img-box')
let qrImage = document.getElementById('qrImage')
let qrText = document.getElementById('qrText')
let qrBtn = document.getElementById('qrBtn')

function generateQr() {
  qrImage.src =
    'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
    qrText.value
  imgBox.classList.add('show-img')
}

qrBtn.addEventListener('click', () => generateQr())
