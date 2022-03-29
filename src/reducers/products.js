var initialState = [
    {
        id: 1,
        name: "Iphone 7",
        image: "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600-1-600x600.jpg",
        description: "Apple's product",
        price: 500,
        inventory: 10,  //so hang trong kho
        rating: 4,
    },
    {
        id: 2,
        name: "Oppo F1s",
        image: "https://cf.shopee.vn/file/894b51ef8d58c6aacf3daa37cfcd3633",
        description: "Oppo's product",
        price: 300,
        inventory: 15,  //so hang trong kho
        rating: 3,
    },
    {
        id: 3,
        name: "Samsung Galaxy S7",
        image: "https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-s7-edge-sm-935-32gb-ban-my.jpg",
        description: "Samsung's product",
        price: 600,
        inventory: 13,  //so hang trong kho
        rating: 5,
    },
];

const products = (state = initialState, action) => {
    switch(action.type){

        default: return [...state];
    }
}

export default products;