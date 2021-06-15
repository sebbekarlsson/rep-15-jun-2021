class LiContainer {
    constructor(id) {
        this.element = document.getElementById(id);
    }

    insertLiTags(liTags) {
        liTags.forEach(li => this.element.appendChild(li));
    }
}


class Cat {
    constructor(fact) {
        this.fact = fact;
    }

    toLi() {
        const li = document.createElement("li");
        li.innerText = this.fact;

        return li;
    }
}

class CatFactory {
    constructor(url) {
        this.url = url;
    }

    produceCat(factText) {
        return new Cat(factText);
    }

    async produceCats() {
        const response = await fetch(this.url);
        const factArray = await response.json();
        return factArray.map(
            factObj => this.produceCat(factObj.text).toLi()
        ); // en array med <li>.
    }
}

async function main() {
    const factory = new CatFactory("https://cat-fact.herokuapp.com/facts");

    (new LiContainer("myUl")).insertLiTags(await factory.produceCats());
}

main();