let array = [];
let startPage = 1;
let endPage = 10;

for (let i = 1; i <= 100; i++) {
    array.push({id: i, value: `Item = ${[i]} `});
}
function viewFirstObj(page){
    let start = (page - 1) * endPage // без допоги гугла не обійшлось)
    let end = start + endPage;
    let out = "";
    for (let i = start; i < end; i++) {
        if(array[i]){
            out +=`${array[i].value}`
        }
    }
    document.getElementById('output').innerText = out;
}
viewFirstObj(startPage);

function showNext (){
    let pages = (array.length + endPage -1) / endPage;
    if(startPage < pages){
        startPage++;
        viewFirstObj(startPage)
    }
}
function showPrev(){
    if(startPage > 1){
        startPage--;
        viewFirstObj(startPage);
    }
}