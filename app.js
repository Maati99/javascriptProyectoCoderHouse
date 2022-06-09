// OBJETO -----------------------------------------------------------------------
class pc{
    constructor(gama, placaM, proce, ram, placaV, hardD, precio){
        this.gama = gama
        this.placaM = placaM
        this.proce = proce
        this.ram = ram
        this.placaV = placaV
        this.hardD = hardD
        this.precio = precio
    }
}

// ARRAY -------------------------------------------------------------------------

let compu = []

// VARIABLES Y EVENTOS -----------------------------------------------------------
const body = document.body
$(`#titulo`).text (`PC IMPORTACIONES`).attr(`class`, `text-center titulo tituloPag`);
$(`.titulo`).animate({
    opacity: 0.9,
    fontSize: "10vw",
    },
    "slow",
)

const colorSwitch = document.querySelector(`.theme-switch input[type=checkbox]`)
colorSwitch.addEventListener('change', switchColor, false);

let boton = $("#btn").attr("class", "btn btn-dark").on("click", guarda);
let valores = $("#valores");
let tarjetas = $("#tarjetas")
let div2 = $(`#div2`)

let boton5 = $("#btn5").on("click", juegosPc).attr("class", "btn btn-dark")

let precio
;

const juegos = {
	"async": true,
	"crossDomain": true,
	"url": "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.shooter&platform=pc",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "e706ee7d86msh58edebe5da5967bp15a926jsn715e6d420c82",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
};
//FUNCIONES Y CONDICIONALES -----------------------------------------------------------------------

function guarda(){

    const gama = $("#gama").val();
    const placaM = $("#placaMadre").val();
    const proce = $("#procesador").val();
    const ram = $("#ram").val();
    const placaV = $("#placaVideo").val();
    const hardD = $("#hardDisk").val();
    precio = $("#precio").val();

    let local = JSON.parse(localStorage.getItem(`compu`))

    if(localStorage.getItem(`compu`) != null){
    let pc1 = new pc (gama, placaM, proce, ram, placaV, hardD, precio)
    local.push(pc1)
    localStorage.setItem(`compu`, JSON.stringify(local))
}
    else{
         localStorage.clear()
         let pc1 = new pc (gama, placaM, proce, ram, placaV, hardD, precio)
         compu.push(pc1)
         localStorage.setItem(`compu`, JSON.stringify(compu))
}
}

function imprimir(){

let imprime = JSON.parse(localStorage.getItem(`compu`))

if(imprime != null){
imprime.forEach(element => {
                            let div4 = document.createElement(`div`)
                            div4.setAttribute(`class`, `col-lg-4 mb-4`)
                            div4.setAttribute(`id`, `color1`)
                            tarjetas.append(div4)

                            let div5 = document.createElement(`div`)
                            div5.setAttribute(`class`, `card`)
                            div4.appendChild(div5)

                            let boton2 = document.createElement(`button`)
                            boton2.setAttribute(`class`, `btn btn-danger ms-auto p-2 bd-highlight`)
                            boton2.addEventListener("click", (event) => {
                            event.target.parentNode.parentNode.remove(localStorage.clear())});
                            boton2.textContent = (`ELIMINAR TODO`)
                            div5.appendChild(boton2)

                            let img = document.createElement(`img`)
                            img.setAttribute(`src`, `https://gamificationofwork.com/wp-content/uploads/2020/05/41h1kz2Ep3L._AC_.jpg`)
                            img.setAttribute(`class`, `card-img-top`)
                            div5.appendChild(img)

                            let div6 = document.createElement(`div`)
                            div6.setAttribute(`class`, `card-body`)
                            div5.appendChild(div6)

                            let h5 = document.createElement(`h5`)
                            h5.setAttribute(`class`, `card-title text-center`)
                            h5.textContent = `Pc gama ${element.gama} `
                            div6.appendChild(h5)

                            let p = document.createElement(`p`)
                            p.setAttribute(`class`, `card-text`)
                            p.textContent = `Su placa madre: ${element.placaM}`
                            div6.appendChild(p)

                            let p2 = document.createElement(`p`)
                            p2.setAttribute(`class`, `card-text`)
                            p2.textContent = `Su procesador: ${element.proce}`
                            div6.appendChild(p2)

                            let p3 = document.createElement(`p`)
                            p3.setAttribute(`class`, `card-text`)
                            p3.textContent = `Su memoria ram: ${element.ram}`
                            div6.appendChild(p3)

                            let p4 = document.createElement(`p`)
                            p4.setAttribute(`class`, `card-text`)
                            p4.textContent = `Su placa de video: ${element.placaV}`
                            div6.appendChild(p4)

                            let p5 = document.createElement(`p`)
                            p5.setAttribute(`class`, `card-text`)
                            p5.textContent = `Su almacenamiento: ${element.hardD}`
                            div6.appendChild(p5)

                            let p6 = document.createElement(`p`)
                            p6.setAttribute(`class`, `card-text`)
                            p6.textContent = `Su precio: $${element.precio}`
                            div6.appendChild(p6)

                            iva = element.precio * (1.21)
                            let p7 = document.createElement("p")
                            p7.setAttribute(`class`, `text-warning bg-dark`)
                            p7.textContent = `Su precio c/IVA: $${iva}`
                            div6.appendChild(p7)

                            importa = parseInt (element.precio * 0.2) + parseInt (element.precio)
                            let p8 = document.createElement(`p`)
                            p8.setAttribute(`class`, `text-warning bg-dark`)
                            p8.textContent = `Su precio c/Importación: $${importa}`
                            div6.appendChild(p8)

                            let div7 = document.createElement(`div`)
                            div7.setAttribute(`class`, `text-center`)
                            div5.appendChild(div7)

                            let boton1 = document.createElement(`button`)
                            boton1.setAttribute(`class`, `btn btn-dark`)
                            boton1.addEventListener("click", boton)
                            boton1.textContent = (`TOTAL CON IMPUESTOS`)
                            div7.appendChild(boton1)

                            function boton(){
                                var sumar = (element.precio * 1.21) + (0.2)
                                let p9 = document.createElement(`p`)
                                p9.setAttribute("class", "text-center text-danger bg-dark mt-3")
                                p9.textContent = `Su precio final es: $${sumar}`
                                div7.appendChild(p9)
                            }
});
}
else{
    console.log (`Formulario sin datos`);
}
};

$(document).ready(function() {
    $("#btn5").click(function(){
        $('#div2').toggle(1000,function() {
        });
    });
});
function juegosPc(){
$.get(juegos).done(function (juegos1, status) {
    if (status === `success`){
            div2.html(``)
            juegos1.forEach(function (games) {
            div2.append(`
            <div class="card" style="width: 18rem;" id="game">
                <img src="${games.thumbnail}" class="card-img-top" alt="imagen">
                    <div class="card-body" id="color1">
                        <h5 class="card-title">${games.title}</h5>
                        <p class="card-text">${games.genre}</p>
                    </div>
            </div>
            `)
        }
        )}
});}

function switchColor(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

imprimir()