function calculateIceCreamCost(): void {
    // Запит розміру морозива
    const size = prompt("Оберіть розмір морозива: маленький (10грн) або великий (25грн)")?.toLowerCase();
    let cost = 0;

    // Встановлення базової вартості залежно від розміру
    if (size === "маленький") {
        cost += 10;
    } else if (size === "великий") {
        cost += 25;
    } else {
        alert("Неправильний розмір! Будь ласка, виберіть маленький або великий.");
        return;
    }

    // Запит начинок
    const toppings = prompt("Оберіть начинку(ки) для морозива: шоколад (+5грн), карамель (+6грн), ягоди (+10грн). Можете обрати кілька, розділяйте комами.")?.toLowerCase().split(',');

    // Перевірка, що хоча б одна начинка обрана
    if (toppings && toppings.length > 0) {
        toppings.forEach(topping => {
            const trimmedTopping = topping.trim();
            switch (trimmedTopping) {
                case "шоколад":
                    cost += 5;
                    break;
                case "карамель":
                    cost += 6;
                    break;
                case "ягоди":
                    cost += 10;
                    break;
                default:
                    alert(`Начинка "${trimmedTopping}" недоступна. Її не буде додано.`);
            }
        });
    } else {
        alert("Ви повинні обрати хоча б одну начинку.");
        return;
    }

    // Запит додаткової опції маршмелоу
    const addMarshmallow = prompt("Хочете додати маршмелоу за додаткові 5грн? (так/ні)")?.toLowerCase();
    if (addMarshmallow === "так") {
        cost += 5;
    }

    // Виведення остаточної вартості
    alert(`Вартість вашого морозива складає: ${cost} грн.`);
}

// Виклик функції для розрахунку вартості морозива
calculateIceCreamCost();
