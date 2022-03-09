
// When the user clicks on the button, open the modal
const openModal = function(myBtn) {
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // Get the modal
    const activiteId = myBtn.parentNode.querySelector('[name=activiteId]').value
    const modal = document.getElementById(`myModal-${activiteId}`);

    // Get the button that opens the modal
    const btn = document.getElementById(`myBtn-${activiteId}`);
    

    // Opens modal
    modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}
