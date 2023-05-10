function apostar(){
    var a=Math.round(Math.random()*10);//GENERA NUM ALEATORIO 
    document.getElementById("resultado").value=a;
    var b=document.getElementById("apostado").value;//VALIDAR APUESTA
    if (a==b){
      document.getElementById("salida").value="ganó";
    } else {
      document.getElementById("salida").value="perdió";
    }
  }
  function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
  }
  