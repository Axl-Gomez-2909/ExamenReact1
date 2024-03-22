import React, { useState } from 'react';
import Alertas from './BootstrapAlerts';

const Formulario = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'nota1':
        if (value <= 30) {
          setNota1(value);
          setError(false);
        } else {
          setError(true);
        }
        break;
      case 'nota2':
        if (value <= 30) {
          setNota2(value);
          setError(false);
        } else {
          setError(true);
        }
        break;
      case 'nota3':
        if (value <= 40) {
          setNota3(value);
          setError(false);
        } else {
          setError(true);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que las notas estén ingresadas y sean números
    if (!nota1 || !nota2 || !nota3 || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      setError(true);
      return;
    }

    // Calcular el promedio de las notas
    const promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) ).toFixed(1);

    // Asignar el mensaje y la nota según el promedio
    if (promedio >= 0 && promedio < 60) {
      setMensaje(`Reprobado (${promedio})`);
    } else if (promedio >= 60 && promedio < 80) {
      setMensaje(`Bueno (${promedio})`);
    } else if (promedio >= 80 && promedio < 90) {
      setMensaje(`Muy Bueno (${promedio})`);
    } else if (promedio >= 90 && promedio <= 100) {
      setMensaje(`Sobresaliente (${promedio})`);
    }
  };

  return (
    <div className="container">
      <h2>Calcular nota final</h2>
      <Alertas error={error} mensaje={mensaje} />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nota1" className="form-label">
            Primer parcial (30%):
          </label>
          <input
            type="number"
            className="form-control"
            id="nota1"
            name="nota1"
            value={nota1}
            onChange={handleInputChange}
            placeholder="Ingrese la nota del primer parcial"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nota2" className="form-label">
            Segundo parcial (30%):
          </label>
          <input
            type="number"
            className="form-control"
            id="nota2"
            name="nota2"
            value={nota2}
            onChange={handleInputChange}
            placeholder="Ingrese la nota del segundo parcial"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nota3" className="form-label">
            Tercer parcial (40%):
          </label>
          <input
            type="number"
            className="form-control"
            id="nota3"
            name="nota3"
            value={nota3}
            onChange={handleInputChange}
            placeholder="Ingrese la nota del tercer parcial"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Calcular
        </button>
      </form>
    </div>
  );
};

export default Formulario;
