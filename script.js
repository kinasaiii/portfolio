// toggle menu problem with phone 
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// cv language version
let currentLang = "en";
const btnCV = document.getElementById("btn-cv");

// button language
const frenchText = {
    "home-nav": "ACCUEIL",
    "about-nav": "À PROPOS",
    "skill-nav": "COMPETENCES",
    "project-nav": "PROJETS",
    "hello": "Salut !",
    "home-name": 'Je suis <span id = "namespan">Iness AINSERI</span>',
    "home-desc": "une <em>Développeuse Logicielle</em> passionnée<br>et <em>Entrepreneur</em>",
    "btn-cv": "Voir mon CV",
    "btn-contact": "Contacte Moi!",
    "aboutme-title": "À Propos de Moi",
    "aboutme-paragraph": "Je suis étudiante en informatique à l’Université de Béjaïa, très passionnée par l’apprentissage, la programmation et la réalisation de projets en développement web. J’aime explorer de nouveaux outils et concepts afin de progresser en tant que développeuse, et j’apprécie particulièrement transformer des idées en sites web conviviaux et performants, tout en améliorant continuellement mes compétences. Je crois fortement à l’apprentissage par la pratique, et la majorité de mes progrès provient de l’expérimentation et de la création de projets.<br><br> Je maîtrise le langage C et l’algorithmique, ce qui me donne une base solide en résolution de problèmes, structures de données et raisonnement logique. En parallèle de mon parcours technique, je suis également entrepreneure avec Arvea, une expérience qui m’a permis de développer des compétences en communication, créativité et gestion d’activité. J’ai aussi une bonne compréhension du design UI/UX, me permettant de concevoir des interfaces à la fois fonctionnelles, intuitives et esthétiques.<br><br> Mon objectif est de devenir une développeuse logicielle compétente, de contribuer à des projets à fort impact et de continuer à apprendre et évoluer dans le domaine, en combinant expertise technique, créativité et esprit entrepreneurial.",
    "skill-title": "Mes Compétences",
    "project-title": "Mes Projets",
    "project-link": "Voir Plus",
    "jeu-mot": "Jeu de Mot en C",
    "jeu-mot-desc": "Un Jeu de génération de mots en C, basé sur l’algorithmique et la résolution de problèmes, où les joueurs forment des mots à partir de lettres aléatoires validées par un dictionnaire.",
    "kinasai-links": "Social Links",
    "kinasai-links-desc": "Une page de liens sociaux minimaliste comprenant une carte de profil et des boutons interactifs, développée avec HTML et CSS.",
    "pomodoro": "Kinasai Pomodoro",
    "pomodoro-desc": "Un minuteur Pomodoro simple avec HTML, CSS et JavaScript, offrant un compte à rebours en temps réel, pause/réinitialisation et alertes sonore",
    "ines-elegance": "Ines Élégance",
    "ines-elegance-desc": "Une page de destination moderne de type “link-in-bio” conçue pour l’entreprise de mon ami, avec une esthétique luxueuse en marron et doré.",
    "average-calc": "Calculateur de Moyenne",
    "average-calc-desc": "Une application en ligne de commande en C qui calcule les moyennes des étudiants avec une logique structurée, démontrant de solides bases en C.",
    "contact-me-title": "Contacte Moi!",
    "btn-send": "Envoyer",
    "thanks-message": "Merci pour Votre message :)",
    "footer-rights": "@ 2025 KINASAI. Tous Droits Réservés.",

}

// original english text
const englishText = {};

// when the html file is fully loaded it reads all the texts by id and saves them in the englishText object and then reads the button language and calls to the switch language function on click
document.addEventListener("DOMContentLoaded", () => {
    Object.keys(frenchText).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            englishText[id] = el.innerHTML;
        }
    });
    document.getElementById("lang-btn").addEventListener("click", switchLang);
});

// function to switch the language
function switchLang () {
    currentLang = currentLang === "en" ? "fr" : "en";
    const texts = currentLang === "fr" ? frenchText : englishText;
    Object.keys(texts).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = texts[id];
        }
    });
    if (currentLang === "fr") {
        btnCV.href = "docs/cv-iness-ainseri-fr.pdf";
        btnCV.textContent = "Voir mon CV";
    }
    else {
        btnCV.href = "docs/cv-iness-ainseri-en.pdf";
        btnCV.textContent = "View my CV";
    }

    // translate "see more" buttons (class-based)
    document.querySelectorAll(".project-link").forEach(btn => {
        btn.innerText = currentLang === "fr" ? "Voir Plus" : "See More";
    });

    // change placeholders (inputs & textarea)
    document.getElementById("email-placeholder").placeholder = currentLang === "fr" ? "Votre Adresse E-mail" : "Your Email";

    document.getElementById("message-placeholder").placeholder = currentLang === "fr" ? "Votre Message" : "Your Message";

}
