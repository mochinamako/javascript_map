// JavaScript

//console.log('Hello world!');

const map = L.map('map').setView([33.662927, 130.430409], 14);

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

//L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);

// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

// クリック位置の緯度経度表示　図形やアイコン画像が重なると機能しないので注意
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
        shadowUrl: 'images/ico_shadow.png',
        iconSize: [40, 40],
        shadowSize: [40, 40],
        iconAnchor: [20, 40],
        shadowAnchor: [20, 40],
        popupAnchor: [0, -42]
    }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });
yellowIcon = new circleIcon({ iconUrl: 'images/ico_yellow.png' });

L.marker([33.66263063583526, 130.43497328378174], { icon: whiteIcon }).addTo(map).bindPopup('香椎海岸遊歩道').openPopup();

L.marker([33.67097928953406, 130.44459538431536], { icon: pinkIcon }).addTo(map).bindPopup('九州産業大学 <br> <img src="images/img01.png" alt="img">');

L.marker([33.65645731406894, 130.42948318615024], { icon: blueIcon }).addTo(map).bindPopup('イオンモール香椎浜');

L.marker([33.665471, 130.416566], { icon: yellowIcon }).addTo(map).bindPopup('照葉スパリゾート 本店');

L.marker([33.711551520386955, 130.44970155930017], { icon: blueIcon }).addTo(map).bindPopup('IKEA 福岡新宮');

L.marker([33.65361138697215, 130.45270761477005], { icon: whiteIcon }).addTo(map).bindPopup('夫婦の宮、香椎宮');

L.marker([33.23405341807052, 131.67992433921194], { icon: blueIcon }).addTo(map).bindPopup('スーパーセンタートライアル皆春店');

L.marker([33.1885992306477, 131.58126428399927], { icon: blueIcon }).addTo(map).bindPopup('トキハ わさだタウン');

const circle = L.circle([33.667509, 130.441978], {
    color: 'magenta', //円の輪郭線の色
    fillColor: 'pink', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径1kmの範囲");

map.on('click', onMapClick);

// 多角形の表示　三角
//const polygon = L.polygon([
//    [33.591788, 130.410365],
//    [33.587856, 130.410558],
//    [33.589688, 130.419924]
//], {
//    color: 'turquoise',
//    fillColor: 'paleturquoise',
//    fillOpacity: 0.3
//}).addTo(map);

// 多角形の表示　5角
const polygon = L.polygon([
    [33.242654, 131.687579],
    [33.193633493956305, 131.72649846514395],
    [33.17939946436168, 131.69116435240653],
    [33.18895780344297, 131.60377516644357],
    [33.23527596319077, 131.58872292817034]
], {
    color: '#3cb371',
    fillColor: 'mediumaquamarine',
    fillOpacity: 0.3
}).addTo(map);


//アイコン画像を一つだけ指定する時
//const whiteIcon = L.icon({
//    iconUrl: 'images/ico.png',
//    shadowUrl: 'images/ico_shadow.png',
//  
//  iconSize:     [40, 40], // size of the icon
//  shadowSize:   [40, 40], // size of the shadow
//  iconAnchor:   [20, 40], // ピンが刺さる場所　この画像では下の真ん中
//  shadowAnchor: [20, 40],  // the same for the shadow
//  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
//  });