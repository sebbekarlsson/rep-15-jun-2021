const ul = document.getElementById("myUl");     // hamta var <ul> som finns i html.
const URL = "https://cat-fact.herokuapp.com/facts";


function toLiTag(obj) {
    const li = document.createElement("li");    // skapa <li> tagg.
    li.innerText = obj.text;                    // satt texten pa <li> taggen.

    return li;                                  // returnera <li> taggen.
}

async function main() {
    const response = await fetch(URL);          // javascript "Response" objekt.
    const catFactArray = await response.json(); // array med objekt

    const liTags = catFactArray.map(toLiTag);   // array med <li>
    liTags.forEach(li => ul.appendChild(li));   // loopa alla <li> och tryck in i <ul>
}

main();                                         // starta funktion som gor allt.