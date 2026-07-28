let light = false;


function toggleLight(){

    light = !light;

    let status=document.getElementById("lightStatus");

    if(light){
        status.innerHTML="ON 💡";
        status.style.color="green";
    }
    else{
        status.innerHTML="OFF 🌑";
        status.style.color="red";
    }

}



function detectEmergency(){

    let alertBox=document.getElementById("alert");

    let random=Math.floor(Math.random()*2);


    if(random==1){

        alertBox.innerHTML=
        "⚠ Accident Detected! Alert Sent To Control Room";

        alertBox.style.color="red";

    }
    else{

        alertBox.innerHTML=
        "✅ No Emergency Detected";

        alertBox.style.color="green";

    }

}
