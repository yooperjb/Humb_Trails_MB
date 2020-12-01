
// vector tileset layers
let layers = [
    {
    name:'bigfoot-trail',
    type: "vector",
    url: "mapbox://yooperjb.5k1rs37y", //tileset ID
    layer: {
      "id": "bigfoot-trail", // custom name
      "type": "line",
      "source": "bigfoot-trail",// must be name from addSource above
      "source-layer": "Bigfoot_Trail-29rrnr",// found below layer details in tilesets
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"},
      "paint": {
        "line-color": '#a27759',
        "line-width": 2 }
      },
    },
    {
    name: 'photo-points', 
    type: "vector",
    url: "mapbox://yooperjb.ckh9xrkoe01rf22lfji34unkd-0sszg",//tileset ID
    layer: {
      "id": "photo-points", 
      "type": "circle",
      "source": "photo-points",
      "source-layer": "bigfoot-photo-points", //name on mapbox
      "layout": {
        "visibility": "none"},
      "paint": {
        "circle-radius": 4,
        "circle-color": 'black'}
      },
    },
    {
    name: 'water-points',
    type: "vector",
    url: "mapbox://yooperjb.d3fmw0q7",//tileset ID
    layer: {
      "id": "water-points", 
      "type": "circle",
      "source": "water-points",
      "source-layer": "water_points-d2zqcw", //name on mapbox
      "layout": {
        "visibility": "none"},
      "paint": {
        "circle-radius": 4,
        "circle-color": 'blue'} 
      },
    }
  ];

//module.exports(layers);
//export [layers];