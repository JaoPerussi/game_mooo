//listas carros
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 263, 318]
let velocidadecarros = [2, 2.5, 3.3,2.8, 4, 5]



function mostraCarro(){
for (let i = 0; i < iCarros.length; i = i +1){
image(iCarros[i], xCarros[i], yCarros[i], 50 , 40);
}
}
function movimentaCarro(){
for (let i = 0; i < iCarros.length; i = i +1){
xCarros[i] -=velocidadecarros[i];
}
}
function voltacarros(){
for (let i = 0; i < iCarros.length; i = i +1){
if(seCarroPassou(xCarros[i])){ 
xCarros[i] = 600;}
}
}
function seCarroPassou(xCarro){
return xCarro < -60;
}