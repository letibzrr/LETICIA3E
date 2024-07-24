import styled from 'styled-components'

const Cores = {
    Branco: '#ffff',
    Verde: '#2D8034',
    Marrom: '#3A3132',
    Sombra: '#0000002d'
}

export const ContainerAgendamento = styled.section`
 font-family: 'Montserrat', sans-serif;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 5px;
`
export const TituloAgendamento = styled.h1`
  color: ${Cores.Verde};
  font-size: 50px;
  margin-bottom: 18px;`
export const DescricaoAgendamento = styled.p`
  font-style: normal;
  margin-bottom: 30px;

`
export const FormAgendamento = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 40vh;
  margin: 0;
`
export const LabelDatas = styled.label`
  margin-bottom: 10px;
  font-weight: 500; 
`
export const InputDatas = styled.input`
  padding: 10px; 
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
`
export const HorariosAgendamento = styled.section`
  display: flex;
  justify-content: space-between;

`
export const Horariosinicio = styled.div`
  width: 45%; 
`
export const HorariosFim = styled.div`
  width: 45%; 
`
export const LabelInicio = styled.label`
  margin-bottom: 10px;
  font-weight: 500; 
`
export const LabelFim = styled.label`
  margin-bottom: 10px;
  font-weight: 500; 
`
export const InputInicio = styled.input`
  padding: 10px; 
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
`
export const InputFim = styled.input`
  padding: 10px; 
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
`
export const LabelPessoas = styled.label`
  margin-bottom: 10px;
  font-weight: 500; 
`
export const InputPessoas = styled.input`
  padding: 10px; 
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
`
export const BotaoAgendar = styled.button`
  padding: 10px; 
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  background-color: ${Cores.Verde};
  color: ${Cores.Branco};
`
