



function setup() {
  createCanvas(500, 400);
}
// desenho do jogo/tela
function draw() {
  background(estrada);
  mostraJogador1();
  mostraCarro();
  movimentaCarro();
  movimentaJogador();
  voltacarros();
  colisao();
 mostraPontos();
marcapontos();
mostraVidaVaca();
pontosVidaVaca();
}
