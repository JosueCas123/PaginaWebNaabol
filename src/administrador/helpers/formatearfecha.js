export const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha)
    console.log(nuevaFecha)
    nuevaFecha.setMinutes(nuevaFecha.getMinutes() + nuevaFecha.getTimezoneOffset())
    return new Intl.DateTimeFormat('es-ES', {dateStyle: 'long'}).format(nuevaFecha)
  }