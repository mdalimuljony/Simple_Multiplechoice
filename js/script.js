var result = prompt(); 

if(result>=1 && result<=32){
    
    document.getElementById("r1").innerHTML="F";
} else if (result>=33 && result<=40){
        document.getElementById("r2").innerHTML="D";
} else if (result>=41 && result<=50){
        document.getElementById("r2").innerHTML="C";
} else if (result>=51 && result<=60){
        document.getElementById("r2").innerHTML="B";
} else if (result>=61 && result<=70){
        document.getElementById("r2").innerHTML="B";
} else if (result>=71 && result<=79){
        document.getElementById("r2").innerHTML="A";
} else {
        document.getElementById("r3").innerHTML="A+";
};


