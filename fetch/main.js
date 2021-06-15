const URL = "https://api.kanye.rest/";


async function showText() {
    const result = await fetch(URL);
    const data = await result.json();
    const quote = data.quote;

    const p = document.createElement("p");
    p.innerText = quote;

    document.getElementById("myElement").appendChild(p);
}

showText();