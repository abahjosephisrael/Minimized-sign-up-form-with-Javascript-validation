function onFileSelected(event){
     var selectedFile = event.target.files[0];
     var reader = new FileReader();
     var passport = document.querySelector("#Passport");     
     reader.onload = function(event){
         passport.src = event.target.result;         
     };
     reader.readAsDataURL(selectedFile);
 }

function performClick(){
    document.getElementById("file").click();
}
const marriage = document.querySelector("#marriage");
const marriageDay = document.querySelector("#marriageDay");
const dayOfMarriage = document.querySelector("#dayOfMarriage");
let status = document.getElementById("maritalStatus");
let dayOfBirth = document.getElementById("dayOfBirth");
(()=>{
  if(dayOfBirth.childElementCount == 1){
     for(var i = 1; i <= 31; i++){
      dayOfBirth.innerHTML +=
         `<option>${i}</option>`;
         dayOfMarriage.innerHTML +=
            `<option>${i}</option>`;
     }
    }
  })();
 status.addEventListener('change',()=>{
     if(status.value == "Married"){
        marriage.hidden = false;
        marriageDay.hidden = false;
     }
     else{
        marriage.hidden = true;
        marriageDay.hidden = true;
        dayOfMarriage.innerHTML = `<option> Choose...</option>`;        
     }

 });

 (function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())