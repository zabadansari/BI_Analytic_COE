var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function(){
  
    var current = document.getElementsByClassName("active");
    console.log(current)
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// $('#myBtnContainer').click(function(){
//     var btnContainer = document.getElementById("myBtnContainer");
//     var btns = btnContainer.getElementsByClassName("btn");
//     for (var i = 0; i < btns.length; i++) {
//         console.log(i);
//     }
// });

// filterSelection("all");
//    function filterSelection(c) {
//       var x, i;
//       x = document.querySelectorAll(".filterDiv");
//       if (c == "all") c = "";
//       Array.from(x).forEach(item => {
//          removeActiveClass(item, "show");
//          if (item.className.indexOf(c) > -1) addActiveClass(item, "show");
//       });
//    }

//    function removeActiveClass(ele, name) {
//     var i, arr1, arr2;
//     arr1 = ele.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//        while (arr1.indexOf(arr2[i]) > -1) {
//           arr1.splice(arr1.indexOf(arr2[i]), 1);
//        }
//     }
//     ele.className = arr1.join(" ");
//  }

//  function addActiveClass(ele, name) {
//     var i, arr1, arr2;
//     arr1 = ele.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//        if (arr1.indexOf(arr2[i]) == -1) {
//           ele.className += " " + arr2[i];
//        }
//     }
//  }

// function w3AddClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     console.log("test")
//     for (i = 0; i < arr2.length; i++) {
//       if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//     }
//   }
  
//   function w3RemoveClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//       while (arr1.indexOf(arr2[i]) > -1) {
//         arr1.splice(arr1.indexOf(arr2[i]), 1);     
//       }
//     }
//     element.className = arr1.join(" ");
//   }

  const liItem =document.querySelectorAll('ul li')
   const divItem = document.querySelectorAll('.dashboard div.col-sm-4')
//   const divItem = document.getElementsByClassName('.filterDiv ')

  liItem.forEach(li =>{
    li.onclick = function(){
            liItem.forEach(li =>{
                    li.className ="";
        })
    li.className ="active";
    
const value = li.textContent;
console.log(value)
divItem.forEach(div =>{
        div.style.display ="none";
         imgattribute =div.getAttribute('data-filter')
         if(imgattribute == value || value == "Show All"){

             div.style.display ="block";
            // var i = $('#PowerBI').text();
            if(value=="Power BI"){
                console.log(i)
                $('#Tableau').hide()
                $('#PowerBI').show()
                document.getElementById("Tableau").style.marginTop = "0px";
            }
            else if(value =="Tableau"){
                $('#PowerBI').hide()
                $('#Tableau').show()
                document.getElementById("Tableau").style.marginTop = "-100px";
            }else{
                $('#Tableau').show()
                $('#PowerBI').show()
                document.getElementById("Tableau").style.marginTop = "0px";
            }

            }
          

         
       
})
}
  })

  $(document).ready(function(){
    $('.list').click(function(){
        const svalue = $(this).attr('data-filter');
        if(svalue=='all'){
            $('.itemBox').show('1000');
        }else{
            $('.itemBox').not('.'+ svalue).hide('1000');
            $('.itemBox').filter('.'+ svalue).show('1000');
        }

        console.log(svalue)
    })

  })