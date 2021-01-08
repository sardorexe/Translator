let kiril = ["ю", "Ю", "я", "Я", "ё", "Ё", "ш", "Ш", "ч", "Ч", "ў", "Ў",
    "қ", "Қ", "ғ", "Ғ", "ц", "Ц", "й", "Й", "у", "У", "к", "К",
    "е", "Е", "н", "Н", "г", "Г", "щ", "Щ", "з", "З", "х", "Х",
    "э", "Э", "ж", "Ж", "д", "Д", "л", "Л", "о", "О", "р", "Р",
    "п", "П", "а", "А", "в", "В", "ф", "Ф", "с", "С", "м", "М",
    "и", "И", "т", "Т", "б", "Б", "қ", "Қ", "ҳ", "Ҳ", "ғ", "Ғ", "ъ", "ь", "к", "К"];

let lot = ["yu", "Yu", "ya", "Ya", "yo", "Yo", "sh", "Sh", "ch", "Ch", "o'", "O'",
    "q", "Q", "g'", "G'", "ts", "Ts", "y", "Y", "u", "U", "k", "K", "e", "E",
    "n", "N", "g", "G", "sh", "Sh", "z", "Z", "x", "X", "e", "E", "j", "J",
    "d", "D", "l", "L", "o", "O", "r", "R", "p", "P", "a", "A", "v", "V", "f",
    "F", "s", "S", "m", "M", "i", "I", "t", "T", "b", "B", "q", "Q", "h", "H",
    "g'", "G'", "`", "'", "c", "C"];

let kirilChanger = document.getElementById("kirilChanger");
let lotinChanger = document.getElementById("lotinChanger");

kirilChanger.addEventListener("click", function () {
    let area = document.getElementById("text-area").value;
    for (i = 0; i < kiril.length; i++) {
        area = area.replaceAll(lot[i], kiril[i]);
    }
    document.getElementById("text-area").value = area;
})

lotinChanger.addEventListener("click", function () {
    let area = document.getElementById("text-area").value;
    for (i = 0; i < lot.length; i++) {
        area = area.replaceAll(kiril[i], lot[i]);
    }
    document.getElementById("text-area").value = area;
})