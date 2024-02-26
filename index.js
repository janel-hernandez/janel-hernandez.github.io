

window.addEventListener("DOMContentLoaded", (event) =>{

    const about = document.querySelector(".about");
    const experience = document.querySelector(".experience");
    const education = document.querySelector(".education");
 
    about.addEventListener("click", function(){

        about.style.color = "#faf0ca";
        about.style.fontWeight = "bolder";
        about.parentElement.style.width = "70px";
        experience.style.fontWeight = "revert";
        experience.style.color = '#f3f6f7';
        experience.parentElement.style.width = "revert";
        education.style.fontWeight = "revert";
        education.style.color = '#f3f6f7';
        education.parentElement.style.width = "revert";
        
        console.log("ABOUT IS GETTING CLICKED");
    });

    experience.addEventListener("click", function(){
        //make the text glow
        experience.style.fontWeight = "bolder";
        experience.style.color = "#faf0ca";
        experience.parentElement.style.width = "70px";
        education.style.fontWeight = "revert";
        education.style.color = '#f3f6f7';
        education.parentElement.style.width = "revert";
        about.style.color = "#f3f6f7";
        about.style.fontWeight = "revert";
        about.parentElement.style.width = "revert";
        console.log("experience  IS GETTING CLICKED");
    });

    education.addEventListener("click", function(){
        //make the text glow
        education.style.fontWeight = "bolder";
        education.style.color = "#faf0ca";
        education.parentElement.style.width = "70px";
        experience.style.fontWeight = "revert";
        experience.style.color = '#f3f6f7';
        experience.parentElement.style.width = "revert";
        about.style.fontWeight = "revert";
        about.style.color = "#f3f6f7";
        about.parentElement.style.width = "revert";
        console.log("education IS GETTING CLICKED");
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

    // const mask = document.querySelector(".spotlight::after");

    // document.addEventListener('mousemove', (pos) => {
  
    //     console.log("HERE");
    //     // Calculate mouse position in percentages.
    //     let x = parseInt( pos.clientX / window.innerWidth * 100 );
    //     let y = parseInt( pos.clientY / window.innerHeight * 100 );
      
    //     // Update the custom property values on the body.
    //     mask.style.setProperty('--mouse-x', x + '%');
    //     mask.style.setProperty('--mouse-y', y + '%'); 
    // });

    // mask.addEventListener("mousemove", (e) => {
    //     const { x, y } = mask.getBoundingClientRect();
    //     mask.style.left = "--x", e.clientX - x;
    //     mask.style.top = "--y", e.clientY - y;
    // });

});

