const sqlCommands = [
    {
        command: "SELECT",
        description: "Wählt Daten aus einer Tabelle aus.",
        example: "SELECT * FROM kunden WHERE plz = '12345';",
        task: "Erstelle eine Abfrage, die alle Kunden mit einer Postleitzahl größer als '50000' ausgibt.",
        solution: /SELECT \* FROM kunden WHERE plz > '50000';/i
    },
    {
        command: "FROM",
        description: "Gibt die Tabelle an, aus der Daten abgefragt werden.",
        example: "SELECT name FROM kunden;",
        task: "Zeige alle Kunden aus der Tabelle 'kunden'.",
        solution: /SELECT \* FROM kunden;/i
    },
    {
        command: "WHERE",
        description: "Filtert Datensätze basierend auf einer Bedingung.",
        example: "SELECT * FROM kunden WHERE plz = '12345';",
        task: "Finde alle Kunden mit der Postleitzahl '12345'.",
        solution: /SELECT \* FROM kunden WHERE plz = '12345';/i
    },
    {
        command: "GROUP BY",
        description: "Gruppiert Datensätze, die dieselben Werte in einer oder mehreren Spalten haben.",
        example: "SELECT COUNT(*), plz FROM kunden GROUP BY plz;",
        task: "Zähle, wie viele Kunden es in jeder Postleitzahl gibt.",
        solution: /SELECT COUNT\(\*\), plz FROM kunden GROUP BY plz;/i
    },
    {
        command: "HAVING",
        description: "Filtert Gruppen nach einer Bedingung, ähnlich wie WHERE für Gruppen.",
        example: "SELECT plz, COUNT(*) FROM kunden GROUP BY plz HAVING COUNT(*) > 5;",
        task: "Zeige alle Postleitzahlen mit mehr als 5 Kunden.",
        solution: /SELECT plz, COUNT\(\*\) FROM kunden GROUP BY plz HAVING COUNT\(\*\) > 5;/i
    },
    {
        command: "CREATE TABLE",
        description: "Erstellt eine neue Tabelle in der Datenbank.",
        example: "CREATE TABLE kunden (id INT, name VARCHAR(100));",
        task: "Erstelle eine Tabelle für 'bestellungen' mit den Spalten 'bestell_id', 'kunde_id' und 'betrag'.",
        solution: /CREATE TABLE bestellungen \(bestell_id INT, kunde_id INT, betrag DECIMAL\)/i
    },
    {
        command: "DELETE",
        description: "Löscht Datensätze aus einer Tabelle.",
        example: "DELETE FROM kunden WHERE plz = '12345';",
        task: "Lösche alle Kunden mit der Postleitzahl '12345'.",
        solution: /DELETE FROM kunden WHERE plz = '12345';/i
    },
    {
        command: "LIKE",
        description: "Sucht nach einem Muster in einer Spalte.",
        example: "SELECT * FROM kunden WHERE name LIKE 'J%';",
        task: "Zeige alle Kunden, deren Namen mit 'J' beginnen.",
        solution: /SELECT \* FROM kunden WHERE name LIKE 'J%';/i
    },
    {
        command: "AND/OR/IN",
        description: "Verbindet mehrere Bedingungen.",
        example: "SELECT * FROM kunden WHERE plz = '12345' AND name = 'John';",
        task: "Zeige alle Kunden mit der Postleitzahl '12345' und dem Namen 'John'.",
        solution: /SELECT \* FROM kunden WHERE plz = '12345' AND name = 'John';/i
    },
    {
        command: "INSERT INTO",
        description: "Fügt neue Datensätze in eine Tabelle ein.",
        example: "INSERT INTO kunden (id, name, plz) VALUES (1, 'John Doe', '12345');",
        task: "Füge einen neuen Kunden mit ID 1, dem Namen 'Jane Doe' und der Postleitzahl '54321' hinzu.",
        solution: /INSERT INTO kunden \(id, name, plz\) VALUES \(1, 'Jane Doe', '54321'\);/i
    },
    {
        command: "UPDATE SET",
        description: "Aktualisiert bestehende Datensätze.",
        example: "UPDATE kunden SET name = 'John Smith' WHERE id = 1;",
        task: "Ändere den Namen des Kunden mit ID 1 in 'John Smith'.",
        solution: /UPDATE kunden SET name = 'John Smith' WHERE id = 1;/i
    },
    {
        command: "AVG",
        description: "Berechnet den Durchschnitt von Werten.",
        example: "SELECT AVG(betrag) FROM bestellungen;",
        task: "Berechne den Durchschnitt des Betrags aller Bestellungen.",
        solution: /SELECT AVG\(betrag\) FROM bestellungen;/i
    },
    {
        command: "MAX/MIN",
        description: "Gibt den höchsten/niedrigsten Wert in einer Spalte zurück.",
        example: "SELECT MAX(betrag) FROM bestellungen;",
        task: "Finde den höchsten Bestellbetrag.",
        solution: /SELECT MAX\(betrag\) FROM bestellungen;/i
    },
    {
        command: "NOW",
        description: "Gibt das aktuelle Datum und die Uhrzeit zurück.",
        example: "SELECT NOW();",
        task: "Zeige das aktuelle Datum und die Uhrzeit.",
        solution: /SELECT NOW\(\);/i
    },
    {
        command: "SUM",
        description: "Berechnet die Summe der Werte in einer Spalte.",
        example: "SELECT SUM(betrag) FROM bestellungen;",
        task: "Berechne die Summe des Betrags aller Bestellungen.",
        solution: /SELECT SUM\(betrag\) FROM bestellungen;/i
    },
    {
        command: "YEAR",
        description: "Extrahiert das Jahr aus einem Datum.",
        example: "SELECT YEAR(bestelldatum) FROM bestellungen;",
        task: "Zeige das Jahr des Bestelldatums für alle Bestellungen.",
        solution: /SELECT YEAR\(bestelldatum\) FROM bestellungen;/i
    },
    {
        command: "COUNT",
        description: "Zählt die Anzahl der Datensätze.",
        example: "SELECT COUNT(*) FROM kunden;",
        task: "Zähle alle Kunden in der Tabelle.",
        solution: /SELECT COUNT\(\*\) FROM kunden;/i
    }
];


// Anzeige der SQL-Befehle
const commandList = document.getElementById("command-list");

sqlCommands.forEach(command => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${command.command.toLowerCase()}`;
    link.classList.add("text-indigo-600", "cursor-pointer");
    link.textContent = command.command;

    link.addEventListener("click", () => showCommandDetails(command));

    li.appendChild(link);
    commandList.appendChild(li);
});

// Zeige die Details des ausgewählten Befehls
function showCommandDetails(command) {
    const commandDetails = document.getElementById("command-details");
    const taskContainer = document.getElementById("task-container");
    const taskText = document.getElementById("task-text");

    commandDetails.classList.remove("hidden");
    taskContainer.classList.remove("task-container");

    commandDetails.innerHTML = `
        <h2 class="text-3xl font-bold text-indigo-700">${command.command}</h2>
        <p class="mt-4 text-gray-700">${command.description}</p>
        <h3 class="text-xl font-semibold mt-6">Beispiel:</h3>
        <pre class="bg-gray-100 p-4 rounded-md mt-4 border-l-4 border-indigo-600 text-sm text-gray-800">${command.example}</pre>
    `;

    taskText.textContent = command.task;
    taskText.dataset.solution = command.solution;
}

// Prüfe die Eingabe des Nutzers
function checkSQLInput() {
    const userQuery = document.getElementById("sql-input").value.trim();
    const solution = document.getElementById("task-text").dataset.solution;
    const feedback = document.getElementById("feedback");

    const correctSolution = new RegExp(solution);

    if (correctSolution.test(userQuery)) {
        feedback.textContent = "Richtig! Deine SQL-Abfrage ist korrekt.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Falsch. Bitte versuche es erneut.";
        feedback.style.color = "red";
    }
}
