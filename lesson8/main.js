Vue.component('product',{
    props:{
        premium:{
            type: Boolean,
            required: true
        }
    },
    template:`
    <div class="product">
    <div class="product-image">
        <img v-bind:src="image">
    </div>
    <div class="product-info">
        <h1>{{ title }}</h1>
        <h2>{{ description }}</h2>
        <p v-if="inStock">In Stock</p>
        <p v-else :class="{outOfStock: !inStock}">Out of Stock</p>
        <p>{{ sale }}</p>
        <p>Shipping: {{shipping}}</p>

        <product-details :details="details"></product-details>

        <div v-for="(variant, index) in variants" 
            :key="variant.variantId"
            class="color-box"
            :style="{ backgroundColor: variant.variantColor}"
            @mouseover="updateProduct(index)">
        </div>

        <!-- <div v-for="size in sizes" :key="size.sizeId">
            <p>{{ size.sizeDm}}</p>
        </div> -->

        <p><a :href="link" target="_blank">More products like this</a></p>

        <button v-on:click="addToCart" 
                :disabled="!inStock"
                :class="{disabledButton: !inStock}">Add to Cart</button>

        <button v-on:click="pullOfCart()">Pull of Cart</button>

        <div class="cart">
            <p>Cart({{cart}})</p>
        </div>
        
    </div>
</div>
    `,
    data(){
        return {
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
        }
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
        },
        shipping(){
            if(this.premium){
                return "Free"
            }
            return 2.99
        }
    }
})

Vue.component('product-details',{
    props:{
        details:{
            type: Array,
            required: true
        }
    },
    template:`
    <ul>
    <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `
})

var app = new Vue({
    el: '#app',
    data:{
        premium: false
    }
})