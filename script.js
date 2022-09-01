fetch(" http://localhost:3000/Tshirts")
.then(response => response.json())
.then(data => {
    console.log(data)
    names(data)

})


    function names(data){
        let descriptionBlack = [];
      const filmDescription = document.getElementById('ama-black') 
       for(let decrpt of data){
        descriptionBlack.push(decrpt.name)
        let rem = document.getElementById('bttn');
rem.addEventListener('click', () =>{                  
       filmDescription.innerHTML = descriptionBlack[0]
      })
    }
 }



