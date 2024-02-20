let menu;
function preload() {
  menu = loadImage("ARCCOS.png");
  inst = loadImage("ARCCOSinst.png");
  cred = loadImage("ARCCOScred.png");
  level = loadImage("ARCCOSlevel.png");
  prbs = loadImage("ARCCOSprbs.png");
  s2 = loadImage("ARCCOSs2.png");
}

let tela = 0;
xbotoes = 235;
yJogar = 180;
yInst = 240;
yCred = 300;
botLargura = 250;
botAltura = 50;
alvosX = [];
alvosY = [];
velX = [];
velY = [];
nivel = 0;
alts = [0, 0, 0, 0];
valores = [];
cont = 0;
let ax;
let xa = 360;
ya = 200;
esc = 0.8;
x = 0;
y = 0;
contacert = 0;
acertos = [false, false, false, false];
erros = [false, false, false, false];
pdividir = [240, 144, 180, 336, 432, 1764];
r = 0;
let fasesdiv = false;
fasesmult = true;
let rep;
vida = 3;
let frames = 0;
segundos = 0;
recordeseg = 0;
recordetent = 0;
tentativa = 1;
let i = 0;
for (j = 1; j < 10; j++) {
  for (n = j + 1; n < 10; n++) {
    rep = false;
    for (k = 0; k < valores.length; k++) {
      if (valores[k] == j * n) {
        rep = true;
      }
    }
    if (!rep) {
      valores[i] = j * n;
      i++;
    }
  }
}

function alvo() {
  fill("rgb(220,60,60)");
  strokeWeight(1);
  ellipse(alvosX[i], alvosY[i], 90 * esc, 90 * esc);
  strokeWeight(0);
  fill(255);
  ellipse(alvosX[i], alvosY[i], 70 * esc, 70 * esc);
  fill("rgb(220,60,60)");
  ellipse(alvosX[i], alvosY[i], 50 * esc, 50 * esc);
  fill(2255);
  ellipse(alvosX[i], alvosY[i], 30 * esc, 30 * esc);
  fill("rgb(220,60,60)");
  ellipse(alvosX[i], alvosY[i], 10 * esc, 10 * esc);
}

function setup() {
  textAlign(CENTER);
  createCanvas(720, 400);
  textSize(26);
  frameRate(60);
}

function draw() {
  if (tela == 0) {
    menuArccos();
  }
  if (tela == 1) {
    background(level);
    fill(50);
    frames++;
    if (frames % 60 == 0) {
      segundos++;
      recordeseg++;
    }
    if (nivel == 0) {
      fasesmult = true;
      ax = 5;
      vetoresmult(ax);
      nivel = 1;
    }
    if (nivel == 1) {
      bx = 5;
      multiplos(bx, 4);
    }
    if (nivel == 2) {
      bx = 4;
      multiplos(bx, 9);
    }
    if (nivel == 3) {
      bx = 9;
      multiplos(bx, 6);
    }
    if (nivel == 4) {
      bx = 6;
      multiplos(bx, 7);
    }
    if (nivel == 5) {
      bx = 7;
      multiplos(bx, 8);
    }
    if (nivel == 6) {
      fasesmult = false;
      fasesdiv = true;
      bx = 8;
      multiplos(bx, pdividir[0]);
    }
    if (nivel == 7) {
      bx = pdividir[0];
      divisores(bx, pdividir[1]);
    }
    if (nivel == 8) {
      bx = pdividir[1];
      divisores(bx, pdividir[2]);
    }
    if (nivel == 9) {
      bx = pdividir[2];
      divisores(bx, pdividir[3]);
    }
    if (nivel == 10) {
      bx = pdividir[3];
      divisores(bx, pdividir[4]);
    }
    if (nivel == 11) {
      bx = pdividir[4];
      divisores(bx, pdividir[5]);
    }
    if (nivel == 12) {
      bx = pdividir[5];
      divisores(bx, pdividir[6]);
    }
    if (nivel == 13) {
      tela = 4;
    }
  }
  if (tela == 2) {
    background(inst);
    textSize(23);
    fill(250);
    textWrap(WORD);
    text(
      "À cada nível, um novo enunciado matemático será proposto e diversos alvos com diversos valores aparecerão. \nPara passar de nível, o jogador deve acertar todos os alvos que contêm valores que satisfazem os enunciados, evitando aqueles que não os satisfazem. \nCaso o jogador assinale 3 alvos com valores incorretos, o nível reiniciará.",
      100,
      100,
      500
    );
  }
  if (tela == 3) {
    background(cred);
    textSize(23);
    fill(250);
    textAlign(LEFT);
    textStyle(BOLD);
    textLeading(30.5);
    text("IDEALIZAÇÃO:\n\n\nCÓDIGO:\n\n\nDESIGN:", 180, 123, 500);
    textStyle(ITALIC);
    textSize(20);
    text(
      ".          Ankier José Barreira Lima\n\n\nAnkier José Barreira Lima\n\n\nAnkier José Barreira Lima",
      294,
      125,
      500
    );
    text("+ Orivaldo && Idalmis && Viviane", 270, 245, 500);
    textAlign(CENTER);
  }
  if (tela == 4) {
    background(prbs);
    textSize(23);
    fill(250);
    textWrap(WORD);
    stroke(0);
    strokeWeight(2);
    text(
      "Ótimos reflexos, arqueiro!\n\n Nessa jornada, você levou " +
        recordeseg +
        " segundos e precisou de " +
        recordetent +
        " tentativas extras para passar por todos os níveis. \nContinue treinando para superar seu recorde!",
      100,
      130,
      500
    );
  }
  strokeWeight(4);
}

function menuArccos() {
  textSize(26);
  background(menu);
  //Botão Jogar
  //Identificando se o mouse está no botão
  if (
    mouseX > xbotoes &&
    mouseX < xbotoes + botLargura &&
    mouseY > yJogar &&
    mouseY < yJogar + botAltura
  ) {
    stroke("rgb(220,60,60)");
    strokeWeight(3);
    fill(255);
    rect(xbotoes, yJogar, botLargura, botAltura, 50);
    fill("rgb(220,60,60)");
    noStroke();
    textStyle(BOLD);
    text("JOGAR", xbotoes + 125, yJogar + 35);
  } else {
    stroke(220);
    strokeWeight(2);
    fill("#444148");
    rect(xbotoes, yJogar, botLargura, botAltura, 50);
    fill(220);
    noStroke();
    textStyle(NORMAL);
    text("JOGAR", xbotoes + 125, yJogar + 35);
  }
  //Botão Instruções
  if (
    mouseX > xbotoes &&
    mouseX < xbotoes + botLargura &&
    mouseY > yInst &&
    mouseY < yInst + botAltura
  ) {
    stroke("rgb(220,60,60)");
    strokeWeight(3);
    fill(255);
    rect(xbotoes, yInst, botLargura, botAltura, 50);
    fill("rgb(220,60,60)");
    noStroke();
    textStyle(BOLD);
    text("INSTRUÇÕES", xbotoes + 125, yInst + 35);
  } else {
    stroke(220);
    strokeWeight(2);
    fill("#444148");
    rect(xbotoes, yInst, botLargura, botAltura, 50);
    fill(220);
    noStroke();
    textStyle(NORMAL);
    text("INSTRUÇÕES", xbotoes + 125, yInst + 35);
  }
  //Botão Créditos
  if (
    mouseX > xbotoes &&
    mouseX < xbotoes + botLargura &&
    mouseY > yCred &&
    mouseY < yCred + botAltura
  ) {
    stroke("rgb(220,60,60)");
    strokeWeight(3);
    fill(255);
    rect(xbotoes, yCred, botLargura, botAltura, 50);
    fill("rgb(220,60,60)");
    noStroke();
    textStyle(BOLD);
    text("CRÉDITOS", xbotoes + 125, yCred + 35);
  } else {
    stroke(220);
    strokeWeight(2);
    fill("#444148");
    rect(xbotoes, yCred, botLargura, botAltura, 50);
    fill(220);
    noStroke();
    textStyle(NORMAL);
    text("CRÉDITOS", xbotoes + 125, yCred + 35);
  }
}

function vetoresmult(num) {
  var vetor_mul = [],
    vetor_n_mul = [];
  for (i = 0, j = 0, k = 0; i < valores.length; i++) {
    if (valores[i] % num == 0) {
      vetor_mul[j] = valores[i];
      j++;
    } else if (valores[i] > 9) {
      vetor_n_mul[k] = valores[i];
      k++;
    }
  }
  for (i = 0, m = 0; i < 8; ) {
    alvosX[i] = random(45 * esc, 675 * esc);
    alvosY[i] = random(45 * esc + 65, 355 * esc);
    velX[i] = random(-2, 2);
    velY[i] = random(-2, 2);
    let tent;
    if (i < 4) {
      check = 0;
      tent = random(vetor_mul);
      index = vetor_mul.indexOf(tent);
      if (index !== -1) {
        vetor_mul.splice(index, 1);
      }
      alts[i] = tent;
      i++;
    } else {
      tent = random(vetor_n_mul);
      index = vetor_n_mul.indexOf(tent);
      if (index !== -1) {
        vetor_n_mul.splice(index, 1);
      }
      alts[i] = tent;
      i++;
    }
  }
}

function multiplos(bx, prox) {
  fill(255);
  textSize(26);
  strokeWeight(0);
  rect(260, 0, 200, 50, 30);
  rect(260, 0, 200, 20);
  fill(0);
  text("Múltiplos de " + bx, width / 2, 38);
  strokeWeight(2);
  fill(250);
  textSize(20);
  text("Tentativa " + tentativa, 155, 37);
  text("Nível " + nivel, 50, 37);
  text("Vidas:", 550, 37);
  fill(255);
  stroke(245);
  rect(0, 51, 720, 10);
  fill("rgb(220,60,60)");
  rect(0, 51, 720 - 720 * (segundos / 25), 10);
  fill(255);
  textSize(15);
  strokeWeight(1);
  stroke(255);
  rect(316, 46, 90, 22, 30);
  strokeWeight(0);
  stroke(0);
  fill(0);
  text("Tempo: " + (25 - segundos), 360, 61);
  for (t = 0; t < vida; t++) {
    image(s2, 590 + 30 * t, 15, 28, 28);
  }
  if (segundos > 25) {
    vetoresmult(bx);
    segundos = 0;
    contacert = 0;
    vida = 3;
    tentativa++;
    acertos = [false, false, false, false];
    erros = [false, false, false, false];
    recordetent++;
  }
  for (i = 0; i < 8; i++) {
    alvo();
    fill(255);
    strokeWeight(5);
    stroke(0);
    textSize(35);
    textStyle(BOLD);
    text(alts[i], alvosX[i], alvosY[i] + 12);
    alvosX[i] = alvosX[i] + velX[i];
    alvosY[i] = alvosY[i] + velY[i];
    if (alvosX[i] < 45 * esc || alvosX[i] > 720 - 45 * esc) {
      velX[i] = -1 * velX[i];
    }
    if (alvosY[i] < 45 * esc + 65 || alvosY[i] > 400 - 45 * esc) {
      velY[i] = -1 * velY[i];
    }
    if (dist(alvosX[i], alvosY[i], mouseX, mouseY) < 36 && mouseIsPressed) {
      if (i < 4) {
        if (acertos[i] == false) {
          alts[i] = "✔";
          acertos[i] = true;
          contacert++;
          if (contacert == 4) {
            tentativa = 1;
            nivel = nivel + 1;
            if (fasesmult == true) {
              vetoresmult(prox);
            }
            if (fasesdiv == true) {
              vetoresdiv(prox);
            }
            segundos = 0;
            contacert = 0;
            erros = [false, false, false, false];
            acertos = [false, false, false, false];
            vida = 3;
          }
        }
      } else {
        if (erros[i - 4] == false) {
          alts[i] = "✘";
          erros[i - 4] = true;
          vida--;
          if (vida == 0) {
            vetoresmult(bx);
            vida = 3;
            erros = [false, false, false, false];
            acertos = [false, false, false, false];
            contacert = 0;
            segundos = 0;
            tentativa++;
            recordetent++;
          }
        }
      }
    }
  }
}

function vetoresdiv(num) {
  var vetor_div = [],
    vetor_n_div = [];
  for (i = 0, j = 0, k = 0; i < valores.length; i++) {
    if (num % valores[i] == 0) {
      vetor_div[j] = valores[i];
      j++;
    } else {
      vetor_n_div[k] = valores[i];
      k++;
    }
  }
  for (i = 0, m = 0; i < 8; ) {
    alvosX[i] = random(45 * esc, 675 * esc);
    alvosY[i] = random(45 * esc + 65, 355 * esc);
    velX[i] = random(-2, 2);
    velY[i] = random(-2, 2);
    let tent;
    if (i < 4) {
      check = 0;
      tent = random(vetor_div);
      index = vetor_div.indexOf(tent);
      if (index !== -1) {
        vetor_div.splice(index, 1);
      }
      alts[i] = tent;
      i++;
    } else {
      tent = random(vetor_n_div);
      index = vetor_n_div.indexOf(tent);
      if (index !== -1) {
        vetor_n_div.splice(index, 1);
      }
      alts[i] = tent;
      i++;
    }
  }
}

function divisores(bx, prox) {
  fill(255);
  textSize(26);
  strokeWeight(0);
  rect(235, 0, 250, 50, 30);
  rect(235, 0, 250, 20);
  fill(0);
  text("Divisores de " + bx, width / 2, 38);
  strokeWeight(2);
  fill(250);
  textSize(20);
  text("Tentativa " + tentativa, 155, 37);
  text("Nível " + nivel, 50, 37);
  text("Vidas:", 550, 37);
  fill(255);
  stroke(245);
  rect(0, 51, 720, 10);
  fill("rgb(220,60,60)");
  rect(0, 51, 720 - 720 * (segundos / 40), 10);
  fill(255);
  textSize(15);
  strokeWeight(1);
  stroke(255);
  rect(316, 46, 90, 22, 30);
  strokeWeight(0);
  stroke(0);
  fill(0);
  text("Tempo: " + (35 - segundos), 360, 61);
  for (t = 0; t < vida; t++) {
    image(s2, 590 + 30 * t, 15, 28, 28);
  }
  if (segundos > 35) {
    vetoresmult(bx);
    segundos = 0;
    contacert = 0;
    vida = 3;
    tentativa++;
    acertos = [false, false, false, false];
    erros = [false, false, false, false];
    recordetent++;
  }
  for (i = 0; i < 8; i++) {
    alvo();
    fill(255);
    strokeWeight(5);
    stroke(0);
    textSize(35);
    textStyle(BOLD);
    text(alts[i], alvosX[i], alvosY[i] + 12);
    alvosX[i] = alvosX[i] + velX[i];
    alvosY[i] = alvosY[i] + velY[i];
    if (alvosX[i] < 45 * esc || alvosX[i] > 720 - 45 * esc) {
      velX[i] = -1 * velX[i];
    }
    if (alvosY[i] < 45 * esc + 65 || alvosY[i] > 400 - 45 * esc) {
      velY[i] = -1 * velY[i];
    }
    if (dist(alvosX[i], alvosY[i], mouseX, mouseY) < 36 && mouseIsPressed) {
      if (i < 4) {
        if (acertos[i] == false) {
          alts[i] = "✔";
          acertos[i] = true;
          contacert++;
          if (contacert == 4) {
            tentativa = 1;
            nivel = nivel + 1;
            vetoresdiv(prox);
            segundos = 0;
            contacert = 0;
            erros = [false, false, false, false];
            acertos = [false, false, false, false];
            vida = 3;
          }
        }
      } else {
        if (erros[i - 4] == false) {
          alts[i] = "✘";
          erros[i - 4] = true;
          vida--;
          if (vida == 0) {
            vetoresdiv(bx);
            vida = 3;
            erros = [false, false, false, false];
            acertos = [false, false, false, false];
            contacert = 0;
            segundos = 0;
            tentativa++;
            recordetent++;
          }
        }
      }
    }
  }
}

function mouseClicked() {
  if (tela == 0) {
    if (
      mouseX > xbotoes &&
      mouseX < xbotoes + botLargura &&
      mouseY > yJogar &&
      mouseY < yJogar + botAltura
    ) {
      tela = 1;
    }
    if (
      mouseX > xbotoes &&
      mouseX < xbotoes + botLargura &&
      mouseY > yInst &&
      mouseY < yInst + botAltura
    ) {
      tela = 2;
    }
    if (
      mouseX > xbotoes &&
      mouseX < xbotoes + botLargura &&
      mouseY > yCred &&
      mouseY < yCred + botAltura
    ) {
      tela = 3;
    }
  }
  if (tela == 2) {
    if (mouseX > 632 && mouseX < 687 && mouseY > 15 && mouseY < 80) {
      tela = 0;
    }
  }
  if (tela == 3) {
    if (mouseX > 632 && mouseX < 687 && mouseY > 15 && mouseY < 80) {
      tela = 0;
    }
  }
  if (tela == 4) {
    if (mouseX > 632 && mouseX < 687 && mouseY > 15 && mouseY < 80) {
      tela = 0;
      recordetent = 0;
      nivel = 0;
      recordeseg = 0;
    }
  }
}
