function verificar(){
    var date= new Date()
    var ano = date.getFullYear()
    var fano = window.document.getElementById('txtano')
    var nome = document.getElementById('txtnome').value
    var res = window.document.getElementById('res')

    if(fano.value.length != 4 || Number(fano.value) > ano){
        window.alert('Digite o ano correto ')
    }else{
    
        var idade = ano - Number(fano.value)
        var genero = document.querySelector('input[name="radsex"]:checked').value
        if (genero == 'mas'){
            genero = 'Masculino'
        }else {
            genero = 'Feminino'
        }
        
        res.innerHTML = `${nome} detectamos o seu gênero: ${genero} idade: ${idade}`
         
    }

}
