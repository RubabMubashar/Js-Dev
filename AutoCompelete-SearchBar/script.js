const suggestionsData = [
    "JavaScript",
    "Java",
    "Python",
    "PHP",
    "React",
    "Vue",
    "Angular",
    "Node.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "TypeScript",
];

const searchInput = document.getElementById("search");
const suggestionsBox = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    suggestionsBox.innerHTML = "";

    if (query) {
        const filteredSuggestions = suggestionsData.filter(item =>
            item.toLowerCase().includes(query)
        );

        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(suggestion => {
                const div = document.createElement("div");
                div.classList.add("suggestion");
                div.textContent = suggestion;
                div.addEventListener("click", () => {
                    searchInput.value = suggestion;
                    suggestionsBox.innerHTML = "";
                });
                suggestionsBox.appendChild(div);
            });
        } else {
            const noMatch = document.createElement("div");
            noMatch.classList.add("no-suggestions");
            noMatch.textContent = "No suggestions found.";
            suggestionsBox.appendChild(noMatch);
        }
    }
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
        suggestionsBox.innerHTML = "";
    }
});