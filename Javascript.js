// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     // Close all other buttons
//     for (var j = 0; j < coll.length; j++) {
//       if (coll[j] !== this) {
//         coll[j].classList.remove("active");
//         coll[j].nextElementSibling.style.display = "none";
//       }
//     }

//     // Toggle the clicked button
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }


var coll = document.getElementsByClassName("collapsible");
var i;
var activeCollapsible = null;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    if (activeCollapsible && activeCollapsible !== this) {
      activeCollapsible.classList.remove("active");
      activeCollapsible.nextElementSibling.style.maxHeight = null;
    }
    
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    
    activeCollapsible = this.classList.contains("active") ? this : null;
  });
}

