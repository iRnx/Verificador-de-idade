function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }

    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imagens/Bebe-homem.jpg')
                img.setAttribute('alt', 'Foto bebe homem')
            }

            else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'imagens/Homem-jovem.jpg')
                img.setAttribute('alt', 'Foto homem jovem')
            }

            else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'imagens/Homem-adulto.jpg')
                img.setAttribute('alt', 'Foto homem adulto')
            }

            else {
                // Idoso
                img.setAttribute('src', 'imagens/Homem-velho.jpg')
                img.setAttribute('alt', 'Foto homem idoso')
            }
        }

        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imagens/Bebe-menina.jpg')
                img.setAttribute('alt', 'Foto Bebe menina')
            }

            else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'imagens/Mulher-jovem.jpg')
                img.setAttribute('alt', 'Foto mulher jovem')
            }

            else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'imagens/Mulher-adulta.jpg')
                img.setAttribute('alt', 'Foto mulher adulta')
            }

            else {
                // Idoso
                img.setAttribute('src', 'imagens/Mulher-velha.jpg')
                img.setAttribute('alt', 'Foto mulher idosa')
            }
        }
        
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
        
    }
    
}

document.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        const btn = document.querySelector("#send")
        btn.click()
    }

})