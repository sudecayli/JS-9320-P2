const charactersInfo = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const button1 = document.getElementById("button");
const doElement = document.createElement("div");
charactersInfo[18].homeworld = "other";

function renderCharacters() {
  if (button1.innerHTML === "Karakterleri gizle") {
    button1.innerHTML = "Karakterleri göster";
    button1.style.backgroundColor = "#198754";
    document.getElementById("cards").innerHTML = null;
  } else {
    button1.innerHTML = "Karakterleri gizle";
    button1.style.backgroundColor = "red";
    charactersInfo.forEach((result) => {
      const card = document.createElement("div");
      card.classList = "card-body";

      const content = `
      
<div class="col-6 my-3 d-flex col-md-3">
  <div class="card shadow" >
        <img src="${result.pic}" class="card-img-top img-fluid">
   <div class="card-body">
        <h5 class="card-title">Name: ${result.name}</h5>
        <p class="card-text">Homeworld: ${result.homeworld}</p>
        <hr>
   </div>
  </div>
</div>
      `;
      document.getElementById("cards").innerHTML += content;
    });
  }
}

const homeworldOnly = charactersInfo.map(eleminatedhomeworlds);
function eleminatedhomeworlds(item) {
  
  return item.homeworld;
}

console.log(homeworldOnly);


const homeworldOnlyWithoutRepeat =()=> {return Array.from(new Set(homeworldOnly))};  


console.log(homeworldOnlyWithoutRepeat());

function renderRadios() {
  homeworldOnlyWithoutRepeat().forEach((homeworlds) => {
    const radio = document.createElement("div");
    radio.classList = "justify-content-center";
    const radios = `
    
<div class="form-check mx-4 text-white">
  <input class="form-check-input" type="checkbox" value="${homeworlds}" id="homeworld-${homeworlds}">
  <label class="form-check-label" onclick = "myFunction" for="homeworld-${homeworlds}" >
    ${homeworlds}
  </label>
</div>
    `;
    document.getElementById("selector").innerHTML += radios;
  });
  
}
renderRadios();

const myFunction = () => {
  const checkInputs = document.querySelectorAll(".form-check-input")
  checkInputs.forEach((input) => {
   input.addEventListener("click", () =>
    homeworldOnlyWithoutRepeat(input))
  })
 
};




