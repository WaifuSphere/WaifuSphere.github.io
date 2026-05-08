// ============================================
// GLOBAL VARIABLES & INITIALIZATION
// ============================================

const charactersDatabase = [
    {
        id: 1,
        name: "Asuna Yuuki",
        series: "Sword Art Online",
        genre: ["Action", "Romance"],
        rarity: "ssr",
        hairColor: "chestnut",
        origin: "anime",
        image: "https://i.pinimg.com/736x/dd/f4/74/ddf474e81fb9d5c40b791642dcbf659e.jpg",
        thumbnails: [
            "https://images.unsplash.com/photo-1578665996442-48f60103fc96?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop"
        ],
        stats: {
            height: "163 cm",
            hobbies: "Cooking, Gaming",
            seiyuu: "Haruka Tomatsu",
            eyeColor: "Golden",
            role: "Heroine"
        },
        bio: "Asuna adalah salah satu karakter utama yang terkenal dengan keberaniannya dan dedikasi tinggi. Dia memiliki kepribadian yang hangat namun penuh determinasi."
    },
    {
        id: 2,
        name: "Rem",
        series: "Re:Zero",
        genre: ["Fantasy", "Drama"],
        rarity: "ssr",
        hairColor: "blue",
        origin: "anime",
        image: "https://i.pinimg.com/webp80/1200x/e6/49/07/e649075b5e888937edd5229af2c2f3da.webp",
        thumbnails: [
            "https://images.unsplash.com/photo-1566407522369-f21b99eef01b?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop"
        ],
        stats: {
            height: "160 cm",
            hobbies: "Cleaning, Reading",
            seiyuu: "Rie Takahashi",
            eyeColor: "Sky Blue",
            role: "Maid"
        },
        bio: "Rem adalah karakter yang ceria dan berdedikasi tinggi. Dia dikenal sebagai salah satu karakter paling dicintai dalam seri ini dengan pesona yang tak tertahankan."
    },
    {
        id: 3,
        name: "Emilia",
        series: "Re:Zero",
        genre: ["Fantasy", "Romance"],
        rarity: "sr",
        hairColor: "silver",
        origin: "anime",
        image: "https://i.pinimg.com/736x/de/72/da/de72da49d7270e5043a1a34b324943e1.jpg",
        thumbnails: [
            "https://images.unsplash.com/photo-1545389352-f529a4b1dff6?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
        ],
        stats: {
            height: "164 cm",
            hobbies: "Magic, Helping Others",
            seiyuu: "Terashima Takuma",
            eyeColor: "Violet",
            role: "Half-Elf"
        },
        bio: "Emilia adalah karakter yang lembut namun kuat. Dia memiliki tujuan mulia dan selalu berusaha melakukan yang terbaik untuk orang-orang yang dia pedulikan."
    },
    {
        id: 4,
        name: "Megumin",
        series: "KonoSuba",
        genre: ["Comedy", "Fantasy"],
        rarity: "sr",
        hairColor: "purple",
        origin: "anime",
        image: "https://i.pinimg.com/736x/73/d9/e8/73d9e857dd22c9a2c9f6f3bf2f66ef11.jpg",
        thumbnails: [
            "https://images.unsplash.com/photo-1613224487654-d8a42cb73144?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
        ],
        stats: {
            height: "159 cm",
            hobbies: "Magic, Explosions",
            seiyuu: "Sora Amamiya",
            eyeColor: "Red",
            role: "Magician"
        },
        bio: "Megumin adalah karakter yang penuh dengan semangat dan kegembiraan. Dia dikenal karena obsesinya terhadap magic ledakan yang membuat dia unik dan menghibur."
    },
    {
        id: 5,
        name: "Aqua",
        series: "KonoSuba",
        genre: ["Comedy", "Fantasy"],
        rarity: "sr",
        hairColor: "blue",
        origin: "anime",
        image: "https://i.pinimg.com/736x/e3/2f/64/e32f643ebcd8a040991df57e0a514b0e.jpg",
        thumbnails: [
            "https://images.unsplash.com/photo-1612894372029-52421025a969?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop"
        ],
        stats: {
            height: "161 cm",
            hobbies: "Drinking, Causing Trouble",
            seiyuu: "Rie Takahashi",
            eyeColor: "Blue",
            role: "Goddess"
        },
        bio: "Aqua adalah dewi yang terjebak di dunia fantasi. Meskipun terlihat sempurna, dia sebenarnya cukup ceroboh dan sering membuat masalah bagi kelompoknya."
    },
    {
        id: 6,
        name: "Tohru",
        series: "Kobayashi-san Chi no Maid Dragon",
        genre: ["Comedy", "Slice of Life"],
        rarity: "ssr",
        hairColor: "black",
        origin: "anime",
        image: "https://i.pinimg.com/736x/c9/92/f4/c992f4b50a7fa860bb27f58e9c3a6fdf.jpg",
        thumbnails: [
            "https://i.pinimg.com/736x/c9/92/f4/c992f4b50a7fa860bb27f58e9c3a6fdf.jpg",
            "https://i.pinimg.com/736x/12/34/56/1234567890abcdef1234567890abcdef.jpg",
            "https://i.pinimg.com/736x/23/45/67/234567890abcdef234567890abcdef.jpg",
            "https://i.pinimg.com/736x/34/56/78/34567890abcdef34567890abcdef.jpg",
            "https://i.pinimg.com/736x/45/67/89/4567890abcdef4567890abcdef.jpg"
        ],
        stats: {
            height: "168 cm",
            hobbies: "Cooking, Pleasing Kobayashi",
            seiyuu: "Yuki Kuwahara",
            eyeColor: "Gold",
            role: "Dragon Maid"
        },
        bio: "Tohru adalah naga yang mengubah dirinya menjadi maid untuk tinggal bersama Kobayashi. Dia memiliki hati yang tulus dan dedikasi yang luar biasa."
    },
    {
        id: 7,
        name: "Zero Two",
        series: "Darling in the Franxx",
        genre: ["Action", "Sci-Fi"],
        rarity: "ssr",
        hairColor: "pink",
        origin: "anime",
        image: "https://i.pinimg.com/1200x/74/3f/32/743f3242c826ec5809a27b463da48a12.jpg",
        thumbnails: [
            "https://i.pinimg.com/1200x/74/3f/32/743f3242c826ec5809a27b463da48a12.jpg",
            "https://i.pinimg.com/1200x/74/3f/32/743f3242c826ec5809a27b463da48a12.jpg",
            "https://i.pinimg.com/1200x/74/3f/32/743f3242c826ec5809a27b463da48a12.jpg",
            "https://i.pinimg.com/1200x/74/3f/32/743f3242c826ec5809a27b463da48a12.jpg", 
            "https://i.pinimg.com/1200x/74/3f/32/743f3242c826ec5809a27b463da48a12.jpg"
        ],
        stats: {
            height: "165 cm",
            hobbies: "Piloting, Kissing",
            seiyuu: "Kaori Nazuka",
            eyeColor: "Red",
            role: "Test Pilot"
        },
        bio: "Zero Two adalah karakter yang misterius dan penuh pesona. Dia memiliki kepribadian yang kuat dan menjadi pusat cerita dengan karisma yang tak tertahankan."
    },
    {
        id: 8,
        name: "Erza Scarlet",
        series: "Fairy Tail",
        genre: ["Action", "Fantasy"],
        rarity: "sr",
        hairColor: "red",
        origin: "anime",
        image: "https://i.pinimg.com/webp80/736x/4c/87/86/4c87865e04ac1eafe054137f6db2db08.webp",
        thumbnails: [
            "https://images.unsplash.com/photo-1586297964242-cffba0b2e826?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
        ],
        stats: {
            height: "169 cm",
            hobbies: "Fighting, Strawberry Cake",
            seiyuu: "Tetsuya Kakihara",
            eyeColor: "Brown",
            role: "Mage"
        },
        bio: "Erza Scarlet adalah pejuang yang ditakuti namun memiliki hati yang hangat. Dia dikenal dengan kemampuan magic armor-nya yang mengesankan."
    },
    {
        id: 9,
        name: "Hinata Hyuga",
        series: "Naruto",
        genre: ["Action", "Adventure"],
        rarity: "sr",
        hairColor: "dark blue",
        origin: "anime",
        image: "https://i.pinimg.com/webp80/1200x/34/f4/90/34f4903a523b2b15745a16aab5c92192.webp",
        thumbnails: [
            "https://images.unsplash.com/photo-1578665996442-48f60103fc91?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
            "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
        ],
        stats: {
            height: "160 cm",
            hobbies: "Training, Caring for Others",
            seiyuu: "Nao Toyama",
            eyeColor: "White",
            role: "Ninja"
        },
        bio: "Hinata Hyuga adalah karakter yang lembut namun memiliki tekad yang kuat. Dia dikenal dengan kemampuan Byakugan-nya dan dedikasinya kepada Naruto."
    }
    ,{
            id: 10,
            name: "Mikasa Ackerman",
            series: "Attack on Titan",
            genre: ["Action", "Drama"],
            rarity: "ssr",
            hairColor: "black",
            origin: "anime",
            image: "https://i.pinimg.com/736x/1c/b4/f9/1cb4f9793fc487deb2ea8a7db9b53817.jpg",
            thumbnails: [
                "https://i.pinimg.com/736x/1c/b4/f9/1cb4f9793fc487deb2ea8a7db9b53817.jpg",
                "https://i.pinimg.com/736x/1c/b4/f9/1cb4f9793fc487deb2ea8a7db9b53817.jpg",
                "https://i.pinimg.com/736x/1c/b4/f9/1cb4f9793fc487deb2ea8a7db9b53817.jpg",
                "https://i.pinimg.com/736x/1c/b4/f9/1cb4f9793fc487deb2ea8a7db9b53817.jpg",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "170 cm",
                hobbies: "Fighting, Protecting Eren",
                seiyuu: "Yui Ishikawa",
                eyeColor: "Gray",
                role: "Soldier"
            },
            bio: "Mikasa Ackerman adalah salah satu prajurit terkuat dalam seri ini. Dia memiliki kepribadian yang dingin namun sangat setia kepada teman-temannya, terutama Eren."
        }
        ,{
            id: 11,
            name: "Saber (Artoria Pendragon)",
            series: "Fate/stay night",
            genre: ["Action", "Fantasy"],
            rarity: "ssr",
            hairColor: "blonde",
            origin: "anime",
            image: "https://i.pinimg.com/736x/38/2a/64/382a641c7014b548ca2563f5052f1c5a.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f60103fc92?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "154 cm",
                hobbies: "Swordsmanship, Chivalry",
                seiyuu: "Ayako Kawasumi",
                eyeColor: "Blue",
                role: "Heroic Spirit"
            },
            bio: "Saber adalah karakter yang kuat dan penuh kehormatan. Dia dikenal sebagai salah satu Heroic Spirit terkuat dalam seri Fate dengan kepribadian yang tegas namun adil." 
        }
        ,{
            id: 12,
            name: "Albedo",
            series: "Overlord",
            genre: ["Action", "Fantasy"],
            rarity: "ssr",
            hairColor: "black",
            origin: "anime",
            image: "https://i.pinimg.com/webp80/736x/25/c4/99/25c49960d444e952c267c1986bbe2022.webp",
            thumbnails: [
                "https://i.pinimg.com/webp80/736x/25/c4/99/25c49960d444e952c267c1986bbe2022.webp",
                "https://i.pinimg.com/webp80/736x/25/c4/99/25c49960d444e952c267c1986bbe2022.webp",
                "https://i.pinimg.com/webp80/736x/25/c4/99/25c49960d444e952c267c1986bbe2022.webp",
                "https://i.pinimg.com/webp80/736x/25/c4/99/25c49960d444e952c267c1986bbe2022.webp",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "172 cm",
                hobbies: "Serving Ainz, Jealousy",
                seiyuu: "Yumiri Hanamori",
                eyeColor: "Gold",
                role: "Guardian Overseer"
            },
            bio: "Albedo adalah karakter yang sangat setia kepada Ainz dan memiliki kepribadian yang kompleks. Dia dikenal dengan kecantikannya yang mematikan dan dedikasinya yang luar biasa."
        } 
        ,{
            id: 13,
            name: "Yumeko Jabami",
            series: "Kakegurui",
            genre: ["Psychological", "Drama"],
            rarity: "sr",
            hairColor: "black",
            origin: "anime",
            image: "https://i.pinimg.com/webp80/1200x/15/f6/8d/15f68d7aad07bda7147b0bc976e8a40d.webp",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f60103fc94?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "160 cm",
                hobbies: "Gambling, Thrill-Seeking",
                seiyuu: "Saori Hayami",
                eyeColor: "Red",
                role: "Gambler"
            },
            bio: "Yumeko Jabami adalah karakter yang penuh semangat dan suka mengambil risiko. Dia dikenal dengan kepribadiannya yang eksentrik dan kecintaannya pada perjudian."
        }
    
        ,{
            id: 14,
            name: "Shiro",
            series: "No Game No Life",
            genre: ["Fantasy", "Adventure"],
            rarity: "sr",
            hairColor: "white",
            origin: "anime",
            image: "https://i.pinimg.com/736x/3f/73/a1/3f73a1ab101911aef0f887542a4850e5.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f60103fc95?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "149 cm",
                hobbies: "Gaming, Strategy",
                seiyuu: "Ai Kayano",
                eyeColor: "Red",
                role: "Genius Gamer"
            },
            bio: "Shiro adalah karakter yang sangat cerdas dan memiliki kemampuan gaming yang luar biasa. Dia dikenal dengan kepribadiannya yang tenang namun sangat kompetitif."
        }
        ,{
            id: 15,
            name: "Yuki Nagato",
            series: "The Melancholy of Haruhi Suzumiya",
            genre: ["Sci-Fi", "Slice of Life"],
            rarity: "sr",
            hairColor: "purple",
            origin: "anime",
            image: "https://i.pinimg.com/736x/c5/85/03/c58503a54b12b71db29b2d63e7ca52cb.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f60103fc97?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "160 cm",
                hobbies: "Reading, Observing",
                seiyuu: "Minori Chihara",
                eyeColor: "Yellow",
                role: "Alien Interface"
            },
            bio: "Yuki Nagato adalah karakter yang tenang dan penuh misteri. Dia dikenal dengan kecerdasannya yang luar biasa dan perannya sebagai alien interface dalam seri ini."
        }
        ,{
            id: 16,
            name: "Rias Gremory",
            series: "High School DxD",
            genre: ["Action", "Ecchi"],
            rarity: "ssr",
            hairColor: "red",
            origin: "anime",
            image: "https://i.pinimg.com/736x/7f/15/ee/7f15ee53220461dd221663c8b8193181.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f60103fc98?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "172 cm",
                hobbies: "Leading the Occult Research Club, Flirting",
                seiyuu: "Yōko Hikasa",
                eyeColor: "Blue",
                role: "Devil"
            },
            bio: "Rias Gremory adalah karakter yang kuat dan mempesona. Dia dikenal sebagai pemimpin dari Occult Research Club dan memiliki kepribadian yang penuh percaya diri."
        }
        ,{
            id: 18,
            name: "Bocchi Hitori",
            series: "Bocchi the Rock!",
            genre: ["Comedy", "Slice of Life"],
            rarity: "sr",
            hairColor: "blonde",
            origin: "anime",
            image: "https://i.pinimg.com/736x/6c/a0/c9/6ca0c921c5ace65bd5af65ddba5ad009.jpg",
            thumbnails: [
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg",
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg",
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg",
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg",
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg"
            ],
            stats: {
                height: "150 cm",
                hobbies: "Playing Guitar, Social Anxiety",
                seiyuu: "Sayumi Suzuki",
                eyeColor: "Blue",
                role: "Guitarist"
            },
            bio: "Bocchi Hitori adalah karakter yang pemalu dan penuh kecemasan sosial. Dia dikenal dengan bakat musiknya yang luar biasa dan perjuangannya untuk mengatasi rasa takutnya."
        }
        ,{
            id: 19,
            name: "Kaguya Shinomiya",
            series: "Kaguya-sama: Love is War",
            genre: ["Romance", "Comedy"],
            rarity: "sr",
            hairColor: "black",
            origin: "anime",
            image: "https://i.pinimg.com/474x/62/61/a7/6261a72a67187825fd23ae348188ca37.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f61103fc01?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "160 cm",
                hobbies: "Strategizing, Competing with Miyuki",
                seiyuu: "Aoi Koga",
                eyeColor: "Red",
                role: "Student Council Vice President"
            },
            bio: "Kaguya Shinomiya adalah karakter yang cerdas dan penuh strategi. Dia dikenal dengan pertempuran romantisnya dengan Miyuki dalam seri ini."
        }
        ,{
            id: 20,
            name: "Chika Fujiwara",
            series: "Kaguya-sama: Love is War",
            genre: ["Romance", "Comedy"],
            rarity: "sr",
            hairColor: "pink",
            origin: "anime",
            image: "https://i.pinimg.com/736x/33/0a/6d/330a6dc197ef4bc34def26cbc64b16fd.jpg",
            thumbnails: [
                "https://i.pinimg.com/736x/33/0a/6d/330a6dc197ef4bc34def26cbc64b16fd.jpg",
                "https://i.pinimg.com/736x/33/0a/6d/330a6dc197ef4bc34def26cbc64b16fd.jpg",
                "https://i.pinimg.com/736x/33/0a/6d/330a6dc197ef4bc34def26cbc64b16fd.jpg",
                "https://i.pinimg.com/736x/33/0a/6d/330a6dc197ef4bc34def26cbc64b16fd.jpg",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "155 cm",
                hobbies: "Playing Games, Being Adorable", 
                seiyuu: "Konomi Kohara",
                eyeColor: "Pink",
                role: "Student Council Secretary"
            },
            bio: "Chika Fujiwara adalah karakter yang ceria dan penuh energi. Dia dikenal dengan kepribadiannya yang menggemaskan dan sering menjadi sumber kekacauan dalam seri ini."
        } 
        ,{
            id: 21,
            name: "Yumemi Hoshino",
            series: "Planetarian",
            genre: ["Sci-Fi", "Drama"],
            rarity: "sr",
            hairColor: "blonde",
            origin: "anime",
            image: "https://i.pinimg.com/1200x/aa/e4/f6/aae4f6288304419fd8eb2a74e4d2e337.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f61103fc03?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {    
                height: "158 cm",
                hobbies: "Stargazing, Helping Others",
                seiyuu: "Ai Kayano",
                eyeColor: "Blue",
                role: "Service Android"
            }, 
            bio: "Yumemi Hoshino adalah karakter yang penuh harapan dan kebaikan. Dia dikenal sebagai android layanan yang selalu berusaha membantu orang lain meskipun dunia di sekitarnya telah hancur."
        }
        ,{
            id: 22,
            name: "Kurumi Tokisaki",
            series: "Date A Live",
            genre: ["Action", "Romance"],
            rarity: "ssr",
            hairColor: "black",
            origin: "anime",
            image: "https://i.pinimg.com/736x/ee/11/82/ee118299967f83a1eba62de7e8f3f6fa.jpg",
            thumbnails: [
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg",
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg",
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg",
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg",
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg"
            ],
            stats: {
                height: "160 cm",
                hobbies: "Time Manipulation, Killing",
                seiyuu: "Asami Sanada",
                eyeColor: "Red and Yellow",
                role: "Spirit"
            },
            bio: "Kurumi Tokisaki adalah karakter yang misterius dan berbahaya. Dia dikenal dengan kemampuan manipulasi waktunya yang membuatnya menjadi salah satu spirit paling menakutkan dalam seri ini."
        }
        ,{
            id: 24,
            name: "Yor Forger",
            series: "Spy x Family",
            genre: ["Action", "Comedy"],
            rarity: "sr",
            hairColor: "black",
            origin: "anime",
            image: "https://i.pinimg.com/736x/6f/4d/0c/6f4d0cd0cb03a9bc407ab3697782ec85.jpg",
            thumbnails: [
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg",
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg",
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg",
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg",
                "https://i.pinimg.com/736x/1c/8b/9e/1c8b9e5a2f4a7d8c3b2e5f6a7d8c9e0.jpg"
            ],
            stats: {
                height: "170 cm",
                hobbies: "Assassination, Caring for Family",
                seiyuu: "Saori Hayami",
                eyeColor: "Red",
                role: "Assassin"
            },
            bio: "Yor Forger adalah karakter yang kuat dan penuh kasih sayang. Dia dikenal sebagai seorang assassin yang sangat terampil namun juga memiliki sisi lembut dalam merawat keluarganya."
        }
        ,{
            id: 25,
            name: "Rukia Kuchiki",
            series: "Bleach",
            genre: ["Action", "Adventure"],
            rarity: "sr",
            hairColor: "black",
            origin: "anime",
            image: "https://i.pinimg.com/736x/ac/a5/2e/aca52ee7262e26019f89e7828a946288.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f61103fc07?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "158 cm",
                hobbies: "Fighting Hollows, Caring for Ichigo",
                seiyuu: "Fumiko Orikasa",
                eyeColor: "Violet",
                role: "Soul Reaper"
            },
            bio: "Rukia Kuchiki adalah karakter yang kuat dan penuh semangat. Dia dikenal sebagai Soul Reaper yang memiliki hubungan dekat dengan Ichigo dan memainkan peran penting dalam seri ini."
        }
        ,{
            id: 26,
            name: "Sakura Matou",
            series: "Fate/stay night",
            genre: ["Action", "Fantasy"],
            rarity: "sr",
            hairColor: "purple",
            origin: "anime",
            image: "https://i.pinimg.com/736x/66/fd/89/66fd890c81262131baddcf700b55c3a1.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f61103fc08?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "158 cm",
                hobbies: "Cooking, Caring for Shirou",
                seiyuu: "Noriko Shitaya",
                eyeColor: "Purple",
                role: "Heroic Spirit"
            },
            bio: "Sakura Matou adalah karakter yang lembut namun memiliki sisi gelap. Dia dikenal dengan kepribadiannya yang penuh kasih sayang namun juga memiliki rahasia yang dalam."
        } 
        ,{
            id: 27,
            name: "Yuki Takeya",
            series: "Gakkou Gurashi!",
            genre: ["Horror", "Slice of Life"],
            rarity: "sr",
            hairColor: "pink",
            origin: "anime",
            image: "https://i.pinimg.com/1200x/44/ee/b2/44eeb2e2f45f958f0b94916aabec055d.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f61103fc09?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "150 cm",
                hobbies: "Playing Games, Being Cheerful",
                seiyuu: "Sumire Uesaka",
                eyeColor: "Pink",
                role: "Survivor"
            },
            bio: "Yuki Takeya adalah karakter yang ceria dan penuh semangat. Dia dikenal sebagai salah satu karakter utama dalam seri ini dengan kepribadian yang menggemaskan meskipun berada dalam situasi yang mengerikan."
        }
        ,{
            id: 28,
            name: "Moka Akashiya",
            series: "Rosario + Vampire",
            genre: ["Comedy", "Supernatural"],
            rarity: "sr",  
            hairColor: "pink",
            origin: "anime",
            image: "https://i.pinimg.com/736x/2b/85/34/2b8534fa065e44883a352c32b0647c82.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f61103fc10?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "165 cm",
                hobbies: "Fighting, Caring for Tsukune",
                seiyuu: "Mamiko Noto",
                eyeColor: "Pink",
                role: "Vampire"
            },  
            bio: "Moka Akashiya adalah karakter yang penuh semangat dan memiliki kepribadian yang ceria. Dia dikenal sebagai salah satu karakter utama dalam seri ini dengan peran penting sebagai vampir yang melindungi Tsukune." 
        }
        ,{
            id: 29,
            name: "Nezuko Kamadoo",
            series: "Demon Slayer",
            genre: ["Action", "Adventure"],
            rarity: "sr",
            hairColor: "black",
            origin: "anime",
            image: "https://i.pinimg.com/webp80/1200x/90/90/82/909082c7152c4aa557c4133ad63f7cf5.webp",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f61103fc11?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],  
            stats: {
                height: "153 cm",
                hobbies: "Protecting Her Brother, Fighting Demons",
                seiyuu: "Akari Kitō",
                eyeColor: "Pink",
                role: "Demon"
            },
            bio: "Nezuko Kamado adalah karakter yang kuat dan penuh kasih sayang. Dia dikenal sebagai adik dari Tanjiro yang berubah menjadi iblis namun tetap memiliki sisi kemanusiaan yang kuat."
        }
        ,{
            id: 30,
            name: "Mitsuri Kanroji",
            series: "Demon Slayer",
            genre: ["Action", "Adventure"],
            rarity: "sr",
            hairColor: "pink",
            origin: "anime",
            image: "https://i.pinimg.com/736x/0f/56/b1/0f56b1afcc39a6086dae2fa20398a706.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f61103fc12?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "168 cm",
                hobbies: "Fighting Demons, Caring for Friends",
                seiyuu: "Miyuki Sawashiro",
                eyeColor: "Green",
                role: "Demon Slayer"
            },
            bio: "Mitsuri Kanroji adalah karakter yang penuh semangat dan memiliki kepribadian yang ceria. Dia dikenal sebagai salah satu anggota Hashira dalam seri ini dengan kemampuan bertarung yang luar biasa."
        }   
        ,{
            id: 31,
            name: "Shikimori Kaguya",
            series: "Shikimori's Not Just a Cutie",
            genre: ["Romance", "Comedy"],
            rarity: "sr",
            hairColor: "black",
            origin: "anime",
            image: "https://i.pinimg.com/736x/5b/68/94/5b689426bca39e7d675f3a25dae0f2fe.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f61103fc13?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "160 cm",
                hobbies: "Protecting Her Boyfriend, Being Cool",
                seiyuu: "Konomi Kohara",
                eyeColor: "Pink",
                role: "Girlfriend"  
            },
            bio: "Shikimori Kaguya adalah karakter yang ceria dan penuh semangat. Dia dikenal sebagai pacar yang sangat perhatian dan memiliki kepribadian yang menggemaskan namun juga sangat keren."
        }
        ,{
            id: 32,
            name: "Violet Evergarden",
            series: "Violet Evergarden",
            genre: ["Drama", "Fantasy"],   
            rarity: "sr",
            hairColor: "blonde",
            origin: "anime",
            image: "https://i.pinimg.com/736x/51/8f/84/518f84eefa21d7c5ab382b2a80d70411.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f61103fc14?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "165 cm",
                hobbies: "Writing Letters, Helping Others",
                seiyuu: "Yui Ishikawa",
                eyeColor: "Blue",
                role: "Auto Memory Doll"
            },
            bio: "Violet Evergarden adalah karakter yang penuh emosi dan memiliki kepribadian yang kompleks. Dia dikenal sebagai Auto Memory Doll yang membantu orang lain mengekspresikan perasaan mereka melalui surat."
        }
        ,{
            id: 33,
            name: "Elaina",
            series: "The Journey of Elaina",
            genre: ["Fantasy", "Adventure"],
            rarity: "sr",
            hairColor: "silver",
            origin: "anime",
            image: "https://i.pinimg.com/736x/7a/43/7f/7a437ffd2ef1a12daea639de67f4027a.jpg",
            thumbnails: [
                "https://images.unsplash.com/photo-1578665996442-48f61103fc15?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1542401886-65d27afda266?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1544717278-ca5e3f4abd8c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1531927373876-5f9c8d0b1c5c?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1540892419343-6cc1e2eb5a02?w=100&h=100&fit=crop"
            ],
            stats: {
                height: "160 cm",
                hobbies: "Traveling, Magic",
                seiyuu: "Inori Minase",
                eyeColor: "Purple",
                role: "Witch"
            },
            bio: "Elaina adalah karakter yang penuh semangat dan memiliki kepribadian yang ceria. Dia dikenal sebagai penyihir yang melakukan perjalanan ke berbagai tempat untuk mengalami petualangan baru."
        }











    
];

let currentPage = 'home';
let filteredCharacters = [...charactersDatabase];

// ============================================
// DOM ELEMENTS
// ============================================

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navMenu = document.getElementById('navMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const searchBoxes = document.querySelectorAll('.search-box');
const profileBtn = document.querySelector('.profile-btn');
const exploreBtn = document.querySelector('.btn-primary');
const gallerySection = document.getElementById('gallery');
const detailSection = document.getElementById('detail');
const aboutSection = document.getElementById('about');
const myistriSection = document.getElementById('myistri');
const profileSection = document.getElementById('profile');
const homeSection = document.querySelector('.hero');
const popularSection = document.getElementById('popular');
const recentSection = document.getElementById('recent');
const filterInputs = document.querySelectorAll('.filter-group input[type="checkbox"]');
const resetFiltersBtn = document.querySelector('.reset-filters');
const applyFiltersBtn = document.getElementById('applyFiltersBtn');
const darkModeToggleCheckbox = document.getElementById('darkModeToggle');
const backToTopBtn = document.getElementById('backToTopBtn');

// ============================================
// EVENT LISTENERS
// ============================================

// Navigation (use event delegation to avoid double-click issues)
if (navMenu) {
    navMenu.addEventListener('click', handleNavigation);
} else {
    navLinks.forEach(link => link.addEventListener('click', handleNavigation));
}

// Global handler for any internal hash links (footer, buttons, etc.)
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    // ignore external/mailto
    if (href.startsWith('http') || anchor.getAttribute('href').startsWith('mailto:')) return;

    const targetId = href.slice(1);
    // only handle if target section exists in page
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    e.preventDefault();

    // Update active nav link if present
    navLinks.forEach(l => l.classList.remove('active'));
    document.querySelector(`a[href="#${targetId}"]`)?.classList.add('active');

    // Map known hashes to pages
    if (href === '#home') {
        currentPage = 'home';
        showPage('home');
    } else if (href === '#gallery') {
        currentPage = 'gallery';
        showPage('gallery');
        loadGallery();
    } else if (href === '#about') {
        currentPage = 'about';
        showPage('about');
    } else if (href === '#myistri') {
        currentPage = 'myistri';
        showPage('myistri');
    } else if (href === '#profile') {
        currentPage = 'profile';
        showPage('profile');
    }

    // close mobile menu if open
    if (window.innerWidth < 768 && navMenu && mobileMenuBtn) {
        navMenu.style.display = 'none';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

exploreBtn.addEventListener('click', () => {
    currentPage = 'gallery';
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector('a[href="#gallery"]')?.classList.add('active');
    showPage('gallery');
});

// Filter functionality
filterInputs.forEach(input => {
    input.addEventListener('change', filterCharacters);
});

resetFiltersBtn.addEventListener('click', resetAllFilters);
applyFiltersBtn?.addEventListener('click', applyFilters);

// Profile button
profileBtn.addEventListener('click', () => {
    currentPage = 'profile';
    navLinks.forEach(link => link.classList.remove('active'));
    loadProfilePage();
    showPage('profile');
});

// Smooth scroll on page load
window.addEventListener('load', () => {
    initializePage();
});

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function handleNavigation(e) {
    const link = e.target.closest('.nav-link') || e.currentTarget;
    if (!link) return;
    e.preventDefault();

    // Update active link
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const href = link.getAttribute('href');
    if (href === '#home') {
        showPage('home');
        currentPage = 'home';
    } else if (href === '#gallery') {
        showPage('gallery');
        currentPage = 'gallery';
        loadGallery();
    } else if (href === '#about') {
        showPage('about');
        currentPage = 'about';
    }

    // If mobile, close nav menu after navigating
    if (window.innerWidth < 768 && navMenu && mobileMenuBtn) {
        navMenu.style.display = 'none';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
}

function animateSection(section) {
    if (!section) return;
    section.classList.remove('visible');
    requestAnimationFrame(() => section.classList.add('visible'));
}

function showPage(pageName) {
    const sections = [homeSection, popularSection, recentSection, gallerySection, detailSection, aboutSection, profileSection];
    sections.forEach(section => {
        if (section) {
            section.style.display = 'none';
            section.classList.remove('visible');
        }
    });
    // also hide myistri if present
    if (myistriSection) {
        myistriSection.style.display = 'none';
        myistriSection.classList.remove('visible');
    }
    
    if (pageName === 'home') {
        homeSection.style.display = 'flex';
        animateSection(homeSection);
        if (popularSection) {
            popularSection.style.display = 'block';
            animateSection(popularSection);
        }
        if (recentSection) {
            recentSection.style.display = 'block';
            animateSection(recentSection);
        }
    } else if (pageName === 'gallery') {
        gallerySection.style.display = 'block';
        animateSection(gallerySection);
    } else if (pageName === 'detail') {
        detailSection.style.display = 'block';
        animateSection(detailSection);
    } else if (pageName === 'about') {
        aboutSection.style.display = 'block';
        animateSection(aboutSection);
    } else if (pageName === 'myistri') {
        // Show favorites section
        if (myistriSection) {
            myistriSection.style.display = 'block';
            animateSection(myistriSection);
            // update favorites UI if available
            if (typeof updateFavoritesDisplay === 'function') updateFavoritesDisplay();
        }
    } else if (pageName === 'profile') {
        profileSection.style.display = 'block';
        animateSection(profileSection);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// GALLERY FUNCTIONS
// ============================================

function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const paginationContainer = document.getElementById('pagination');
    const gallerySubtitle = document.getElementById('gallerySubtitle');
    
    if (!galleryGrid) return;
    
    if (gallerySubtitle) {
        gallerySubtitle.textContent = filteredCharacters.length === 0
            ? 'Tidak ada karakter yang sesuai dengan filter.'
            : `Menampilkan ${filteredCharacters.length} karakter`;
    }
    
    if (filteredCharacters.length === 0) {
        galleryGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #b0b0b0; font-size: 1.2rem;">Tidak ada karakter yang sesuai dengan filter.</p>';
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }
    
    galleryCurrentPage = 1;
    setupPagination();
    loadPaginatedGallery();
}

function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.innerHTML = `
        <div class="card-image">
            <img src="${character.image}" alt="${character.name}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;">
            <div class="overlay">
                <h3>${character.name}</h3>
                <p>Genre: ${character.genre.join(', ')}</p>
                <div class="rarity rarity-${character.rarity}">${character.rarity.toUpperCase()}</div>
            </div>
        </div>
        <div class="card-info">
            <h3>${character.name}</h3>
            <p class="genre">${character.series}</p>
            <div class="rating">⭐⭐⭐⭐⭐</div>
        </div>
    `;
    
    card.addEventListener('click', () => showCharacterDetail(character));
    return card;
}

// ============================================
// CHARACTER DETAIL FUNCTIONS
// ============================================

function showCharacterDetail(character) {
    detailSection.innerHTML = `
        <div class="detail-container">
            <!-- LEFT SIDE: CHARACTER IMAGE -->
            <div class="detail-left">
                <div class="main-image">
                    <img src="${character.image}" alt="${character.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;">
                </div>
                <div class="image-thumbnails">
                    ${character.thumbnails.map((thumb, i) => `
                        <div class="thumbnail">
                            <img src="${thumb}" alt="Thumbnail ${i + 1}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 6px;">
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- RIGHT SIDE: CHARACTER INFO -->
            <div class="detail-right">
                <div class="detail-header">
                    <h1 class="character-name">${character.name}</h1>
                    <p class="series-origin">Series: ${character.series}</p>
                    <div class="genre-badges">
                        ${character.genre.map(g => `<span class="badge">${g}</span>`).join('')}
                    </div>
                </div>

                <div class="character-stats">
                    <h3>Statistik</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-label">Tinggi</span>
                            <span class="stat-value">${character.stats.height}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Hobi</span>
                            <span class="stat-value">${character.stats.hobbies}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Seiyuu</span>
                            <span class="stat-value">${character.stats.seiyuu}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Warna Mata</span>
                            <span class="stat-value">${character.stats.eyeColor}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Warna Rambut</span>
                            <span class="stat-value">${character.stats.hairColor}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Rarity</span>
                            <span class="stat-value rarity-${character.rarity}">${character.rarity.toUpperCase()}</span>
                        </div>
                    </div>
                </div>

                <div class="character-bio">
                    <h3>Biografi</h3>
                    <p>${character.bio}</p>
                </div>

                <button class="btn-favorite" onclick="addToFavorite(${character.id})">
                    <span class="heart-icon">♡</span>
                    Add to Favorite
                </button>
            </div>
        </div>

        <!-- SIMILAR CHARACTERS -->
        <section class="similar-characters">
            <h2>Karakter Serupa</h2>
            <div class="character-grid" id="similarGrid">
                <!-- Similar characters akan diisi di sini -->
            </div>
        </section>
    `;
    
    // Load similar characters
    loadSimilarCharacters(character);
    
    // Show detail page
    showPage('detail');
    loadThumbnailListeners();
}

function loadSimilarCharacters(currentCharacter) {
    const similarGrid = document.getElementById('similarGrid');
    
    // Get characters from same genre or series
    const similarChars = charactersDatabase
        .filter(char => 
            char.id !== currentCharacter.id && 
            (char.genre.some(g => currentCharacter.genre.includes(g)) || 
             char.origin === currentCharacter.origin)
        )
        .slice(0, 3);
    
    similarChars.forEach((character, index) => {
        const card = createCharacterCard(character);
        card.style.animationDelay = `${index * 0.1}s`;
        similarGrid.appendChild(card);
    });
}

// ============================================
// FILTER FUNCTIONS
// ============================================

function filterCharacters() {
    applyFilters();
}

function applyFilters() {
    const checkedInputs = document.querySelectorAll('.filter-group input[type="checkbox"]:checked');
    
    if (checkedInputs.length === 0) {
        filteredCharacters = [...charactersDatabase];
    } else {
        const filters = Array.from(checkedInputs).map(input => input.value);
        
        filteredCharacters = charactersDatabase.filter(character => {
            return filters.some(filter => {
                return (
                    character.genre.some(g => g.toLowerCase() === filter) ||
                    character.rarity === filter ||
                    character.hairColor === filter ||
                    character.origin === filter
                );
            });
        });
    }
    
    loadGallery();
    
    // Show feedback
    showFilterNotification(`${filteredCharacters.length} karakter ditemukan`);
}

function resetAllFilters() {
    // Uncheck all inputs
    filterInputs.forEach(input => {
        input.checked = false;
    });
    
    // Reset filtered characters
    filteredCharacters = [...charactersDatabase];
    loadGallery();
    
    showFilterNotification('Filter direset');
}

function showFilterNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #a020f0, #c77dff);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(160, 32, 240, 0.4);
        z-index: 1000;
        animation: slideInUp 0.5s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ============================================
// SEARCH FUNCTIONS
// ============================================

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        filteredCharacters = [...charactersDatabase];
    } else {
        filteredCharacters = charactersDatabase.filter(character =>
            character.name.toLowerCase().includes(searchTerm) ||
            character.series.toLowerCase().includes(searchTerm) ||
            character.genre.some(g => g.toLowerCase().includes(searchTerm))
        );
    }
    
    if (currentPage === 'gallery') {
        loadGallery();
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function addToFavorite(characterId) {
    const character = charactersDatabase.find(c => c.id === characterId);
    if (!character) return;

    // Get existing favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (!favorites.includes(characterId)) {
        favorites.push(characterId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        showNotification(`${character.name} ditambahkan ke favorit!`);
        updateFavoriteCount();
    } else {
        showNotification(`${character.name} sudah ada di favorit!`);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #a020f0, #c77dff);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(160, 32, 240, 0.4);
        z-index: 1000;
        animation: slideIn 0.5s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function initializePage() {
    // Set home as active
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector('a[href="#home"]')?.classList.add('active');
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Animate initial home sections
    animateSection(homeSection);
    if (popularSection) animateSection(popularSection);
    if (recentSection) animateSection(recentSection);
    
    // Initialize tooltips
    loadThumbnailListeners();
}

function loadThumbnailListeners() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Highlight selected thumbnail
            thumbnails.forEach(t => t.style.borderColor = '#3a4560');
            thumb.style.borderColor = '#a020f0';
            thumb.style.boxShadow = '0 0 20px rgba(160, 32, 240, 0.4)';
        });
    });
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Press 'G' to go to gallery
    if (e.key.toLowerCase() === 'g') {
        currentPage = 'gallery';
        showPage('gallery');
        loadGallery();
    }
    
    // Press 'H' to go to home
    if (e.key.toLowerCase() === 'h') {
        currentPage = 'home';
        showPage('home');
    }
    
    // Press 'Escape' to close detail page
    if (e.key === 'Escape' && currentPage === 'detail') {
        currentPage = 'gallery';
        showPage('gallery');
    }
});

// ============================================
// PARALLAX EFFECT
// ============================================

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const hero = document.querySelector('.hero-character');
    
    if (hero) {
        hero.style.transform = `translateY(calc(-50% + ${scrollPos * 0.5}px))`;
    }
});

// ============================================
// RESPONSIVE NAVBAR
// ============================================

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        // Adjust navbar for mobile
    }
});

// ============================================
// LOADING ANIMATION
// ============================================

function showLoadingSpinner() {
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
        spinner.style.display = 'flex';
    }
}

function hideLoadingSpinner() {
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
        spinner.style.display = 'none';
    }
}

// ============================================
// DYNAMIC IMPORTS
// ============================================

// Simulate loading delay for gallery
const originalLoadGallery = loadGallery;
loadGallery = function() {
    showLoadingSpinner();
    setTimeout(() => {
        originalLoadGallery();
        hideLoadingSpinner();
    }, 500);
};

// ============================================
// FAVORITE COUNTER
// ============================================

function updateFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const badge = document.querySelector('.profile-btn');
    
    if (favorites.length > 0) {
        badge.style.position = 'relative';
        let counter = badge.querySelector('.favorite-counter');
        
        if (!counter) {
            counter = document.createElement('span');
            counter.className = 'favorite-counter';
            counter.style.cssText = `
                position: absolute;
                top: -5px;
                right: -5px;
                background: #f4a261;
                color: white;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                font-weight: 700;
            `;
            badge.appendChild(counter);
        }
        
        counter.textContent = favorites.length;
    }
}

// ============================================
// PROFILE PAGE FUNCTIONS
// ============================================

function loadProfilePage() {
    // Load profile username
    const username = localStorage.getItem('username') || 'Guest User';
    document.getElementById('profile-username').textContent = username;
    document.getElementById('username-input').value = username;
    
    // Load statistics
    const stats = JSON.parse(localStorage.getItem('userStats')) || {
        favorites: 0,
        visited: 0,
        searches: 0,
        ratings: 0
    };
    
    document.getElementById('stat-favorites').textContent = stats.favorites || 0;
    document.getElementById('stat-visited').textContent = stats.visited || 0;
    document.getElementById('stat-searches').textContent = stats.searches || 0;
    document.getElementById('stat-ratings').textContent = stats.ratings || 0;
    
    // Load favorites grid
    loadFavoritesGrid();
    
    // Setup tab buttons
    setupProfileTabs();
}

function loadFavoritesGrid() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesGrid = document.getElementById('favorites-grid');
    
    if (favorites.length === 0) {
        favoritesGrid.innerHTML = `
            <div class="empty-state">
                <p>Belum ada karakter favorit. Klik tombol hati di galeri untuk menambahkan!</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    favorites.forEach(favId => {
        const character = charactersDatabase.find(c => c.id === favId);
        if (character) {
            html += `
                <div class="character-card" data-character-id="${character.id}">
                    <div class="card-image">
                        <img src="${character.image}" alt="${character.name}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;">
                        <div class="overlay">
                            <h3>${character.name}</h3>
                            <p>Genre: ${character.genre.join(', ')}</p>
                            <div class="rarity rarity-${character.rarity}">${character.rarity.toUpperCase()}</div>
                        </div>
                    </div>
                    <div class="card-info">
                        <h3>${character.name}</h3>
                        <p class="genre">${character.series}</p>
                        <div class="rating">⭐⭐⭐⭐⭐</div>
                    </div>
                </div>
            `;
        }
    });
    
    favoritesGrid.innerHTML = html;
    
    // Add click listeners
    favoritesGrid.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', () => {
            const characterId = Number(card.dataset.characterId);
            const character = charactersDatabase.find(c => c.id === characterId);
            if (character) showCharacterDetail(character);
        });
    });
}

function setupProfileTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const profileTabs = document.querySelectorAll('.profile-tab');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            profileTabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            button.classList.add('active');
            document.querySelector(`.profile-tab[data-tab="${tabName}"]`)?.classList.add('active');
        });
    });
}

function saveProfileSettings() {
    const username = document.getElementById('username-input').value;
    const email = document.getElementById('email-input').value;
    
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    
    // Update profile header
    document.getElementById('profile-username').textContent = username;
    
    showNotification('Pengaturan berhasil disimpan!');
}

function handleBackToHome() {
    currentPage = 'home';
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector('a[href="#home"]')?.classList.add('active');
    showPage('home');
}

function handleLogout() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('userStats');
    
    showNotification('Logout berhasil!');
    setTimeout(() => {
        handleBackToHome();
    }, 1000);
}

// Update favorite count on load
window.addEventListener('load', updateFavoriteCount);

// ============================================
// DARK/LIGHT MODE THEME TOGGLE
// ============================================

const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggle) themeToggle.textContent = '☀️';
}

// Theme toggle listener
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeToggle.textContent = isLight ? '☀️' : '🌙';
        if (darkModeToggleCheckbox) darkModeToggleCheckbox.checked = isLight;
        themeToggle.style.animation = 'spin 0.5s ease-in-out';
        setTimeout(() => themeToggle.style.animation = '', 500);
    });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update scroll indicator
    if (scrollIndicator) {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    }
});

// ============================================
// MOBILE MENU
// ============================================

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = navMenu.style.display !== 'flex';
        navMenu.style.display = isOpen ? 'flex' : 'none';
        mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
        mobileMenuBtn.style.animation = 'spin 0.5s ease-in-out';
        setTimeout(() => mobileMenuBtn.style.animation = '', 500);
    });
    
    // navigation handled via delegation in handleNavigation
}

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && navMenu) {
        navMenu.style.display = 'flex';
        mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    }
});

// ============================================
// IMPROVED SEARCH WITH DEBOUNCE
// ============================================

let searchTimeout;
document.querySelectorAll('.search-box').forEach(box => {
    box.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch(e);
        }, 300);
    });
});

// ============================================
// ADVANCED FILTERING
// ============================================

// Genre filter
document.querySelectorAll('.genre-filter').forEach(filter => {
    filter.addEventListener('change', applyFilters);
});

// Rarity filter
document.querySelectorAll('.rarity-filter').forEach(filter => {
    filter.addEventListener('change', applyFilters);
});

// Hair color filter
document.querySelectorAll('.hair-filter').forEach(filter => {
    filter.addEventListener('change', applyFilters);
});

// ============================================
// SORTING FUNCTIONALITY
// ============================================

const sortSelect = document.getElementById('sortSelect');
if (darkModeToggleCheckbox) {
    darkModeToggleCheckbox.checked = savedTheme === 'light';
    darkModeToggleCheckbox.addEventListener('change', () => {
        const isLightMode = darkModeToggleCheckbox.checked;
        document.body.classList.toggle('light-mode', isLightMode);
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
        if (themeToggle) themeToggle.textContent = isLightMode ? '☀️' : '🌙';
    });
}

if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
        const sortBy = e.target.value;
        const rarityOrder = { 'ssr': 1, 'sr': 2, 'r': 3 };
        
        switch(sortBy) {
            case 'name':
                filteredCharacters.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'rating':
                filteredCharacters.sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]);
                break;
            case 'rarity':
                filteredCharacters.sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]);
                break;
            case 'newest':
                filteredCharacters.sort((a, b) => b.id - a.id);
                break;
            default:
                break;
        }
        
        if (currentPage === 'gallery') {
            loadGallery();
        }
    });
}

// ============================================
// CHARACTER NAME SEARCH
// ============================================

const characterNameSearch = document.getElementById('characterNameSearch');
if (characterNameSearch) {
    characterNameSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm === '') {
            filteredCharacters = [...charactersDatabase];
        } else {
            filteredCharacters = charactersDatabase.filter(character =>
                character.name.toLowerCase().includes(searchTerm)
            );
        }
        
        if (currentPage === 'gallery') {
            loadGallery();
        }
    });
}

// ============================================
// HIDE LOADING SCREEN
// ============================================

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.animation = 'fadeOut 0.5s ease-out 0.3s forwards';
        }, 500);
    }
    
    // Initialize gallery on first load
    filteredCharacters = [...charactersDatabase];
    loadGallery();
});

// ============================================


// ============================================
// TOOLTIPS & HELP
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add help text in console
    console.log('✨ WaifuSphere - Web Initialized Successfully! ✨');
    console.log('Database loaded with', charactersDatabase.length, 'characters');
    console.log('Keyboard shortcuts:');
    console.log('  G - Gallery');
    console.log('  H - Home');
    console.log('  ESC - Go back');
});

// ============================================
// PAGINATION
// ============================================

let itemsPerPage = 12;
let galleryCurrentPage = 1;

function setupPagination() {
    const totalPages = Math.ceil(filteredCharacters.length / itemsPerPage);
    const paginationContainer = document.getElementById('pagination');
    
    if (!paginationContainer) return;
    
    paginationContainer.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === galleryCurrentPage ? 'active' : '';
        button.addEventListener('click', () => {
            galleryCurrentPage = i;
            setupPagination();
            loadPaginatedGallery();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        paginationContainer.appendChild(button);
    }
}

function loadPaginatedGallery() {
    const start = (galleryCurrentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedCharacters = filteredCharacters.slice(start, end);
    
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    paginatedCharacters.forEach((character, index) => {
        const card = createCharacterCard(character);
        card.style.animationDelay = `${index * 0.05}s`;
        galleryGrid.appendChild(card);
    });
}

console.log('✨ WaifuSphere - Web Initialized Successfully! ✨');
console.log('Database loaded with', charactersDatabase.length, 'characters');
console.log('Press G for Gallery, H for Home, ESC to go back');

