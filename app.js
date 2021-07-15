function calcularTotalConPropina( precio, propina, person){
    const porcentajePrecioConPropina = 100 + propina;
    const precioConPropina = (precio * porcentajePrecioConPropina) / 100;
    const totalPerPerson = precioConPropina /person;
    const diferencia = precioConPropina - precio;
    const porpinaPerPerson = diferencia / person;
    reset.disabled = false;
    resultadoTotal.innerHTML = "$" + totalPerPerson.toFixed(2);
    resultadoTip.innerHTML = "$" + porpinaPerPerson.toFixed(2);
};
function changeColor(valor){
    var fivePorcent = document.getElementById("button5");
    var tenPorcent = document.getElementById("button10");
    var fifteenPorcent = document.getElementById("button15");
    var twentyFivePorcent = document.getElementById("button25");
    var fiftyPorcent = document.getElementById("button50");
    bill = document.getElementById("bill").value;
    people = document.getElementById("person").value;
    if(bill != ""){
        if(valor === 5){
            click++;
            if(click === 1) {   
                fivePorcent.style.backgroundColor= "hsl(172, 67%, 45%)";
                fivePorcent.style.color= "hsl(183, 100%, 15%)";    
                click = 0;
            }
        }else if(valor === 10){
            click++;
            if(click === 1) {
                tenPorcent.style.backgroundColor= "hsl(172, 67%, 45%)";
                tenPorcent.style.color= "hsl(183, 100%, 15%)";
            }
        }else if(valor === 15){
            click++;
            if(click === 1) {
                fifteenPorcent.style.backgroundColor= "hsl(172, 67%, 45%)";
                fifteenPorcent.style.color= "hsl(183, 100%, 15%)";
            }
        }else if(valor === 25){
            click++;
            if(click === 1) {
                twentyFivePorcent.style.backgroundColor= "hsl(172, 67%, 45%)";
                twentyFivePorcent.style.color= "hsl(183, 100%, 15%)"; 
            }
        }else if(valor === 50){
            click++;
            if(click === 1) {
                fiftyPorcent.style.backgroundColor= "hsl(172, 67%, 45%)";
                fiftyPorcent.style.color= "hsl(183, 100%, 15%)";
            }
        }
    }else{
        zerotext1.innerHTML = "Can't be zero";
        zerotext2.innerHTML = "Can't be zero";
        resultadoTip.innerHTML = "$0.00";
        resultadoTotal.innerHTML = "$0.00";
        setTimeout(() => {
            zerotext1.innerHTML = "";
            zerotext2.innerHTML = "";
        }, 3000);
    }
}
function validatePerson(boton){
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("person").value;
    if (people == "" && bill == ""){
        resultadoTip.innerHTML = "$0.00";
        resultadoTotal.innerHTML = "$0.00";
    }else if(people == ""){
        zerotext2.innerHTML = "Can't be zero";
        resultadoTip.innerHTML = "$0.00";
        resultadoTotal.innerHTML = "$0.00";
        setTimeout(() => {
            zerotext2.innerHTML = "";
            if(bill != 0){
                document.getElementById("person").addEventListener("change", goApp(boton));
                fivePorcent.style.backgroundColor= "hsl(183, 100%, 15%)";
                fivePorcent.style.color= "hsl(0, 0%, 100%)";
                tenPorcent.style.backgroundColor= "hsl(183, 100%, 15%)";
                tenPorcent.style.color= "hsl(0, 0%, 100%)";
                fifteenPorcent.style.backgroundColor= "hsl(183, 100%, 15%)";
                fifteenPorcent.style.color= "hsl(0, 0%, 100%)";
                twentyFivePorcent.style.backgroundColor= "hsl(183, 100%, 15%)";
                twentyFivePorcent.style.color= "hsl(0, 0%, 100%)";
                fiftyPorcent.style.backgroundColor= "hsl(183, 100%, 15%)";
                fiftyPorcent.style.color= "hsl(0, 0%, 100%)";
            }
        }, 4000)
    }
}
function goApp(boton){
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("person").value;
    calcularTotalConPropina(bill, boton, people);
}
function resetApp(){
    if(people != 0){
        document.getElementById("bill").value = "";
        document.getElementById("custom").value = "";
        document.getElementById("person").value = "";
        var resultadoTip = document.getElementById("resultado-tip");
        var resultadoTotal = document.getElementById("resultado-total");
        resultadoTip.innerHTML = "$0.00";
        resultadoTotal.innerHTML = "$0.00";
        reset.disabled = true;
    }else{
        document.getElementById("bill").value = "";
        document.getElementById("custom").value = "";
        document.getElementById("person").value = "";
        var resultadoTip = document.getElementById("resultado-tip");
        var resultadoTotal = document.getElementById("resultado-total");
        resultadoTip.innerHTML = "$0.00";
        resultadoTotal.innerHTML = "$0.00";
        reset.disabled = true;
    }
}
function customCase(){
    if(people == ""){
        zerotext2.innerHTML = "Can't be zero";
        resultadoTip.innerHTML = "$0.00";
        resultadoTotal.innerHTML = "$0.00";
        setTimeout(() => {
            zerotext2.innerHTML = "";
            if(people != ""){
                var custom = Number(document.getElementById("custom").value);
                var bill = Number(document.getElementById("bill").value);
                var people = Number(document.getElementById("person").value);
                calcularTotalConPropina(bill, custom, people);
            }else {
                zerotext2.innerHTML = "Can't be zero";
                resultadoTip.innerHTML = "$0.00";
                resultadoTotal.innerHTML = "$0.00";
            }
        }, 10000)
    }
}
//document.getElementById("bill").addEventListener("change", prueba());
var click = 0;
var resultadoTip = document.getElementById("resultado-tip");
var resultadoTotal = document.getElementById("resultado-total");
var zerotext1 = document.getElementById("zero1");
var zerotext2 = document.getElementById("zero2");
var fivePorcent = document.getElementById("button5");
var tenPorcent = document.getElementById("button10");
var fifteenPorcent = document.getElementById("button15");
var twentyFivePorcent = document.getElementById("button25");
var fiftyPorcent = document.getElementById("button50");
var bill = document.getElementById("bill").value;
var people = document.getElementById("person").value;
var custom = document.getElementById("custom").value;
