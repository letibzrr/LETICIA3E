const data = [
    {"id": 1, "usuario": "carlos", "senha": "123456"},
    {"id": 2, "usuario": "igor", "senha": "654321"},
    {"id": 3, "usuario": "leticia", "senha": "123654"}
  ]
  console.log(data) //ligação com json (após o erro)

const btn = document.querySelector('#login')
btn.addEventListener('click', (event)=>{
    event.preventDefault() //recebimento de usuario e senha no console

    const user = document.getElementById('user').value
    const password = document.getElementById('password').value

    data.find((obj)=>obj.usuario === user && obj.senha === password) //encontrar compatibilidade nas informações inseridas (usuario e senha)

    if(login){
        window.location = '../index.html'
    }else{

        alert('Usuário não encontrado')
    }
})