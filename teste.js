const usuario = document.getElementById("lblUsuario")
const senha = document.getElementById("lblSenha")
const resp = document.getElementById("resposta")

function entrar(){

    if(usuario.value === "adm" && senha.value === "123"){
        alert('Sucesfull')
        location.href = "g1.html"
    }else{
        alert(usuario.value+' Tudo errado, olha so que disgraca')

        resp.innerHTML = "Usuario: "+usuario.value+ " Senha: "+senha.value
    }
    
    
}
