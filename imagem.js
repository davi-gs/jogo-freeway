//Imagens e sons do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
//Sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("assets/estrada.png");
  imagemDoAtor = loadImage("assets/ator-1.png");
  imagemCarro = loadImage("assets/carro-1.png");
  imagemCarro2 = loadImage("assets/carro-2.png");
  imagemCarro3 = loadImage("assets/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  somDaTrilha = loadSound("sounds/trilha.mp3");
  somDaColisao = loadSound("sounds/colidiu.mp3");
  somDoPonto = loadSound("sounds/pontos.wav");
}