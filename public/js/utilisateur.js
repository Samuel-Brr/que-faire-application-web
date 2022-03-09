const deleteActivite = (btn) => {
    const activiteId = btn.parentNode.querySelector('[name=activiteId]').value
    const productElement = document.getElementById(`${activiteId}`)

    console.log(activiteId)
    console.log(productElement)
    
    // fetch(`/liste/delete/${activiteId}`,{
    //     method: "DELETE",
    //     headers: {
    //         'csrf-token': csrf
    //     }
    // })
    //     .then(result => {
    //         console.log(result)
    //     })
    //     .then(data=>{
    //         console.log(data)
    //         productElement.parentNode.removeChild(productElement)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

}