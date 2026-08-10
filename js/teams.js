const teams = [
  {
    name: "Blackforest Blasters",
    logo: "images/teamlogo/blackforest_blasters.jpg"
  },
  {
    name: "Canstatt Challengers",
    logo: "images/teamlogo/canstatt_challengers.jpg"
  },
  {
    name: "Mora Royals",
    logo: "images/teamlogo/mora_royals.jpg"
  },
  {
    name: "Neckar Nights",
    logo: "images/teamlogo/neckar_nights.jpg"
  },
  {
    name: "Swabian Lions",
    logo: "images/teamlogo/swabian_lions.jpg"
  },
  {
    name: "Würm Fires",
    logo: "images/teamlogo/würm_fires.jpg"
  },
  {
    name: "Württemberg Warriors",
    logo: "images/teamlogo/wüttemberg_warriors.jpg"
  },
  {
    name: "Wilhelma Wolves",
    logo: "images/teamlogo/wilhelma_wolves.jpg"
  }
];

const teamGrid = document.getElementById("team-grid");

teams.forEach(team => {
  const article = document.createElement("article");

  article.className = "card team";

  article.innerHTML = `
    <div class="team-head">
      <span>${team.name}</span>
    </div>

    <div class="team-body">
      <img src="${team.logo}" alt="${team.name} logo">
    </div>
  `;

  teamGrid.appendChild(article);
});
