var index = 0;
var textes = [
  "LIEU NON SUR",
  "R LIEU NON SU",
  "UR LIEU NON S",
  "SUR LIEU NON",
  "N SUR LIEU NO",
  "ON SUR LIEU N",
  "NON SUR LIEU ",
  "U NON SUR LIE",
  "EU NON SUR LI",
  "IEU NON SUR L",
];

function changerTexte() {
  document.getElementById("texteAlternatif").textContent = textes[index];
  index = (index + 1) % textes.length;
}
changerTexte();
setInterval(changerTexte, 200);
