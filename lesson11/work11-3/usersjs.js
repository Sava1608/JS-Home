let ID = new URL(location.href).searchParams.get('id')
let userURL = 'https://jsonplaceholder.typicode.com/users/'+ID;
fetch(userURL).then(res => res.json())
    .then(data =>{
        console.log(data);
        let mainBlock = document.createElement('div');
        document.body.appendChild(mainBlock);
        for (let datum in data) {
            let p = document.createElement('p')
            if(datum === 'address' || datum ==='company'){
                for (let element in data[datum]) {
                    let h4 = document.createElement('h4')
                    if(element === 'geo'){
                        let h5 = document.createElement('h5')
                        h5.innerText = `${element}`
                        mainBlock.appendChild(h5);
                    }else {
                        h4.innerText = `${data[datum][element]}`
                        mainBlock.appendChild(h4);
                    }
                }
            } else {
                p.innerText =`${data[datum]}`
                mainBlock.appendChild(p)
            }

        }
    })