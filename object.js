const product = {
    id: 1,
    name: "প্রোগ্রামিংয়ের চৌদ্দগোষ্ঠী",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590868459i/53672238.jpg",
    originalPrice: 420,
    discountPrice: 361,
    inStock: true,
    rating: 4.7,
    reviews: [
        {
            id: 1,
            name: "Jhankar Mahbub",
            review: "Amar ei boi khubi valo kine felo"
        },
        {
            id: 2,
            name: "Azizul Islam Milton",
            review: "Kono kotha hobe na sera boi sera",
        },
        {
            id: 3,
            name: "Rakibul Hasan Rokib",
            review: "Kono kotha hobe na sera boi sera",
        },

    ]
}

const name = product.name
const price = product.discountPrice

const arr = ["mobile","tv"]
const mobile = arr[0]
// console.log(mobile);

const reviews = product.reviews
console.log(reviews);
const jhankarMahbub = reviews[0]
// console.log(reviews);
// console.log(jhankarMahbub);

for (let index = 0; index < reviews.length; index++) {
    const element = reviews[index];
    // console.log(element);
    
}



// console.log(name);
// console.log(price);
// console.log(rating);






