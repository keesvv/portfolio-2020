var repoContainer = document.getElementById("repoContainer");

function handleRequest() {
    var repos = JSON.parse(this.responseText);
    var repoItems = [];
    repos = _.orderBy(repos, 'updated_at', 'desc');

    repos.forEach(i => {
        var repo = document.createElement("div");
        var title = document.createElement("h1");
        var titleLink = document.createElement("a");
        var titleFork = document.createElement("i");
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

        titleFork.classList.add("fas", "fa-code-branch");

        title.appendChild(titleLink);
        if (i.fork) title.appendChild(titleFork);

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
        repo.style.opacity = 0;
        repo.appendChild(title);
        repo.appendChild(desc);
        repo.appendChild(descContainer);

        repoItems.push(repo);
        repoContainer.appendChild(repo);
    });

    let interval = 200;
    for (let i = 0; i < repoItems.length; i++) {
        const element = repoItems[i];
        setTimeout(() => {
            element.style.opacity = 1;
        }, interval * i + interval);
    }
}

var request = new XMLHttpRequest();
request.onload = handleRequest;
request.open('get', 'https://api.github.com/users/keesvv/repos', true);
request.send();
