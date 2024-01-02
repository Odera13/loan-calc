document.addEventListener("DOMContentLoaded", function () {
  const loanAmountInput = document.getElementById("loanAmount");
  const interestRateInput = document.getElementById("interestRate");
  const repaymentPeriodInput = document.getElementById("repaymentPeriod");
  const calculateButton = document.getElementById("calculateButton");
  const monthlyRepaymentOutput = document.getElementById("monthlyRepayment");
  const totalRepaymentOutput = document.getElementById("totalRepayment");
  const interestAmountOutput = document.getElementById("interestAmount");

  calculateButton.addEventListener("click", calculateLoan);

  function formatNumberWithCommas(number) {
    // Convert the number to a string
    const numberString = number.toString();

    // Split the string into integer and decimal parts (if any)
    const parts = numberString.split(".");

    // Add commas to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Join the integer and decimal parts (if any) with a period (.)
    return parts.join(".");
  }

  function calculateLoan() {
    const loanAmount = parseFloat(loanAmountInput.value);
    const interestRate = parseFloat(interestRateInput.value) / 100;
    const repaymentPeriod = parseInt(repaymentPeriodInput.value);

    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -repaymentPeriod));
    const totalRepayment = monthlyPayment * repaymentPeriod;
    const interestAmount = totalRepayment - loanAmount;

    monthlyRepaymentOutput.textContent = formatNumberWithCommas(
      monthlyPayment.toFixed(2)
    );
    totalRepaymentOutput.textContent = formatNumberWithCommas(
      totalRepayment.toFixed(2)
    );
    interestAmountOutput.textContent = formatNumberWithCommas(
      interestAmount.toFixed(2)
    );
  }
});
