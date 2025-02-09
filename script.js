const sqlCommands = [
    { command: "SELECT", description: "Wählt Daten aus einer Tabelle aus.", example: "SELECT * FROM kunden WHERE plz = '12345';", task: "Finde alle Kunden mit der Postleitzahl '12345'.", solution: "SELECT * FROM kunden WHERE plz = '12345';" },
    { command: "FROM", description: "Gibt die Tabelle an, aus der Daten abgefragt werden.", example: "SELECT name FROM kunden;", task: "Zeige alle Kunden aus der Tabelle 'kunden'.", solution: "SELECT * FROM kunden;" },
    // Weitere SQL-Befehle hier hinzufügen...
];

// Dynamisch SQL-Befehle anzeigen
const commandList = document.getElementById("command-list");
sqlCommands.forEach(command => {
    const commandCard = document.createElement("div");
    commandCard.classList.add("command-card");
    commandCard.innerHTML = `
        <h3>${command.command}</h3>
        <p><strong>Beschreibung:</strong> ${command.description}</p>
        <button onclick="showCommandDetails('${command.command}')">Details anzeigen</button>
    `;
    commandList.appendChild(commandCard);
});

// Zeigt die Detailansicht des Befehls
function showCommandDetails(commandName) {
    const command = sqlCommands.find(c => c.command === commandName);
    const commandDetails = document.getElementById("command-details");

    commandDetails.innerHTML = `
        <h2>${command.command}</h2>
        <p><strong>Beschreibung:</strong> ${command.description}</p>
        <h3>Beispiel:</h3>
        <pre>${command.example}</pre>
        <h3>Aufgabe:</h3>
        <p>${command.task}</p>
        <button onclick="showSolution('${command.solution}')">Zeige Lösung</button>
    `;

    commandDetails.style.display = "block";
}

// Zeigt die Lösung der Aufgabe
function showSolution(solution) {
    alert("Lösung: " + solution);
}
