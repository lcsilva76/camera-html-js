const video = document.querySelector('#video')
const specs = {video:{width:480, aspectRatio:16/9}}
const brilho = document.querySelector('#brilho')
const contraste = document.querySelector('#contraste')
const tirarFoto = document.querySelector('button')

navigator.mediaDevices.getUserMedia(specs)
.then(stream =>{
    video.srcObject = stream
    video.play()
})
.catch(error=>{
    console.log(error);
})

brilho.addEventListener('input',()=>{
    video.style.filter = `brightness(${brilho.value}%)`
    document.querySelector('#mBrilho').innerHTML = brilho.value+'%'
})

contraste.addEventListener('input',()=>{
    video.style.filter = `contrast(${contraste.value}%)`
    document.querySelector('#mContraste').innerHTML = contraste.value+'%'
})

tirarFoto.addEventListener('click',()=>{
    const canvas = document.querySelector('canvas')
    canvas.height = video.videoHeight
    canvas.width = video.videoWidth
    const context = canvas.getContext('2d')
    context.drawImage(video, 0, 0)
    let link = document.querySelector('#link')
    link.download = 'foto.png'
    link.href = canvas.toDataURL()
    link.textContent = 'Clique para baixar a imagem'    
})