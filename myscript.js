
function boxes() {
    let text;
    let num = prompt("what by what?");
    if (num == null || num == "" || num > 100) {
        text = "Invalid";
        document.getElementById('container').append(text);
        return;
    } else {
        const measure = 600/num;
        for (i=0; i<(parseInt(num)**2); i++) {
            let child = document.createElement('div');
            child.className = 'child';
            child.style.width = `${measure}px`;
            child.style.height = `${measure}px`;
            document.getElementById('container').appendChild(child);
        };
        return;
    }
}

const children = document.getElementsByClassName('child');
Array.from(children).forEach(changeColour);

function changeColour(item) {
    console.log('read');
    item.addEventListener('mousedown', function (){
        item.style.backgroundColor = 'green';
        console.log('hi');
    });
}