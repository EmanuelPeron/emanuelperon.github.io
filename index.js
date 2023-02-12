//funciones de mostrar informaciones

const datos = document.getElementById("dp"); 
datos.addEventListener("click", () => {document.getElementById("datos").style.display = "block";
});


const traye = document.getElementById("t"); 
traye.addEventListener("click", () => {document.getElementById("traye").style.display = "block";
});


//funcions de ocultar informacion

const datosocu = document.getElementById("ocultardp"); 
datosocu.addEventListener("click", () => {document.getElementById("datos").style.display = "none";
});


const trayeocu = document.getElementById("ocultart"); 
trayeocu.addEventListener("click", () => {document.getElementById("traye").style.display = "none";
});