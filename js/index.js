function firstFunction() {
  document.getElementById("dropdown-js").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// languages

var arrLang = {
  en: {
    price: "Price",
    discount: "Complexes",
    infoAndRules: "Info&Rules",
    coreTitle: "LASER HAIR REMOVAL",
    lazerRsIs:
      '"Lazer.rs" - is the undisputed leader in the field of laser hair removal in Serbia. Specializing in advanced technologies and leading methods, the company offers state-of-the-art hair removal procedures, ensuring maximum effectiveness and comfort for its clients',
    appointment: "Make an appointment",
    choose: "why people choose us?",
    laserName: "Hair removal laser FG2000-D+",
    lazerDescription1:
      "- Removes all types of hair, regardless of their shade and stiffness",
    lazerDescription2: "- Does not cause severe pain",
    lazerDescription3:
      "- Acts only on melanin, does not damage neighboring tissues",
    masters: "Masters",
    masterBenefits1: "- Have a medical education",
    masterBenefits2:
      "- Work individually with each client, choosing the right approach",
    masterBenefits3:
      "- They are open and friendly to make the procedure even more comfortable for you",
    ourStudio: "Studio",
    studioBenefits1:
      "- In our studio, everything is thought out to the smallest detail",
    studioBenefits2: "- Upon arrival, we always offer coffee, tea, or water",
    studioBenefits3:
      "- In the restroom, you will always find everything you need",
    nameLocation: "Very convenient location",
    nameAddress: "Vladimira Karića 3, Beograd 11118",
    pointerUp: "Get it",
    footerPhone: "Phone: 123 1231 123",
  },
  rs: {
    price: "Cenovnik",
    discount: "Kompleksi",
    infoAndRules: "Informacije",
    coreTitle: "LASERSKO UKLANJANJE DLAKA",
    lazerRsIs:
      '"Lazer.rs" je neprikosnoveni lider u oblasti laserske epilacije u Srbiji. Specijalizovana za napredne tehnologije i vodeće metode, kompanija nudi najsavremenije procedure za uklanjanje dlaka, obezbeđujući maksimalnu efikasnost i udobnost za svoje klijente',
    appointment: "Zakazati sastanak",
    choose: "zašto ljudi biraju nas?",
    laserName: "Diodni laser FG2000-D+",
    lazerDescription1:
      "- Uklanja sve tipove kose, bez obzira na hladovinu i ukočenost",
    lazerDescription2: "- Ne izaziva jake bolove",
    lazerDescription3: "- Deluje samo na melanin, ne oštećuje susedna tkiva",
    masters: "Čarobnjak",
    masterBenefits1: "- Imaj medicinsko obrazovanje",
    masterBenefits2:
      "- Radite pojedinačno sa svakim klijentom, birajući pravi pristup",
    masterBenefits3:
      "- Otvorena i druželjubiva da vam procedura bude još udobnija",
    ourStudio: "Studio",
    studioBenefits1:
      "- U našem studiju, sve je promišljeno do najsjajnijih detalja",
    studioBenefits2: "- Po dolasku, uvek nudimo kafu, čaj ili vodu",
    studioBenefits3: "- U toaletu ćeš uvek naći sve što ti treba",
    nameLocation: "Veoma pogodna lokacija",
    nameAddress: "Vladimira Karića 3, Beograd 11118",
    pointerUp: "Dobro",
    footerPhone: "Telefon: 123 1231 123",
  },
  ru: {
    price: "Цены",
    discount: "Комплексы",
    infoAndRules: "Информация",
    coreTitle: "ЛАЗЕРНОЕ УДАЛЕНИЕ ВОЛОС",
    lazerRsIs:
      '"Lazer.rs" - безусловный лидер в области лазерного удаления волос в Сербии. Специализируясь на передовых технологиях и ведущих методах, компания предлагает самые передовые процедуры удаления волос, обеспечивая максимальную эффективность и комфорт для своих клиентов',
    appointment: "Записаться",
    choose: "почему люди выбирают нас?",
    laserName: "Диодный лазер FG2000-D+",
    lazerDescription1:
      "- Удаляет все типы волос, независимо от их оттенка и жесткости",
    lazerDescription2: "- Не вызывает сильной боли",
    lazerDescription3:
      "- Действует только на меланин, не повреждает соседние ткани",
    masters: "Мастера",
    masterBenefits1: "- Имеют медицинское образование",
    masterBenefits2:
      "- Работают индивидуально с каждым клиентом, выбирая правильный подход",
    masterBenefits3:
      "- Открыты и дружелюбны, чтобы сделать процедуру еще более комфортной для вас",
    ourStudio: "Студия",
    studioBenefits1: "- В нашей студии все продумано до мельчайших деталей",
    studioBenefits2: "- По прибытии мы всегда предлагаем кофе, чай или воду",
    studioBenefits3: "- В туалетyной комнате вы всегда найдете все необходимое",
    nameLocation: "Очень удобное расположение",
    nameAddress: "Vladimira Karića 3, Beograd 11118",
    pointerUp: "Хочу!",
    footerPhone: "Телефон: 123 1231 123",
  },
};

$(function () {
  $(".translate").click(function () {
    var lang = $(this).attr("id");

    $(".lang").each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
});
