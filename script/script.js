let nim = "20181000066";
let pwd = "admin";

function validasi() {
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;

    if(username === nim && password === pwd){
        alert("Login berhasil");
        document.location.href = 'content.html';        
    }else if(username !== nim && password !== pwd){
        alert("Login gagal, username dan password tidak ada");
        document.querySelector(".username").focus();
    }else if(username === "" || password === ""){
        alert("Login gagal, username dan password tidak boleh kosong");
        document.querySelector(".username").focus();
    }
}


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });