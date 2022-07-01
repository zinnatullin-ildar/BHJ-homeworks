// Задание 5.2

const interestChoice = document.querySelectorAll(".interests_active");

for (const item of interestChoice) {
    const inputInterest = item.closest("li").querySelector("input");

    inputInterest.addEventListener("change", () => {
        const interest = item.querySelectorAll("input");
        for (const value of interest) {
            if (inputInterest.checked === true) {
                value.checked = true;
            } else {
                value.checked = false;
            }
        }
    });
}