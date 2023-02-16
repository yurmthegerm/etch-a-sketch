
function boxes() {
    let text;
    let num = prompt("what by what?");
    if (num == null || num == "") {
        text = "Invalid";
    } else {
        const measure = 960/num;
        for (i=0; i<(parseInt(num)**2); i++) {
            let child = document.createElement('div');
            child.className = 'child';
            child.style.width = `${measure}px`;
            child.style.height = `${measure}px`;
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