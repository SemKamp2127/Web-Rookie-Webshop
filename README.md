# Web-Rookie-Webshop README

## Inleiding

Dit project is een simpele website gemaakt voor mijn opleiding. Het is een webshop/bestelapplicatie. Ik hoefte geen betalingen of persoonsgegevens te verwerken dus dat heb ik niet toegevoegd. Ik heb geleerd hoe ik een website online moet zetten en het was mijn eerste keer met tailwind werken. 

## Waar te vinden online

Je kan gemakkelijk het project online vinden als je naar https://web-rookie.netlify.app/ gaat.

## Gebruik

Er zijn een aantal features op de website. Als je op de home pagina bent kan je producten toevoegen aan het winkelmandje. Als je vervolgens rechtsboven in de taskbar klikt op "Cart" kan je zien wat er in je winkelmandje zit. Je kan het aantal van je toegevoegde product veranderen en je kan zelf het product helemaal uit je mandje verwijderen. Als je een bestelling wilt plaatsen klik je op "bestelling plaatsen".

Als je vervolgens terug gaat naar de winkel via de blauwe knop rechts boven en daarna klikt op "Admin Paneel"  links boven, kom je bij een login scherm. De gebruikersnaam en wachtwoord staan onder aan het login form. Als je die invuld en op "Login"  klikt kom je bij het admin paneel. 
Hier zijn een aantal features. Ten eerste als je helemaal naar beneden gaat kan je allen bestellingen zien die geplaatst zijn. Je kan de orders ook verwijderen. Helemaal boven aan kan je de product opslag resetten naar de orginele staat. Daaronder kan je een product toevoegen. Als laatste onder de form om producten toe te voegen staat een lijst met alle producten. Hier kan je producten editen via de blauwe knop en producten verwijderen met de rode knop.

## Instructies om het project lokaal te runnen.

### Dingen die nodig zijn om het project te runnen.

Om dit project te kunnen runnen heb je nodig:
- Visual Studio Code
- Git Bash
- Tailwind

Als je in Visual Studio Code een lege map opent kan je het project krijgen door die map te openen met de terminal en daar "git clone https://github.com/SemKamp2127/Web-Rookie-Webshop.git" in te voeren. Als het goed is moeten nu alle files zichtbaar zijn in jouw map. 

### Styling met Tailwind CSS
Om verandering te kunnen doen moet je Tailwind CLI opstarten via de de terminal. Dit doe je door de map "Web-Rookie-Webshop" te openen in de terminal en daar de volgende stappen uit te voeren:

1. npm install tailwindcss @tailwindcss/cli
2. "npx @tailwindcss/cli -i ./src/css/input.css -o ./src/css/output.css --watch" in te voeren.