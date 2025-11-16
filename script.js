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
        "20 Eylül 2024", 
        "20 Eylül 2024", 
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
        "İlişkinin en başlarında seni Hüyük'e göndermek için geldiğimiz, unutamadığımız o sarılmanın olduğu o yer ve bankı çekip sana attığım gün"
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
        "27 Haziran 2025", 
        "27 Haziran 2025", 
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
        "images/image32.png", 
        "12 Ağustos 2024", 
        "12 Ağustos 2024", 
        "Çocukluk fotoğraflarımıza bakarken çok benzeyen iki fotoğrafı buluşumuz ve senin yıldızlı mesajlarındaki duruşu"
    );

    const card33 = createCard(
        "images/image33.jpg", 
        "14 Ağustos 2024", 
        "14 Ağustos 2024", 
        "Tatildeyken görüp bak bir şey buldum diye attığın fotoğraf"
    );

    const card34 = createCard(
        "images/image34.jpg", 
        "16 Ağustos 2024", 
        "16 Ağustos 2024", 
        "Note it'i ilk indiriğimiz ve Minnak'ın doğduğu gece, fotoğrafı beğendiğin için bir süre yenisini göndermeme izin vermemiştin"
    );

    const card35 = createCard(
        "images/image35.jpg", 
        "23 Ağustos 2024", 
        "23 Ağustos 2024", 
        "Oyunda bizim karakterlerimizi çizdiğin gün"
    );

    const card36 = createCard(
        "images/image36.jpg", 
        "9 Eylül 2024", 
        "9 Eylül 2024", 
        "Uyku tutmadığı için penguenini ben diye düşünüp yattığın gecenin sabahı"
    );

    const card37 = createCard(
        "images/image37.jpg", 
        "15 Eylül 2024", 
        "15 Eylül 2024", 
        "Kısa bir süre sonra bana yaptığın ufak kurabiyelere kap olacak kendisi"
    );

    const card38 = createCard(
        "images/image38.jpg", 
        "20 Eylül 2024", 
        "20 Eylül 2024", 
        "Benim seni nasıl gördüğümle ilgili doldurduğum kart"
    );

    const card39 = createCard(
        "images/image39.jpg", 
        "20 Eylül 2024", 
        "20 Eylül 2024", 
        "Senin beni nasıl gördüğünle ilgili doldurduğun kart"
    );

    const card40 = createCard(
        "images/image40.jpg", 
        "22 Eylül 2024", 
        "22 Eylül 2024", 
        "Daha ilk sınavından TYT'de yüz üstüne çıkıp kendine hayran bıraktığın deneme"
    );

    const card41 = createCard(
        "images/image41.jpg", 
        "2 Ekim 2024", 
        "2 Ekim 2024", 
        "Bosna'da buluşma sonrası eve dönerken köprüdeki abiden sana aldığımımz çiçeğin"
    );

    const card42 = createCard(
        "images/image42.png", 
        "9 Ekim 2024", 
        "9 Ekim 2024", 
        "Ege alacakmış diyerek sana kendi yüzüğünü seçtirdiğim gün"
    );

    const card43 = createCard(
        "images/image43.jpg", 
        "14 Ekim 2024", 
        "14 Ekim 2024", 
        "Bahsi geçen yüzük ve senin esseklikler"
    );

    const card44 = createCard(
        "images/image100.jpg", 
        "7 Eylül 2025", 
        "7 Eylül 2025", 
        "Önlüğün için yaptığı tasarım, sonrasında aklımda olan bunu nakışla işlemekti ama olmadı. Belki başka zaman"
    );

    const card45 = createCard(
        "images/image45.jpg", 
        "15 Kasım 2024", 
        "15 Kasım 2024", 
        "Kötü hissettiğini söylediğin için birlikte izlediğimiz film, çok beğenmiştin"
    );

    const card46 = createCard(
        "images/image46.jpg", 
        "16 Kasım 2024", 
        "16 Kasım 2024", 
        "Birlikte yiyelim diye aldığın sürpriz yumurtalar, sonrasında doğum günümüzde beraber yemiştik"
    );

    const card47 = createCard(
        "images/image47.jpg", 
        "16 Kasım 2024", 
        "16 Kasım 2024", 
        "Bana örtü örebilmek için örgü öğrenmeye başladığın gün, hayatımda daha iyi hissettiğim an varsa yine seninledir"
    );

    const card48 = createCard(
        "images/image48.png", 
        "18 Kasım 2024", 
        "18 Kasım 2024", 
        "Yaptığımız gavatlık testindeki uyumumuz"
    );

    const card49 = createCard(
        "images/image49.png", 
        "20 Kasım 2024", 
        "20 Kasım 2024", 
        "HayDay'de köyümün adını eciys yapmıştım"
    );

    const card54 = createCard(
        "images/image54.jpg", 
        "24 Kasım 2024", 
        "24 Kasım 2024", 
        "Doğum günümüz için aldığım parmak izimizden kalp olan anahtarlık"
    );

    const card50 = createCard(
        "images/image50.png", 
        "29 Kasım 2024", 
        "29 Kasım 2024", 
        "Sürdüğüm ojenin silinmek üzere olduğu ve onun beni sana nasıl anımsattığını anlattığın gün"
    );

    const card51 = createCard(
        "images/image51.jpg", 
        "29 Kasım 2024", 
        "29 Kasım 2024", 
        "Widget'lerin ne kadar güzel gözüktüğünü attığını gün, gerçekten çok güzel duruyorlar"
    );

    const card55 = createCard(
        "images/image55.jpg", 
        "3 Aralık 2024", 
        "3 Aralık 2024", 
        "Laptopunu alıp mutfağa gittiğin ve en beğendiğim fotoğraflarından birini çekitiğin o gece"
    );

    const card52 = createCard(
        "images/image52.jpg", 
        "4 Aralık 2024", 
        "4 Aralık 2024", 
        "Görüntülü konuşmada güzelliğinle şımardığım anlardan biri"
    );

    const card53 = createCard(
        "images/image53.jpg", 
        "16 Aralık 2024", 
        "16 Aralık 2024", 
        "Görüntülü konuşmada sesli konuşamasak bile eğlenmenin bir yolunu bulduğumuz anlardan herhangi biri"
    );

    const card56 = createCard(
        "images/image56.jpg", 
        "23 Kasım 2024", 
        "23 Kasım 2024", 
        "Doğum günün için aldığım kurbikli puf terlikler ve senin minnak ayakıların"
    );

    const card57 = createCard(
        "images/image57.jpg", 
        "21 Kasım 2024", 
        "21 Kasım 2024", 
        "Doğum günümüzde buz pateni yaparken çektiğimiz videodan bir kesit, kesinlikle en güzel fotoğraflarımızdan biri. Şahsi tavsiyem bu güne denk geldiysen bu güne dair tüm videoları izle ve neşelen"
    );

    const card58 = createCard(
        "images/image58.jpg", 
        "21 Kasım 2024", 
        "21 Kasım 2024", 
        "Doğum günümüzde sen elbise denerken dayanamayıp çektiğimiz fotoğraflardan biri ve kesinlikle en güzel fotoğrafarımızdan biri"
    );

    const card59 = createCard(
        "images/image59.jpg", 
        "21 Kasım 2024", 
        "21 Kasım 2024", 
        "Doğum günümüzde sen elbise denerken dayanamayıp çektiğimiz fotoğraflardan biri ve kesinlikle en güzel fotoğrafarımızdan biri (ama bu sefer dayanamayıp yedim)"
    );

    const card60 = createCard(
        "images/image60.jpg", 
        "27 Ekim 2024", 
        "27 Ekim 2024", 
        "4 yapraklı yonca sana gerçekten çok yakışıyor"
    );

    const card61 = createCard(
        "images/image61.jpg", 
        "26 Ekim 2024", 
        "26 Ekim 2024", 
        "İstanbul'a gitmeden önce sürdüğüm  ojen"
    );

    const card62 = createCard(
        "images/image62.png", 
        "24 Ekim 2024", 
        "24 Ekim 2024", 
        "Bana sarılarak uyumak için penguene sarıldığın gecenin sabahı"
    );

    const card63 = createCard(
        "images/image63.jpg", 
        "12 Ekim 2024", 
        "12 Ekim 2024", 
        "Deneme kabini ve bordo elbise görünce dayanamıyoruz sanırım biraz"
    );
    
    const card64 = createCard(
        "images/image64.jpg", 
        "27 Eylül 2024", 
        "27 Eylül 2024", 
        "Uzak mesafeye başlamadan önceki son buluşma"
    );

    const card65 = createCard(
        "images/image65.jpg", 
        "9 Eylül 2024", 
        "9 Eylül 2024", 
        "Kütüphane parkının yeri cidden çok ayrı benim için"
    );

    const card66 = createCard(
        "images/image66.jpg", 
        "9 Eylül 2024", 
        "9 Eylül 2024", 
        "Bugüne ait videolar kesinlikle tekrar tekrar izlenmeli"
    );

    const card67 = createCard(
        "images/image67.jpg", 
        "5 Temmuz 2024", 
        "5 Temmuz 2024", 
        "İlk görüntülü konuşmamız"
    );


    const card68 = createCard(
        "images/image68.jpg", 
        "6 Temmuz 2024", 
        "6 Temmuz 2024", 
        "Ve gece 12'yi sarkması nedeniyle sonraki güne beraber geçişimiz"
    );


    const card69 = createCard(
        "images/image69.jpg", 
        "23 Ağustos 2024", 
        "23 Ağustos 2024", 
        "Gecesine beni uyutup izlemiştin, sen izlerken uyumak belki de şimdiye kadarki en huzur verici uykumdu"
    );

    const card70= createCard(
        "images/image70.jpg", 
        "ODTÜ Gezisi", 
        "ODTÜ Gezisi", 
        "Bu dünya tatlısı fotoğrafı ben kendi ellerimle çekmiştim"
    );

    const card71 = createCard(
        "images/image71.jpg", 
        "2 Eylül 2024", 
        "2 Eylül 2024", 
        "İlk ay dönümümüz için 4 yapraklı yonca kolye hediyen"
    );

    const card72 = createCard(
        "images/image73.jpg", 
        "27 Eylül 2025", 
        "27 Eylül 2025", 
        "Hayatımda geçirdiğim en güzel gündü, seninle el ele bir yerleri keşfetmekmiş benim en büyük zevkim"
    );

    const card73 = createCard(
        "images/image72.jpg", 
        "27 Eylül 2025", 
        "27 Eylül 2025", 
        "Tüm gün Safranbolu'nun altını üstüne getirdikten sonra kampüsün içinde bir banka oturuşumuz, bu güne ait videoyu izlemeni tavsiye ederim"
    );

    const card74 = createCard(
        "images/image74.jpg", 
        "1 Kasım 2025", 
        "1 Kasım 2025", 
        "15. ay dönümümüz için hazırladığım hediye"
    );

    const card75 = createCard(
        "images/image75.jpg", 
        "13 Eylül 2024", 
        "13 Eylül 2024", 
        "İlk hediyen, aldığından beri düşürene kadar hiç çıkarmadığım bilekliğim. Artık kolunda olmadığında gerçekten yalnız hissediyormuş insan"
    );

    const card76 = createCard(
        "images/image76.jpg", 
        "4 Ekim 2024", 
        "4 Ekim 2024", 
        "Meşhur altın çilek, bugünden yaklaşık 9 ay sonra bana denettireceksin"
    );

    const card77 = createCard(
        "images/image77.jpg", 
        "13 Kasım 2024", 
        "13 Kasım 2024", 
        "İlerdeki plak koleksiyonumuz için aldığım ilk plaklarımız"
    );

    const card78 = createCard(
        "images/image78.jpg", 
        "22 Kasım 2024", 
        "22 Kasım 2024", 
        "Doğum günüm için bana aldığın lego, çok güzeldi"
    );

    const card79 = createCard(
        "images/image79.jpg", 
        "9 Ocak 2025", 
        "9 Ocak 2025", 
        "Kent Plaza'da baydöner beklerken yaptığımız en normal hareketler"
    );

    const card80 = createCard(
        "images/image80.jpg", 
        "23 Ocak 2025", 
        "23 Ocak 2025", 
        "naber babalık"
    );

    const card81 = createCard(
        "images/image81.jpg", 
        "2 Şubat 2025", 
        "2 Şubat 2025", 
        "Kurbikli tacın ve sen"
    );

    const card82 = createCard(
        "images/image82.jpg", 
        "13 Şubat 2025", 
        "13 Şubat 2025", 
        "Hayatımın en güzel hediyesi, el emeği örtü hem de senin kokun var üzerinde"
    );

    const card83 = createCard(
        "images/image83.jpg", 
        "28 Şubat 2025", 
        "28 Şubat 2025", 
        "İkinci dönemki ilk buluşmamızdan"
    );

    const card84 = createCard(
        "images/image84.jpg", 
        "2 Mayıs 2025", 
        "2 Mayıs 2025", 
        "Tramvayda el ele tutuşurken çok tatlı olduğunu düşündüğümüz için çektiğimiz fotoğraf"
    );

    const card85 = createCard(
        "images/image85.jpg", 
        "5 Haziran 2025", 
        "5 Haziran 2025", 
        "Ders çalışmaktan elin ağrıdığı için beraber ilk kez hastaneye gittiğimiz gün"
    );

    const card86 = createCard(
        "images/image86.jpg", 
        "20 Haziran 2025", 
        "20 Haziran 2025", 
        "Sınavdan önceki son kütüphanemiz, hatta birlikte son kütüphanemiz"
    );

    const card87 = createCard(
        "images/image87.jpg", 
        "20 Haziran 2025", 
        "20 Haziran 2025", 
        "Seni sakinleştirmek için cebelenişim ama yanımdayken zaten hep sakindin"
    );

    const card88 = createCard(
        "images/image88.jpg", 
        "6 Temmuz 2024", 
        "6 Temmuz 2024", 
        "Görüntülü konuşma üzerinden yaptığımız ilk kalp"
    );

    const card89 = createCard(
        "images/image89.jpg", 
        "17 Temmuz 2025", 
        "17 Temmuz 2025", 
        "F1 simülasyonu denediğimiz gün, normalde bu kadar eğlenceli olur mu bilmiyorum ama seninle eğlenceliydi"
    );

    const card90 = createCard(
        "images/image90.jpg", 
        "18 Temmuz 2025", 
        "18 Temmuz 2025", 
        "Beraber süpermarket simülasyonu oynadığımız gün"
    );

    const card91 = createCard(
        "images/image91.jpg", 
        "2 Temmuz 2024", 
        "2 Temmuz 2024", 
        "It takes two oynarken kurbik görünce bu anı ölümsüzleştirmiştirmek istemiştik"
    );

    const card92 = createCard(
        "images/image92.jpg", 
        "13 Ağustos 2025", 
        "13 Ağustos 2025", 
        "Kütüphanede sabahlamalı vize çalıştığım günlerde ikimize de aldığım lifalif"
    );

    const card93 = createCard(
        "images/image93.jpg", 
        "21 Ağustos 2025", 
        "21 Ağustos 2025", 
        "Kanyonda örümceğe tırmandığımız gün, bu fotoğrafımızı çok  seviyorum"
    );

    const card94 = createCard(
        "images/image95.jpg", 
        "29 Ağustos 2025", 
        "29 Ağustos 2025", 
        "Toyzz Shop'ta gördüğümüz aşırı yumuşak ama ağır totolu peluşu kafana park edişimiz"
    );

    const card95 = createCard(
        "images/image96.jpg", 
        "29 Ağustos 2025", 
        "29 Ağustos 2025", 
        "Sana hediye edeceğim kolyenin içine koymak için hazırladığımız çocukluk fotoğrafımız"
    );

    const card96 = createCard(
        "images/image97.jpg", 
        "19 Eylül 2025", 
        "19 Eylül 2025", 
        "Odalarımız boş olduğu için görüntülü konuşarak uyuduğumuz günler, özledim o günler. Gerçi buradaki tüm günleri özledim"
    );

    const card97 = createCard(
        "images/image98.jpg", 
        "27 Eylül 2025", 
        "27 Eylül 2025", 
        "Çok güzel bir mekan bulmuştuk, yaşlı bir kadına ait. Bu da o mekanın önündeki biblo kedi, .ok güzeldi seninle öyle bir ortamı gezmek"
    );

    const card98 = createCard(
        "images/image99.jpg", 
        "15 Eylül 2025", 
        "15 Eylül 2025", 
        "İlk okul günün, bir elbise bi insana bu kadar yakışabilirdi derdim ama güzelliğine yaklaşamıyor bile"
    );

    const card99 = createCard(
        "images/image94.jpg", 
        "Zamansız", 
        "Zamansız", 
        "Birçok kek tarifin var ama hepsi o kadar güzel ve özel ki hepsi zamansız, senin elinden yemek ayrı bi lütuf benim için"
    );
    
    const card100 = createCard(
        "images/image44.jpg", 
        "2 Kasım 2025", 
        "2 Kasım 2025", 
        "Şimdiye kadarki belkide en zor yolculuktu, ama üstesinden geleceğiz"
    );
    

container.append(card99, card70, card31, card91, card67, card68, card88, card1, card32, card33, card34, card2, card69, card35, card71, card3, card36, card65, card66, card75, card37, card4, card38, card39, card40, card64, card41, card76, card42, card5, card63, card43, card62, card61, card60, card77, card45, card46, card47, card48, card49, card58, card57, card59, card78, card56, card54, card50, card51, card55, card52, card53, card6, card7, card79, card8, card9, card80, card81, card10, card82, card83, card11, card12, card13, card14, card15, card16, card17, card30, card84, card18, card85, card19, card20, card21, card22, card86, card87, card23, card27, card24, card25, card89, card90, card26, card28, card29, card92, card93, card94, card95, card44, card96, card98, card72, card97, card73, card74, card100);
});
