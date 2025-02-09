// SQL-Befehle und ihre Details
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
    }
];

// Anzeige der SQL-Befehle
const commandList = document.getElementById("command-list");

sqlCommands.forEach(command => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${command.command.toLowerCase()}`;
    link.classList.add("text-indigo-600");
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
