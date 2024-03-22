import React from 'react';

const Alertas = ({ error, mensaje }) => {
  let alertClass = '';
  if (error) {
    alertClass = 'alert-danger';
  } else if (mensaje.includes('Reprobado')) {
    alertClass = 'alert-danger';
  } else if (mensaje.includes('Bueno')) {
    alertClass = 'alert-warning';
  } else if (mensaje.includes('Muy')) {
    alertClass = 'alert-success';
  } else if (mensaje.includes('Sobresaliente')) {
    alertClass = 'alert-info';
  }

  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert">
          ¡Las notas no pueden ser mayores que el máximo establecido o estar vacías!
        </div>
      )}
      {mensaje && (
        <div className={`alert ${alertClass} mt-3`} role="alert">
          Resultado: {mensaje}
        </div>
      )}
    </>
  );
};

export default Alertas;
