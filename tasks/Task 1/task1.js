const computeDebt = (n) => {
    if (n < 0 || n > 100) {
        throw new Error("Please enter a number between 0 and 100.");
    }

    let debt = 100000;

    for (let i = 0; i < n; i++) {
        // Calculate the new debt amount after applying a 5% increase
        debt *= 1.05;

        debt = Math.ceil(debt / 1000) * 1000;
    }
    return debt;
};

const result = (input) => {
    try {
        const finalDebt = computeDebt(input);
        console.log(`Amount of debt after ${input} months: ${finalDebt}`);
    } catch (error) {
        console.error(error.message);
    }
}

const input = 6;
result(input);
//Amount of debt after 6 months: 137000
