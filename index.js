// let posts = [];
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.send();
// xhr.onload = function() {
//     if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//       alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
//     } else { // если всё прошло гладко, выводим результат
//       posts = JSON.parse(this.response);
        
//       console.log(posts);
//       posts.forEach(element => {
//         console.log(element.name);
//       });
//     }
//   };
const blockposts = document.querySelector('.blockposts'); 
const title = document.querySelector('.title');
posts = [];
let request = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
});
request.then(response => {
    if(response.ok && response.status ===200){
        return response.json();
    }
    throw new Error('Что то пошло нетак. Попробуйте позже');
})
    .then(value => {
        posts = [...value];
        blockposts.style.display = 'flex';
        blockposts.style.flexDirection = 'column';
        blockposts.style.gap = '20px';
        blockposts.style.width = '300px';
        blockposts.style.margin = '0 auto';
        for(let post of posts){
            const div = document.createElement('div');
            div.classList.add('post');
            const title = document.createElement('h3');
            const body = document.createElement('p');
            title.textContent = post.title;
            body.textContent = post.body;
            div.append(title);
            div.append(body);
            blockposts.append(div);
            
        }
    })
    