console.log("regex");

// $('#submit').on('click',function(){
// var age = $('#age').val(); //read value from input element
// console.log(age);
//
// //define the pattern
// var agePattern = /^[0-9]{2}$/;
// var ageTested = agePattern.test(age);//test method matches age with agePattern
// console.log(ageTested);
// alert('Age entered correctly');
//
// });

$('#postal').on('click',function(){
document.getElementById('postal').value="";
});

$('#phone').on('click',function(){
document.getElementById('phone').value="";
});



$('#submit').on('click',function(){
  // read the input from user
  // var postalCode = $('#postal').val(); //read value from input element
  // console.log(postalCode);
  var phoneCode = $('#phone').val(); //read value from input element
  console.log(phoneCode);
  //
  // //Verifying Postal Code
  // //define the pattern
  // var postalPattern = /^[A-Z]{2}[0-9]{1,2} ?[0-9][A-Z]{2}$/;
  // var postalTested = postalPattern.test(postalCode);//test method matches age with agePattern
  // console.log(postalTested);
  // if (postalTested === true){
  //   alert('Postal code entered correctly');
  // } else {
  //   alert('Please enter correct digits');
  // }

  //verifying phone number format for New Zealand
  var phonePattern = /^[+]64[-\s\(][0-9]{2}[-\s\)][0-9]{3} ?[0-9]{4}$/;
  var phoneTested = phonePattern.test(phone);//test method matches age with agePattern
  console.log(phoneTested);
  if (phoneTested === true){
    alert('phone number entered correctly');
  } else {
    alert('Please enter correct phone number, example +64(04)384 9624  or +64-04-384 9624');
  }
});

//sign up verification

var re1 = /^\w+$/;

$('#signUp').on('click', function(){
var username =  $('#username').val();
var password =  $('#password').val();
var confirm =  $('#confirm').val();
  console.log(username,password,confirm);

  if (username === '') {
    alert('Please ensure the username is not empty & the password and confirm password are same');
    return false;
  } else if (!re1.test(username)){
    console.log(re1.test(username));
    alert('Please enter letters, numbers or underscore only for username')
    return false;
  } else if (password.length < 6){
    alert('Please enter 6 or more characters for password');
    return false;
   } else  if (username === password){
    alert("Username and Password cannot be same");
    return false;

   } else if (password !== confirm){
    alert("Password and Confirm password need to be same");
    return false;
   } 

  var re2 = /[a-z]/;
    if (!re2.test(password)){
      alert('Please include atleast one lower case letter');
      return false;
   } 

   var re2=/[A-Z]/;
   if (!re2.test(password)){
      alert('Please include atleast one upper case letter');
      return false;
   } 

   var re2=/[0-9]/;
   if (!re2.test(password)){
      alert('Please include atleast one number');
      return false;
   } 
   var re2=/[\*\@\!\#\$]/;
   if (!re2.test(password)){
      alert('Please include atleast one special character');
      return false;
   } 
   alert('you have entered correct username and password that is confirmed')
     
   
});
