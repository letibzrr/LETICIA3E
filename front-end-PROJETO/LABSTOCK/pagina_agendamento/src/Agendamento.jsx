import React, { useState } from 'react';
import './Agendamento.css';

const FormularioAgendamento = () => {
  const [formData, setFormData] = useState({
    dia: '',
    horaInicio: '',
    horaFim: '',
    quantidadePessoas: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário
    if (formValido()) {
      console.log(formData);
      clearForm();
    } else {
      console.log('Formulário inválido! Por favor, tente novamente!');
    }
  };

  const formValido = () => {
    let errors = {};
    let valido = true;

    const hoje = new Date();
    const selectDia = new Date(formData.dia);
    const selectDiaInicio = new Date(`${formData.dia}T${formData.horaInicio}`);
    const selectDiaFim = new Date(`${formData.dia}T${formData.horaFim}`);

    // Validar campo dia
    if (!formData.dia) {
      errors.dia = 'Por favor, selecione o dia!';
      valido = false;
    } else if (selectDia < hoje.setHours(0, 0, 0, 0)) {
      errors.dia = 'A data não pode ser anterior ao dia atual, tente novamente!';
      valido = false;
    } else if (selectDia.toDateString() === hoje.toDateString()) {
      errors.dia = 'O agendamento pode ser cadastrado no mesmo dia!';
      valido = false;
    }

    // Validar campo horaInicio
    if (!formData.horaInicio) {
      errors.horaInicio = 'Por favor, selecione a hora de início!';
      valido = false;
    } else if (selectDiaInicio <= hoje) {
      errors.horaInicio = 'O horário de início deve ser superior ao horário atual!';
      valido = false;
    }

    // Validar campo horaFim
    if (!formData.horaFim) {
      errors.horaFim = 'Por favor, selecione a hora de fim!';
      valido = false;
    } else if (formData.horaInicio && selectDiaFim <= selectDiaInicio) {
      errors.horaFim = 'A hora de fim deve ser posterior à hora de início!';
      valido = false;
    } else if (selectDiaFim <= hoje) {
      errors.horaFim = 'O horário de fim deve ser superior ao horário atual!';
      valido = false;
    }

    // Validar campo quantidadePessoas
    if (!formData.quantidadePessoas || parseInt(formData.quantidadePessoas) <= 0) {
      errors.quantidadePessoas = 'Por favor, informe a quantidade de pessoas maior que zero!';
      valido = false;
    }

    setFormErrors(errors);
    return valido;
  };

  const clearForm = () => {
    setFormData({
      dia: '',
      horaInicio: '',
      horaFim: '',
      quantidadePessoas: ''
    });
    setFormErrors({});
  };

  return (
    <div className="formulario-container">
      <h2 className='title01'>AGENDAMENTO</h2>
      <h4 className='subTitle01'>AGENDAMENTO é uma página direcionada para selecionar datas para utilização do laboratório, 
        horários de início ao fim, quantidades de pessoas e calendário ilustrativo.</h4>
      <form onSubmit={handleSubmit} className="formulario">
        <label>
          Dia:
          <input
            type="date"
            name="dia"
            value={formData.dia}
            onChange={handleChange}
            required
          />
        </label>
        {formErrors.dia && <p className="error">{formErrors.dia}</p>}
        <br />
        <div className="horarios">
          <div className="horario">
            <label>
              Início:
              <input
                type="time"
                name="horaInicio"
                value={formData.horaInicio}
                onChange={handleChange}
                required
              />
            </label>
            {formErrors.horaInicio && <p className="error">{formErrors.horaInicio}</p>}
          </div>
          <div className="horario">
            <label>
              Fim:
              <input
                type="time"
                name="horaFim"
                value={formData.horaFim}
                onChange={handleChange}
                required
              />
            </label>
            {formErrors.horaFim && <p className="error">{formErrors.horaFim}</p>}
          </div>
        </div>
        <br />
        <label>
          Quantidade de pessoas:
          <input
            type="number"
            name="quantidadePessoas"
            value={formData.quantidadePessoas}
            onChange={handleChange}
            required
          />
        </label>
        {formErrors.quantidadePessoas && <p className="error">{formErrors.quantidadePessoas}</p>}
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioAgendamento;
