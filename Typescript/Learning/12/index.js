var house = {
    windows: 4,
    doors: 1,
    color: "#fff",
    height: 50,
    isNew: true,
    garage: true,
    vipClients: ["Build-store", "Damage-do", "Bum-bum-company"],
    clients: ["Daniel Stavitel", "Petr Oknorad", "Dana Parketová"],
    location: [5, "J"]
};
console.log(house.location);
for (var i = 0; i < house.location.length; i++) {
    console.log(house.location[i]);
}
