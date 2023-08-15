 const htmlElement = document.querySelector("html")

 
 function toggleMode() {
   
   if (htmlElement.classList.contains("light")) {
    
     htmlElement.classList.remove("light")
     htmlElement.classList.add("dark")
   } else {
   
     htmlElement.classList.remove("dark")
     htmlElement.classList.add("light")
   }
 }
