const visitas=[];
const insertarVisita=(fecha, finca, lote, labor, area, tecnico)=>{
    const visita={
        fecha,
        finca,
        lote,
        labor,
        area,
        tecnico
    };
    visitas.push(visita);
}

const filtrarResultados = (key, value) => {
    if (!value) {
        return [];
    }
    return visitas.filter(sitio =>
        sitio[key].toLowerCase()
            .includes(value.toLowerCase()));
}

module.exports.filtrarResultados = filtrarResultados;
module.exports.insertarVisita=insertarVisita;
module.exports.visitas=visitas;