const API_URL = "http://localhost:3000/tiers";

/* LISTA DE TODOS LOS OPERADORES */
const ALL_OPERATORS = [
  "Ace","Alibi","Amaru","Aruni","Ash","Azami","Bandit","Blackbeard",
  "Blitz","Brava","Buck","Capitao","Castle","Caveira","Clash","Deimos",
  "Doc","Dokkaebi","Echo","Ela","Fenrir","Finka","Flores","Frost",
  "Fuze","Glaz","Goyo","Gridlock","Grim","Hibana","Iana","IQ",
  "Jackal","Jager","Kaid","Kali","Kapkan","Lesion","Lion","Maestro",
  "Maverick","Melusi","Mira","Montagne","Mozzie","Mute","Nokk",
  "Nomad","Oryx","Osa","Pulse","Ram","Rauora","Recruit_blue",
  "Recruit_green","Recruit_orange","Recruit_red","Recruit_yellow",
  "Rook","Sens","Sentry","Skopos","Sledge","Smoke","Solis","Striker",
  "Tachanka","Thatcher","Thermite","Thorn","Thunderbird","Tubarao",
  "Twitch","Valkyrie","Vigil","Wamai","Warden","Ying","Zero","Zofia"
];

/* ESTADO */
let tiers = { S: [], A: [], B: [], C: [], D: [] };
let draggedOperator = null;
let sourceTier = null;

/* INTENTAR CARGAR BACKEND */
fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    tiers = data;
    render();
  })
  .catch(() => render());

/* RENDER PRINCIPAL */
function render() {
  const tiersContainer = document.getElementById("tiers");
  const poolContainer = document.getElementById("pool");

  tiersContainer.innerHTML = "";
  poolContainer.innerHTML = "";

  /* TIERS */
  for (const tier in tiers) {
    const tierDiv = document.createElement("div");
    tierDiv.className = "tier";
    tierDiv.dataset.tier = tier;

    tierDiv.ondragover = e => {
      e.preventDefault();
      tierDiv.classList.add("tier-hover");
    };

    tierDiv.ondragleave = () => {
      tierDiv.classList.remove("tier-hover");
    };

    tierDiv.ondrop = e => onDropTier(e, tier);

    const opsDiv = document.createElement("div");
    opsDiv.className = "operators";

    tiers[tier].forEach(op => {
      opsDiv.appendChild(createOperatorElement(op, tier));
    });

    tierDiv.innerHTML = `<h2>Tier ${tier}</h2>`;
    tierDiv.appendChild(opsDiv);
    tiersContainer.appendChild(tierDiv);
  }

  /* POOL */
  const used = Object.values(tiers).flat();
  const remaining = ALL_OPERATORS.filter(op => !used.includes(op));

  remaining.forEach(op => {
    poolContainer.appendChild(createOperatorElement(op, null));
  });
}

/* CREAR OPERADOR */
function createOperatorElement(op, tier) {
  const div = document.createElement("div");
  div.className = "operator";
  div.draggable = true;
  div.dataset.operator = op;
  div.dataset.tier = tier;

  const img = document.createElement("img");
  img.src = `images/${op.toLowerCase()}.png`;
  img.alt = op;

  div.appendChild(img);

  div.ondragstart = e => {
    draggedOperator = op;
    sourceTier = tier;
    div.classList.add("dragging");
  };

  div.ondragend = () => {
    draggedOperator = null;
    sourceTier = null;
    div.classList.remove("dragging");
    document.querySelectorAll(".tier").forEach(t => t.classList.remove("tier-hover"));
  };

  div.ondragover = e => e.preventDefault();

  div.ondrop = e => {
    e.stopPropagation();
    const targetTier = tier;
    const targetOp = op;
    insertBefore(targetTier, targetOp);
  };

  return div;
}

/* SOLTAR EN TIER VACÍO */
function onDropTier(event, targetTier) {
  event.preventDefault();

  removeFromSource();

  tiers[targetTier].push(draggedOperator);
  render();
}

/* INSERTAR DELANTE DE OTRO */
function insertBefore(targetTier, targetOp) {
  removeFromSource();

  const index = tiers[targetTier].indexOf(targetOp);
  tiers[targetTier].splice(index, 0, draggedOperator);

  render();
}

/* QUITAR DE DONDE ESTABA */
function removeFromSource() {
  if (sourceTier) {
    tiers[sourceTier] = tiers[sourceTier].filter(op => op !== draggedOperator);
  } else {
    for (const tier in tiers) {
      tiers[tier] = tiers[tier].filter(op => op !== draggedOperator);
    }
  }
}

/* GUARDAR */
function save() {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tiers)
  })
  .then(() => alert("Tier list guardada"))
  .catch(() => alert("Backend no disponible"));
}
