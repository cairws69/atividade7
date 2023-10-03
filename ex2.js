class Pessoa {
    constructor(nome, telefone, renda ,email){
        this._nome = nome;
        this._telefone = telefone;
        this._renda = renda;
        this._email = email;
    }
    verificarCredito(){
         return new Promise ((resolve, reject) => {
            if(this._renda > 2000){
                resolve(`Credito aprovado`)
            } else{
                reject(`Credito recusado`)
            }
         })
    }
}
    const cliente1 =new Pessoa("Joao Pedro","19971660755","100","jpedrocaires@gmail.com")
    console.log(cliente1)

    cliente1.verificarCredito()
    .then((mensagem) =>{
    console.log(mensagem)
    })
    .catch((erro) =>{
    console.error(erro)
    }
    )