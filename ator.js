//códigos do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 20, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMoverParaBaixo()){
      yAtor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if(podeSeMoverParaEsquerda()){
      xAtor -=3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(podeSeMoverParaDireita()){
      xAtor +=3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i <imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      voltaAtorParaInicio();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -=1;
      }
    }
  }
}

function voltaAtorParaInicio(){
  yAtor = 366;
}

function incluiPontos (){
  textAlign(CENTER);
  textSize(25);
  fill(color(75, 0, 130))
  text(meusPontos, width/2, 25);
  text("PONTOS:", width/3, 25);
}

function marcaPonto (){
  if (yAtor < 15){
    meusPontos +=1;
    somDoPonto.play();
    voltaAtorParaInicio();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMoverParaBaixo(){
  return yAtor < 366
   
}

function podeSeMoverParaEsquerda(){
  return xAtor > 0
}

function podeSeMoverParaDireita(){
  return xAtor < 470 
}