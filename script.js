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
        description: "Fasst Datensätze basierend auf einer oder mehreren Spalten zusammen.",
        example: "SELECT plz, COUNT(*) FROM kunden GROUP BY plz;",
        task: "Zähle, wie viele Kunden es pro Postleitzahl gibt.",
        solution: /SELECT plz, COUNT\(\*\) FROM kunden GROUP BY plz;/i
    },
    {
        command: "HAVING",
        description: "Filtern von Gruppen, die durch GROUP BY erstellt wurden.",
        example: "SELECT plz, COUNT(*) FROM kunden GROUP BY plz HAVING COUNT(*) > 10;",
        task: "Zeige nur Postleitzahlen, bei denen mehr als 10 Kunden existieren.",
        solution: /SELECT plz, COUNT\(\*\) FROM kunden GROUP BY plz HAVING COUNT\(\*\) > 10;/i
    },
    {
        command: "CREATE TABLE",
        description: "Erstellt eine neue Tabelle in der Datenbank.",
        example: "CREATE TABLE kunden (id INT, name VARCHAR(100), plz VARCHAR(10));",
        task: "Erstelle eine Tabelle namens 'bestellungen' mit den Spalten 'id', 'kunde_id', und 'betrag'.",
        solution: /CREATE TABLE bestellungen \(id INT, kunde_id INT, betrag DECIMAL\(10, 2\)\);/i
    },
    {
        command: "DELETE",
        description: "Löscht Daten aus einer Tabelle.",
        example: "DELETE FROM kunden WHERE plz = '12345';",
        task: "Lösche alle Kunden aus der Tabelle 'kunden', die eine Postleitzahl von '12345' haben.",
        solution: /DELETE FROM kunden WHERE plz = '12345';/i
    },
    {
        command: "LIKE",
        description: "Verwendet Platzhalter, um Datensätze zu suchen, die ein Muster enthalten.",
        example: "SELECT * FROM kunden WHERE name LIKE 'A%';",
        task: "Zeige alle Kunden, deren Namen mit 'M' beginnen.",
        solution: /SELECT \* FROM kunden WHERE name LIKE 'M%';/i
    },
    {
        command: "AND / OR",
        description: "Verwendet logische Operatoren, um mehrere Bedingungen zu kombinieren.",
        example: "SELECT * FROM kunden WHERE plz = '12345' AND name LIKE 'M%';",
        task: "Zeige alle Kunden aus der Postleitzahl '12345', deren Namen mit 'A' beginnen.",
        solution: /SELECT \* FROM kunden WHERE plz = '12345' AND name LIKE 'A%';/i
    },
    {
        command: "IN",
        description: "Prüft, ob ein Wert in einer Liste von Werten enthalten ist.",
        example: "SELECT * FROM kunden WHERE plz IN ('12345', '67890');",
        task: "Zeige alle Kunden, deren Postleitzahl '12345' oder '67890' ist.",
        solution: /SELECT \* FROM kunden WHERE plz IN \('12345', '67890'\);/i
    },
    {
        command: "INSERT INTO",
        description: "Fügt neue Datensätze in eine Tabelle ein.",
        example: "INSERT INTO kunden (id, name, plz) VALUES (1, 'Max Mustermann', '12345');",
        task: "Füge einen neuen Kunden mit den folgenden Daten ein: id=3, name='Anna Müller', plz='98765'.",
        solution: /INSERT INTO kunden \(id, name, plz\) VALUES \(3, 'Anna Müller', '98765'\);/i
    },
    {
        command: "UPDATE SET",
        description: "Aktualisiert Daten in einer Tabelle.",
        example: "UPDATE kunden SET plz = '54321' WHERE id = 1;",
        task: "Ändere die Postleitzahl des Kunden mit der ID 2 auf '67890'.",
        solution: /UPDATE kunden SET plz = '67890' WHERE id = 2;/i
    },
    {
        command: "AVG",
        description: "Berechnet den Durchschnittswert einer Spalte.",
        example: "SELECT AVG(betrag) FROM bestellungen;",
        task: "Berechne den durchschnittlichen Bestellbetrag in der Tabelle 'bestellungen'.",
        solution: /SELECT AVG\(betrag\) FROM bestellungen;/i
    },
    {
        command: "MAX",
        description: "Gibt den größten Wert einer Spalte zurück.",
        example: "SELECT MAX(betrag) FROM bestellungen;",
        task: "Finde den höchsten Bestellbetrag in der Tabelle 'bestellungen'.",
        solution: /SELECT MAX\(betrag\) FROM bestellungen;/i
    },
    {
        command: "MIN",
        description: "Gibt den kleinsten Wert einer Spalte zurück.",
        example: "SELECT MIN(betrag) FROM bestellungen;",
        task: "Finde den niedrigsten Bestellbetrag in der Tabelle 'bestellungen'.",
        solution: /SELECT MIN\(betrag\) FROM bestellungen;/i
    },
    {
        command: "NOW",
        description: "Gibt das aktuelle Datum und die aktuelle Uhrzeit zurück.",
        example: "SELECT NOW();",
        task: "Zeige das aktuelle Datum und die Uhrzeit an.",
        solution: /SELECT NOW\(\);/i
    },
    {
        command: "SUM",
        description: "Berechnet die Summe der Werte in einer Spalte.",
        example: "SELECT SUM(betrag) FROM bestellungen;",
        task: "Berechne den Gesamtbetrag aller Bestellungen in der Tabelle 'bestellungen'.",
        solution: /SELECT SUM\(betrag\) FROM bestellungen;/i
    },
    {
        command: "YEAR",
        description: "Extrahiert das Jahr aus einem Datumswert.",
        example: "SELECT YEAR(geburtsdatum) FROM kunden;",
        task: "Zeige das Geburtsjahr jedes Kunden aus der Tabelle 'kunden'.",
        solution: /SELECT YEAR\(geburtsdatum\) FROM kunden;/i
    },
    {
        command: "COUNT",
        description: "Zählt die Anzahl der Datensätze in einer Tabelle.",
        example: "SELECT COUNT(*) FROM kunden;",
        task: "Zähle, wie viele Kunden es in der Tabelle 'kunden' gibt.",
        solution: /SELECT COUNT\(\*\) FROM kunden;/i
    },
    {
        command: "JOIN",
        description: "Verbindet zwei oder mehr Tabellen basierend auf einer gemeinsamen Spalte.",
        example: "SELECT kunden.name, bestellungen.betrag FROM kunden JOIN bestellungen ON kunden.id = bestellungen.kunde_id;",
        task: "Verbinde die Tabellen 'kunden' und 'bestellungen', um die Namen der Kunden und deren Bestellbeträge zu erhalten.",
        solution: /SELECT kunden.name, bestellungen.betrag FROM kunden JOIN bestellungen ON kunden.id = bestellungen.kunde_id;/i
    }
];
