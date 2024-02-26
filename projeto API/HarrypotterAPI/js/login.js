const data = [
    {"id": 3, "user": "carlos", "password": "cw33123"},
    {"id": 9, "user": "lua", "password": "lb18123"},
  ]
  console.log(data) //mostrar no console quais estão cadastrado

  const btn = document.querySelector("#login")
  btn.addEventListener('click', (event)=>{
        event.preventDefault() //adicionar password e user

        const user = document.getElementById('user').value
        const password = document.getElementById('password').value

        const login = data.find((obj)=>obj.user === user && obj.password === password) //encontrar password e user

        if(login){ //verificar e validar password e user
            window.location = '../index.html'
        }else{
            alert('Usuário não identificado! Por favor, tente novamente!') 
        }
    })
  