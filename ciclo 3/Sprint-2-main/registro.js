let registros =[];
//let conta =0;

function agregarRegistro(){
    //conta++;
    //conta = conta+1;
    let nombre_usuario = document.getElementById('in_usuario').value;
    let contrasena1 = document.getElementById("in_contrasena").value;

    //registros.push(nombre_usuario);
  	//registros.push(contrasena);

    registros.push({
    //id: conta,
    usuario: nombre_usuario,
    contrasena: contrasena1,
    });

    console.log(registros);
}

function filtrarPorContrasena(arreglo, filtro){
    
    //const result = arreglo.filter(word => word.length <= filtro);
    const result = arreglo.filter(word => (word.contrasena).length <= filtro);

    console.log(result);
  return result;
}


//const long_contra = 5;
//filtrarPorContrasena(registros,long_contra);


module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;
