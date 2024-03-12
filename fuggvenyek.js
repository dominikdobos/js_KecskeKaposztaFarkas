const KEPEK_SRC = [];

export function partonCserel(oldal_kepek, oldal_csonak, oldal_div) {
  for (let index = 0; index < oldal_kepek.length; index++) {
    kiemel(oldal_kepek[index]);
    oldal_kepek[index].addEventListener("click", function () {
      KEPEK_SRC.push(oldal_kepek[index].src);
      // console.log(KEPEK_SRC);
      if (oldal_csonak.childNodes.length === 0) {
        if (oldal_csonak.classList.contains("jelenlegi")) {
          oldal_kepek[index].classList.add("eltunik");
          oldal_csonak.innerHTML += `<img src="${
            KEPEK_SRC[KEPEK_SRC.length - 1]
          }">`;
          const oldal_csonak_kep = document.querySelector(
            `#csonak > ${oldal_div} > img`
          );
          kiemel(oldal_csonak_kep);
          oldal_csonak_kep.addEventListener("click", function () {
            for (let index = 0; index < oldal_kepek.length; index++) {
              if (oldal_kepek[index].src === oldal_csonak_kep.src) {
                oldal_kepek[index].classList.remove("eltunik");
                oldal_csonak.innerHTML = "";
              }
            }
          });
        } else {
          alert("Messze van a csónak!");
        }
      } else {
        alert("A csónak 1 személyes!");
      }
    });
  }
}

export function kiemel(elem) {
  elem.addEventListener("mouseover", function () {
    elem.classList.add("kiemel");
  });
  elem.addEventListener("mouseout", function () {
    elem.classList.remove("kiemel");
  });
}

export function csonakCsere(honnan, hova) {
  for (let index = 0; index < honnan.childNodes.length; index++) {
    hova.innerHTML += `<img src="${honnan.childNodes[index].src}">`;
  }
  honnan.innerHTML = "";
}

export function csonakStilus(megjelen, eltunik) {
  megjelen.style.backgroundImage = "url('./kepek/csonak.png')";
  megjelen.style.backgroundSize = "contain";
  megjelen.style.backgroundRepeat = "no-repeat";
  megjelen.style.display = "flex";
  megjelen.classList.toggle("jelenlegi");

  eltunik.classList.toggle("jelenlegi");
  eltunik.style.backgroundImage = "none";
}

export function megjelenitettDb(part) {
  let db = 0;
  for (let index = 0; index < part.childNodes.length; index++) {
    if (part.childNodes[index].nodeName != "#text") {
      if (!part.childNodes[index].classList.contains("eltunik")) {
        db++;
      }
    }
  }
  return db;
}

export function ellenoriz(part) {
  const MARADT_KEPEK = [];
  for (let index = 0; index < part.childNodes.length; index++) {
    if (part.childNodes[index].nodeName != "#text") {
      if (!part.childNodes[index].classList.contains("eltunik")) {
        MARADT_KEPEK.push(part.childNodes[index].id);
      }
    }
  }
  return MARADT_KEPEK;
}
