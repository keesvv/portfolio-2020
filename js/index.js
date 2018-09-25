var repoContainer = document.getElementById("repoContainer");

function handleRequest() {
    var repos = JSON.parse(this.responseText);
    console.log(repos);

    repos.forEach(i => {
        var repo = document.createElement("div");
        var title = document.createElement("h1");
        var titleLink = document.createElement("a");
        var desc = document.createElement("p");
        var descContainer = document.createElement("div");
        var language = document.createElement("span");

        var forkIcon = document.createElement("i");
        var forks = document.createElement("span");

        var starIcon = document.createElement("i");
        var stars = document.createElement("span");

        titleLink.href = i.svn_url;
        titleLink.innerText = i.name;
        titleLink.target = "_blank";
        title.appendChild(titleLink);

        desc.innerText = i.description;
        language.innerText = i.language;
        
        forkIcon.classList.add("fas", "fa-code-branch");
        forks.appendChild(forkIcon);
        forks.appendChild(document.createTextNode(i.forks));

        starIcon.classList.add("fas", "fa-star");
        stars.appendChild(starIcon);
        stars.appendChild(document.createTextNode(i.stargazers_count));

        descContainer.className = "desc";
        descContainer.appendChild(language);
        descContainer.appendChild(forks);
        descContainer.appendChild(stars);

        repo.className = "repo";
        repo.appendChild(title);
        repo.appendChild(desc);
        repo.appendChild(descContainer);

        repoContainer.appendChild(repo);
    });
}

var request = new XMLHttpRequest();
request.onload = handleRequest;
request.open('get', 'https://api.github.com/users/keesvv/repos', true);
request.send();
