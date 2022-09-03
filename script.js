let tName1 = document.getElementById('ama-black')
let tName2 = document.getElementById('ama-red')
let tName3 = document.getElementById('ama-yellow')
let tName4 = document.getElementById('pace-white')
let tName5 = document.getElementById('ama-k')
let tName6 = document.getElementById('ama-ka')
let tName7 = document.getElementById('ama-kam')
let tName8 = document.getElementById('ama-kama')

let tPrice1 = document.getElementById('blck-price')
let tPrice2 = document.getElementById('red-price')
let tPrice3 = document.getElementById('yellow-price')
let tPrice4 = document.getElementById('pace-price')
let tPrice5 = document.getElementById('amak-price')
let tPrice6 = document.getElementById('amaka-price')
let tPrice7 = document.getElementById('amakam-price')
let tPrice8 = document.getElementById('amakama-price')

let arrayName = []
let arrayPrice = []
fetch(" http://localhost:3000/Tshirts")
.then(response => response.json())
.then(data => {
    console.log(data)
    names(data)

})
    function names(data){
    for(let tshirt of data){
    arrayName.push(tshirt.name)
    arrayPrice.push(tshirt.price)
    console.log(arrayPrice)
    console.log(arrayName)
    let btn = document.getElementById('view')
    btn.addEventListener('click', ()=>{
        tName1.innerHTML = arrayName[0]
        tName2.innerHTML = arrayName[1]
        tName3.innerHTML = arrayName[2]
        tName4.innerHTML = arrayName[3]
        tName5.innerHTML = arrayName[4]
        tName6.innerHTML = arrayName[5]
        tName7.innerHTML = arrayName[6]
        tName8.innerHTML = arrayName[7]

        tPrice1.innerHTML = arrayPrice[0]
        tPrice2.innerHTML = arrayPrice[1]
        tPrice3.innerHTML = arrayPrice[2]
        tPrice4.innerHTML = arrayPrice[3]
        tPrice5.innerHTML = arrayPrice[4]
        tPrice6.innerHTML = arrayPrice[6]
        tPrice7.innerHTML = arrayPrice[6]
        tPrice8.innerHTML = arrayPrice[7]
    })

    

    
    
    }
    }


