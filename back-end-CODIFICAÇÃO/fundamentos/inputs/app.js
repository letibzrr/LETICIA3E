const colors = require('colors')
const inquirer = require('inquirer')

inquirer
.prompt([
    {
        name: 'pergunta1',
        message: 'Qual a primeira nota?'
    },
    {
        name: 'pergunta2',
        message: 'Qual a segunda nota?'
    }
])
.then((answers) => {
    console.log(answers);
    const media = ((Number(answers.pergunta1) + Number(answers.pergunta2)) / 2).toFixed(1)

    if(media >= 6){
        console.log(`Aluno aprovado com média ${media}`.green)
    }else[
        console.log(`Aluno reprovado com média ${media}`.red)
    ]
})
.catch(err => console.error(err));