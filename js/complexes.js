var arrLang = {
  en: {
    complexes: "complexes",
    speciallyForYou:
      "Specially for you, with the aim of saving money and time, we offer a package of services!",
    complex1: "Complex-1",
    armpits: "armpits",
    fullLegs: "+ full legs",
    fullArms: "+ full arms",
    deepBikini: "+ deep bikini",
    complex2: "Complex-2",
    shinsAndKnees1: "+ shins and knees",
    armsElbow: "+ arms up to the elbow",
    complex3: "Complex-3",
    complex4: "Complex-4",
    complex5: "Complex-5",
    complex6: "Complex-6",
    fullLegsWithoutPlus: "full legs",
    armpitsWithPlus: "+ armpits",
    areoles: "+ areoles",
    bellyLine: "+ belly line",
    oneAreaFace: "+ one area on the face",
    toesAndFingers: "+ toes and fingers",
  },
  rs: {
    complexes: "kompleksi",
    speciallyForYou:
      "Specijalno za Vas, u cilju štednje novca i vremena, nudimo kompleks usluga!",
    complex1: "Kompleks-1",
    armpits: "pazusi",
    fullLegs: "+ cele noge",
    fullArms: "+ cele ruke",
    deepBikini: "+ brazilska epilacija",
    complex2: "Kompleks-2",
    shinsAndKnees1: "+ kolena i potkolenice",
    armsElbow: "+ ruke do lakta",
    complex3: "Kompleks-3",
    complex4: "Kompleks-4",
    complex5: "Kompleks-5",
    complex6: "Kompleks-6",
    fullLegsWithoutPlus: "cele noge",
    armpitsWithPlus: "+ pazusi",
    areoles: "+ bradavice",
    bellyLine: "+ deo stomaka",
    oneAreaFace: "+ jedna zona lica",
    toesAndFingers: "+ prsti na nogama i rukama",
  },
  ru: {
    complexes: "комплексы",
    speciallyForYou:
      "Специально для Вас, в целях экономии денег и времени, мы предлагаем комплекс услуг!",
    complex1: "Комплекс-1",
    armpits: "подмышки",
    fullLegs: "+ ноги полностью",
    fullArms: "+ руки полностью",
    deepBikini: "+ глубокое бикини",
    complex2: "Комплекс-2",
    shinsAndKnees1: "+ голени с коленями",
    armsElbow: "+ руки до локтя",
    complex3: "Комплекс-3",
    complex4: "Комплекс-4",
    complex5: "Комплекс-5",
    complex6: "Комплекс-6",
    fullLegsWithoutPlus: "ноги полностью",
    armpitsWithPlus: "+ подмышки",
    areoles: "+ ареолы",
    bellyLine: "+ линия живота",
    oneAreaFace: "+ одна зона на лице",
    toesAndFingers: "+ пальцы на ногах и руках",
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
