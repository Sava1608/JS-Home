let URL = 'http://jsonplaceholder.typicode.com/users';
function getUsers(url){
    fetch(url).then(res=>res.json())
        .then(data => {
            console.log(data)
            renderUser(data)
        })
}
function renderUser(user){
    let block = document.getElementById('tenUser');
    block.innerHTML = '';
    for (let userElement of user) {
        let div = document.createElement('div');
        let h3 = document.createElement('h3')
        h3.innerText = `${userElement.id}. ${userElement.name}`;
        h3.addEventListener('click',() => {
            location.href = 'users.html?id='+userElement.id
        });
        div.appendChild(h3);
        block.appendChild(div);

    }
}
getUsers(URL);