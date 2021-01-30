var playerNum = 0; 

function go(num){
   let td =  document.querySelectorAll("td");
   let img =  document.createElement('img');
   let playerOne = 0;
   let playerTwo = 0;

   if(td[num].querySelector('img') == null){

     if(playerNum == 0){  
        img.src = 'Кресткик.png';
        td[num].append(img);
        document.querySelector('caption').innerHTML = "Игрок№2"
        playerOne += num;
        playerNum++;
      }else{
        img.src = 'Нолик.jpg';
        td[num].append(img);
        document.querySelector('caption').innerHTML = "Игрок№1"
        playerTwo += num;
        playerNum--;
       }

    }

    var res = win();
    if(res != undefined){

      for (let i = 0; i < td.length; i++) {
        td[i].removeAttribute('onclick');
      }

      document.querySelector('caption').innerHTML = res;
      var a = document.createElement('a');
      a.href = 'index.html'; 
      a.innerHTML = 'Повторить игру';
      document.querySelector('body').append(a);
    }
    console.log(res);
}


function win() {
    let td = document.querySelectorAll('td');
    var img = document.querySelector('img');
    var imgKrest = document.querySelectorAll('img[src="Кресткик.png"]');
    var imgZero =  document.querySelectorAll('img[src="Нолик.jpg"]');
    var count = 0;
  
    for (let i = 0; i < imgKrest.length; i++) {
      if(td[0].firstChild === imgKrest[i] && td[1].firstChild === imgKrest[i + 1] && td[2].firstChild === imgKrest[i + 2]){
        return 'Выиграл Игрок№1';
      }if(td[3].firstChild === imgKrest[i] && td[4].firstChild === imgKrest[i + 1] && td[5].firstChild === imgKrest[i + 2]){
        return 'Выиграл Игрок№1';
       }if(td[6].firstChild === imgKrest[i] && td[7].firstChild === imgKrest[i + 1] && td[8].firstChild === imgKrest[i + 2]){
        return 'Выиграл Игрок№1';
        }if(td[2].firstChild === imgKrest[i] && td[5].firstChild === imgKrest[i + 1] && td[8].firstChild === imgKrest[i + 2]){
         return 'Выиграл Игрок№1';
         }if(td[1].firstChild === imgKrest[i] && td[4].firstChild === imgKrest[i + 1] && td[7].firstChild === imgKrest[i + 2]){
           return 'Выиграл Игрок№1';
          }if(td[0].firstChild === imgKrest[i] && td[3].firstChild === imgKrest[i + 1] && td[6].firstChild === imgKrest[i + 2]){
            return 'Выиграл Игрок№1';
           }if(td[2].firstChild === imgKrest[i] && td[4].firstChild === imgKrest[i + 1] && td[6].firstChild === imgKrest[i + 2]){
             return 'Выиграл Игрок№1';
            }if(td[0].firstChild === imgKrest[i] && td[4].firstChild === imgKrest[i + 1] && td[8].firstChild === imgKrest[i + 2]){
              return 'Выиграл Игрок№1';
             } 
    }

    for (let i = 0; i < imgZero.length; i++) {
      if(td[0].firstChild === imgZero[i] && td[1].firstChild === imgZero[i + 1] && td[2].firstChild === imgZero[i + 2]){
        return 'Выиграл игрок№2';
       }if(td[3].firstChild === imgZero[i] && td[4].firstChild === imgZero[i + 1] && td[5].firstChild === imgZero[i + 2]){
         return 'Выиграл игрок№2';
        }if(td[6].firstChild === imgZero[i] && td[7].firstChild === imgZero[i + 1] && td[8].firstChild === imgZero[i + 2]){
          return 'Выиграл игрок№2';
         }if(td[2].firstChild === imgZero[i] && td[5].firstChild === imgZero[i + 1] && td[8].firstChild === imgZero[i + 2]){
           return 'Выиграл игрок№2';
          }if(td[1].firstChild === imgZero[i] && td[4].firstChild === imgZero[i + 1] && td[7].firstChild === imgZero[i + 2]){
            return 'Выиграл игрок№2';
           }if(td[0].firstChild === imgZero[i] && td[3].firstChild === imgZero[i + 1] && td[6].firstChild === imgZero[i + 2]){
             return 'Выиграл игрок№2';
            }if(td[2].firstChild === imgZero[i] && td[4].firstChild === imgZero[i + 1] && td[6].firstChild === imgZero[i + 2]){
              return 'Выиграл игрок№2';
             }if(td[0].firstChild === imgZero[i] && td[4].firstChild === imgZero[i + 1] && td[8].firstChild === imgZero[i + 2]){
               return 'Выиграл игрок№2';
              }
     }
  
}


function reloadGame() {
  location.reload();
}
