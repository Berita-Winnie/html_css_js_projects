let imgBox = document.getElementById('img-box')
let qrImage = document.getElementById('qrImage')
let qrText = document.getElementById('qrText')
let qrBtn = document.getElementById('qrBtn')

function generateQr() {
  if (qrText.value.length > 0) {
    qrImage.src =
      'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
      qrText.value
    imgBox.classList.add('show-img')
  } else {
    qrText.classList.add('error')
    setTimeout(() => {
      qrBtn.textContent.classList.remove('error')
    }, 1000)
  }
}
qrBtn.addEventListener('click', () => generateQr())
