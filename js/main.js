const elencoCollaboratori = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "img/angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "img/walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "img/scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "img/barbara-ramos-graphic-designer.jpg",
  },
];

console.table(elencoCollaboratori);

for (let i = 0; i < elencoCollaboratori.length; i++) {
  const collaboratore = elencoCollaboratori[i];
  createCard(collaboratore);
}

function createCard(collaboratore) {
  console.log(collaboratore.nome, collaboratore.ruolo, collaboratore.foto);

  const card = `<div class="team-card">
                <div class="card-image">
                <img src=${collaboratore.foto} alt=""/>
                </div>
                <div class="card-text">
                <h3>${collaboratore.nome}</h3>
                <p>${collaboratore.ruolo}</p>
                </div>`;

  let container = document.getElementById("box")
  container.innerHTML += card;
}