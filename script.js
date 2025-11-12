function createCard(location, info, title, text){
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");
    galleryItem.addEventListener("click", () => galleryItem.classList.toggle('is-flipped'));
    
    const innerCard = document.createElement("div");
    innerCard.classList.add("card-inner");
    galleryItem.appendChild(innerCard);

    const frontCard = document.createElement("div");
    frontCard.classList.add("card-front");

    const img = document.createElement("img");
    img.src = location;
    img.alt = info;
    frontCard.appendChild(img);

    const backCard = document.createElement("div");
    backCard.classList.add("card-back");

    const header = document.createElement("h2");
    header.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    backCard.append(header, paragraph);
    innerCard.append(frontCard, backCard);

    return galleryItem;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".gallery-container");

    const card1 = createCard(
        "/images/image1.jpg", 
        "2 Ağustos 2024", 
        "2 Ağustos 2024", 
        "Her şeyin başladığı o ilk gün"
    );
        const card2 = createCard(
        "/images/image2.jpg", 
        "22 Ağustos 2024", 
        "22 Ağustos 2024", 
        "Görüntülü konuşma üzerinde breaber vakit geçirdiğimiz ilk gün"
    );

    const card3 = createCard(
        "/images/image3.jpg", 
        "5 Eylül 2024", 
        "5 Eylül 2024", 
        "Uyurken seni izleme zevkini tattığım ilk gün"
    );

    const card4 = createCard(
        "/images/image4.jpg", 
        "9 Eylül 2024", 
        "9 Eylül 2024", 
        "Kütüphanenin parkında ders arasında çekindiğimiz fotoğraflardan biri"
    );

    const card5 = createCard(
        "/images/image5.jpg", 
        "12 Ekim 2024", 
        "12 Ekim 2024", 
        "Ben İstanbul'a gittikten sonraki ilk buluşmamız"
    );

    const card6 = createCard(
        "/images/image6.jpg", 
        "24 Aralık 2024", 
        "24 Aralık 2024", 
        "Aldığım en tatlı hediyelerden biriydi, sarışını kendine siyahımsı olanı da bana vermiştin"
    );

    const card7 = createCard(
        "/images/image7.jpg", 
        "24 Aralık 2024", 
        "24 Aralık 2024", 
        "Enntepe'yi gezdiğimiz günden bir fotoğraf. Benim için en sevdiğim fotoğraflarımız arasında kesinlikle"
    );
           
container.append(card1, card2, card3, card4, card5, card6, card7);
});
