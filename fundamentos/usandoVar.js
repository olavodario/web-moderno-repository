{
  {
    {
      var sera = "Sera???";
      console.log(sera);
    }
  }
}

console.log(sera);

// Em javascript o var nao funciona atraves de blocos, ela é global, so nao sera meio q global se estiver dentro de uma função ou objeto

function teste() {
  var local='123'
  console.log(local)
}

teste()
// console.log(local) -> da erro, pois local nao esta definido, nem existe, fora da funcao

// variavel (var) ou ela é global ou esta dentro de uma função



