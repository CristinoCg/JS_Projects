var plus_button = document.getElementById('plus');
var minus_button = document.getElementById('minus');
let sectionTag = document.getElementsByTagName('section')[0];

var counter = 0;
plus_button.addEventListener('click',() => {
    counter += 1
    document.getElementsByTagName('section')[0].innerHTML = counter;
    if(counter >= 0) {

        sectionTag.style.color = 'white';    
    
    }
})

minus_button.addEventListener('click',() => {
    counter -= 1
    document.getElementsByTagName('section')[0].innerHTML = counter;
    console.log(counter<0);

if(counter < 0) {

    sectionTag.style.color = 'red';    

}
})

