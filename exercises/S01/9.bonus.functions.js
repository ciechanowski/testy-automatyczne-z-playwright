// npm run es1e9


// Przykład – Przekazywanie funkcji jako parametru

// Definicja funkcji, którą chcemy przekazać
function sayHello() {
	console.log('Cześć!');
}
// Funkcja przyjmująca inną funkcję jako parametr
function executer(actionFunction) {
	console.log('Zaraz wywołam funkcję przekazaną w parametrze:');
	actionFunction(); // wywołanie przekazanej funkcji
}
// Wywołanie
executer(sayHello);


// Przykład – Funkcje anonimowe jako parametry

function executer(actionFunction) {
  console.log("Zaraz wywołam przekazaną funkcję:");
  actionFunction();
}
// Przekazujemy funkcję anonimową
executer(function () {
  console.log("Funkcja anonimowa mówi: Cześć!");
});
// Możemy też użyć arrow function (skrócona składnia w JavaScript)
executer(() => {
  console.log("Arrow function mówi: Hej!");
});


// Przykład – Zwracanie funkcji z innej funkcji

function createGreeter(name) {
  return function () {
    console.log("Cześć, jestem " + name);
  };
}

const greeterA = createGreeter("Ania");
const greeterB = createGreeter("Bartek");

greeterA(); // Cześć, jestem Ania
greeterB(); // Cześć, jestem Bartek


//Przykład – Wywołanie funkcji jako parametru w kodzie asynchronicznym

// Funkcja symulująca pobieranie danych z serwera
function fetchData(callback) {

  console.log("Rozpoczynam pobieranie danych...");

  // Symulujemy opóźnienie np. 2 sekundy
  setTimeout(() => {
    const data = { id: 123, name: "Test user" };
    console.log("Dane pobrane!");

    // Po pobraniu danych wywołujemy przekazaną funkcję (callback)
    callback(data);
  }, 2000);
}

// Funkcja, która zostanie przekazana jako callback
function processData(data) {
  console.log("Otrzymane dane:", data);
  // Tutaj możesz przetwarzać pobrane dane, np. wyświetlić je w interfejsie
}

// Użycie:
fetchData(processData);
console.log("Program działa dalej...");

// fetchData(processData)
//         │
//         ├── console.log("Rozpoczynam pobieranie danych...")
//         │
//         ├── setTimeout(..., 2000)  ← ustawienie timera
//         │
//         └── funkcja kończy się od razu
//                  │
//                  │ (po 2 sekundach)
//                  ▼
//         callback(data)
//                  │
//                  ▼
//         processData(data)
//                  │
//                  ▼
//         console.log("Otrzymane dane:", data)


// Czym jest closure (domknięcie)?

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Aktualna wartość licznika: " + count);
  };
}

const myCounter = createCounter();

// Mimo że createCounter się wykonało i teoretycznie zmienna count
// nie powinna być już dostępna, to closure sprawia,
// że "myCounter" wciąż ma do niej dostęp.
myCounter(); // Aktualna wartość licznika: 1
myCounter(); // Aktualna wartość licznika: 2


// Przykład – Funkcja zwracająca inną funkcję (z wykorzystaniem domknięcia)

function createLogger(prefix) {

  // Zwracamy nową funkcję
  return function (message) {
    console.log(prefix + ": " + message);
  };
}

// Tworzymy dwie różne funkcje-loggery
const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");

// Użycie
infoLogger("To jest wiadomość informacyjna");
infoLogger("To jest nowa wiadomość");
errorLogger("To jest komunikat o błędzie");
