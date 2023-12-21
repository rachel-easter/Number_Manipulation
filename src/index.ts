class Bank {
  private balanceA: number;
  private balanceB: number;
  private balanceC: number;

  constructor() {
    // Initialize balances for each bank
    this.balanceA = 1000;
    this.balanceB = 1500;
    this.balanceC = 2000;
  }

  getBalance(bank: string): number {
    // Return the balance based on the specified bank
    switch (bank.toUpperCase()) {
      case 'A':
        return this.balanceA;
      case 'B':
        return this.balanceB;
      case 'C':
        return this.balanceC;
      default:
        throw new Error('Invalid bank specified');
    }
  }

  addToBalance(bank: string, amount: number): void {
    // Add the specified amount to the balance of the specified bank
    switch (bank.toUpperCase()) {
      case 'A':
        this.balanceA += amount;
        break;
      case 'B':
        this.balanceB += amount;
        break;
      case 'C':
        this.balanceC += amount;
        break;
      default:
        throw new Error('Invalid bank specified');
    }
  }
}


function checkFascinatingNumber() {
  const numberInput = document.getElementById('numberInput') as HTMLInputElement;
  const bankTypeInput = document.getElementById('bankTypeInput') as HTMLInputElement;
  const resultMessageDiv = document.getElementById('resultMessage') as HTMLDivElement;

  const userInput = numberInput.value.trim();
  const bankType = bankTypeInput.value.trim().toUpperCase();

  if (userInput.length !== 3 || isNaN(parseInt(userInput)) || !(bankType === 'A' || bankType === 'B' || bankType === 'C')) {
    resultMessageDiv.innerHTML = 'Please enter a valid 3-digit number and bank type.';
    return;
  }

  const number = parseInt(userInput);
  const fascinatingResult = isFascinatingNumber(number);
  const bankTool = new Bank();
  const initialBalance = bankTool.getBalance(bankType);

  if (fascinatingResult) {
    const additionalAmount = 500;
    bankTool.addToBalance(bankType, additionalAmount);
    const newBalance = initialBalance + additionalAmount;
    resultMessageDiv.innerHTML = `Congratulations! You are the lucky user.<br>Initial balance in Bank ${bankType}: $${initialBalance}<br>Additional amount added: $${additionalAmount}<br>New balance: $${newBalance}`;
  } else {
    resultMessageDiv.innerHTML = `You're not a lucky user. Your Bank ${bankType} balance is: $${initialBalance}`;
  }
}

function isFascinatingNumber(number: number): boolean {
  const concatenatedResult = `${number}${number * 2}${number * 3}`;
  const uniqueDigits = new Set(concatenatedResult.split(''));

  return uniqueDigits.size === 9;
}
