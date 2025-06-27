const t12Months = document.getElementById("12-months");
const t6Months = document.getElementById("6-months");
const t3Months = document.getElementById("3-months");

t12Months.addEventListener("change", () => setPrice(120, 120, 150));
t6Months.addEventListener("change", () => setPrice(130, 130, 180));
t3Months.addEventListener("change", () => setPrice(135, 135, 200))

function setPrice(plan1, plan2, plan3) {

    plan1 = "$" + plan1 + "/month";
    plan2 = "$" + plan2 + "/month";
    plan3 = "$" + plan3 + "/month";

    const fitnessPrice1 = document.getElementById("fitness-price1");
    const fitnessPrice2 = document.getElementById("fitness-price2");

    fitnessPrice1.innerHTML = plan1;
    fitnessPrice2.innerHTML = plan1;

    const nutritionPrice1 = document.getElementById("nutrition-price1");
    const nutritionPrice2 = document.getElementById("nutrition-price2");

    nutritionPrice1.innerHTML = plan2;
    nutritionPrice2.innerHTML = plan2;

    const comboPrice1 = document.getElementById("combo-price1");
    const comboPrice2 = document.getElementById("combo-price2");

    comboPrice1.innerHTML = plan3;
    comboPrice2.innerHTML = plan3;
}

setPrice(135, 135, 200);