for (i=0; i<16; i++) {
    let child = document.createElement('div');
    child.className = 'child';
    document.getElementById('container').appendChild(child);
    console.log(i);
}