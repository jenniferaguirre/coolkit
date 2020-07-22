function generate(){
 var complexity= document.getElementById("slider").value;

var values= "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghigklmnopqrstuvwxyz1234567890!@#$%^&*()_+"

var password= "";
for (var i=0;i<=complexity; i++){
password=password+values.charAt(Math.floor(Math.random()* Math.floor(value.lenght-1) ));

}
document.getElementById("display").value=password;





}