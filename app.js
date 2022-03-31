function checknear([lng, lat]) {
  let neareststation = {};
  let nearest = Infinity;
  for (let i = 0; i < stations.length; i++) {
    if (stations[i]) {
      const [Mlat, Mlng] = [stations[i].lat, stations[i].lng];
      let distance = (lat - Mlat) * (lat - Mlat) + (lng - Mlng) * (lng - Mlng);
      if (distance < nearest) {
        nearest = distance;
        neareststation = stations[i];
      }
    }
  }
  return neareststation;
}
getDataOfMap(stations).then((station) => {
  // console.log(station);
  fetch("./delhiroad.geojson")
  .then((x) => x.json())
  .then((r) => {
    let layer = [];
    r.features.forEach((e) => {
        let near = checknear(e.geometry.coordinates[0]);
        console.log('near',near);
        let c = e.geometry.coordinates.map((e) => e.reverse().concat(near.color));
        // console.log(c);
        layer.push(
          L.hotline(c, {
            min: 150,
            max: 300,
            palette: {
              0.0: "green",
              0.5: "yellow",
              1.0: "red",
            },
            weight: 5,
            outlineColor: "white",
            outlineWidth: 0,
          }).bindPopup(near.name+'<br>'+e.properties.name)
        );
      });
      L.layerGroup(layer).addTo(map);
      // L.geoJson(r).addTo(map)
    });

  // console.log(station);
  // console.log(url);
});
function getDataOfMap(stations) {
  let i = 1;
  let arrofpromis = stations.map((station) => {
    let one = fetch(
      `https://jtaqi.herokuapp.com/data?lat=${station.lat}&lon=${station.lng}`
    )
      .then((r) => r.json())
      .then((x) => {
        // console.log(x)
        document.getElementById("loaded").innerHTML = i++;
        // let b = color(x.list[0].components.pm10);
        station.color = x.list[0].components.pm10;
        return station;
      })
      .catch((e) => undefined);
    if (one) return one;
  });
  return Promise.all(arrofpromis);
}
function color(c) {
  if (c < 50) {
    return "green";
  }
  if (c < 60) {
    return "#70b900";
  }
  if (c < 70) {
    return "yellow";
  }
  if (c < 80) {
    return "orange";
  }
  if (c > 80) {
    return "red";
  }
}
