// function clearInput() {
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("text").value = "";
//   }
function signup(){
  console.log("hello")
  let name=document.getElementById('firstname').value
  let email=document.getElementById("email").value
  let password=document.getElementById("password").value
  console.log(email,password)
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user) {
      Swal.fire('Registration Successful')
    

      setTimeout(function() {
          window.location.href = "../login/index.html"
      }, 5000)
  })
  .catch(function(error) {
      Swal.fire({
          icon: 'error',
          title: 'Abe teri...',
          text: error.message
      })
  })




}