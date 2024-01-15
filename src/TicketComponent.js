import React from 'react';

const TicketComponent = ({ order }) => {
    console.log('order', order);
    const convertirHora = (hora) => {
        // Hora en formato UTC
        const horaUTC = new Date(hora);

        // Ajustar a la zona horaria de Colombia (GMT-5)
        horaUTC.setHours(horaUTC.getHours());

        // Formatear la hora de Colombia
        const opcionesFormato = {
            // year: 'numeric', 
            // month: '2-digit', 
            // day: '2-digit', 
            hour: '2-digit',
            minute: '2-digit',
            // second: '2-digit', 
            timeZone: 'America/Bogota'
        };

        const horaColombiaFormateada = horaUTC.toLocaleString('es-CO', opcionesFormato);
        return horaColombiaFormateada;
    };

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <div className='outside-box'>
            {
                Object.values(order).map((plato) => (
                    <div className='ticket'>
                        {Object.values(plato).length > 1 &&
                            <li>
                                <a href="#">
                                    {Object.values(plato).map(nombre => (
                                        <div className='pedido'>
                                            <div className='titulo'>
                                                {nombre?.Hora &&
                                                    <>
                                                        
                                                        <p> {nombre?.mesero}</p>
                                                        <div className='nombre-mesa'>
                                                            <h2>Mesa {nombre?.mesa}</h2>
                                                            <p> {convertirHora(nombre?.Hora)}</p>
                                                        </div>

                                                    </>
                                                }
                                            </div>
                                            {nombre?.platos &&
                                                Object.values(nombre.platos).map(name => (
                                                    <div className='platos'>
                                                        <h3>{name?.cantidad}  {name?.nombrePlato}</h3>
                                                        <p className='notas'>{name?.nota}</p>
                                                    </div>
                                                ))}
                                        </div>
                                    ))}
                                </a>
                            </li>
                        }
                    </div >
                ))
            }
        </div >
    );
};

export default TicketComponent;