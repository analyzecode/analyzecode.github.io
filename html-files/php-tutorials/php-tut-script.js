
   const landingpage = document.querySelector(".landingpage"),
   footer = document.querySelector(".footer");
  //  mobileDropdownContainer = document.querySelector(".mobile-Dropdown");
  //  sidebar = document.querySelector(".tut-content-sidebar"),
  //  sharePool = document.querySelector(".share-pool-block"),
   
// fetch('topaarea.html')
// .then(component => component.text())
// .then(data=>{
//   landingpage.innerHTML =data
// });
// fetch('sharePool.html')
// .then(component => component.text())
// .then(data=>{
//   sharePool.innerHTML = data
// });
fetch('../footer.html')
.then(component => component.text())
.then(data=>{
  footer.innerHTML = data
});

// fetch('phpMobileDropDown.html')
// .then(component => component.text())
// .then(data=>{
//   mobileDropdownContainer.innerHTML = data
// });

// fetch('sidebar.html')
// .then(component => component.text())
// .then(data=>{
//   sidebar.innerHTML=data
// })
const All_Details = document.querySelectorAll('details');

All_Details.forEach(deet=>{
  deet.addEventListener('toggle', toggleOpenOneOnly)
})

function toggleOpenOneOnly(e) {
  if (this.open) {
    All_Details.forEach(deet=>{
      if (deet!=this && deet.open) deet.open = false
    });
  }
}
 
// mobile dropdown 

const hamburgericon = document.querySelector(".hamburger-menu-ico")
const mobileDropdown = document.querySelector(".mobile-dropdown")
const presentcourses = document.querySelector(".presentcourse")
const allcourselist = document.querySelector(".allcourselist")
const presentcoursesbtn = document.querySelector(".presentcourse-btn")
const allcourselistbtn = document.querySelector(".allcourselist-btn")
const mobileDropdownContent = document.querySelector(".mobile-dropdown .content");

hamburgericon.addEventListener("click",()=>{
  mobileDropdown.classList.toggle("hidden");
})
presentcoursesbtn.addEventListener("click",()=>{
  presentcoursesbtn.classList.add("activebtn");
  allcourselist.classList.add("hidden");
  presentcourses.classList.remove("hidden");
})
allcourselistbtn.addEventListener("click",()=>{
  allcourselistbtn.classList.add("activebtn");
  presentcoursesbtn.classList.remove("activebtn");
  allcourselist.classList.remove("hidden");
  presentcourses.classList.add("hidden");
})