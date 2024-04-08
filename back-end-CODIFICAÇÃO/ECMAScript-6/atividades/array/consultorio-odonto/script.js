const pacientes = []

// entrada de dados
const inPaciente = document.getElementById('inPaciente')

// saída de dados
const outAtendimento = document.getElementById('outAtendimento')
const outLista = document.getElementById('outLista')

// botões
const btnAdicionar = document.querySelector("#btnAdicionar")
const btnUrgência = document.querySelector("#btnUrgência")
const btnAtender = document.querySelector("#btnAtender")

// função adicionar
const adicionarPaciente = () => {
    let nome = inPaciente.value
    if(nome === '') {
        alert('Informe o nome do paciente')
        return
    }
    pacientes.push(nome)

    let lista = ''
    pacientes.map((pacientes, index) => {
        return lista += `${index+1} - ${pacientes}\n`
    })
    outLista.textContent = lista;
    inPaciente.value = ''
};
btnAdicionar.addEventListener('click', adicionarPaciente)

// função urgencia
const urgenciarPaciente = () => {
    let nome = inPaciente.value
    if(nome === '') {
        alert('Informe o nome do paciente')
        return
    }
    pacientes.unshift(nome)

    let lista = ''
    pacientes.map((pacientes, index) => {
        return lista += `${index+1} - ${pacientes}\n`
    })
    outLista.textContent = lista;
    inPaciente.value = ''
};
btnUrgência.addEventListener('click', urgenciarPaciente)

//função atender
const atenderPaciente = () => {
    if (pacientes.length === 0) {
        alert("Não existe paciente na fila de espera");
        return;
    }
    let atender = pacientes.shift()
    outAtendimento.textContent = atender

    let lista = ""
    pacientes.map((pacientes, index) => {
        return lista += `${index+1} - ${pacientes}\n`
    })
    outLista.textContent = lista;
}
btnAtender.addEventListener('click', atenderPaciente)

