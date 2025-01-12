function sendMail(){
  let parms ={
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  }

  emailjs("service_nic3tfc","template_wfffcks",parms).then(alert("Email SENT!"))
}
    
