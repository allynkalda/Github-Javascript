

const getInput = (event) => {
    event.preventDefault();
    var input = document.getElementById("input").value;

    const getRepo = async () => {
        let response  = await fetch(`https://api.github.com/users/${input}/repos`)
            .then(data => data.json())
            .catch(err => err.message);
            console.log(response)
    }

    async function getUserInfo() {
       let response  = await fetch(`https://api.github.com/users/${input}`)
            .then(data => data.json())
            .catch(err => err.message);
        console.log(response)
        if (response.message === "Not Found") {
            console.log('not found')
        } else {
            getRepo();
        }
    }
    getUserInfo()
  }

  
