-- ============================================================
--  Basi di Dati Relazionali e SQL
--  Script di creazione e popolamento delle tabelle
--  usate negli esempi delle slide
-- ============================================================


-- ------------------------------------------------------------
--  1. TABELLE USATE NELLE SLIDE SUL MODELLO RELAZIONALE
--     (Studenti e Corsi)
-- ------------------------------------------------------------

CREATE TABLE Corsi (
    ID_Corso    VARCHAR(10)  PRIMARY KEY,
    Nome_Corso  VARCHAR(50)  NOT NULL,
    Crediti     INT
);

CREATE TABLE Studenti (
    ID_Studente INT          PRIMARY KEY,
    Nome        VARCHAR(50)  NOT NULL,
    Cognome     VARCHAR(50)  NOT NULL,
    Anno        INT,
    Corso       VARCHAR(50),
    ID_Corso    VARCHAR(10)  REFERENCES Corsi(ID_Corso)
);

INSERT INTO Corsi (ID_Corso, Nome_Corso, Crediti) VALUES
    ('INF', 'Informatica', 12),
    ('MAT', 'Matematica',  9),
    ('FIS', 'Fisica',      9);

INSERT INTO Studenti (ID_Studente, Nome, Cognome, Anno, Corso, ID_Corso) VALUES
    (1, 'Mario',  'Rossi',   2, 'Informatica', 'INF'),
    (2, 'Laura',  'Bianchi', 1, 'Matematica',  'MAT'),
    (3, 'Ahmed',  'Hassan',  3, 'Informatica', 'INF'),
    (4, 'Sofia',  'Conti',   2, 'Fisica',      'FIS');


-- ------------------------------------------------------------
--  2. TABELLE USATE NELL'ESEMPIO DI QUERY CON JOIN
--     (Ordini e Clienti)
-- ------------------------------------------------------------

CREATE TABLE Clienti (
    ID_Cliente  VARCHAR(10)  PRIMARY KEY,
    Nome        VARCHAR(50)  NOT NULL,
    Citta       VARCHAR(50)
);

CREATE TABLE Ordini (
    ID_Ordine   INT          PRIMARY KEY,
    ID_Cliente  VARCHAR(10)  REFERENCES Clienti(ID_Cliente),
    Prodotto    VARCHAR(50)  NOT NULL,
    Quantita    INT          NOT NULL
);

INSERT INTO Clienti (ID_Cliente, Nome, Citta) VALUES
    ('C01', 'Alice Rossi',  'Milano'),
    ('C02', 'Bruno Verdi',  'Roma'),
    ('C03', 'Carla Neri',   'Napoli');

INSERT INTO Ordini (ID_Ordine, ID_Cliente, Prodotto, Quantita) VALUES
    (1, 'C01', 'Laptop',   1),
    (2, 'C03', 'Mouse',    3),
    (3, 'C01', 'Monitor',  2),
    (4, 'C02', 'Tastiera', 1);


-- ------------------------------------------------------------
--  3. TABELLA USATA NELL'ESERCIZIO 1
--     (Libri)
-- ------------------------------------------------------------

CREATE TABLE Libri (
    ID_Libro  INT          PRIMARY KEY,
    Titolo    VARCHAR(100) NOT NULL,
    Autore    VARCHAR(100) NOT NULL,
    Anno      INT,
    Genere    VARCHAR(50)
);

INSERT INTO Libri (ID_Libro, Titolo, Autore, Anno, Genere) VALUES
    (1, 'Il nome della rosa',        'Umberto Eco',   1980, 'Romanzo'),
    (2, '1984',                      'George Orwell', 1949, 'Distopia'),
    (3, 'Dune',                      'Frank Herbert', 1965, 'Fantascienza'),
    (4, 'La fattoria degli animali', 'George Orwell', 1945, 'Distopia'),
    (5, 'Fondazione',                'Isaac Asimov',  1951, 'Fantascienza');


-- ------------------------------------------------------------
--  4. TABELLE USATE NELL'ESERCIZIO 2
--     (Studenti_Es2 e Corsi_Es2)
-- ------------------------------------------------------------

CREATE TABLE Corsi_Es2 (
    ID_Corso    VARCHAR(10)  PRIMARY KEY,
    Nome_Corso  VARCHAR(50)  NOT NULL,
    Docente     VARCHAR(50)
);

CREATE TABLE Studenti_Es2 (
    ID_Studente INT          PRIMARY KEY,
    Nome        VARCHAR(50)  NOT NULL,
    ID_Corso    VARCHAR(10)  REFERENCES Corsi_Es2(ID_Corso)
);

INSERT INTO Corsi_Es2 (ID_Corso, Nome_Corso, Docente) VALUES
    ('C1', 'Matematica',  'Prof. Bianchi'),
    ('C2', 'Informatica', 'Prof. Rossi'),
    ('C3', 'Fisica',      'Prof. Verdi');

INSERT INTO Studenti_Es2 (ID_Studente, Nome, ID_Corso) VALUES
    (1, 'Giulia Marini', 'C2'),
    (2, 'Luca Ferri',    'C1'),
    (3, 'Sara Boni',     'C3'),
    (4, 'Marco Ricci',   'C2'),
    (5, 'Elena Gatti',   'C1');


-- ------------------------------------------------------------
--  SOLUZIONI DEGLI ESERCIZI
-- ------------------------------------------------------------

-- Esercizio 1.1 — libri di genere Distopia
SELECT Titolo, Autore
FROM Libri
WHERE Genere = 'Distopia';

-- Esercizio 1.2 — libri dopo il 1960, ordinati per anno
SELECT *
FROM Libri
WHERE Anno > 1960
ORDER BY Anno;

-- Esercizio 1.3 — conteggio libri per genere
SELECT Genere, COUNT(*) AS Totale
FROM Libri
GROUP BY Genere
ORDER BY Totale DESC;

-- Esercizio 2.1 — nome studente e nome corso
SELECT S.Nome, C.Nome_Corso
FROM Studenti_Es2 AS S
JOIN Corsi_Es2 AS C ON S.ID_Corso = C.ID_Corso;

-- Esercizio 2.2 — aggiunge il docente e ordina per studente
SELECT S.Nome, C.Nome_Corso, C.Docente
FROM Studenti_Es2 AS S
JOIN Corsi_Es2 AS C ON S.ID_Corso = C.ID_Corso
ORDER BY S.Nome;

-- Esercizio 2.3 — studenti per corso
SELECT C.Nome_Corso, COUNT(*) AS Num_Studenti
FROM Studenti_Es2 AS S
JOIN Corsi_Es2 AS C ON S.ID_Corso = C.ID_Corso
GROUP BY C.Nome_Corso
ORDER BY Num_Studenti DESC;
