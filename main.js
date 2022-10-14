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
    const h3Title = document.querySelector("#myWebsiteGitHubTitle");
    const titleText = document.createTextNode(myWebsiteRepoData.name);
    h3Title.appendChild(titleText);

    const pDesc= document.querySelector("#myWebsiteGitHubDesc");
    const descText = document.createTextNode(myWebsiteRepoData.description);
    pDesc.appendChild(descText);

    const pStars = document.querySelector("#myWebsiteGitHubStars");
    const starsText = document.createTextNode(`⭐ ${myWebsiteRepoData.stargazers_count}`);
    pStars.appendChild(starsText);

    const pForks = document.querySelector("#myWebsiteGitHubForks");
    const forksText = document.createTextNode(`🍴 ${myWebsiteRepoData.forks}`);
    pForks.appendChild(forksText);
};

loadMyWebsiteData();