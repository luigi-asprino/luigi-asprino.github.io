## Scenario: "BiblioPop — La biblioteca scolastica digitale"

### Il dominio

Una scuola superiore vuole digitalizzare la gestione della propria biblioteca. Fino ad ora tutto era gestito con registri cartacei: chi ha preso quale libro, quando deve restituirlo, quante copie ci sono. Il preside vuole un sistema informatico che permetta alla bibliotecaria e agli studenti di gestire prestiti, catalogo e abbonamenti in modo ordinato ed efficiente.

### L'applicazione

`BiblioPop` è un'applicazione web semplice con due tipi di utenti: la *bibliotecaria* (che gestisce il catalogo e i prestiti) e gli *studenti* (che cercano libri e vedono la propria situazione prestiti). Le funzionalità principali sono:

- Cercare un libro per titolo, autore o genere
- Vedere quante copie di un libro sono disponibili in questo momento
- Registrare il prestito di una copia a uno studente
- Registrare la restituzione
- Segnalare i prestiti scaduti (oltre 30 giorni)
- Produrre statistiche: i libri più letti, gli studenti con più prestiti attivi, i generi preferiti per classe

### Perché è un buon scenario didattico?Lo scenario ha alcune qualità pedagogiche importanti:

**Familiarità.** Ogni studente conosce una biblioteca. Non serve spiegare il dominio — ci si concentra subito sulla modellazione.

**Complessità graduabile.** Si può partire da una versione minima (solo `Libro`, `Studente`, `Prestito`) e aggiungere complessità a ogni lezione: le copie fisiche separano il libro dall'esemplare (concetto di entità debole); autori e generi introducono le relazioni N:M e le tabelle di associazione; la data di restituzione NULL introduce i valori opzionali.

**Query naturali.** Le domande che la bibliotecaria farebbe in linguaggio naturale si traducono direttamente in SQL: *"quante copie di questo libro sono disponibili?"*, *"quali studenti non hanno restituito entro i 30 giorni?"*, *"quali sono i 5 libri più richiesti quest'anno?"*. Questo rende le query motivate, non astratte.

**Una trappola classica già incorporata.** La distinzione tra `Libro` (l'opera, con ISBN) e `Copia` (l'esemplare fisico) è una delle sorgenti più comuni di errori di progettazione. È un ottimo momento per discutere cosa significa modellare correttamente la realtà.
