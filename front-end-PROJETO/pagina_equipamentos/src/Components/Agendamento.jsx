import { ContainerAgendamento, TituloAgendamento, DescricaoAgendamento, FormAgendamento, 
    LabelDatas, InputDatas, HorariosAgendamento, Horariosinicio, HorariosFim, LabelInicio, LabelFim, 
    InputInicio, InputFim, LabelPessoas, InputPessoas, BotaoAgendar } from '../Styles/Agendamento'

const FormularioAgendamento = () => {
  return (
    <ContainerAgendamento>
      <TituloAgendamento>Agendamento</TituloAgendamento>
      <DescricaoAgendamento>Agendamento é uma página direcionada para selecionar datas para utilização do laboratório, 
        horarios de inicio ao fim, quantidades de pessoas e calendário ilustrativo.</DescricaoAgendamento>
      <FormAgendamento>
        <LabelDatas>
          Dia:
          <InputDatas
            type="date"
            name="diaAgendamento"
            required
          />
        </LabelDatas>
        <HorariosAgendamento>
          <Horariosinicio>
            <LabelInicio>
              Início:
              <InputInicio
                type="time"
                name="horarioInicio"
                required
              />
            </LabelInicio>
          </Horariosinicio>
          <HorariosFim>
            <LabelFim>
              Fim:
              <InputFim
                type="time"
                name="horarioFim"
                required
              />
            </LabelFim>
          </HorariosFim>
        </HorariosAgendamento>
        <LabelPessoas>
          Quantidade de pessoas:
          <InputPessoas
            type="number"
            name="quantidadePessoas"
            required
          />
        </LabelPessoas>
        <BotaoAgendar type="submit">Enviar</BotaoAgendar>
      </FormAgendamento>
    </ContainerAgendamento>
  );
};

export default FormularioAgendamento;