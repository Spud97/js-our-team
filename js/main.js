const img = document.createElement("img");

const elencoCollaboratori = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: (img.src = "img/wayne-barnett-founder-ceo.jpg"),
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: (img.src = "img/angela-caroll-chief-editor.jpg"),
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: (img.src = "img/walter-gordon-office-manager.jpg"),
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: (img.src = "img/angela-lopez-social-media-manager.jpg"),
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: (img.src = "img/scott-estrada-developer.jpg"),
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: (img.src = "img/barbara-ramos-graphic-designer.jpg"),
  },
];

console.table(elencoCollaboratori);

for (let i = 0; i < elencoCollaboratori.length; i++) {
  const collaboratore = elencoCollaboratori[i];
  console.log(
    collaboratore.nome,
    collaboratore.ruolo,
    collaboratore.foto,
  );
}
