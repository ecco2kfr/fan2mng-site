var index = 0;
var textes = [
  "NOUVELLE ECONOMIE",
  "E NOUVELLE ECONOMI",
  "IE NOUVELLE ECONOM",
  "MIE NOUVELLE ECONO",
  "OMIE NOUVELLE ECON",
  "NOMIE NOUVELLE ECO",
  "ONOMIE NOUVELLE EC",
  "CONOMIE NOUVELLE E",
  "ECONOMIE NOUVELLE",
  "E ECONOMIE NOUVELL",
  "E ECONOMIE NOUVEL",
  "LE ECONOMIE NOUVE",
  "ELLE ECONOMIE NOUV",
  "VELLE ECONOMIE NOU",
  "UVELLE ECONOMIE NO",
  "OUVELLE ECONOMIE N",
];

function changerTexte() {
  document.getElementById("texteAlternatif").textContent = textes[index];
  index = (index + 1) % textes.length;
}
changerTexte();
setInterval(changerTexte, 130);

var index2 = 0;
var textes2 = ["REDSUN", "N REDSU", "UN REDS", "SUN RED", "DSUN RE", "EDSUN R"];

function changerTexte2() {
  document.getElementById("texteAlternatif2").textContent = textes2[index2];
  index2 = (index2 + 1) % textes2.length;
}

changerTexte2();
setInterval(changerTexte2, 200);

var index3 = 0;
var textes3 = ["ANIMA", "A ANIM", "MA ANI", "IMA AN", "NIMA A"];

function changerTexte3() {
  document.getElementById("texteAlternatif3").textContent = textes3[index3];
  index3 = (index3 + 1) % textes3.length;
}
changerTexte3();
setInterval(changerTexte3, 200);

var index4 = 0;
var textes4 = [
  "CAPGRAS DELUSION",
  "N CAPGRAS DELUSIO",
  "ON CAPGRAS DELUSI",
  "ION CAPGRAS DELUS",
  "SION CAPGRAS DELU",
  "USIN CAPGRAS DEL",
  "LUSION CAPGRAS DE",
  "ELUSION CAPGRAS D",
  "DELUSION CAPGRAS ",
  "S DELUSION CAPGRA",
  "AS DELUSION CAPGR",
  "RAS DELUSION CAPG",
  "GRAS DELUSION CAP",
  "PGRAS DELUSION CA",
  "APGRAS DELUSION C",
  "DELUSION CAPGRAS",
];

function changerTexte4() {
  document.getElementById("texteAlternatif4").textContent = textes4[index4];
  index4 = (index4 + 1) % textes4.length;
}
changerTexte4();
setInterval(changerTexte4, 130);

var index5 = 0;
var textes5 = [
  "VOIRE MAUVAIS",
  "S VOIRE MAUVAI",
  "IS VOIRE MAUVA",
  "AIS VOIRE MAUV",
  "VAIS VOIRE MAU",
  "UVAIS VOIRE MA",
  "AUVAIS VOIRE M",
  "MAUVAIS VOIRE",
  "E MAUVAIS VOIR",
  "RE MAUVAIS VOI",
  "IRE MAUVAIS VO",
  "OIRE MAUVAIS V",
  "VOIRE MAUVAIS",
];

function changerTexte5() {
  document.getElementById("texteAlternatif5").textContent = textes5[index5];
  index5 = (index5 + 1) % textes5.length;
}
changerTexte5();
setInterval(changerTexte5, 130);

var index6 = 0;
var textes6 = [
  "VRAIMENT MOYEN",
  "N VRAIMENT MOYE",
  "EN VRAIMENT MOY",
  "YEN VRAIMENT MO",
  "OYEN VRAIMENT M",
  "MOYEN VRAIMENT",
  "T MOYEN VRAIMEN",
  "NT MOYEN VRAIME",
  "ENT MOYEN VRAIM",
  "MENT MOYEN VRAI",
  "IMENT MOYEN VRA",
  "AIMENT MOYEN VR",
  "RAIMENT MOYEN V",
];

function changerTexte6() {
  document.getElementById("texteAlternatif6").textContent = textes6[index6];
  index6 = (index6 + 1) % textes6.length;
}
changerTexte6();
setInterval(changerTexte6, 130);
