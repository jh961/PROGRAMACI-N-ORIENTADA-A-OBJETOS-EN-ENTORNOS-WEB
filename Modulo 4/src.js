const visitas=[];
const insertarVisita=(fecha, finca, lote, labor, area, tecnico)=>{
  visitas.push({"fecha": fecha, "finca": finca, "lote": lote, "labor": labor, "area": area, "tecnico": tecnico, });
}
const filtrarResultados=(key, value)=>{
  let k=0;
  let i=0;
  while (k==0 && i<visitas.length){
    switch(key){
      case "fecha": 
        if(visitas[i].fecha == value) k=1;
      break;
      case "finca": 
        if(visitas[i].finca == value) k=1;
      break;
      case "lote": 
        if(visitas[i].lote == value) k=1;
      break;
      case "labor": 
        if(visitas[i].labor == value) k=1;
      break;
      case "área": 
        if(visitas[i].area == value) k=1;
      break;
      case "técnico": 
        if(visitas[i].tecnico == value) k=1;
      break;
    }
    if(k!=1) i++;
  }
  return visitas[i];
}

module.exports.filtrarResultados=filtrarResultados;
module.exports.insertarVisita=insertarVisita;
module.exports.visitas=visitas;