function sendMail(){
  let parms ={
    name : document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email : document.getElementById("email").value,
    message: document.getElementById("message").value,
  }

  emailjs.send("service_nic3tfc","template_wfffcks",parms).then(alert("Email Sent!"))
}
