//variaveis Player1
var yJogador1 = 366;
var xJogador1 = 100;
var colidiu = false;
var meusPontos = 0;
var vidaVaca = 3;

function mostraJogador1(){
image(jogador1, xJogador1, yJogador1, 30 , 30);
}

function movimentaJogador(){
    if (keyIsDown(87)){
    yJogador1-=3
  }
if (keyIsDown(83)){
    yJogador1+=3
    if (yJogador1 > 366){
    return yJogador1 = 366;
   }
  }
}


function colisao(){
for (let i = 0; i < iCarros.length; i = i +1){
   if (collideRectCircle(xCarros[i], yCarros[i],  50 , 40,xJogador1,yJogador1, 15  )){
    colidiu = true
   if (colidiu == true){
       yJogador1 = 366;
       meusPontos -=1;
       if (meusPontos < 0){
          return meusPontos = 0;
            }
      
              
           
        }
        

    pontosVidaVaca ();}  
  
  
  }
}
function mostraPontos(){
   textAlign(CENTER);
   text(meusPontos, width / 5 , 27);
   textSize(25);
   
}
function marcapontos(){
if (yJogador1 < 15){
yJogador1 =366;
meusPontos += 1

}

}
function mostraVidaVaca(){
textAlign(CENTER);
   text(vidaVaca, 450 , 27);
   textSize(25);
  return colidiu ;
   
}
function pontosVidaVaca(){
if (colidiu == true){
vidaVaca -= 1;
if (vidaVaca <= 0){
vidaVaca = 0;
meusPontos = 0;
}
return vidaVaca;
}
}
