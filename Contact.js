function sendMail(){
  let parms ={
    name : document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email : document.getElementById("email").value,
    message: document.getElementById("message").value,
  }

  emailjs.send("service_nic3tfc","template_wfffcks",parms).then(alert("Email Sent!"))
}

function subscribe(){
  let sub ={
    email_id : document.getElementById("email").value.
      }
  emailjs.send("service_nic3tfc","template_pwqtriz",sub).then(alert("You have Subscribed to TheMarketHive"))
