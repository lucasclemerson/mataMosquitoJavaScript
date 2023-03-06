function iniciarJogo(){
  var nivel = document.getElementById('nivel').value
  if(nivel === '0')
  {
    alert('Selecione um nível para jogar!!')
    return false
  }
  window.location.href = 'app.html?' + nivel
}