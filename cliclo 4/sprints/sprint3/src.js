const turisticSites = require("./technical-visit.json");

const insertarVisita = async(fecha, finca, lote, labor, area, tecnico) => {
    let visita2send = {
        fecha,
        finca,
        lote, 
        labor,
        area,
        tecnico
    };

    let response = await fetch(
        "https://misiontic2022upb.vercel.app/api/agricultural-inputs/technical-visit",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({visita2send})
        }
    )
    return response.json(visita2send);
}

const filtrarResultados = async(key, value) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/agricultural-inputs/technical-visit" 
    ); 
    let visitasAPI = await response.json();
        if (!value) {
            return [];
            }
            return visitasAPI.filter(sitio =>
                    sitio[key].toLowerCase()
                        .includes(value.toLowerCase()));
    }

module.exports.insertarVisita = insertarVisita;
module.exports.filtrarResultados = filtrarResultados;