// ===========================
// MAPA
// ===========================

const mapa = L.map("map").setView([-14.2350, -51.9253], 4);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
}).addTo(mapa);

// ===========================
// VARIÁVEIS
// ===========================

let instituicoes = [];
let rota = null;

const layerMarcadores = L.layerGroup().addTo(mapa);

let marcadorUsuario = null;
let circuloUsuario = null;

// ===========================
// LOCALIZAÇÃO DO USUÁRIO
// ===========================

function localizarUsuario() {

    if (!navigator.geolocation) {
        alert("Seu navegador não suporta geolocalização.");
        return;
    }

    navigator.geolocation.watchPosition(

        function(pos){

            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;

            const local = [lat, lng];

            if(marcadorUsuario){

                marcadorUsuario.setLatLng(local);
                circuloUsuario.setLatLng(local);
                circuloUsuario.setRadius(pos.coords.accuracy);

            }else{

                marcadorUsuario = L.marker(local)
                    .addTo(mapa)
                    .bindPopup("<b>📍 Você está aqui</b>");

                circuloUsuario = L.circle(local,{
                    radius:pos.coords.accuracy,
                    color:"#0066ff",
                    fillColor:"#3399ff",
                    fillOpacity:0.20
                }).addTo(mapa);

                mapa.setView(local,15);

            }

        },

        function(){

            alert("Não foi possível localizar você.");

        },

        {
            enableHighAccuracy:true,
            timeout:10000,
            maximumAge:0
        }

    );

}

// ===========================
// CARREGAR JSON
// ===========================

fetch("mapa.json")

.then(response=>response.json())

.then(dados=>{

    instituicoes=dados;

    atualizarLista("");

    localizarUsuario();

});

// ===========================
// PESQUISA
// ===========================

const pesquisa=document.getElementById("pesquisa");

pesquisa.addEventListener("input",function(){

    atualizarLista(this.value);

});

// ===========================
// LISTA
// ===========================

function atualizarLista(texto){

    texto=texto.toLowerCase();

    layerMarcadores.clearLayers();

    const lista=document.getElementById("listaInstituicoes");

    lista.innerHTML="";

    instituicoes

    .filter(local=>{

        return(

            local.nome.toLowerCase().includes(texto)||

            local.cidade.toLowerCase().includes(texto)||

            local.tipo.toLowerCase().includes(texto)||

            local.estado.toLowerCase().includes(texto)

        );

    })

    .forEach(local=>{

        const marcador=L.marker([local.lat,local.lng]).addTo(layerMarcadores);

        marcador.bindPopup(`

            <div style="width:220px">

                <img src="${local.imagem}"
                style="width:100%;height:120px;object-fit:cover;border-radius:8px;">

                <h3>${local.nome}</h3>

                <p>${local.tipo}</p>

                <p>${local.cidade} - ${local.estado}</p>

                <button
                style="
                width:100%;
                padding:10px;
                background:#2e7d32;
                color:white;
                border:none;
                border-radius:6px;
                cursor:pointer;
                "
                onclick="tracarRota(${local.lat},${local.lng})">

                Traçar rota

                </button>

            </div>

        `);

        const card=document.createElement("div");

        card.className="card";

        card.innerHTML=`

            <img src="${local.imagem}"
            style="width:100%;height:120px;object-fit:cover;border-radius:8px;">

            <h3>${local.nome}</h3>

            <p>${local.tipo}</p>

            <p>${local.cidade} - ${local.estado}</p>

        `;

        card.onclick=()=>{

            mapa.setView([local.lat,local.lng],15);

            marcador.openPopup();

        };

        lista.appendChild(card);

    });

}

// ===========================
// ROTA
// ===========================

function tracarRota(lat,lng){

    if(!navigator.geolocation){

        alert("Geolocalização não suportada.");

        return;

    }

    navigator.geolocation.getCurrentPosition(function(pos){

        const origem=L.latLng(
            pos.coords.latitude,
            pos.coords.longitude
        );

        const destino=L.latLng(lat,lng);

        if(rota){

            mapa.removeControl(rota);

        }

        rota=L.Routing.control({

            waypoints:[
                origem,
                destino
            ],

            routeWhileDragging:false,

            addWaypoints:false,

            draggableWaypoints:false,

            fitSelectedRoutes:true,

            showAlternatives:false,

            createMarker:function(i,wp){

                return L.marker(wp.latLng);

            }

        }).addTo(mapa);

    });

}

// ===========================
// BOTÃO MINHA LOCALIZAÇÃO
// ===========================

const btn=document.getElementById("btnLocalizacao");

if(btn){

    btn.addEventListener("click",()=>{

        if(marcadorUsuario){

            mapa.setView(marcadorUsuario.getLatLng(),16);

            marcadorUsuario.openPopup();

        }

    });

}