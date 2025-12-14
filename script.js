let i = 1;

while( i < 14) {
    document.querySelector('#scroll1').innerHTML += `<img class="${i}" src="post/d1/${i}.jpg" alt="img">`;
    document.querySelector('#scroll2').innerHTML += `<img class="${i}" src="post/d2/${i}.jpg" alt="img">`;
    document.querySelector('#scroll3').innerHTML += `<img class="${i}" src="post/d3/${i}.jpg" alt="img">`;
    document.querySelector('#scroll4').innerHTML += `<img class="${i}" src="post/d4/${i}.jpg" alt="img">`;
    i++;
}
// while( i < 7) {
//     document.querySelector('#scroll2').innerHTML += `<img class="${j}" src="post/d2/${i}.jpg" alt="img">`;
//     document.querySelector('#scroll3').innerHTML += `<img class="${j}" src="post/d3/${i}.jpg" alt="img">`;
//     i++;
// }

// setInterval(() => {
//     document.querySelector('#scroll1').innerHTML += `<img src="post/d1/${i}.jpg" class="${i}" alt="">`;
//     document.querySelector('#scroll2').innerHTML += `<img src="post/d2/${i}.jpg" class="${i}" alt="">`;
//     document.querySelector('#scroll3').innerHTML += `<img src="post/d3/${i}.jpg" class="${i}" alt="">`;
//     document.querySelector('#scroll4').innerHTML += `<img src="post/d4/${i}.jpg" class="${i}" alt="">`;
//     i++;
//     if( i == 8) {
//         i = 1;
//     }
// }, 1200);