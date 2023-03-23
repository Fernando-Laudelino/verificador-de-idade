function verificar(){
    var date= new Date()
    var ano = date.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Digite o ano correto ')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].Checked){
            genero = 'Homem'
        }else if(fsex[1].Checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}