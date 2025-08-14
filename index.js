const repositories = document.getElementById("projects-content");

function getAPIGitHubProjects() {
    fetch('https://api.github.com/users/tha-is/starred')
    .then(async res => {
        if( !res.ok) {
            throw new Error(res.status);
        }

        let data = await res.json();
        data.map( item => {
            let project = document.createElement('div');
            project.classList.add('m-2');
            project.innerHTML = `
    <div class="title"><a href="${item.git_url}" target="_blank">${item.name}</a></div>
            <div class="description rounded p-2 bg-light bg-opacity-50">${item.description}
            <span class="badge text-bg-light">${ item.language}</span>
            </div>
    
      
            `

            repositories.appendChild(project);
        })
    })
}

getAPIGitHubProjects()