const titleElement = document.querySelector('.text'); // Cambia per selezionare solo il testo
const cursorElement = document.querySelector('.cursor'); // Seleziona il cursore

const texts = [
    'fmt.Printf("Puerry44")',
    "write (*,*)'Puerry44'",
    "writeln ('Puerry44')",
    'System.out.println("Puerry44");',
    'print("Puerry44\\n");',
    'Put("Puerry44");',
    'println("Puerry44")',
    'Console.WriteLine("Puerry44");',
    'print("Puerry44")',
];

let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (textIndex < texts.length) {
        const currentText = texts[textIndex];

        if (charIndex < currentText.length) {
            titleElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 60);
        } else {
            // Aspetta un attimo prima di cancellare il testo
            setTimeout(() => {
                // Cancella il testo carattere per carattere
                let deleteIndex = currentText.length - 1;

                function deleteText() {
                    if (deleteIndex >= 0) {
                        titleElement.textContent = titleElement.textContent.slice(0, -1);
                        deleteIndex--;
                        setTimeout(deleteText, 50);
                    } else {
                        // Passa al testo successivo
                        textIndex++;
                        charIndex = 0;

                        // Riavvia l'indice se necessario
                        if (textIndex >= texts.length) {
                            textIndex = 0;
                        }

                        setTimeout(typeText, 200); // Aspetta prima di iniziare il prossimo testo
                    }
                }

                deleteText(); // Avvia la cancellazione
            }, 1000); // Tempo di attesa prima di cancellare (1 secondo)
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeText();
});
