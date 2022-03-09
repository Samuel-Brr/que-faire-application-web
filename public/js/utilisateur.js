const deleteActivite = (btn) => {
    const activiteId = btn.parentNode.querySelector('[name=activiteId]').value
    const accordionElement = document.getElementById(`${activiteId}`)
    const panelElement = document.getElementById(`panel-${activiteId}`)

    
    accordionElement.parentNode.removeChild(accordionElement)
    panelElement.parentNode.removeChild(panelElement)
    
    fetch(`/liste/delete/${activiteId}`,{
        method: "DELETE",
        // headers: {
        //     'csrf-token': csrf
        // }
    })
}

////////////////////////////////////////////////////////////////////////