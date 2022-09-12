function relogio (){

    let data = new Date();
    let hor = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    document.getElementById("dia").innerHTML = (`${dia}/${mes+1}/${ano}`)

    //if(hor < 10 && min < 10 && seg < 10){}
    
    if(hor < 10){
        hor = "0"+hor;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(seg < 10){
        seg = "0"+seg;
    }

    document.getElementById("dv1").innerHTML = hor;
    document.getElementById("dv2").innerHTML = min;
    document.getElementById("dv3").innerHTML = seg;

}

let time = setInterval(relogio,1000)


