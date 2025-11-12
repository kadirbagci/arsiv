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
                "/images/image1", 
                "2 Ağustos 2024", 
                "2 Ağustos 2024", 
                "Her şeyin başladığı o ilk gün"
            );
            const card2 = createCard(
                "/images/image2", 
                "22 Ağustos 2024", 
                "22 Ağustos 2024", 
                "Görüntülü konuşma üzerinde breaber vakit geçirdiğimiz ilk gün"
                );
                container.append(card1, card2);
});