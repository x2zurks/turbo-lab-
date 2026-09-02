const knowledgeButton = document.getElementById("knowledgeButton");
const knowledgeBox = document.getElementById("knowledgeBox");
const knowledgeCount = document.getElementById("knowledgeCount");
const brainrotPercent = document.getElementById("brainrotPercent");
const brainrotFill = document.getElementById("brainrotFill");
let count = 0;

const subjects = [
    "The sigma from Ohio",
    "A mysterious Skibidi toilet",
    "The final Rizzler",
    "A level 99 NPC",
    "The ancient aura council",
    "A delulu scientist",
    "The CEO of Fortnite",
    "A mewing grandpa",
    "The last person with negative aura",
    "A Roblox billionaire",
    "The Costco hot dog",
    "The Duolingo owl",
    "A suspicious talking banana",
    "The Ohio government",
    "The secret basement sigma",
    "A highly trained raccoon",
    "The CEO of Brainrot",
    "A cursed Minecraft villager",
    "The Grimace shake",
    "A professional gooner",
    "The aura police",
    "An unemployed sigma"
];

const actions = [
    "was banned from",
    "accidentally invented",
    "lost 9000 aura after touching",
    "discovered the secret location of",
    "was caught mewing at",
    "summoned",
    "paid the Fanum Tax to",
    "was legally declared a",
    "attempted to rizz up",
    "escaped from",
    "was defeated by",
    "achieved enlightenment after consuming",
    "accidentally became",
    "spawned inside",
    "sold his soul for",
    "got permanently banned from",
    "looksmaxxed into",
    "was caught lacking near",
    "traded his aura for",
    "unlocked the forbidden achievement of"
];

const objects = [
    "a Family Guy funny moments compilation",
    "a Subway Surfers gameplay video",
    "the secret level of Ohio",
    "a cursed lunchable",
    "the forbidden Skibidi portal",
    "a 3 AM Grimace Shake",
    "the legendary Fanum Tax",
    "an iPad with 1% battery",
    "a Roblox obby",
    "the backrooms of Costco",
    "a suspicious amount of rizz",
    "the final brain cell",
    "a gallon of aura",
    "the forbidden lunch table",
    "the original sigma",
    "a sentient AirPod",
    "a haunted Happy Meal",
    "the Ohio DLC",
    "a cursed CapCut edit",
    "an unlimited supply of chicken nuggets"
];

const endings = [
    "and reality has never recovered.",
    "This was considered a W.",
    "Experts have refused to explain this.",
    "The government is currently investigating.",
    "The aura damage was irreversible.",
    "He lost 400 aura instantly.",
    "No cap.",
    "This caused the Great Mewing Incident of 2026.",
    "The situation was extremely cooked.",
    "Scientists called this 'pretty skibidi.'",
    "Ohio has denied all involvement.",
    "The Fanum Tax was unavoidable.",
    "Unfortunately, the footage was uploaded to TikTok.",
    "His rizz levels have never recovered.",
    "This event is now illegal in 47 countries.",
    "Nobody knows what happened next.",
    "The council has been notified.",
    "This was the final warning.",
    "The lore goes deeper.",
    "You were not supposed to learn this."
];

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateKnowledge() {

    const subject = getRandom(subjects);
    const action = getRandom(actions);
    const object = getRandom(objects);
    const ending = getRandom(endings);
const brainrotLevel = Math.floor(Math.random() * 101);

brainrotPercent.textContent = brainrotLevel + "%";
brainrotFill.style.width = brainrotLevel + "%";
    const knowledge =
        subject + " " +
        action + " " +
        object + ". " +
        ending;

    knowledgeBox.style.opacity = "0";

    setTimeout(() => {

        knowledgeBox.textContent = knowledge;

        knowledgeBox.style.opacity = "1";

    }, 150);

    count++;

    knowledgeCount.textContent = count;

    knowledgeButton.textContent = "MORE KNOWLEDGE";
}

knowledgeButton.addEventListener("click", generateKnowledge);
