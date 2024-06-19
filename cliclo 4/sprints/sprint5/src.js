const historicoTecnico= async() => {
    let response = await fetch(
    "https://misiontic2022upb.vercel.app/api/agricultural-inputs/technical-visit"
    );
    let visitasAPI = await response.json();
    let nombres= [];
    let retorno = [];
    let area=0;
    let visita=0;
    for (let variable of visitasAPI){
      if(!nombres.includes(variable.tecnico))
      nombres.push(variable.tecnico)
    }
    for (let tec of nombres){
      for (let key of visitasAPI){
        if (tec == key.tecnico){
          area=area + key.area
          visita = visita+1
        }
      }
      retorno.push({"tecnico": tec, "visitas": visita, "areatotal":area})
      area=0;
      visita=0;

    }
    
    return retorno;

};



module.exports.historicoTecnico=historicoTecnico;