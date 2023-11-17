let leftbox = document.getElementById("left")
let rightbox = document.getElementById("right")
let lists = document.getElementsByClassName("list")
// console.log(lists)

for(let list of lists){
    // console.log(list)
       list.addEventListener('dragstart',function(e){
           let selected = e.target

           rightbox.addEventListener('dragover',function(e){
               e.preventDefault()
           })
    
           rightbox.addEventListener("drop",function(e){
               rightbox.appendChild(selected)
               selected = null;
           })

           leftbox.addEventListener('dragover',function(e){
               e.preventDefault()
           })

           leftbox.addEventListener('drop',function(e){
               leftbox.appendChild(selected)
               selected = null;
           })
       })

}