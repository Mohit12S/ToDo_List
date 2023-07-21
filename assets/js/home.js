// The below Javascript is to have colors on different buttons showing which category we chose
var variable = document.getElementsByClassName('btn-color');

var items = [
    "red",
    "blue",
    "green",
    "purple",
    "cyan",
    "yellow",
    "violet"
];
  
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
};

for(let i in variable){
    var abc = variable[i].innerHTML;
    if(abc == "Personal"){
        variable[i].style.backgroundColor = "pink";
    }
    else if(abc == "Others"){
        variable[i].style.backgroundColor = "orange";
    }
    else if(abc == "School"){
        variable[i].style.backgroundColor = "lightgreen";
    }
    else if(abc == "Work"){
        variable[i].style.backgroundColor = "lightgreen";
    }
    else{
        variable[i].style.backgroundColor = "brown";
    }
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
function redirectToLink(event) {
    const checkbox = event.target;
    const link = checkbox.dataset.link;

    if (checkbox.checked) {
      window.location.href = link;
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', redirectToLink);
});

