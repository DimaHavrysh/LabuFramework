"use strict";
function calculateIceCreamCost() {
    var _a, _b, _c;
    const size = (_a = prompt("Оберіть розмір морозива: маленький (10грн) або великий (25грн)")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    let cost = 0;
    if (size === "маленький") {
        cost += 10;
    }
    else if (size === "великий") {
        cost += 25;
    }
    else {
        alert("Неправильний розмір! Будь ласка, виберіть маленький або великий.");
        return;
    }
    const toppings = (_b = prompt("Оберіть начинку(ки) для морозива: шоколад (+5грн), карамель (+6грн), ягоди (+10грн). Можете обрати кілька, розділяйте комами.")) === null || _b === void 0 ? void 0 : _b.toLowerCase().split(',');
    if (toppings && toppings.length > 0) {
        toppings.forEach(topping => {
            const trimmedTopping = topping.trim();
            switch (trimmedTopping) {
                case "шоколад":
                    cost += 3;
                    break;
                case "карамель":
                    cost += 8;
                    break;
                case "ягоди":
                    cost += 12;
                    break;
                default:
                    alert(`Начинка "${trimmedTopping}" недоступна. Її не буде додано.`);
            }
        });
    }
    else {
        alert("Ви повинні обрати хоча б одну начинку.");
        return;
    }
    const addMarshmallow = (_c = prompt("Хочете додати маршмелоу за додаткові 5грн? (так/ні)")) === null || _c === void 0 ? void 0 : _c.toLowerCase();
    if (addMarshmallow === "так") {
        cost += 5;
    }
    alert(`Вартість вашого морозива складає: ${cost} грн.`);
}
calculateIceCreamCost();
