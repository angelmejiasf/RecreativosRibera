const visorfruta1 = document.getElementById("visorfruta1");
const visorfruta2 = document.getElementById("visorfruta2");
const visorfruta3 = document.getElementById("visorfruta3");

const saldo = document.getElementById("saldo");
const apuesta = document.getElementById("apuesta");

const btnjugar = document.getElementById("btnjugar");
const visor__fruta = document.querySelectorAll(".visor__fruta");

const jugadas = document.getElementById("jugadas");
const cajaalerta = document.getElementById("cajaalerta");

const frutas = [
  "cereza.png",
  "dolar.png",
  "fresa.png",
  "limon.png",
  "manzana.png",
  "naranja.png",
  "piña.png",
  "platano.png",
  "sandia.png",
];


const generarfrutas = () => {

  const aleatorioIndex = Math.floor(Math.random() * frutas.length);
  const aleatorio = frutas[aleatorioIndex];

  const aleatorioIndex2 = Math.floor(Math.random() * frutas.length);
  const aleatorio2 = frutas[aleatorioIndex2];

  const aleatorioIndex3 = Math.floor(Math.random() * frutas.length);
  const aleatorio3 = frutas[aleatorioIndex3];

  visorfruta1.src = "./assets/images/" + aleatorio;
  visorfruta2.src = "./assets/images/" + aleatorio2;
  visorfruta3.src = "./assets/images/" + aleatorio3;

}

const comprobarapuesta = () => {
  const apuestaValue = parseFloat(apuesta.value);
  const saldoValue = parseFloat(saldo.value);

  if (apuestaValue < 10) {
    cajaalerta.style.display = "flex";
    cajaalerta.textContent = "La apuesta debe ser mayor o igual a 10";
    return false;
  } else {
    cajaalerta.style.display = "none";

    if (apuestaValue > saldoValue) {
      cajaalerta.style.display = "flex";
      cajaalerta.textContent = "No tienes saldo suficiente";
      return false;
    } else {
      generarfrutas();
      jugada();
      cajaalerta.style.display = "none";
      return true;
    }
  }
};


let nuevosaldo = parseInt(saldo.value)
const jugada = () => {

  const article = document.createElement("article");
  article.classList.add("jugada");
  if (visorfruta1.src === visorfruta2.src || visorfruta1.src === visorfruta3.src || visorfruta2.src === visorfruta3.src) {
    article.classList.add("jugada__ganadora")
  } else {
    article.classList.add("jugada__perdedora")
  }
  jugadas.append(article);

  // DIV 1
  const div1 = document.createElement("div");
  article.append(div1);

  const resultado = document.createElement("p");
  div1.append(resultado);
  resultado.textContent = "Resultado:";

  const spanResultado = document.createElement("span");
  div1.append(spanResultado);

  if (visorfruta1.src === visorfruta2.src === visorfruta3.src) {
    spanResultado.textContent = apuesta.value * 3
  } else if (visorfruta1.src === visorfruta2.src || visorfruta1.src === visorfruta3.src || visorfruta2.src === visorfruta3.src) {
    spanResultado.textContent = apuesta.value * 2


    nuevosaldo = parseInt(saldo.value) + apuesta.value * 2

  } else {
    spanResultado.textContent = "- " + apuesta.value
    nuevosaldo = parseInt(saldo.value) - apuesta.value
  }


  saldo.value = nuevosaldo
  // DIV 2
  const div2 = document.createElement("div");
  article.append(div2);

  const saldos = document.createElement("p");
  div2.append(saldos);
  saldos.textContent = "Saldo:";

  const spanSaldo = document.createElement("span");
  div2.append(spanSaldo);
  spanSaldo.textContent = nuevosaldo;

  // DIV 3
  const div3 = document.createElement("div");
  article.append(div3);

  const img1 = document.createElement("img");
  img1.classList.add("jugada__img")
  div3.append(img1);
  img1.src = visorfruta1.src;

  const img2 = document.createElement("img");
  img2.classList.add("jugada__img")
  div3.append(img2);
  img2.src = visorfruta2.src;

  const img3 = document.createElement("img");
  img3.classList.add("jugada__img")
  div3.append(img3);
  img3.src = visorfruta3.src;
};

btnjugar.addEventListener("click", comprobarapuesta);
