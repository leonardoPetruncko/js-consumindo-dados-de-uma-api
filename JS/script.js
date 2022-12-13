async function buscaEndereço() {
    try {
        const consultaCEP = await fetch('https://viacep.com.br/ws/01001250/json/')
        const consultaCEPConvertida = await consultaCEP.json()

        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!')
        }
        console.log(consultaCEPConvertida)
    } catch (erro) {
        console.log(erro)
    }
}

buscaEndereço()