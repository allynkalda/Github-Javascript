var counterForLoad = 0;

const getInput = (event) => {
    event.preventDefault();
    counterForLoad++;
    
    if (counterForLoad > 1) {
        let output = document.querySelector('#output');
        let repoBox = document.querySelector('.repo-box');
        output ? output.remove() : null;
        repoBox ? repoBox.remove() : null;
        counterForLoad = 0;
    }
    
    let input = document.getElementById("input").value;

    const getRepo = async () => {
        let response  = await fetch(`https://api.github.com/users/${input}/repos`)
            .then(data => data.json())
            .catch(err => err.message);

        if (response) {

            let thirdDiv = document.createElement('div');
            thirdDiv.className = 'repo-box';
            document.querySelector('.container').appendChild(thirdDiv)

            let repo = document.createElement('h4');
            repo.innerHTML = "Repositories";
            document.querySelector('.repo-box').appendChild(repo);


            response.map((item, index) => {
                let info = document.createElement('div');
                info.id = `info${index}`;
                info.className = "info-box"
                document.querySelector('.repo-box').appendChild(info);
                let repoName = document.createElement('p');
                repoName.innerHTML = response[index].name;
                repoName.className = "list"
                document.querySelector(`#info${index}`).appendChild(repoName);

                let starImage = document.createElement('img');
                starImage.className = "icon";
                starImage.src = "../images/star.png";
                document.querySelector(`#info${index}`).appendChild(starImage);

                let starCount = document.createElement('p');
                starCount.innerHTML = response[index].stargazers_count;
                document.querySelector(`#info${index}`).appendChild(starCount);

                let forkImage = document.createElement('img');
                forkImage.className = "icon";
                forkImage.src = "../images/fork.png";
                document.querySelector(`#info${index}`).appendChild(forkImage);

                let forkCount = document.createElement('p');
                forkCount.innerHTML = response[index].forks_count;
                document.querySelector(`#info${index}`).appendChild(forkCount);
            })
        }
    }

    async function getUserInfo() {
       let response  = await fetch(`https://api.github.com/users/${input}`)
            .then(data => data.json())
            .catch(err => err.message);
        
        if (response.message === "Not Found") {
            
            let warning = document.createElement('p');
            let outputBox = document.createElement('div');
            outputBox.id ="output";
            outputBox.className = "warning";
            document.querySelector('.container').appendChild(outputBox);
            warning.innerHTML = "User not found";
            document.getElementById('output').appendChild(warning);

        } else {

            let outputBox = document.createElement('div');
            outputBox.id ="output";
            document.querySelector('.container').appendChild(outputBox)
            
            let firstDiv = document.createElement('div');
            firstDiv.className = 'image-box';
            document.getElementById('output').appendChild(firstDiv)

            let secondDiv = document.createElement('div');
            secondDiv.className = 'text-box';
            document.getElementById('output').appendChild(secondDiv)

            let image = document.createElement('img')
            image.src = response.avatar_url;
            image.className = "user-image"
            document.querySelector('.image-box').appendChild(image);
            
            let user = document.createElement('P');
            user.innerHTML = '@' + response.login;
            document.querySelector('.text-box').appendChild(user);

            let name = document.createElement('h3');
            name.innerHTML = response.name;
            document.querySelector('.text-box').appendChild(name);

            let bio = document.createElement('P');
            bio.innerHTML = response.bio;
            document.querySelector('.text-box').appendChild(bio);

            getRepo();
        }
    }
    getUserInfo()
    counterForLoad = 1;
  }

  
