// If else
// Agar xavo yomg'irli bo'lsa kurs o'tmaymiz, aks holda dars bo'ladi
// let weather = prompt("Xavo qanday?");
// if (weather === "yomg'ir") {
//   console.log("Bugun kurs o'tmaymiz");
// } else {
//   console.log("Kurs o'tamiz");
// }

// 2ta shartli if
// Agar o'quvchi 5 bahoga loyiq bo'lsa rag'batlantiring qo'ying, 4 yoki 3 baho bo'lsa jazolang, aks holda haydavoring
// let check = prompt("O'quvchi nechi bahoga loyiq dars qildi");
// if (check == 5) {
//   console.log("Juda zo'r, malades");
// } else if (check == 4 || check == 3) {
//   console.log("Siz bilan ko'proq shug'ullanamiz");
// } else {
//   console.log("Siz guruhdan chetlatildingiz");
// }

// Sizga berilgan sonni 3 va 5 ga bo'linishini tekshiring
// let number = prompt("Istalgan son kiriting");
// if (number % 3 === 0 && number % 5 === 0) {
//   console.log("Bu son 3 va 5ga bo'linadi");
// } else {
//   console.log("BU son bo'linmaydi");
// }

// Son juft yoki toqligini aniqlang
// let num = prompt("Son kiriting");
// if (num % 2 === 1) {
//   console.log("Bu toq son");
// } else {
//   console.log("Bu juft son");
// }

// Switch Case -> ko'p shartlar uchun
// Hafta kunini toping
// QOIDA! -> prompt doim STRING qaytaradi
let day = prompt("Bugun haftaning qaysi kuni?");
console.log(day);
switch (Number(day)) {
  case 1:
    console.log("Dushanba");
    break;
  case 2:
    console.log("Seshanba");
    break;
  case 3:
    console.log("Chorshanba");
    break;
  case 4:
    console.log("Payshanba");
    break;
  case 5:
    console.log("Juma");
    break;
  case 6:
    console.log("Shanba");
    break;
  case 7:
    console.log("Yakshanba");
    break;
  default:
    console.log("Bizning yer sayyorasida 7ta hafta bor holos");
}