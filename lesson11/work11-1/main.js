// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(value => {
        let {carts} = value;
        console.log(carts);
        for (let cart of carts) {
            document.write(`<li>${cart.id}.</li>`)
            document.write('--------------------------')
            for (let product of cart.products) {
                document.write(`<li>ID: ${product.id}.  ${product.title}</li>`);
                document.write(`<li>Price: ${product.price}</li>`);
                document.write(`<li>Quantity: ${product.quantity}</li>`);
                document.write(`<li>Total: ${product.total}</li>`);
                document.write(`<li>DiscountPercentage: ${product.discountPercentage}</li>`);
                document.write(`<li>DiscountedPrice: ${product.discountedPrice}</li>`);
                document.write(`<li>Thumbnail: ${product.thumbnail}</li>`);
                document.write('------------------------------------------------------')
            }
        }
    });