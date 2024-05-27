function showInfo(){
    const infoDiv = document.querySelector('.info')
    const senha = document.getElementById('passInput').value;
  
    if (senha === '') {
      infoDiv.style.display = 'none'; // Esconder a div de informações quando o campo está vazio
    } else {
      infoDiv.style.display = 'block'; // Mostrar a div de informações quando o usuário começa a digitar
    }
  }
  
  function verifyPass(){
    
    showInfo();
    const senha = document.getElementById('passInput').value
    const feed = document.getElementsByClassName('feed')
   
  
  
    const maiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const number = '0123456789'
    const especial = '@#$%&!'
  
    let m = []
    let n = []
    let e =[]
     
    //validação letras maiúsculas
    for(i = 0; i<senha.length; i++){
      m.push(maiuscula.indexOf(senha.charAt(i)))
      let maxM = Math.max.apply(null,m)
      if(maxM >= 0) {
        feed[1].style.color = '#15803d'
      } else {
        feed[1].style.color = '#ff383b'
      }
  
      n.push(number.indexOf(senha.charAt(i)))
      let maxN = Math.max.apply(null,n)
      if(maxN >= 0) {
        feed[2].style.color = '#15803d'
      } else {
        feed[2].style.color = '#ff383b'
      }
  
      e.push(especial.indexOf(senha.charAt(i)))
      let maxE = Math.max.apply(null,e)
      if(maxE >= 0) {
        feed[3].style.color = '#15803d'
      } else {
        feed[3].style.color = '#ff383b'
      }
  
      if(senha.length >=8){
        feed[0].style.color = '#15803d'
      } else{
        feed[0].style.color = '#ff383b'
      }
    }
  }
  