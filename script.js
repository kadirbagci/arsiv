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
        "images/image1.jpg", 
        "2 Ağustos 2024", 
        "2 Ağustos 2024", 
        "Her şeyin başladığı o ilk gün"
    );
        const card2 = createCard(
        "images/image2.jpg", 
        "22 Ağustos 2024", 
        "22 Ağustos 2024", 
        "Her fırsatta görüntülü konuştuğumuz ilk zamanlarımız"
    );

    const card3 = createCard(
        "images/image3.jpg", 
        "5 Eylül 2024", 
        "5 Eylül 2024", 
        "Uyurken seni izleme zevkini tattığım ilk gün"
    );

    const card4 = createCard(
        "images/image4.jpg", 
        "9 Eylül 2024", 
        "9 Eylül 2024", 
        "Kütüphanenin parkında ders arasında çekindiğimiz fotoğraflardan biri"
    );

    const card5 = createCard(
        "images/image5.jpg", 
        "12 Ekim 2024", 
        "12 Ekim 2024", 
        "Ben İstanbul'a gittikten sonraki ilk buluşmamız"
    );

    const card6 = createCard(
        "images/image6.jpg", 
        "24 Aralık 2024", 
        "24 Aralık 2024", 
        "Aldığım en tatlı hediyelerden biriydi, sarışını kendine siyahımsı olanı da bana vermiştin"
    );

    const card7 = createCard(
        "images/image7.jpg", 
        "24 Aralık 2024", 
        "24 Aralık 2024", 
        "Enntepe'yi gezdiğimiz günden bir fotoğraf. Benim en sevdiğim fotoğraflarımız arasında kesinlikle"
    );

    const card8 = createCard(
        "images/image8.jpg", 
        "9 Ocak 2025", 
        "9 Ocak 2025", 
        "Seni evine bırakmadan önce sevmek için durduğumuz kedinin bıraktığı iz"
    );

    const card9 = createCard(
        "images/image9.jpg", 
        "23 Ocak 2025", 
        "23 Ocak 2025", 
        "Bosna'da kol kola yürürken denk geldiğimiz sokak fotoğrafçısının çektiği fotoğraf"
    );

    const card10 = createCard(
        "images/image10.jpg", 
        "13 Şubat 2025", 
        "13 Şubat 2025", 
        "Sevgililer günü için aldığım nergis ve eve girince sen"
    );

    const card11 = createCard(
        "images/image11.jpg", 
        "28 Şubat 2025", 
        "28 Şubat 2025", 
        "Ben ve bana yaptığın ilk kağıttan  çiçek"
    );

    const card12 = createCard(
        "images/image12.jpg", 
        "2 Nisan 2025", 
        "2 Nisan 2025", 
        "İlk bowling oyunumuz. Aynı zamanda senin de ilk bowling oyunun (2-0 yendiğin gün)"
    );

    const card13 = createCard(
        "images/image13.jpg", 
        "2 Nisan 2025", 
        "2 Nisan 2025", 
        "Oyunu kazananın ve seni mutlu görenin mutluluğu"
    );

    const card14 = createCard(
        "images/image14.jpg", 
        "11 Nisan 2025", 
        "11 Nisan 2025", 
        "Uzak mesafenin yakın hissettirdiği anlardan biri"
    );

    const card15 = createCard(
        "images/image15.jpg", 
        "24 Nisan 2025", 
        "24 Nisan 2025", 
        "Ayakkabım kirlendi dediğin için temizlediğim hanımcılığın zirvesini bulduğum günlerden biri"
    );

    const card16 = createCard(
        "images/image16.jpg", 
        "26 Nisan 2025", 
        "26 Nisan 2025", 
        "İlişkinin en başlarında seni Hüyük'e göndermek için geldiğimiz, unutmadığım o sarılmanın olduğu o yer ve bankı çekip sana attığım gün"
    );

    const card17 = createCard(
        "images/image17.jpg", 
        "11. Sınıftan Bir Gün", 
        "11. Sınıftan Bir Gün", 
        "Okul kahvaltısının olduğu günden bize kalan bir fotoğraf"
    );

    const card18 = createCard(
        "images/image18.jpg", 
        "28 Mayıs 2025", 
        "28 Mayıs 2025", 
        "Çocukluk fotoğrafında görüp yeniden yaptığım bilekliğin"
    );

    const card19 = createCard(
        "images/image19.jpg", 
        "13 Haziran 2025", 
        "13 Haziran 2025", 
        "Bosna'daki ikinci el kıyafetler satan yerde seni izlemeye doyamadığım için bizimle sonsuza gelecek fotoğrafın"
    );

    const card20 = createCard(
        "images/image20.jpg", 
        "13 Haziran 2025", 
        "13 Haziran 2025", 
        "Seni almak için gelecekleri gün birbirimizden asla kopamayışımız"
    );

    const card21 = createCard(
        "images/image21.jpg", 
        "14 Haziran 2025", 
        "14 Haziran 2025", 
        "Kütüphane dönüşü çok şirin çıktığını düşündüğüm fotoğrafımız"
    );

    const card22 = createCard(
        "images/image22.jpg", 
        "16 Haziran 2025", 
        "16 Haziran 2025", 
        "Sabah kütüphaneye giderken çektiğim belki de en tatlı fotoğraflarından birisi. Kesinlikle favorilerim arasında"
    );

    const card23 = createCard(
        "images/image23.jpg", 
        "26 Haziran 2025", 
        "26 Haziran 2025", 
        "Buluşma sonrası indirimin bitmesine 15 dakika kalmış ve kartlarımızda para yokken koşa koşa gidip para gönderdiğim günden"
    );

    const card24 = createCard(
        "images/image24.jpg", 
        "16 Temmuz 2025", 
        "16 Temmuz 2025", 
        "Attığın tiktokta oğlum diye paylaştığını gördümde çok hoşuma gitmişti. Özellikle de senin için bu kadar zor olduğunu biliyorken"
    );

    const card25 = createCard(
        "images/image25.jpg", 
        "17 Temmuz 2025", 
        "17 Temmuz 2025", 
        "Ebebek'te dolaşırken küçükken almak istediğini söylediğin zürafa ve esssek sen"
    );

    const card26 = createCard(
        "images/image26.jpg", 
        "24 Temmuz 2025", 
        "24 Temmuz 2025", 
        "Sonuçlardan sonra ilk önlük giyişin. Ameliyata bile girmiştin, o günlü heyecanın aklıma geldiğinde gülümsüyorum"
    );

    const card27 = createCard(
        "images/image27.jpg", 
        "30 Temmuz 2025", 
        "30 Temmuz 2025", 
        "Bacanakla beraber bilardo oynamaya gittiğimiz ve dayanamayıp kucağına oturduğum gün"
    );

    const card28 = createCard(
        "images/image28.jpg", 
        "1 Ağustos 2025", 
        "1 Ağustos 2025", 
        "Her şeyin başladığı yerde ilk yıldönümüzü kutladığımız gün. Zamanın daha hızlı aktığı bir gün daha hatırlamıyorum."
    );

    const card29 = createCard(
        "images/image29.jpg", 
        "1 Ağustos 2025", 
        "1 Ağustos 2025", 
        "Bahsi geçen zürafa ve odana paketlenişi"
    );

    const card30 = createCard(
        "images/image30.jpg", 
        "11. Sınıftan Bir Gün", 
        "11. Sınıftan Bir Gün", 
        "Dönüp baktığımda hayatımın hatırladığım her kısmında oluşunu görmemi sağlayan fotoğraflardan biri"
    );
    
    const card31 = createCard(
        "images/image31.jpg", 
        "24 Mayıs 2024", 
        "24 Mayıs 2024", 
        "Lise mezuniyetimizden bir fotoğraf"
    );

    const card32 = createCard(
        "images/image32.jpg", 
        "12 Ağustos 2024", 
        "12 Ağustos 2024", 
        "Çocukluk fotoğraflarımıza bakarken çok benzeyen iki foğrafı buluşumuz ve senin yıldızlı mesajlarındaki duruşu"
    );
     
container.append(card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30);
});
