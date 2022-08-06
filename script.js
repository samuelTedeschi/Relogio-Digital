function relogio (){

    let data = new Date();
    let hor = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if(hor < 10 && min < 10 && seg < 10){
        hor = "0" + hor;
        min = "0" + min;
        seg = "0" + seg;
    }

    document.getElementById("dv1").innerHTML = hor;
    document.getElementById("dv2").innerHTML = min;
    document.getElementById("dv3").innerHTML = seg;
}

let time = setInterval(relogio,1000)

