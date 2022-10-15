const GITHUB_API_URL = "https://api.github.com/repos";

async function loadMyWebsiteData() {
    const res = await fetch(`${GITHUB_API_URL}/DanielSalmeron3b/My-Website`
    // ,{
    //     headers: {
    //         'Authorization': `token ${REQUEST_API_TOKEN}`
    //     },
    // }
    );
    const myWebsiteRepoData = await res.json();
    
    // console.log("My-Website data loaded");
    // console.log(myWebsiteRepoData);

    // Writing on the GitHub card 🐱‍💻
    const h3Title = document.querySelector("#myWebsiteTitle");
    const titleText = document.createTextNode(myWebsiteRepoData.name);
    h3Title.appendChild(titleText);

    const pDesc= document.querySelector("#myWebsiteDesc");
    const descText = document.createTextNode(myWebsiteRepoData.description);
    pDesc.appendChild(descText);

    const pStars = document.querySelector("#myWebsiteStars");
    const starsText = document.createTextNode(`⭐ ${myWebsiteRepoData.stargazers_count}`);
    pStars.appendChild(starsText);

    const pForks = document.querySelector("#myWebsiteForks");
    const forksText = document.createTextNode(`🍴 ${myWebsiteRepoData.forks}`);
    pForks.appendChild(forksText);
};

async function loadPokedexDjangoData() {
    const res = await fetch(`${GITHUB_API_URL}/SALM-Code/pokedex-django`);
    const pokedexDjangoRepoData = await res.json();

    // Writing on the GitHub card 🐱‍💻
    const h3Title = document.querySelector("#pokedexDjangoTitle");
    const titleText = document.createTextNode(pokedexDjangoRepoData.name);
    h3Title.appendChild(titleText);

    const pDesc= document.querySelector("#pokedexDjangoDesc");
    const descText = document.createTextNode(pokedexDjangoRepoData.description);
    pDesc.appendChild(descText);

    const pStars = document.querySelector("#pokedexDjangoStars");
    const starsText = document.createTextNode(`⭐ ${pokedexDjangoRepoData.stargazers_count}`);
    pStars.appendChild(starsText);

    const pForks = document.querySelector("#pokedexDjangoForks");
    const forksText = document.createTextNode(`🍴 ${pokedexDjangoRepoData.forks}`);
    pForks.appendChild(forksText);
};


loadMyWebsiteData();
loadPokedexDjangoData();