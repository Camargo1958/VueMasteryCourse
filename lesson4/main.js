var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inStock:false,
        inventory:100,
        onSale:true,
        details:["80% cotton","20% polyester","Gender-neutral"],
        variants:[
            {
                variantId:2234,
                variantColor:"green"
            },
            {
                variantId:2235,
                variantColor:"blue"
            }
        ],
        sizes:[
            {
                sizeId:1212,
                sizeDm:"small",
            },
            {
                sizeId:1213,
                sizeDm:"medium",
            },
            {
                sizeId:1214,
                sizeDm:"big",
            }
        ]
    }
})