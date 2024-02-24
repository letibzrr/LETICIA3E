const data = [
    {"id": 3, "user": "carlos", "password": "cw33123"},
    {"id": 9, "user": "lua", "password": "lb18123"},
  ]
  console.log(data) //password and user

  const btn = document.querySelector("#login")
  btn.addEventListener('click', (event)=>{
        event.preventDefault() //user and password add

        const user = document.getElementById('user').value
        const password = document.getElementById('password').value

        data.find((obj)=>obj.user === user && obj.password === password) //find user and password

        if(login){
            window.location = '../index.html'
        }else{
            alert('Usuário não identificado')
        }
    })
  