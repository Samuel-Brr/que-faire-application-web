const bouton = document.getElementById("btn-carte")
let monActivite

//...............     bouton générer activité     ..........................

const getActivite = () => {
    console.log("clicked !")
    fetch("http://www.boredapi.com/api/activity/")
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            const titre = document.getElementById("titre-activite")
            const activite = data.activity

            titre.innerHTML = activite

            monActivite = data

        })
        .catch(err=>console.log(err))
}

bouton.addEventListener('click', getActivite)

//...............     bouton ajouter à la liste d'envies     ..........................


const boutonAjout = document.getElementById("btn-ajout")

const postActivite = () => {
    fetch("http://localhost:4040/liste", {
        method: 'POST',
        body: JSON.stringify(monActivite),
        headers: {'content-type': 'application/json'}
    })
        .then(() => window.alert("Nouvelle activité ajoutée à votre liste d'envies ! 😁"))
        .catch(err => console.log(err))
}

boutonAjout.addEventListener('click', postActivite)