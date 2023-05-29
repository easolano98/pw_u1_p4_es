
var aux;

const ingresarValor=(valor)=>document.getElementById('numero').innerHTML+=valor;

const borrar=()=>document.getElementById('numero').innerHTML='';

const limpiar=(operacion)=>{
    aux=document.getElementById('numero').innerHTML+operacion;
    borrar();
    //console.log(aux);
}

const operacion=()=>{
    var restult= aux+document.getElementById('numero').innerHTML;
    document.getElementById('numero').innerHTML=eval(restult);
    //eval() permite evaluar una expresion string en este caso las operaciones artimeticas.
}

