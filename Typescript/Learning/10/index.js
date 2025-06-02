var house = {
    windows: 4,
    doors: 1,
    color: "#fff",
    height: 50,
    isNew: true,
    garage: true,
    vipClients: ["Build-store", "Damage-do", "Bum-bum-company"],
    clients: ["Daniel Stavitel", "Petr Oknorad", "Dana Parketová"]
};
console.log(house.vipClients[0] + house.vipClients[2]);
console.log(house.clients[0] + house.clients[2]);
for (var i = 0; i < house.vipClients.length; i++) {
    if (i < 1 || i === house.vipClients.length - 1) {
        console.log(house.vipClients[i]);
    }
}
for (var i = 0; i < house.clients.length; i++) {
    if (i < 1 || i === house.clients.length - 1) {
        console.log(house.clients[i]);
    }
}
