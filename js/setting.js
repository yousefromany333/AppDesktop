 function btn(){
    var p = document.getElementById("numberOFshak").value;
    var o = p / 1000 ;
    var i = o * 0.5 ;
    var ra1 = document.getElementById("ra1");
    if(ra1.checked){
        var t = 30 ;
    }else{
        t = 20 ; 
    }
    var l = document.getElementById("dd").value;
    var t1 = t * l ;
    document.getElementById("show0").innerHTML = i + t1 ; 
};