var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        //image: './assets/vmSocks-green-onWhite.jpg',
        selectedVariant: 0,
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        //inStock:true,
        inventory:100,
        onSale:true,
        details:["80% cotton","20% polyester","Gender-neutral"],
        variants:[
            {
                variantId:2234,
                variantColor:"green",
                variantImage:'./assets/vmSocks-green.png',
                variantQuantity: 11
            },
            {
                variantId:2235,
                variantColor:"blue",
                variantImage:'./assets/vmSocks-blue.png',
                variantQuantity: 0
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
        ],
        cart:0
    },
    methods:{
        addToCart(){
            this.cart +=1
        },
        pullOfCart(){
            if(this.cart >0)
                {
                    this.cart -=1
                }
        },
        updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
              return this.brand + ' ' + this.product + ' are on sale!'
            } 
              return  this.brand + ' ' + this.product + ' are not on sale'
        }
    }
})