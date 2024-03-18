

window.addEventListener("DOMContentLoaded", (event) =>{

    function isMobile() {
        const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return regex.test(navigator.userAgent);
      }
      
      if (isMobile()) {
        console.log("Mobile device detected");
        document.querySelector(".root").style.display = "none";
        document.querySelector(".mobile").style.display = "block";
        document.body.style.background = "#041525;";
        document.body.style.color = "#fdfcf8";
      } else {
        console.log("Desktop device detected");
        document.querySelector(".root").style.display = "block";
        document.querySelector(".mobile").style.display = "none";
      }

    const mobileNav = document.querySelector(".fa.fa-bars");
    const navItems = document.querySelector("#links");

    mobileNav.addEventListener("click", function(){
        var x = document.getElementById("links");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }

    });

    navItems.addEventListener("click", function(){
        var x = document.getElementById("links");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }

    });

    const about = document.querySelector(".about");
    const experience = document.querySelector(".experience");
    const education = document.querySelector(".education");
 
    about.addEventListener("click", function(){

        about.style.color = "rgb(246 222 132)";
        about.style.fontWeight = "bolder";
        about.style.textShadow = "#FC0 0 0 10px";
        about.parentElement.style.width = "70px";
        experience.style.fontWeight = "revert";
        experience.style.color = '#f3f6f7';
        experience.parentElement.style.width = "revert";
        education.style.fontWeight = "revert";
        education.style.color = '#f3f6f7';
        education.parentElement.style.width = "revert";

    });

    experience.addEventListener("click", function(){
        //make the text glow
        experience.style.fontWeight = "bolder";
        experience.style.color = "rgb(246 222 132)";
        experience.style.textShadow = "#FC0 0 0 10px";
        experience.parentElement.style.width = "70px";
        education.style.fontWeight = "revert";
        education.style.color = '#f3f6f7';
        education.parentElement.style.width = "revert";
        about.style.color = "#f3f6f7";
        about.style.fontWeight = "revert";
        about.parentElement.style.width = "revert";
    });

    education.addEventListener("click", function(){
        education.style.fontWeight = "bolder";
        education.style.color = "rgb(246 222 132)";
        education.style.textShadow = "#FC0 0 0 10px";
        education.parentElement.style.width = "70px";
        experience.style.fontWeight = "revert";
        experience.style.color = '#f3f6f7';
        experience.parentElement.style.width = "revert";
        about.style.fontWeight = "revert";
        about.style.color = "#f3f6f7";
        about.parentElement.style.width = "revert";
    });

    const cursor = document.querySelector('.spotlight'); 
 
    document.addEventListener('mousemove', (e) => { 
        cursor.style.left = e.clientX + 'px'; 
        cursor.style.top = e.clientY + 'px'; 
    }); 
    
    // Add a hover effect to interactive elements 
    const interactiveElements = document.querySelectorAll('.interactive'); 
    interactiveElements.forEach((element) => { 
        element.addEventListener('mouseenter', () => { 
            cursor.style.width = '40px'; 
            cursor.style.height = '40px'; 
        }); 
        element.addEventListener('mouseleave', () => { 
            cursor.style.width = '20px'; 
            cursor.style.height = '20px'; 
        }); 
    }); 


  

    

});

