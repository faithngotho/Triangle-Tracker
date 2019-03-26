function triangle(){

  var length = parseFloat(document.getElementById("length"));
  var width = parseFloat(document.getElementById("width"));
  var height = parseFloat(document.getElementById("height"));


    if(isNan(length,width,height)===true || (length<=0 || width<=0 || height<=0)){
      output.innerHTML=("Enter a valid number.");
    }
}
