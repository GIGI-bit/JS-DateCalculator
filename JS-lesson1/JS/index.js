// 1. Valyuta konvertorunu yaz. İstifadəçi ABŞ dolları miqdarını daxil edir, çevirmək istədiyi
// valyutu seçir: EUR, UAH və ya AZN, və cavab olaraq müvafiq məbləği alır.
// const moneyAmount = Number(prompt("How much money do you have?"));
// const valute = prompt("Enter valute?");

// switch (valute) {
//   case "AZN":
//     alert(moneyAmount * 1.7);
//     break;
//   case "EUR":
//     alert(moneyAmount * 0.93);
//     break;
//   case "UAH":
//     alert(moneyAmount * 39.58);
//     break;
//   default:
//     break;
// }

// 2. İstifadəçidən alış-verişin məbləğini soruş və endirimlə ödəmə məbləğini göstər: 200-dən
// 300-ə qədər - 3% endirim, 300-dən 500-ə qədər - 5% endirim, 500-dən yuxarı - 7% endirim.
// const moneyAmount = Number(prompt("How much did you spent?"));

// if (moneyAmount >= 200 && moneyAmount <= 300) {
//   alert(moneyAmount - (moneyAmount / 100) * 3);
// }
// if (moneyAmount > 300 && moneyAmount <= 500) {
//   alert(moneyAmount - (moneyAmount / 100) * 5);
// }
// if (moneyAmount > 500) {
//   alert(moneyAmount - (moneyAmount / 100) * 7);
// }

// 3. İstifadəçidən dairənin perimetri və kvadratın perimetri soruş və belə bir dairənin göstərilən
// kvadrata sığacağını müəyyənləşdir.

// const diameter = Number(prompt("Enter diameter of circle:"));
// const width = Number(prompt("Enter widht/height of square:"));

// if (diameter <= width) {
//   alert("True");
// } else {
//   alert("False");
// }

// 4. İstifadəçiyə 3 sual ver, hər bir sual üç cavab variantı ilə. Hər doğru cavab üçün 2 bal verilir.
// Suallardan sonra istifadəçiyə qazanılan bələdçi balı göstər.
// const firstQuestion = prompt(
//   "Azərbaycanin paytaxti hansidir?\nA)Bakı\nB)Şəki\nC)Astara"
// );
// const secondQuestion = prompt("Göyqurşağında neçə rəng var?\nA)8\nB)5\nC)7");
// const thirdQuestion = prompt("Əlifbanın ilk hərfi:\nA)z\nB)a\nC)q");
// const totalPoints = 0;

// if (firstQuestion == "A") totalPoints += 2;
// if (secondQuestion == "C") totalPoints += 2;
// if (thirdQuestion == "B") totalPoints += 2;
// alert(totalPoints);

// 5. Tarixi soruş (gün, ay, il) və onun ardınca gələn tarixi göstər. Növbəti ay, il və ya dövr
// keçidini nəzərə alın, həmçinin dövr varlığını.

// let year = Number(prompt("Enter Year:"));
// let day = Number(prompt("Enter Day:"));
// let month = Number(prompt("Enter Month:"));

// console.log("year :>> ", year, typeof year);

// if (year % 4 === 0) {
//   if (day === 31 || month === 12) {
//     alert(`${(year += 1)}-01-01`);
//   }
//   if (
//     day === 31 &&
//     (month === 1 ||
//       month === 3 ||
//       month === 5 ||
//       month === 7 ||
//       month === 8 ||
//       month === 10)
//   ) {
//     alert(`${year}-${(month += 1)}-01`);
//   }
//   if (
//     day === 30 &&
//     (month === 4 || month === 6 || month === 9 || month === 11)
//   ) {
//     alert(`${year}-${(month += 1)}-01`);
//   }
//   if (day === 29 && month === 2) {
//     alert(`${year}-${(month += 1)}-01`);
//   } else {
//     alert(`${year}-${month}-${(day += 1)}`);
//   }
// } else {
//   if (day === 31 || month === 12) {
//     alert(`${(year += 1)}-01-01`);
//   }
//   if (
//     day === 31 &&
//     (month === 1 ||
//       month === 3 ||
//       month === 5 ||
//       month === 7 ||
//       month === 8 ||
//       month === 10)
//   ) {
//     alert(`${year}-${(month += 1)}-01`);
//   }
//   if (
//     day === 30 &&
//     (month === 4 || month === 6 || month === 9 || month === 11)
//   ) {
//     alert(`${year}-${(month += 1)}-01`);
//   }
//   if (day === 28 && month === 2) {
//     alert(`${year}-${(month += 1)}-01`);
//   } else {
//     alert(`${year}-${month}-${(day += 1)}`);
//   }
// }

// 6. Həftə gününün çıxışını dövrə salın: "Həftə günü. Növbəti günü görmək istəyirsiniz?" və
//  istifadəçi OK düyməsini basana qədər belə davam edir.
// const d = new Date();
// let day = d.getDay();
// if (day === 0) day = 7;
// else day += 1;

// for (let i = 0; i < Infinity; i++) {
//   let click = prompt(`${day} gun.Növbəti günü görmək istəyirsiniz?`);
//   console.log(click, typeof click);
//   if (click == null) {
//     break;
//   }

//   if (day === 7) day = 1;
//   else day += 1;
// }

//  7. Bütün 2-dən 9-a qədər rəqəmlərin vurma cədvəlini göstərin. Hər rəqəmi 1-dən 10-a qədər
//  rəqəmlərlə vurun.

// for (let i = 2; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Avtomobil haqqında məlumatları təsvir edən obyekt yaradın (istehsalçı, model, buraxılış ili,
//     orta sürət), və bu obyekt ilə işləmək üçün aşağıdakı funksiyaları yaradın.
//     1. Avtomobil haqqında məlumatları ekrana çıxaran funksiya.
//     2. Verilən məsafəni orta sürətlə qət edərkən lazım olan zamanı hesablamaq üçün funksiya
//     yaradın. Sürət əsasında hər 4 saatda bir sürücünün 1 saatlik istirahət etməsinin vacib
//     olduğunu nəzərə alın.

// class Car {
//   model;
//   year;
//   vendor;
//   constructor(model, vendor, year) {
//     this.model = model;
//     this.vendor = vendor;
//     this.year = year;
//   }
//   info() {
//     return `Vendor: ${vendor} Model: ${model} Year: ${year}`;
//   }
//   timeCalculator(distance, speed) {
//     let time = distance / speed;
//     if (time < 4) {
//       return time;
//     }
//     if (time === 4) {
//       return (time += 1);
//     }
//     if (time > 4) {
//       let breaks = time / 4 - (time % 4);
//       return (time += breaks);
//     }
//   }
// }
