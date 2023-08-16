const products = [
    {
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
                id: 2,
                name: "Azizul Islam Milton",
                review: "Kono kotha hobe na sera boi sera",
            },

        ]
    },

    {
        id: 2,
        name: "হাবলুদের জন্য প্রোগ্রামিং",
        image: "https://wafilife-media.wafilife.com/uploads/2020/11/%E0%A6%B9%E0%A6%BE%E0%A6%AC%E0%A6%B2%E0%A7%81%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82.jpg",
        originalPrice: 300,
        discountPrice: 225,
        inStock: true,
        rating: 4.5,
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
                id: 2,
                name: "Azizul Islam Milton",
                review: "Kono kotha hobe na sera boi sera",
            },

        ]
    },

    {
        id: 3,
        name: "প্রোগ্রামিংয়ের বলদ টু বস",
        image: "https://projonmeralo.com/wp-content/uploads/2021/06/projonmeralo20210612.07r.jpg",
        originalPrice: 300,
        discountPrice: 258,
        inStock: true,
        rating: 4.9,
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
                id: 2,
                name: "Azizul Islam Milton",
                review: "Kono kotha hobe na sera boi sera",
            },

        ]
    },

    {
        id: 4,
        name: "প্যারাময় লাইফের প্যারাসিটামল",
        image: "https://wafilife-media.wafilife.com/uploads/2020/11/%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A7%9F-%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%AB%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%9F%E0%A6%BE%E0%A6%AE%E0%A6%B2.jpg",
        originalPrice: 320,
        discountPrice: 275,
        inStock: true,
        rating: 5.0,
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
                name: "Rokibul Hasan Rokib",
                review: "Kono kotha hobe na sera boi sera",
            },

        ]
    },

    {
        id: 5,
        name: "রিচার্জ ইয়োর ডাউন ব্যাটারি",
        image: "https://wafilife-media.wafilife.com/uploads/2020/11/%E0%A6%B0%E0%A6%BF%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%9C-%E0%A6%87%E0%A7%9F%E0%A7%8B%E0%A6%B0-%E0%A6%A1%E0%A6%BE%E0%A6%89%E0%A6%A8-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%BF.jpg",
        originalPrice: 320,
        discountPrice: 258,
        inStock: true,
        rating: 5.0,
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
                name: "Rokibul Hasan Rokib",
                review: "Kono kotha hobe na sera boi sera",
            },

        ]
    },
    {
        id: 6,
        name: "চেষ্টার জিমনেসিয়াম ফিউচারের ক্যালসিয়াম",
        image: "https://wafilife-media.wafilife.com/uploads/2021/05/%E0%A6%9C%E0%A6%BF%E0%A6%AE%E0%A6%A8%E0%A7%87%E0%A6%B8%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%AE.jpg",
        originalPrice: 240,
        discountPrice: 206,
        inStock: true,
        rating: 5.0,
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
                name: "Rokibul Hasan Rokib",
                review: "Kono kotha hobe na sera boi sera",
            },

        ]
    }
]

