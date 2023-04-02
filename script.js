document.addEventListener('DOMContentLoaded',() =>
{
    //addEventListener es un metodo de js que indica al navegador que este atento a la interacción del usuario
    const cardArray=[
        {
            name:'brazoizquierdo',
            img:'img/brazoizquierdo.jpg'
        },
        {
            name:'brazoderecho',
            img:'img/brazoderecho.jpg'
        },
        {
            name:'piernaderecha',
            img:'img/piernaderecha.jpg'
        },
        {
            name:'piernaizquierda',
            img:'img/piernaizquierda.jpg'
        },
        {
            name:'cabezaexodia',
            img:'img/cabezaexodia.jpg'
        },
        {
            name:'magodeltiempo',
            img:'img/magodeltiempo.jpg'
        },
        {
            name:'brazoizquierdo',
            img:'img/brazoizquierdo.jpg'
        },
        {
            name:'brazoderecho',
            img:'img/brazoderecho.jpg'
        },
        {
            name:'piernaderecha',
            img:'img/piernaderecha.jpg'
        },
        {
            name:'piernaizquierda',
            img:'img/piernaizquierda.jpg'
        },
        {
            name:'cabezaexodia',
            img:'img/cabezaexodia.jpg'
        },
        {
            name:'magodeltiempo',
            img:'img/magodeltiempo.jpg'
        }
    ]
    cardArray.sort(()=> 0.5 - Math.random()) 
    //sort ordena los elementos de un arreglo local y devuelve un arreglo ordenado
    //math.random devuelve el numero de un arreglo desde 0
    const grid = document.querySelector('.grid')
    //querySelector devuelve el primer elemento del documento (la etiqueta de html) seleccionada por medio de un identificador
    const resultado = document.querySelector('#resultado')
    let cartaelegida = []
    let cartaelegidaid = []
    let cartageneral = []

    //crear el tablero del juego
    function creartablero()
    {
        for(let i=0;i<cardArray.length;i++)
        {
            const card = document.createElement('img')
            card.setAttribute('src','img/respaldo.jpg')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }
    function chequeo()
    {
        const cards = document.querySelectorAll('img')
        const primeraopcion=cartaelegidaid[0]
        const segundaopcion=cartaelegidaid[1]
        if(primeraopcion == segundaopcion)
        {
            cards[primeraopcion].setAttribute('src','img/respaldo.jpg')
            cards[segundaopcion].setAttribute('src','img/respaldo.jpg')
            alert("las cartas deben ser iguales")
        }
        else if(cartaelegida[0] === cartaelegida[1])
        {
            alert("felicitaciones cartas correctas")
            cards[primeraopcion].setAttribute('src','img/yugiohhhh.jpg')
            cards[segundaopcion].setAttribute('src','img/yugiohhhh.jpg')
            cards[primeraopcion].removeEventListener('click',flipcard)
            cards[segundaopcion].removeEventListener('click',flipcard)
            cartageneral.push(cartaelegida)
        }
        else{
            cards[primeraopcion].setAttribute('src','img/respaldo.jpg')
            cards[segundaopcion].setAttribute('src','img/respaldo.jpg')
            alert("lo sentimos vuelve a intentar")
        }
        cartaelegida=[]
        cartaelegidaid=[]
        resultado.textcontent = cartageneral.length
        if(cartageneral.length === cardArray.length/2)
        {
            resultado.textcontent ='felicitaciones has ganado!'
        }
    }
    function flipcard()
    {
       
        let cardId = this.getAttribute('data-id')
        cartaelegida.push(cardArray[cardId].name)
        cartaelegidaid.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cartaelegida.length ===2){
            setTimeout(chequeo, 500)
        }
       
    }
    creartablero()
}
)
