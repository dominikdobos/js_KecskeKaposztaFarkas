import {
  csonakCsere,
  csonakStilus,
  ellenoriz,
  kiemel,
  partonCserel,
  megjelenitettDb,
} from "./fuggvenyek.js";

window.addEventListener("load", betolt);

function betolt() {
  const KESZITO = document.querySelector("footer > p");
  KESZITO.innerHTML = "Dobos Dominik";
  KESZITO.style.textAlign = "center";
  KESZITO.style.fontSize = "20px";
}

const JOBB_PART = document.querySelector("#jobb > p");
const BAL_PART = document.querySelector("#bal > p");
const JOBBRA = document.querySelector(".jobb");
const BALRA = document.querySelector(".bal");
const J_KEPEK = document.querySelectorAll(".jobbkepek");
const B_KEPEK = document.querySelectorAll(".balkepek");
const BAL_CSONAK = document.querySelector("#csonak > .bal_div");
const JOBB_CSONAK = document.querySelector("#csonak > .jobb_div");

partonCserel(B_KEPEK, BAL_CSONAK, ".bal_div");
partonCserel(J_KEPEK, JOBB_CSONAK, ".jobb_div");

JOBBRA.addEventListener("click", function () {
  if (BAL_CSONAK.childNodes.length > 0) {
    csonakCsere(BAL_CSONAK, JOBB_CSONAK);
    csonakStilus(JOBB_CSONAK, BAL_CSONAK);
    if (JOBB_CSONAK.childNodes.length > 0) {
      const JOBB_CSONAK_KEP = document.querySelector(
        "#csonak > .jobb_div > img"
      );
      kiemel(JOBB_CSONAK_KEP);
      JOBB_CSONAK_KEP.addEventListener("click", function () {
        for (let index = 0; index < J_KEPEK.length; index++) {
          if (J_KEPEK[index].src === JOBB_CSONAK_KEP.src) {
            J_KEPEK[index].classList.remove("eltunik");
            JOBB_CSONAK.innerHTML = "";
          }
        }
        if (megjelenitettDb(JOBB_PART) === 3) {
          alert("NYERTÉL!!!");
          location.reload();
        }
      });
    }
  } else {
    if (!JOBB_CSONAK.classList.contains("jelenlegi")) {
      csonakStilus(JOBB_CSONAK, BAL_CSONAK);
    }
  }
  const MEG_MARADT = ellenoriz(BAL_PART);
  if (MEG_MARADT.includes("kecske") && MEG_MARADT.includes("kaposzta")) {
    alert("Vesztettél :(");
    location.reload();
  } else if (MEG_MARADT.includes("kecske") && MEG_MARADT.includes("farkas")) {
    alert("Vesztettél :(");
    location.reload();
  }
});

BALRA.addEventListener("click", function () {
  if (JOBB_CSONAK.childNodes.length > 0) {
    csonakCsere(JOBB_CSONAK, BAL_CSONAK);
    csonakStilus(BAL_CSONAK, JOBB_CSONAK);
    if (BAL_CSONAK.childNodes.length > 0) {
      const BAL_CSONAK_KEP = document.querySelector("#csonak > .bal_div > img");
      BAL_CSONAK_KEP.addEventListener("click", function () {
        for (let index = 0; index < B_KEPEK.length; index++) {
          if (B_KEPEK[index].src === BAL_CSONAK_KEP.src) {
            B_KEPEK[index].classList.remove("eltunik");
            BAL_CSONAK.innerHTML = "";
          }
        }
      });
      kiemel(BAL_CSONAK_KEP);
    }
  } else {
    if (!BAL_CSONAK.classList.contains("jelenlegi")) {
      csonakStilus(BAL_CSONAK, JOBB_CSONAK);
    }
  }
  const MEG_MARADT = ellenoriz(JOBB_PART);
  if (MEG_MARADT.includes("kecske") && MEG_MARADT.includes("kaposzta")) {
    alert("Vesztettél :(");
    location.reload();
  } else if (MEG_MARADT.includes("kecske") && MEG_MARADT.includes("farkas")) {
    alert("Vesztettél :(");
    location.reload();
  }
});
