
    export const productos = [
        {
            title : 'Adidas Forum Home Alone',
            price : 170,
            image : 'adidasforumhomealone.jpg',
            description: '',
            stock: 6,
            id: 1,
            category: 'Adidas'

        },
        {
            title : 'Air Jordan 1 x Travis Scott',
            price : 1500,
            image : 'airjordan1travis.jpg',
            description: '',
            stock: 4,
            id: 2,
            category: 'Jordan'
        },
        {
            title : 'Air Max 1 x Concepts',
            price : 350,
            image : 'airm1concepts.jpg',
            description: '',
            stock: 8,
            id: 3,
            category: 'Nike'
        },
        {
            title : 'Nike Sb x Piet Parra',
            price : 450,
            image : 'sbparradunk.jpg',
            description: '',
            stock: 5,
            id: 4,
            category: 'Nike'
        },
        {
            title : 'Adidas Forum Bad Bunny',
            price : 650,
            image : 'forumbadbeaster.jpg',
            description: '',
            stock: 3,
            id: 5,
            category: 'Adidas'
        },
        {
            title : 'New Balance 550',
            price : 150,
            image : 'newbalance550.jpg',
            description: '',
            stock: 12,
            id: 6,
            category: 'NewBalance'
        },
    ]

    const producto = [{
            title : 'Nike Sb x Piet Parra',
            price : 450,
            image : 'sbparradunk.jpg',
            description: '',
            stock: 5,
            id: 4,
            /*description: "En esta ocasión Nike Sb crea una colaboracion
            con el artista Piet Parra de origen holandés, el colorway 
            se basa en las obras de este artista: el arte abstracto"*/
    },
        
            {
            title : 'Air Max 1 x Concepts',
            price : 350,
            image : 'airm1concepts.jpg',
            description: '',
            stock: 8,
            id: 3,
            
    
}]
    export default producto;

    export  const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 1000)
        })
    }  