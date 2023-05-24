
//   const liItem =document.querySelectorAll('ul li')
//    const divItem = document.querySelectorAll('.dashboard div.col-sm-4')
// //   const divItem = document.getElementsByClassName('.filterDiv ')
// console.log(liItem);
//   liItem.forEach(li =>{
//     li.onclick = function(){
//             liItem.forEach(li =>{
//                     li.className ="";
//         })
//     li.className ="active";
    
// const value = li.textContent;
// console.log(value);
// }
//   })





$(document).ready(function(){
  $('.list').click(function(){
      const svalue = $(this).attr('data-filter');
      console.log(svalue)
  });
});

$(document).ready(function(){
  $('.list').click(function(){
      const svalue = $(this).attr('data-filter');
      addActive(this)
      filterSelection(svalue)
      
  });
  
});

//Add active class to show active button

function addActive(c){
  console.log(c)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("list");
console.log(btns.length);
for (var i = 0; i < btns.length; i++) {
  console.log(btns[i].className)
  btns[i].classList.remove("active")
}
c.className += " " + "active"
}

//add hide class to filter BI tool based on selection

function filterSelection(c) {
  console.log(c)
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  console.log(x)
  // if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("hide");
    // console.log(x[i].className.indexOf(c))
   
    if(!x[i].classList.contains(c) && c != "all" ){
     
      x[i].className += " " + "hide";
   
      // console.log(x[i].className) 
      
    }
      
  }
}