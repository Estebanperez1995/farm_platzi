var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");



var fondo = {
    url: "tile.png", 
    cargaOK: false
};

var vaca = { 
    url: "vaca.png",
    cargaOK: false 
};

var cerdo = { 
    url: "cerdo.png",
    cargaOK: false 
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);



function cargarFondo(params) {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca(params) {
    vaca.cargaOK = true;
    dibujarVaca();
}

function cargarCerdo(params) {
    cerdo.cargaOK = true;
    dibujarCerdo();
}

function cargarPollo(params) {
    pollo.cargaOK = true;
    dibujarPollo();
}


function dibujar() {
    if (fondo.cargaOK == true) {
        papel.drawImage(fondo.imagen, 0, 0)
    }
}

function dibujarVaca() 
{
    for(var i=0; i<10; i++)
    {
        y = aleatorio(0, 420);
        x = aleatorio(0, 420);
        if (vaca.cargaOK == true) 
        {
            papel.drawImage(vaca.imagen, y, x);
        }
    
    }
    
}

function dibujarCerdo() {
    for (var i=0; i <10; i++)
    {
        x = aleatorio(0, 420);
        y = aleatorio(0, 420);
        if (cerdo.cargaOK == true) 
        {
            papel.drawImage(cerdo.imagen, y, x);
        }
    }
    
}

function dibujarPollo() 
{
    cantidad = aleatorio(0, 100);
    console.log(cantidad + " pollos")
    for (var i=0; i <cantidad; i++)
    {
        
        x = aleatorio(0, 420);
        y = aleatorio(0, 420);
        if (pollo.cargaOK == true) 
        {
            papel.drawImage(pollo.imagen, y, x);
        } // el "= true" se puede eliminar ya que solo se ejecutara si es verdadero 

    }

}



function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor( Math.random() * (max - min + 1)) + min;
    return resultado;
}