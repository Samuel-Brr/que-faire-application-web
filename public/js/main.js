const bouton = document.getElementById("btn-carte")

const getActivite = () => {
    console.log("clicked !")
    fetch("http://www.boredapi.com/api/activity/")
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            const titre = document.getElementById("titre-activite")
            const activite = data.activity

            titre.innerHTML = activite

        })
        .catch(err=>console.log(err))
}

bouton.addEventListener('click', getActivite)