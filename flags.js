const imgs = [
    {
        "nkar": "img/Argentina.png",
        "name": "Արգենտինա",
        "tipe":1,
        "answer" : "Ո՞ր երկիրն է պատկերված նկարում:"
    },
    {
        "nkar": "img/China.png",
        "name": "Չինաստան",
        "tipe":1,
        "answer" : "Ո՞ր երկիրի դրոշն է պատկերված նկարում:"
    },
    {
        "nkar": "img/Japan.png",
        "name": "Ճապոնիա",
        "tipe":1,
        "answer" : "Ո՞ր երկիրի դրոշն է պատկերված նկարում:"
    },
    {
        "nkar": "img/poland.png",
        "name": "Լեհաստան",
        "tipe":1,
        "answer" : "Ո՞ր երկիրն է պատկերված նկարում:"
    },
    {
        "nkar": "img/SK.png",
        "name": "Հարավային Կորեա",
        "tipe":1,
        "answer" : "Ո՞ր երկիրի դրոշն է պատկերված նկարում:"
    },
    {
        "nkar": "img/Syunik.png",
        "name": "Սյունիք",
        "tipe":2,
        "answer" : "Ո՞ր մարզն է պատկերված նկարում:"
    },
    {
        "nkar": "img/Ararat.png",
        "name": "Արարատ",
        "tipe":2,
        "answer" : "Ո՞ր մարզն է պատկերված նկարում:"

    },
    {
        "nkar": "img/austria.png",
        "name": "Վիեննա",
        "tipe": 4,
        "answer" : "Ո՞րն է Ավստրիայի մայրաքաղաքը:"
    },
    {
        "nkar": "img/Everest.jpg",
        "name": "Էվերեստ",
        "tipe":3,
        "answer" : "Ո՞րն է աշխարհի ամենաբարձր լեռը:"
    },
    {
        "nkar": "img/Map.png",
        "name": "Ռուսաստան",
        "tipe":1,
        "answer" : "Ո՞րն է աշխարհի տարածքով ամենամեծ երկիրը:"
    },
    {
        "nkar": "img/morocco.jpg",
        "name": "Մարոկկո",
        "tipe":1,
        "answer" : "Ո՞ր երկիրն է պատկերված նկարում:"
    },
    {
        "nkar": "img/SA.png",
        "name": "Հարավային Աֆրիկա",
        "tipe":1,
        "answer" : "Ո՞ր երկիրի դրոշն է պատկերված նկարում:"
    },
    {
        "nkar": "img/aragac.jpg",
        "name": "Արագած",
        "tipe":3,
        "answer" : "Ո՞րն է Հայաստանի Հանրապետության ամենաբարձր լեռը:"
    },
    {
        "nkar": "img/arcakh.jpg",
        "name": "Ստեփանակերտ",
        "tipe":4,
        "answer" : "Ո՞րն է Արցախի Հանրապետության մայրաքաղաքը:"
    },
    {
        "nkar": "img/arcaxflag.png",
        "name": "Արցախի Հանրապետություն",
        "tipe":1,
        "answer" : "Ո՞ր երկիրի դրոշն է պատկերված նկարում:"
    },
    {
        "nkar": "img/Australia.png",
        "name": "Ավստրալիա",
        "tipe":1,
        "answer" : "Ո՞ր երկիրն է պատկերված նկարում:"
    },
    {
        "nkar": "img/ph.png",
        "name": "Ֆիլիպիններ",
        "tipe":1,
        "answer" : "Ո՞ր երկիրն է պատկերված նկարում:"
    },
    // {
    //     "nkar": "img/Vanadzor.jpg",
    //     "name": "Վանաձոր",
    //     "tipe":5,,
        // "answer" : "Ո՞ր քաղաքն է պատկերված նկարում:"
    // },
    // {
    //     "nkar": "img/images.jpg",
    //     "name": "Խաղաղ օվկիանոս",
    //     "tipe":8
    // },
    {
        "nkar": "img/venezuela.png",
        "name": "Վենեսուելա",
        "tipe":1,
        "answer" : "Ո՞ր երկիրն է պատկերված նկարում:"
    }, 
    {
        "nkar": "img/arabic.png",
        "name": "Արաբական թերակզզի",
        "tipe":7,
        "answer" : "Ո՞ր թերակղզին է պատկերված նկարում:"
    },
    {
        "nkar": "img/balkan.png",
        "name": "Բալկանյան թերակղզի",
        "tipe":7,
        "answer" : "Ո՞ր թերակղզին է պատկերված նկարում:"
    },
    // {
    //     "nkar": "img/caspian.png",
    //     "name": "Կասպից ծով",
    //     "tipe":6
    // },
    {
        "nkar": "img/ganges.jpg",
        "name": "Գանգես",
        "tipe":9,
        "answer" : "Ո՞ր գետն է պատկերված նկարում:"
    },
    // {
    //     "nkar": "img/greenland.png",
    //     "name": "Գրենլանդիա",
    //     "tipe":10
    // },
    {
        "nkar": "img/mississipi.jpg",
        "name": "Միսիսիպի",
        "tipe":9,
        "answer" : "Ո՞ր երկիրն է պատկերված նկարում:"
    },
    {
        "nkar": "img/netherlands.png",
        "name": "Նիդերլանդներ",
        "tipe":1 ,
        "answer" : "Ո՞ր երկիրն է պատկերված նկարում:"
    },
    {
        "nkar": "img/ob.jpg",
        "name": "Օբ",
        "tipe":9,
        "answer" : "Ո՞ր գետն է պատկերված նկարում:"
    },
    {
        "nkar": "img/araratler.jpeg",
        "name": "Արարատ լեռ",
        "tipe":3,
        "answer" : "Ո՞րն է Հայկական լեռնաշխարհի ամենաբարձր լեռը:"
    },{
        "nkar": "img/Kaputdzukh.jpeg",
        "name": "Կապուտջուղ լեռ",
        "tipe":3,
        "answer" : "Ո՞րն է Հայաստանի երկրորդ ամենաբարձր լեռը:"
    },
    {
        "nkar": "img/Armavir.png",
        "name": "Արմավիր",
        "tipe":2,
        "answer" : "Ո՞ր մարզն է պատկերված նկարում:"
    },
    {
        "nkar": "img/Kotayk.png",
        "name": "Կոտայք",
        "tipe":2,
        "answer" : "Ո՞ր մարզն է պատկերված նկարում:"
    },
    {
        "nkar": "img/Tavush.png",
        "name": "Տավուշ",
        "tipe":2,
        "answer" : "Ո՞ր մարզն է պատկերված նկարում:"
    },
    {
        "nkar": "img/vayoc.png",
        "name": "Վայոց Ձոր",
        "tipe":2,
        "answer" : "Ո՞ր մարզն է պատկերված նկարում:"
    },
    {
        "nkar": "img/Belgium.jpg",
        "name": "Բրյուսել",
        "tipe":4,
        "answer" : "Ո՞րն է Բելգիայի մայրաքաղաքը:"
    },
    {
        "nkar": "img/chile.jpeg",
        "name": "Սանտյագո",
        "tipe":4,
        "answer" : "Ո՞րն է Չիլիի մայրաքաղաքը:"
    },
    {
        "nkar": "img/mexico.jpeg",
        "name": "Մեխիկո",
        "tipe":4,
        "answer" : "Ո՞րն է Մեքսիկայի մայրաքաղաքը:"
    },
    {
        "nkar": "img/Myanmar.jpg",
        "name": "Նայպյիդաու",
        "tipe":4,
        "answer" : "Ո՞րն է Մյանմայի մայրաքաղաքը:"
    },
    {
        "nkar": "img/amazon.png",
        "name": "Ամազոն",
        "tipe":9,
        "answer" : "Ո՞ր գետն է պատկերված նկարում:"
    },
    {
        "nkar": "img/apennine.png",
        "name": "Ապենինյան թերակղզի",
        "tipe":7,
        "answer" : "Ո՞ր թերակղզին է պատկերված նկարում:"
    },
    {
        "nkar": "img/alaska.jpeg",
        "name": "Ալյասկա թերակղզի",
        "tipe":7,
        "answer" : "Ո՞ր թերակղզին է պատկերված նկարում:"
    },
]