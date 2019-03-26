function triangle(){
  var length = parseFloat(document.getElementById("length").value);
  var width = parseFloat(document.getElementById("width").value);
  var height = parseFloat(document.getElementById("height").value);


    if(isNaN(length,width,height)===true || (length<=0 || width<=0 || height<=0)){
      output.innerHTML=("Enter a valid number.");
    }
    else if (length===width && width===height){
      output.innerHTML=("This is an equilateral triangle.");
    }
   else if(length===width || width===height || length===height){
     output.innerHTML=("This is an Isosceles triangle.");
    }
    else if((length+width)<=height || (length+height)<=width || (width+height)<length){
      output.innerHTML=("The values cannot form a triangle.");
    }
    else if(length!==width && width!==height){
      output.innerHTML=("This is a scalene triangle.");
    }
}

function reset(){
  location.reload();
}
