
    export const productos = [
        {
            title : 'Adidas Forum Home Alone',
            price : 170,
            image : 'adidasforumhomealone.jpg',
            description: '',
            stock: 6,
            id: 1
        },
        {
            title : 'Air Jordan 1 x Travis Scott',
            price : 1500,
            image : 'airjordan1travis.jpg',
            description: '',
            stock: 4,
            id: 2
        },
        {
            title : 'Air Max 1 x Concepts',
            price : 350,
            image : 'airm1concepts.jpg',
            description: '',
            stock: 8,
            id: 3
        },
        {
            title : 'Nike Sb x Piet Parra',
            price : 450,
            image : 'sbparradunk.jpg',
            description: '',
            stock: 5,
            id: 3
        },
    ]

    const producto = {
            title : 'Nike Sb x Piet Parra',
            price : 450,
            image : 'sbparradunk.jpg',
            description: '',
            stock: 5,
            id: 3
    }

    export default producto;

    export  const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 1000)
        })
    }  