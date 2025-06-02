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

console.log(house.condition);