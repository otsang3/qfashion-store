use qfashionDatabase;
db.dropDatabase(); 

db.store.insertMany([
    {
        men: {
            jackets: [
                {
                    id: 1,
                    colour: "Navy",
                    imgUrl: [
                        "/men/jackets/jacket-1.png",
                        "/men/jackets/jacket-4.png",
                        "/men/jackets/jacket-5.png",
                        "/men/jackets/jacket-6.png"
                    ],
                    name: "Farah Bective soft shell jacket",
                    price: 100.00,
                    size: ["S", "M", "L", "XL"]
                },
                {
                    id: 2,
                    colour: "Black",
                    imgUrl: [
                        "/men/jackets/jacket-2.png",
                        "/men/jackets/jacket-7.png",
                        "/men/jackets/jacket-8.png",
                        "/men/jackets/jacket-9.png",
                    ],
                    name: "Ralph Lauren harrington jacket",
                    price: 159.00,
                    size: ["XS", "S", "M", "L"]
                },
                {
                    id: 3,
                    colour: "Khaki",
                    imgUrl: [
                        "/men/jackets/jacket-3.png",
                        "/men/jackets/jacket-10.png",
                        "/men/jackets/jacket-11.png",
                        "/men/jackets/jacket-12.png",
                    ],
                    name: "Rains hooded jacket",
                    price: 75.00,
                    size: ["M", "L"]
                }
            ],
            shoes: [
                {
                    id: 1,
                    colour: "Beige",
                    imgUrl: [
                        "/men/shoes/shoe-1.png",
                        "/men/shoes/shoe-2.png",
                        "/men/shoes/shoe-3.png",
                        "/men/shoes/shoe-4.png",
                    ],
                    name: "Timberland Radford 6 Inch boots",
                    price: 165.00,
                    size: [7.5, 8, 8.5, 9, 9.5, 10]
                },
                {
                    id: 2,
                    colour: "Black",
                    imgUrl: [
                        "/men/shoes/shoe-5.png",
                        "/men/shoes/shoe-6.png",
                        "/men/shoes/shoe-7.png",
                        "/men/shoes/shoe-8.png",
                    ],
                    name: "Vans Authentic plimsolls in black",
                    price: 52.00,
                    size: [6.5, 7, 7.5, 8, 8.5, 9]
                },
                {
                    id: 3,
                    colour: "White",
                    imgUrl: [
                        "/men/shoes/shoe-9.png",
                        "/men/shoes/shoe-10.png",
                        "/men/shoes/shoe-11.png",
                        "/men/shoes/shoe-12.png",
                    ],
                    name: "Puma Ralph Sampson Lo trainers",
                    price: 52.00,
                    size: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]
                }
            ]
            }
        ,
        women: 
            {
                jackets: [
                    {
                        id: 1,
                        colour: "Tan",
                        imgUrl: [
                            "/women/jackets/jacket-1.png",
                            "/women/jackets/jacket-2.png",
                            "/women/jackets/jacket-3.png",
                            "/women/jackets/jacket-4.png",
                        ],
                        name: "Fashion Union Petite trench coat",
                        price: 60.00,
                        size: [4, 6, 8, 10, 12]
                    },
                    {
                        id: 2,
                        colour: "Black",
                        imgUrl: [
                            "/women/jackets/jacket-5.png",
                            "/women/jackets/jacket-6.png",
                            "/women/jackets/jacket-7.png",
                            "/women/jackets/jacket-8.png",
                        ],
                        name: "Miss Selfridge faux leather biker jacket",
                        price: 45.00,
                        size: [6, 8, 10, 14]
                    },
                    {
                        id: 3,
                        colour: "Black",
                        imgUrl: [
                            "/women/jackets/jacket-9.png",
                            "/women/jackets/jacket-10.png",
                            "/women/jackets/jacket-11.png",
                            "/women/jackets/jacket-12.png",
                        ],
                        name: "Pimkie teddy jacket",
                        price: 49.99,
                        size: [4, 6, 8, 10]
                    }
                ],
                shoes: [
                    {
                        id: 1,
                        colour: "Black",
                        imgUrl: [
                            "/women/shoes/shoe-1.png",
                            "/women/shoes/shoe-2.png",
                            "/women/shoes/shoe-3.png",
                            "/women/shoes/shoe-4.png"
                        ],
                        name: "adidas Originals U Path Run trainers",
                        price: 69.95,
                        size: [4.5, 5.5, 6, 6.5, 7, 8]
                    },
                    {
                        id: 2,
                        colour: "Black",
                        imgUrl: [
                            "/women/shoes/shoe-5.png",
                            "/women/shoes/shoe-6.png",
                            "/women/shoes/shoe-7.png",
                            "/women/shoes/shoe-8.png"
                        ],
                        name: "Converse Chuck Taylor Hi Lift Platform",
                        price: 70.00,
                        size: [3.5, 4.5, 5.5, 6, 7, 9]
                    },
                    {
                        id: 3,
                        colour: "Black",
                        imgUrl: [
                            "/women/shoes/shoe-9.png",
                            "/women/shoes/shoe-10.png",
                            "/women/shoes/shoe-11.png",
                            "/women/shoes/shoe-12.png"
                        ],
                        name: "Love Moschino logo tapping trainers",
                        price: 171.00,
                        size: [6, 6.5, 7, 7.5, 8, 8.5, 9]
                    }
                ]
            }
    }
])