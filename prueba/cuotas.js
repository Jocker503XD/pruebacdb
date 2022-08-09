function bancochafa(){

var edad, monto, cantmeses, total, sexo;

do{
     monto = prompt("Dijite el monto que quiere sacar");
     if(monto){
        condicion=false;
    
     }else{
  
        condicion= true;
        consolelog (monto);
     }

} while (condicion)

do{
    cantmeses = prompt("Dijite los meses que lo pagara que sea mayor a 6 meses");
    if(cantmeses > 6){
       
       condicion=false;
   
    }else{
        alert ("Tiene que ser mayor a 6 meses");
       condicion= true;
       consolelog (cantmeses);
    }

} while (condicion)

do{
    sexo = prompt("Usted es mujer");
    if(sexo){
       condicion=false;
   
    }else{
       condicion= true;
       sexo = monto/15; 
       consolelog (sexo);
    }
} while (condicion)

print= total = "<a>el total que usted a sacado con lo residuo de la mujer entre"  + monto + " + " + sexo + " = " + (monto*(1+sexo)*cantmeses) + "</a>";

do{
    edad = prompt("Dijite su edad");
    if(edad < 21 ){
       condicion=false;
   
    }else{
       condicion= true;
       edad = 3;
    }
} while (condicion)

}window.onload = bancochafa;







































