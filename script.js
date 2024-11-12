// JavaScript

console.log('Hello world!');

const map = L.map('map').setView([33.662927, 130.430409], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

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