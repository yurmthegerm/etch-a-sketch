
function boxes() {
    let text;
    let num = prompt("what by what?");
    if (num == null || num == "") {
        text = "Invalid";
    } else {
        for (i=0; i<(parseInt(num)**2); i++) {
            let child = document.createElement('div');
            child.className = 'child';
            document.getElementById('container').appendChild(child);
        
        };
    }
}

const children = document.getElementsByClassName('child');
Array.from(children).forEach(changeColour);

function changeColour(item) {
    item.addEventListener('mouseover', function (){
        item.style.backgroundColor = 'yellow';
    });
}