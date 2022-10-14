const burger = document.getElementById("burger")
const links = document.querySelector(".links")
const anchors = links.querySelectorAll("a")

burger.addEventListener("click", function(){
   links.classList.toggle("open")
})

links.addEventListener("click", function(){
    links.classList.remove("open")
        for(var x of links){
            x.classList.remove("a-selected")
        }
    }
)
for(var x of anchors){
   x.addEventListener("click", function(){
      for(var x of anchors){
         x.classList.remove("a-selected")
      }
      this.classList.add("a-selected")
   })
   
}


  const tabs = document.getElementsByClassName("tab")
const buttons = document.getElementsByTagName("button")

    for(var x of tabs){
        x.style.display = "none"
    }
    
  function changeHeader(x, name) {
    for(var x of tabs){
        x.style.display = "none"
    }
    document.getElementById(name).style.display = "block"
  }


  const accordion = document.getElementsByClassName('contentBx')

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active')
    })
  }
  

  $(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled: true
    }
  })
