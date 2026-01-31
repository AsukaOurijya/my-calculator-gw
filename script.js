const display = document.getElementById("display");
const themeToggle = document.getElementById("theme-toggle");

function getPreferredTheme(){
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme === "dark" || storedTheme === "light") return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme){
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);

    const nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.textContent = nextTheme === "dark" ? "Dark" : "Light";
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
}

setTheme(getPreferredTheme());

themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
});

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
