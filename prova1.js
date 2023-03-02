/* /* Na teoria dos sistemas, define-se como elemento minimax de uma matriz o menor elemento da linha onde se
encontra o maior elemento da matriz. Escreva um algoritmo que leia uma matriz 10 X 10 de números e encontre seu
elemento minimax, mostrando também sua posição.
 */

let M=[]
let maior=0

 for (let i = 0; i < 10; i++) {
   M.push([])
     for(let j =0 ; j < 10 ; j++){

  M[i][j] = Math.random()*100+1
  M[i][j] = Math.floor(M[i][j])
  
  }
 }

console.table(M);

for(let i =0; i <M.length; i++){
  for(let j =0; j <M.length; j++)
    if ( M[i][j] > maior) {
      maior= M[i][j]
      posisaoL= [i]
      posisaoC= [j]
      linha=M[i]
      menor=linha[i]

for(let l = 0; l < linha.length;l++ ){
      if ( linha[l] < menor ) {
        menor= linha[l]
      }
    }
  }
}
console.log("maior :",maior);
console.log("posicao Linha:", posisaoL);
console.log("posicao Coluna: ", posisaoC);
console.log("MiniMax:", menor);