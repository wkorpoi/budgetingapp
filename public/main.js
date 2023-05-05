const trash = document.getElementsByClassName("delete");

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(event){
      const _id = event.target.value
        console.log('working')
        window.location.reload()
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            _id
          })
        })
      });
});
