// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(value => {
        let {recipes} = value
        console.log(recipes);
        let food = document.getElementById('food');
        for (let recipe of recipes) {
            let h1 = document.createElement('h1');
            let h3 = document.createElement('h3')
            let ingredient = document.createElement('h4');
            let img = document.createElement('img')
            h1.innerText = `${recipe.id}. ${recipe.name}`;
            h3.innerText = `${recipe.cuisine}`
            img.src = recipe.image
            ingredient.innerText = 'Ingredient:'
            food.append(h1,h3,img,ingredient);
            for (let ingredient of recipe.ingredients) {
                let ul = document.createElement('ul');
                let li = document.createElement('li');
                li.innerText = ingredient
                ul.appendChild(li)
                food.appendChild(ul)
            }
            let instruction = document.createElement('h4');
            instruction.innerText = 'Instruction:'
            food.appendChild(instruction);
            for (let instruction of recipe.instructions) {
                let ul = document.createElement('ul');
                let li = document.createElement('li');
                li.innerText = instruction;
                ul.appendChild(li);
                food.appendChild(ul);
            }
        }

    });