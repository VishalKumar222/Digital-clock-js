
function time(){
    const date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var am_pm="";
    if(hour<12){
        document.getElementById('am-pm').innerHTML = "AM"
          am_pm="AM"
      } else{
          hour%=12;
     document.getElementById('am-pm').innerHTML = "PM"
         am_pm="PM"
    }

   if(hour <= 9){
    hour = "0"+hour;
   }
   if(min <= 9){
    min = "0"+min;
   }
   if(sec <= 9){
    sec = "0"+sec;
   }

   


document.getElementById('hr').innerText = hour +" hours"
document.getElementById('min').innerText = min + " mins";
document.getElementById('sec').innerHTML = sec + " secs";

return function all()
{
    return [hour,min,sec,am_pm];
}
}
setInterval(time,1000);

var arr = time()();

function show(){
    var x = document.getElementById("option1").value;
    var x1 = document.getElementById("option2").value;
    var x2 = document.getElementById("option3").value;
    var x3 = document.getElementById("option4").value;
   
   

    document.getElementById('list-items').firstElementChild.innerText = "Wake Up Time : "+x+"-"+(Number(x.charAt(0))+1)+x.slice(1);
    document.getElementById('list-items').firstElementChild.nextElementSibling.innerText = "Lunch Time : "+x1+"-"+(Number(x1.charAt(0))+1)+x1.slice(1);
    document.getElementById('list-items').lastElementChild.previousElementSibling.innerText ="Nap Time : "+x2+"-"+(Number(x2.charAt(0))+1)+x2.slice(1);
    document.getElementById('list-items').lastElementChild.innerText ="Night Time : "+x3+"-"+(Number(x3.charAt(0))+1)+x3.slice(1);
    
    console.log(((Number(arr[0]))+arr[3])==x1)
    console.log((Number(arr[0]))+arr[3])
    console.log(x1)

    var element = document.getElementById('imgsource');
    var element1 = document.getElementById('hed1');
    var element2 = document.getElementById('hed2');

    console.log(element1)
    console.log(element2)

    if((Number(arr[0])+arr[3])==x){
        element.src="img1.svg";
        element1.innerText="!!GOOD MORNING!! WAKE UP!!!!";
        element2.innerText=" GRAB SOME HEALTHY BREAKFAST!!!"
     }
    if((Number(arr[0])+arr[3])==x1){
       element.src="eating.svg";
       element1.innerText="GOOD AFTERNOON!!"
       element2.innerText=" LETS HAVE SOME LUNCH!!!"
    } 
    if((Number(arr[0])+arr[3])==x2){
        element.src="nap-time.svg";
        element1.innerText="GOOD EVENING!!"
        element2.innerText=" STOP YAWNING, GET SOME TEA ITS JUST EVENING!"
    }
    if((Number(arr[0])+arr[3])==x3){
        element.src="undraw_Night.svg";
        element1.innerText="GOOD NIGHT!!"
        element2.innerText=" CLOSE YOUR EYES AND GO TO SLEEP!!!"
    }
   
  

 


}
