 let block = document.querySelector('#block');
 let list = document.querySelectorAll('ul li');

 function MoveIndicator(e) {
     block.style.left = e.offsetLeft+'px';
     block.style.width = e.offsetWidth+'px';
 }
    list.forEach(link => {
         link.addEventListener('mousemove', (e) => {
        MoveIndicator(e.target);

    })
})

function activeLink() {
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
    }
    list.forEach((item) => 
    item.addEventListener('mouseover', activeLink));