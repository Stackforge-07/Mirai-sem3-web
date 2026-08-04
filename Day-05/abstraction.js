class BankAccount {
    owner;
    #balance;
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }
  display(){
    console.log(this.#balance);
    
  }
}

const account = new BankAccount("Vikas", 1000);

account.deposit(500);

account.display(); // 1500
// account.#balance=10000;
account.balance=10000;//public me alag se banayega
console.log(account.balance);

account.display();


