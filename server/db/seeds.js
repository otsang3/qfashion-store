use qfashionDatabase;
db.dropDatabase(); 

db.store.insertMany([
    {
        men: [
            {
                jackets: [
                    {
                        id: 1,
                        colour: "Navy",
                        link: "https://www.asos.com/farah/farah-bective-soft-shell-jacket-in-navy/prd/21762294?colourwayid=60222299&SearchQuery=&cid=3606",
                        name: "Farah Bective soft shell jacket",
                        price: 100.00,
                        size: ["S", "M", "L", "XL"]
                    },
                    {
                        id: 2,
                        colour: "Black",
                        link: "https://www.asos.com/polo-ralph-lauren/polo-ralph-lauren-harrington-jacket-in-black/prd/5112387?colourwayid=15725122&SearchQuery=&cid=3606",
                        name: "Ralph Lauren harrington jacket",
                        price: 159.00,
                        size: ["XS", "S", "M", "L"]
                    },
                    {
                        id: 3,
                        colour: "Khaki",
                        link: "https://www.asos.com/rains/rains-hooded-jacket-in-mustard/prd/21060858?colourwayid=60137295&SearchQuery=&cid=3606",
                        name: "Rains hooded jacket",
                        price: 75.00,
                        size: ["M", "L"]
                    }
                ],
                shoes: [
                    {
                        id: 1,
                        colour: "Beige",
                        link: "https://www.asos.com/timberland/timberland-radford-6-inch-boots-in-wheat/prd/20580251?colourwayid=60065850&SearchQuery=&cid=4209",
                        name: "Timberland Radford 6 Inch boots",
                        price: 165.00,
                        size: [7.5, 8, 8.5, 9, 9.5, 10]
                    },
                    {
                        id: 2,
                        colour: "Black",
                        link: "https://www.asos.com/vans/vans-authentic-plimsolls-in-black/prd/12234373?colourwayid=16387120&SearchQuery=&cid=4209",
                        name: "Vans Authentic plimsolls in black",
                        price: 52.00,
                        size: [6.5, 7, 7.5, 8, 8.5, 9]
                    },
                    {
                        id: 3,
                        colour: "White",
                        link: "https://www.asos.com/puma/puma-ralph-sampson-lo-trainers-in-triple-white/prd/12557678?colourwayid=16397940&SearchQuery=&cid=4209",
                        name: "Puma Ralph Sampson Lo trainers",
                        price: 52.00,
                        size: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]
                    }
                ]
            }
        ],
        women: [
            {
                jackets: [
                    {
                        id: 1,
                        colour: "Tan",
                        link: "https://www.asos.com/fashion-union-petite/fashion-union-petite-trench-coat/prd/20145061?colourwayid=60012315&SearchQuery=&cid=2641",
                        name: "Fashion Union Petite trench coat",
                        price: 60.00,
                        size: [4, 6, 8, 10, 12]
                    },
                    {
                        id: 2,
                        colour: "Black",
                        link: "https://www.asos.com/miss-selfridge/miss-selfridge-faux-leather-biker-jacket-in-black/prd/20232046?colourwayid=60019638&SearchQuery=&cid=2641",
                        name: "Miss Selfridge faux leather biker jacket",
                        price: 45.00,
                        size: [6, 8, 10, 14]
                    },
                    {
                        id: 3,
                        colour: "Grey",
                        link: "https://www.asos.com/miss-selfridge/miss-selfridge-faux-leather-biker-jacket-in-black/prd/20232046?colourwayid=60019638&SearchQuery=&cid=2641",
                        name: "Miss Selfridge faux leather biker jacket",
                        price: 89.00,
                        size: [4, 6, 8, 10]
                    }
                ],
                shoes: [
                    {
                        id: 1,
                        colour: "Black",
                        link: "https://www.asos.com/adidas-originals/adidas-originals-u-path-run-trainers-in-black/prd/11715543?colourwayid=16323939&SearchQuery=&cid=4172",
                        name: "adidas Originals U Path Run trainers",
                        price: 69.95,
                        size: [4.5, 5.5, 6, 6.5, 7, 8]
                    },
                    {
                        id: 2,
                        colour: "Black",
                        link: "https://www.asos.com/converse/converse-chuck-taylor-hi-lift-platform-black-trainers/prd/14224170?colourwayid=16600673&SearchQuery=&cid=4172",
                        name: "Converse Chuck Taylor Hi Lift Platform",
                        price: 70.00,
                        size: [3.5, 4.5, 5.5, 6, 7, 9]
                    },
                    {
                        id: 3,
                        colour: "Black",
                        link: "https://www.asos.com/love-moschino/love-moschino-logo-tapping-trainers-in-black/prd/14661731?colourwayid=16634403&SearchQuery=&cid=4172",
                        name: "Love Moschino logo tapping trainers",
                        price: 171.00,
                        size: [6, 6.5, 7, 7.5, 8, 8.5, 9]
                    }
                ]
            }
        ]
    }
])