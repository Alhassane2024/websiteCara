
const featureData = [
    { icon: `<ion-icon name="shield-checkmark-outline"></ion-icon>`, title: "Free Shipping", backgroundColorText: "222" },
    { icon: `<ion-icon name="phone-portrait-outline"></ion-icon>`, title: "Online Order", backgroundColorText: "222" },
    { icon: `<ion-icon name="cash-outline"></ion-icon>`, title: "Save Money", backgroundColorText: "222" },
    { icon: `<ion-icon name="flash-outline"></ion-icon>`, title: "Promotions", backgroundColorText: "222" },
    { icon: `<ion-icon name="happy-outline"></ion-icon>`, title: "Happy Sell", backgroundColorText: "222" },
    { icon: `<ion-icon name="layers-outline"></ion-icon>`, title: "F24/7 Support", backgroundColorText: "222" },

]


const product1Datas = [
    { image: "images/products/jacket-1.jpg", image2: "images/products/clothes-1.jpg", marque: "dani alves jacket", name: "Vintage Denim Jacket", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "85", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/clothes-1.jpg", marque: "addidas", name: "Classic White T-Shirt", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "65", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/belt.jpg", marque: "addidas", name: "Cotton Cargo Shorts", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "45", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/watch-1.jpg", marque: "addidas", name: "Slim Fit Chinos", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "208.00", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/sports-2.jpg", marque: "addidas", name: "Sports Performance Leggings", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "55", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/jewellery-1.jpg", marque: "addidas", name: "Maxi Skirt", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "23", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/shoe-1.jpg", marque: "addidas", name: "Silk Scarf", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "135.00", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/shorts-1.jpg", marque: "addidas", name: "Leather Belt", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "123.00", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/sports-6.jpg", marque: "addidas", name: "Professional Blazer", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "82", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/shirt-1.jpg", marque: "addidas", name: "Wool Winter Coat", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "85", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
]


const productArrivalsDatas = [
    { image: "images/products/watch-2.jpg", image2: "images/products/clothes-1.jpg", marque: "dani alves jacket", name: "Jacket men's hiver", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "85", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/sports-3.jpg", marque: "addidas", name: "Cartoon astronaut T-Shirts", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "85", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/clothes-4.jpg", marque: "addidas", name: "Cartoon astronaut T-Shirts", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "85", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/jacket-4.jpg", marque: "addidas", name: "Cartoon astronaut T-Shirts", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "85", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/party-wear-1.jpg", marque: "addidas", name: "Cartoon astronaut T-Shirts", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "85", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/jewellery-3.jpg", marque: "addidas", name: "Cartoon astronaut T-Shirts", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "85", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/shampoo.jpg", marque: "addidas", name: "Cartoon astronaut T-Shirts", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "85", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/shoe-2_1.jpg", marque: "addidas", name: "Cartoon astronaut T-Shirts", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "85", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/sports-5.jpg", marque: "addidas", name: "Cartoon astronaut T-Shirts", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "85", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
    { image: "images/products/jacket-6.jpg", marque: "addidas", name: "Cartoon astronaut T-Shirts", ratingFull: `<ion-icon name="star"></ion-icon>`, ratingOutline: `<ion-icon name="star-half"></ion-icon>`, price: "85", iconBuy: `<ion-icon name="bag-add-outline"></ion-icon>` },
]


const twoCardsData = [
    { image: "images/logo/woman-joyful-surprise-looks-camera-poses-pink-trolley-lady-white-blouse-bright-pants-laughs-isolated-background.jpg", smallTitle: "crazy deals", bigTitle: "buy 1 get 1 free", paragraphe: "The best classic dress is on sale at cara", textLien: "Learn More" },
    { image: "images/logo/smiling-young-woman-sitting-with-laptop-credit-card.jpg", smallTitle: "crazy deals", bigTitle: "buy 1 get 1 free", paragraphe: "The best classic dress is on sale at cara", textLien: "Learn More" },

]



document.addEventListener("DOMContentLoaded", function () {
    const featureSection = document.querySelector("#feature");
    let cardFeature = "";

    featureData.forEach(cardFeatureData => {
        cardFeature += `<div class="feature_box">
    <div class="icon_feature_box_container">
        ${cardFeatureData.icon}
    </div>
    <h4>${cardFeatureData.title}</h4>

    </div>`
    });
    featureSection.innerHTML = cardFeature;

    // LES CARDS DES PRODUITS 

    const cardProdut1Container = document.querySelector(".feature_products_product1_grid_container");
    let cardProductData = "";

    product1Datas.forEach(product1Data => {
        let iconFavorite = "";
        for (let i = 0; i < 5; i++) {
            iconFavorite += `${product1Data.ratingFull}`
        }

        cardProductData += `<div class="product1_container">
       
            <img class="product1_image_default" src="/${product1Data.image}" alt="">

    <div class="text_container">
        <div class="marque_name_container">
            <span>${product1Data.marque}</span>
            <h5>${product1Data.name}</h5>
         </div>
        
        <div class="rating_price_icon_product1_container">
            <div class="rating_price_container">
                <div class="rating_container">
                    ${iconFavorite}
                </div>
                <h4 class="h4_price">&dollar;${product1Data.price}</h4>
            </div>
            ${product1Data.iconBuy}
        </div>
    </div>
</div>`

    })
    cardProdut1Container.innerHTML = cardProductData;




    const cardProdut1Container2 = document.querySelector("#new_arrivals");
    let cardProductArrival = "";
    productArrivalsDatas.forEach((productArrivalData, index) => {
        let iconFavorite = "";
        for (let i = 0; i < 5; i++) {
            iconFavorite += `${productArrivalData.ratingFull}`
        }

        cardProductArrival += `<div class="product1_container new_arrivals one${index}" id="product1_container_id_${index}">
       
            <img class="product1_image_default" src="/${productArrivalData.image}" alt="">

    <div class="text_container">
        <div class="marque_name_container">
            <span>${productArrivalData.marque}</span>
            <h5>${productArrivalData.name}</h5>
         </div>
        
        <div class="rating_price_icon_product1_container">
            <div class="rating_price_container">
                <div class="rating_container">
                    ${iconFavorite}
                </div>
                <h4 class="h4_price">&dollar;${productArrivalData.price}</h4>
            </div>
            ${productArrivalData.iconBuy}
        </div>
    </div>
</div>`

    })
    cardProdut1Container2.innerHTML = cardProductArrival;


    // CARD SCROLL LEFT


    const eachCard = document.querySelectorAll(".product1_container.new_arrivals");

    eachCard.forEach(data => {
        data.addEventListener("mouseover", function () {
            eachCard.forEach(item => {
                item.classList.add("paused")
            })
        })

        data.addEventListener("mouseout", function () {
            eachCard.forEach(item => {
                item.classList.remove("paused")
            })
        })
    })


    // CARD BOTTOM SCROLL RIGHT

    const cardProdut1ContainerScroll = document.querySelector(".scroll.bottom");

    let cardProductArrivalBottom = "";
    productArrivalsDatas.forEach((productArrivalData, index) => {
        let iconFavorite = "";
        for (let i = 0; i < 5; i++) {
            iconFavorite += `${productArrivalData.ratingFull}`
        }

        cardProductArrivalBottom += `<div class="product1_container new_arrivals bottom one${index}" id="product1_container_id_${index}">
       
            <img class="product1_image_default" src="/${productArrivalData.image}" alt="">

    <div class="text_container">
        <div class="marque_name_container">
            <span>${productArrivalData.marque}</span>
            <h5>${productArrivalData.name}</h5>
         </div>
        
        <div class="rating_price_icon_product1_container">
            <div class="rating_price_container">
                <div class="rating_container">
                    ${iconFavorite}
                </div>
                <h4 class="h4_price">&dollar;${productArrivalData.price}</h4>
            </div>
            ${productArrivalData.iconBuy}
        </div>
    </div>
</div>`

    })
    cardProdut1ContainerScroll.innerHTML = cardProductArrivalBottom;


    const eachCardBottom = document.querySelectorAll(".product1_container.new_arrivals.bottom");

    eachCardBottom.forEach(dat => {
        dat.addEventListener("mouseover", function () {
            eachCardBottom.forEach(x => {
                x.classList.add("paused")
            })
        })

        dat.addEventListener("mouseout", function () {
            eachCardBottom.forEach(x => {
                x.classList.remove("paused")
            })
        })
    })

    // TWO CARDS

    const twoCards = document.querySelector("#two_cards");
    let twoCard = "";

    twoCardsData.forEach(twoCardData => {
        twoCard += ` <div class="content_two_cards_container">
        <img src="${twoCardData.image}" alt="">
        <div class="txt">
            <h4>${twoCardData.smallTitle}</h4>
            <h2>${twoCardData.bigTitle}</h2>
            <h5>${twoCardData.paragraphe}</h5>
            <a href="#">${twoCardData.textLien}</a>
        </div>
    </div>`
    })

    twoCards.innerHTML = twoCard;




    // BURGER MENU


    const burgerMenu = document.querySelector(".burger_menu");
    const bagMobile = document.querySelector(".bag_mobile");

    const navBar = document.querySelector("#navbar");
    const overlay = document.querySelector(".overlay");

    burgerMenu.addEventListener("click", function () {
        if (navBar.id === "navbar") {
            navBar.classList.toggle("visible");
            if (burgerMenu.getAttribute("name") === "grid-outline") {

                burgerMenu.classList.toggle("rotate");

                burgerMenu.setAttribute("name", "close-outline");

                bagMobile.classList.add("none");

                overlay.classList.add("visible")

            } else {
                // burgerMenu.classList.add("rotate");
                burgerMenu.setAttribute("name", "grid-outline");

                bagMobile.classList.remove("none");

                overlay.classList.remove("visible");
            }

        }
    })



    // BURGER MENU


    const allCradsShop = document.querySelectorAll(".product1_container");
    const allCradsShopImages = document.querySelectorAll(".product1_container img");
    const productName = document.querySelectorAll(".marque_name_container h5");

    const priceProduct = document.querySelectorAll(".h4_price");
   
    allCradsShop.forEach((eachCardShop, index) => {
        eachCardShop.addEventListener("click", () => {

            const imageSrcIndex = allCradsShopImages[index];
            const imageSrc = imageSrcIndex.getAttribute("src");
            const encodeImageSrc = encodeURIComponent(imageSrc);

            const nameProductIndex = productName[index].textContent;
            const encodeNameProductIndex = encodeURIComponent(nameProductIndex);

            const priceProductIndex = priceProduct[index].textContent;
            const encodePriceProductIndex = encodeURIComponent(priceProductIndex);
           

            window.location.href = `sproduct.html?imageSrc=${encodeImageSrc}&nameProductIndex=${encodeNameProductIndex}&priceProductIndex=${encodePriceProductIndex}`;
            

        })
    })

                                                                             // BLOG

    




})
