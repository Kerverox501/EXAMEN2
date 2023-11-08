//FUNCION DE CARGATR DATOS
function cargadecardex(ciclo, cuatrimestre) {
    const materiasContainer = document.querySelector(`#${ciclo}-${cuatrimestre} .materias`);
    fetch('CARDEX.json')
        .then(response => response.json())
        .then(data => {
            const materias = data[ciclo][cuatrimestre];
            for (const materiaInfo of materias) {
                const materiaDiv = document.createElement("div");
                materiaDiv.classList.add("materia");
                const calificacionTexto = materiaInfo.Calificacion >= 7 ? `Calificación: ${materiaInfo.Calificacion}` : `Calificación: ${materiaInfo.Calificacion}`;
                materiaDiv.textContent = `${materiaInfo.Nombre} (${materiaInfo.Siglas}) - Créditos: ${materiaInfo.Creditos} - ${calificacionTexto}`;
                if (materiaInfo.Calificacion >= 7) {
                    materiaDiv.classList.add("aprobada");
                }
                materiasContainer.appendChild(materiaDiv);
            }
            
        })
        .catch(error => console.error(error));
}

// Cargar materias en los cuatrimestres desde el archivo JSON
cargadecardex("ciclo1", "cuatrimestre1");
cargadecardex("ciclo1", "cuatrimestre2");
cargadecardex("ciclo1", "cuatrimestre3");

cargadecardex("ciclo2", "cuatrimestre1");
cargadecardex("ciclo2", "cuatrimestre2");
cargadecardex("ciclo2", "cuatrimestre3");

cargadecardex("ciclo3", "cuatrimestre1");
cargadecardex("ciclo3", "cuatrimestre2");
cargadecardex("ciclo3", "cuatrimestre3");

