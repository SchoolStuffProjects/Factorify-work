enum Condition {HABITABLE, NORMAL, UNHABITABLE}

const house = {
  windows: 4,
  doors: 1,
  color: "#fff",
  height: 50,
  isNew: true,
  garage: true,
  vipClients: ["Build-store", "Damage-do", "Bum-bum-company"],
  clients: ["Daniel Stavitel", "Petr Oknorad", "Dana Parketová"],
  condition: Condition.UNHABITABLE
};

function echoHouse(obj){
     console.log(`Tento dům má ${obj.windows} okna. Počet dveří je ${obj.doors}. Barva domu je ${obj.color}. Výška domu je ${obj.height} metrů.`)
}

echoHouse(house);