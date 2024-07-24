import React, { useState } from 'react';
import { ContainerAgendamento, TituloAgendamento, DescricaoAgendamento, FormAgendamento, 
    LabelDatas, InputDatas, HorariosAgendamento, Horariosinicio, HorariosFim, LabelInicio, LabelFim, 
    InputInicio, InputFim, LabelPessoas, InputPessoas, BotaoAgendar } from '../Styles/Agendamento'

const FormularioAgendamento = () => {
  const [formData, setFormData] = useState({
    dia: '',
    horaInicio: '',
    horaFim: '',
    quantidadePessoas: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
   if (formIsValid()) {
    
    console.log(formData);
    clearForm();
  } else {
    console.log('Formulário inválido. Por favor, corrija os erros.');
  }
};

const formIsValid = () => {
  let errors = {};
  let isValid = true;

  // Validar campo dia
  if (!formData.dia) {
    errors.dia = 'Por favor, selecione o dia.';
    isValid = false;
  }

  // Validar campo horaInicio
  if (!formData.horaInicio) {
    errors.horaInicio = 'Por favor, selecione a hora de início.';
    isValid = false;
  }

  // Validar campo horaFim
  if (!formData.horaFim) {
    errors.horaFim = 'Por favor, selecione a hora de fim.';
    isValid = false;
  } else if (formData.horaInicio && formData.horaFim <= formData.horaInicio) {
    errors.horaFim = 'A hora de fim deve ser posterior à hora de início.';
    isValid = false;
  }

  // Validar campo quantidadePessoas
  if (!formData.quantidadePessoas || formData.quantidadePessoas <= 0) {
    errors.quantidadePessoas = 'Por favor, informe a quantidade de pessoas (deve ser maior que zero).';
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};

const clearForm = () => {
  setFormData({
    dia: '',
    horaInicio: '',
    horaFim: '',
    quantidadePessoas: ''
  });
  setFormErrors({
    dia: '',
    horaInicio: '',
    horaFim: '',
    quantidadePessoas: ''
  });

  };

  return (
    <ContainerAgendamento>
      <TituloAgendamento>Agendamento</TituloAgendamento>
      <DescricaoAgendamento>Agendamento é uma página direcionada para selecionar datas para utilização do laboratório, 
        horarios de inicio ao fim, quantidades de pessoas e calendário ilustrativo.</DescricaoAgendamento>
      <FormAgendamento onSubmit={handleSubmit}>
        <LabelDatas>
          Dia:
          <InputDatas
            type="date"
            name="dia"
            value={formData.dia}
            onChange={handleChange}
            required
          />
        </LabelDatas>
        <HorariosAgendamento>
          <Horariosinicio>
            <LabelInicio>
              Início:
              <InputInicio
                type="time"
                name="horaInicio"
                value={formData.horaInicio}
                onChange={handleChange}
                required
              />
            </LabelInicio>
          </Horariosinicio>
          <HorariosFim>
            <LabelFim>
              Fim:
              <InputFim
                type="time"
                name="horaFim"
                value={formData.horaFim}
                onChange={handleChange}
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
            value={formData.quantidadePessoas}
            onChange={handleChange}
            required
          />
        </LabelPessoas>
        <BotaoAgendar type="submit">Enviar</BotaoAgendar>
      </FormAgendamento>
    </ContainerAgendamento>
  );
};

export default FormularioAgendamento;