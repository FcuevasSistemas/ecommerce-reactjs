
    export const productos = [
        {
            title : 'Adidas Forum Home Alone',
            price : 170,
            image : 'adidasforumhomealone.jpg',
            description: '',
            stock: 6,
            id: 1,
            category: 'adidas'

        },
        {
            title : 'Air Jordan 1 x Travis Scott',
            price : 1700,
            image : 'airjordan1travis.jpg',
            description: '',
            stock: 4,
            id: 2,
            category: 'jordan'
        },
        {
            title : 'Air Max 1 x Concepts',
            price : 350,
            image : 'airm1concepts.jpg',
            description: '',
            stock: 8,
            id: 3,
            category: 'nike'
        },
        {
            title : 'Nike Sb x Piet Parra',
            price : 450,
            image : 'sbparradunk.jpg',
            description: '',
            stock: 5,
            id: 4,
            category: 'nike'
        },
        {
            title : 'Adidas Forum Bad Bunny',
            price : 650,
            image : 'forumbadbeaster.jpg',
            description: '',
            stock: 3,
            id: 5,
            category: 'adidas'
        },
        {
            title : 'New Balance 550',
            price : 150,
            image : 'newbalance550.jpg',
            description: '',
            stock: 12,
            id: 6,
            category: 'newbalance'
        },
        {
            title : 'Nike Dunk Low Sour Apple',
            price : 220,
            image : 'dunkSourApple.png',
            description: '',
            stock: 4,
            id: 7,
            category: 'nike'

        },
        {
            title : 'Nike Dunk Low Panda',
            price : 230,
            image : 'dunkPanda.jpg',
            description: '',
            stock: 6,
            id: 8,
            category: 'nike'

        },
    ]

    const producto = [{
            title : 'Nike Sb x Piet Parra',
            price : 450,
            image : 'sbparradunk.jpg',
            description: '',
            stock: 5,
            id: 4,
    },
        
            {
            title : 'Air Max 1 x Concepts',
            price : 350,
            image : 'airm1concepts.jpg',
            description: '',
            stock: 8,
            id: 3,
        },
            {
                title : 'Adidas Forum Home Alone',
                price : 170,
                image : 'adidasforumhomealone.jpg',
                description: '',
                stock: 6,
                id: 1,
                category: 'adidas'
    
            },

            {
                title : 'Air Jordan 1 x Travis Scott',
                price : 1700,
                image : 'airjordan1travis.jpg',
                description: '',
                stock: 4,
                id: 2,
                category: 'jordan'
            },
            {
                title : 'Adidas Forum Bad Bunny',
                price : 650,
                image : 'forumbadbeaster.jpg',
                description: '',
                stock: 3,
                id: 5,
                category: 'adidas'
            },
            {
                title : 'New Balance 550',
                price : 150,
                image : 'newbalance550.jpg',
                description: '',
                stock: 12,
                id: 6,
                category: 'newbalance'
            },
            {
                title : 'Nike Dunk Low Sour Apple',
                price : 220,
                image : 'dunkSourApple.png',
                description: '',
                stock: 4,
                id: 7,
                category: 'nike'
    
            },
            {
                title : 'Nike Dunk Low Panda',
                price : 230,
                image : 'dunkPanda.jpg',
                description: '',
                stock: 6,
                id: 8,
                category: 'nike'
    
            },
    
]
    export default producto;

    export  const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 1000)
        })
    }  

    export  const getByCategory = (brand) => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                const newProductos = productos.filter((producto)=>producto.category === brand)
                resolve(newProductos)
            }, 1000)
        })
    }  