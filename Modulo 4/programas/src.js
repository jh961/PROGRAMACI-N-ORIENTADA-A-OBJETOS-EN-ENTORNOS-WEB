
const  visitas=[];   //array vacio

const insertarVisita=(fecha, finca, lote, labor, area, tecnico)=>       //funcion insertar
{
    this.fecha=fecha;
    this.finca=finca;
    this.lote=lote;
    this.labor=labor;
    this.area=area;
    this.tecnico=tecnico;

    visitas.push({fecha: "2021-11-12", finca: "Altagracia", lote: "Lote 4", labor: "primera abonada", area: "4 ", tecnico: "Anibal Zamora"});
    visitas.push({fecha: fecha, finca: finca, lote: lote, labor: labor, area: area, tecnico: tecnico});
}

const filtrarResultados = (key, value)=>                                //funcion filtrar
{
    this.key=key;
    this.value=value;

    key.toLowerCase();
    value.toLowerCase();

//------------------------------
    let filtrados = this.visitas.filter((m)=>m.key==value);              //filtro
    return filtrados;
}

module.exports.filtrarResultados=filtrarResultados;
module.exports.insertarVisita=insertarVisita;
module.exports.visitas=visitas;