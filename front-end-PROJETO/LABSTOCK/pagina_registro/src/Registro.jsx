import { useState } from "react";
import "./Registro.css";

const FormularioAgendamento = () => {
  const [formData, setFormData] = useState({
    nome: "",
    laboratorio: "",
    dia: "",
    horaInicio: "",
    horaFim: "",
    materiaisUtilizados: "",
    algumMaterialFoiDanificado: "",
    qualMaterial: "",
    motivo: "",
    permaneceEmUso: "",
    qualPermanece: "",
    dataDevolucao: "",
    motivoUtilizacaoProlongada: "",
    feedback: "",
  });

  const [selectedDays, setSelectedDays] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formIsValid()) {
      const day = dayjs(formData.dia).format("YYYY-MM-DD");
      const newTimes = [
        ...(selectedDays[day] || []),
        { horaInicio: formData.horaInicio, horaFim: formData.horaFim },
      ];
      setSelectedDays({ ...selectedDays, [day]: newTimes });
      console.log(formData);
      clearForm();
    } else {
      console.log("Formulário inválido. Por favor, corrija os erros.");
    }
  };

  const formIsValid = () => {
    let errors = {};
    let isValid = true;

    // Validar campo de NOME
    if (!formData.nome) {
      errors.nome =
        "Por favor, informe o nome do responsável pelo agendamento.";
      isValid = false;
    }

    // Validar campo de LABORATÓRIO
    if (!formData.laboratorio) {
      errors.laboratorio = "Por favor, informe o laboratório utilizado.";
      isValid = false;
    }

    // Validar campo dia
    if (!formData.dia) {
      errors.dia = "Por favor, selecione o dia.";
      isValid = false;
    } else {
      const day = dayjs(formData.dia).format("YYYY-MM-DD");
      if (selectedDays[day] && selectedDays[day].length >= 2) {
        errors.dia =
          "Não é possível agendar mais de dois horários no mesmo dia.";
        isValid = false;
      }
    }

    // Validar campo horaInicio
    if (!formData.horaInicio) {
      errors.horaInicio = "Por favor, selecione a hora de início.";
      isValid = false;
    }

    // Validar campo horaFim
    if (!formData.horaFim) {
      errors.horaFim = "Por favor, selecione a hora de fim.";
      isValid = false;
    } else if (formData.horaInicio && formData.horaFim <= formData.horaInicio) {
      errors.horaFim = "A hora de fim deve ser posterior à hora de início.";
      isValid = false;
    }

    // Validar campo de MATERIAL UTILIZADO
    if (!formData.materiaisUtilizados) {
      errors.materiaisUtilizados =
        "Por favor, informe os materiais utilizados.";
      isValid = false;
    }

    // Validar campo de MATERIAL DANIFICADO
    if (!formData.algumMaterialFoiDanificado) {
      errors.algumMaterialFoiDanificado =
        "Por favor, informe se algum material foi danificado.";
      isValid = false;
    }

    // Validar campo de QUAL MATERIAL FOI DANIFICADO
    if (
      formData.algumMaterialFoiDanificado === "sim" &&
      !formData.qualMaterial
    ) {
      errors.qualMaterial = "Por favor, informe qual material foi danificado.";
      isValid = false;
    }

    // Validar campo de MOTIVO DO DANO
    if (formData.algumMaterialFoiDanificado === "sim" && !formData.motivo) {
      errors.motivo = "Por favor, informe o motivo do dano.";
      isValid = false;
    }

    // Validar campo de MATERIAL EM USO
    if (!formData.permaneceEmUso) {
      errors.permaneceEmUso =
        "Por favor, informe se algum material permanece em uso.";
      isValid = false;
    }

    // Validar campo de QUAL MATERIAL ESTÁ EM USO
    if (formData.permaneceEmUso === "sim" && !formData.qualPermanece) {
      errors.qualPermanece = "Por favor, informe qual material está em uso.";
      isValid = false;
    }

    // Validar campo de DATA DE DEVOLUÇÃO
    if (formData.permaneceEmUso === "sim" && !formData.dataDevolucao) {
      errors.dataDevolucao = "Por favor, selecione a data de devolução.";
      isValid = false;
    }

    // Validar campo de MOTIVO DA UTILIZAÇÃO PROLONGADA
    if (
      formData.permaneceEmUso === "sim" &&
      !formData.motivoUtilizacaoProlongada
    ) {
      errors.motivoUtilizacaoProlongada =
        "Por favor, informe o motivo da utilização prolongada.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const clearForm = () => {
    setFormData({
      nome: "",
      laboratorio: "",
      dia: "",
      horaInicio: "",
      horaFim: "",
      materiaisUtilizados: "",
      algumMaterialFoiDanificado: "",
      qualMaterial: "",
      motivo: "",
      permaneceEmUso: "",
      qualPermanece: "",
      dataDevolucao: "",
      motivoUtilizacaoProlongada: "",
      feedback: "",
    });
    setFormErrors({});
  };

  return (
    <div className="formulario-container">
      <h2 className="title01">REGISTRO</h2>
      <h4 className="subTitle01">
        REGISTRO é uma página direcionada para registrar informações
        relacionadas com as atividades realizadas no laboratório como, data da
        utilização e materiais utilizados.
      </h4>
      <form onSubmit={handleSubmit} className="formulario">
        <label>
          Nome do responsável pelo agendamento do laboratório:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          {formErrors.nome && <span className="error">{formErrors.nome}</span>}
        </label>
        <br />
        <label>
          Laboratório utilizado:
          <select
            name="laboratorio"
            value={formData.laboratorio}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um laboratório</option>
            <option value="Laboratório 1">Laboratório 1</option>
            <option value="Laboratório 2">Laboratório 2</option>
            <option value="Laboratório 3">Laboratório 3</option>
            <option value="Laboratório 4">Laboratório 4</option>
            <option value="Laboratório 5">Laboratório 5</option>
          </select>
          {formErrors.laboratorio && (
            <span className="error">{formErrors.laboratorio}</span>
          )}
        </label>
        <br />
        <label>
          Dia:
          <input
            type="date"
            name="dia"
            value={formData.dia}
            onChange={handleChange}
            required
          />
          {formErrors.dia && <span className="error">{formErrors.dia}</span>}
        </label>
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
              {formErrors.horaInicio && (
                <span className="error">{formErrors.horaInicio}</span>
              )}
            </label>
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
              {formErrors.horaFim && (
                <span className="error">{formErrors.horaFim}</span>
              )}
            </label>
          </div>
        </div>
        <br />
        <label>
          Materiais utilizados:
          <input
            type="text"
            name="materiaisUtilizados"
            value={formData.materiaisUtilizados}
            onChange={handleChange}
            required
          />
          {formErrors.materiaisUtilizados && (
            <span className="error">{formErrors.materiaisUtilizados}</span>
          )}
        </label>
        <br />
        <div className="horarios">
          <div className="horario">
            <label>
              Algum material foi danificado?
              <select
                name="algumMaterialFoiDanificado"
                value={formData.algumMaterialFoiDanificado}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="não">Não</option>
              </select>
              {formErrors.algumMaterialFoiDanificado && (
                <span className="error">
                  {formErrors.algumMaterialFoiDanificado}
                </span>
              )}
            </label>
          </div>
          {formData.algumMaterialFoiDanificado === "sim" && (
            <div className="horario">
              <label>
                Qual material foi danificado?
                <input
                  type="text"
                  name="qualMaterial"
                  value={formData.qualMaterial}
                  onChange={handleChange}
                  required
                />
                {formErrors.qualMaterial && (
                  <span className="error">{formErrors.qualMaterial}</span>
                )}
              </label>
            </div>
          )}
        </div>
        <br />
        {formData.algumMaterialFoiDanificado === "sim" && (
          <label>
            Informe o motivo do dano:
            <input
              type="text"
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              required
            />
            {formErrors.motivo && (
              <span className="error">{formErrors.motivo}</span>
            )}
          </label>
        )}
        <br />
        <label>
          Algum material permanece em uso?
          <select
            name="permaneceEmUso"
            value={formData.permaneceEmUso}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
          {formErrors.permaneceEmUso && (
            <span className="error">{formErrors.permaneceEmUso}</span>
          )}
        </label>
        <br />
        {formData.permaneceEmUso === "sim" && (
          <div className="horarios">
            <div className="horario">
              <label>
                Qual material permanece em uso?
                <input
                  type="text"
                  name="qualPermanece"
                  value={formData.qualPermanece}
                  onChange={handleChange}
                  required
                />
                {formErrors.qualPermanece && (
                  <span className="error">{formErrors.qualPermanece}</span>
                )}
              </label>
            </div>
            <div className="horario">
              <label>
                Informe a data de devolução:
                <input
                  type="date"
                  name="dataDevolucao"
                  value={formData.dataDevolucao}
                  onChange={handleChange}
                  required={formData.permaneceEmUso === "sim"}
                />
                {formErrors.dataDevolucao && (
                  <span className="error">{formErrors.dataDevolucao}</span>
                )}
              </label>
            </div>
          </div>
        )}
        <br />
        {formData.permaneceEmUso === "sim" && (
          <label>
            Informe o motivo da utilização prolongada:
            <input
              type="text"
              name="motivoUtilizacaoProlongada"
              value={formData.motivoUtilizacaoProlongada}
              onChange={handleChange}
              required={formData.permaneceEmUso === "sim"}
            />
            {formErrors.motivoUtilizacaoProlongada && (
              <span className="error">
                {formErrors.motivoUtilizacaoProlongada}
              </span>
            )}
          </label>
        )}
        <br />
        <label>
          Deixe seu feedback:
          <input
            type="text"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
          {formErrors.feedback && (
            <span className="error">{formErrors.feedback}</span>
          )}
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioAgendamento;
