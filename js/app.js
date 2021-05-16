'use strict';


// let flowerArray = ['Alstroemerias.jpeg','Gardenias.jpeg','Orchids.jpeg','Roses.jpeg','Sunflowers.jpeg','Tulips.jpeg','Peonies.jpeg',];

let form = document.getElementById('form');
let table = document.getElementById('table');

function Flower (name, season, img){

  this.name = name;
  this.season = season;
  this.img = `./img/${img}.jpeg`;
  Flower.all.push(this);


}
Flower.all = [];

Flower.prototype.render = function(){

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let name =document.createElement('th');
  tr.appendChild(name);
  name.textContent = this.name;

  let season = document.createElement('th');
  tr.appendChild(season);
  season.textContent =this.season;

  let img = document.createElement('th');
  tr.appendChild(img);
  img.innerHTML = this.img;

  //   for (let i = 0; i <flowerArray.length; i++ ){

  //     let rElement = document.createElement('tr');
  //     table.appendChild(rElement);

  //     let td1 = document.createElement('td');
  //     tr.appendChild(td1);
  //     td1.textContent = flowerArray[i].name;

  //     let td2 = document.createElement('td');
  //     tr.appendChild(td2);
  //     td2.textContent = flowerArray[i].season;

  //     let td3 = document.createElement('td');
  //     tr.appendChild(td3);
  //     td3.textContent = this.img;


  //   }






};

form.addEventListener('submit', function(event){

  let name = event.target.name.value;
  let season = event.target.season.value;
  let img = event.target.season.value;


  let newFlower = new Flower(name, season,img);

  setLocalStorage();

  newFlower.render();

});

function setLocalStorage(){

  localStorage.setItem('newFlower', JSON.stringify(Flower.all));

}

function getDada (){

  let data = JSON.parse(localStorage.setItem('newFlower'));
  for(let i = 0; i < data.length; i++){
    new Flower(data[i].name, data[i].season, data[i].img);
  }

  for(let i = 0; i < Flower.all.length; i++)
    Flower.all[i].render;
}
getDada;
