const car =[]

const anillos =[{referencia: 1, material: "Oro Rubi", valor: 1500},
                {referencia: 2, material: "Oro, Diamante y Esmeralda", valor: 3500},
                {referencia: 3, material: "Oro Blanco y zafiro azul", valor: 2500},
                {referencia: 4, material: "Oro y zafiro azul", valor: 1800},
                {referencia: 5, material: "Oro y Esmeralda", valor: 2000},
                {referencia: 6, material: "Oro blanco, Diamante y Esmeralda", valor: 3000},
                {referencia: 7, material: "Oro Blanco, Diamantes y Rubi", valor: 2750},
                {referencia: 8, material: "Oro y topacio", valor: 2700},
                
]

const primerMensaje = "Elija el numero de referencia del anillo deseado:"

//1.
function explorarAnillo(referencia) {
    let respuesta = anillos.find((anillo)=> anillo.referencia === parseInt(referencia))
    return respuesta 

}
//2/
function checkCar(){
    console.table(car)
}

//3/
function concluirAdquisicion() {
    if (car.length > 0) {
        const comprar = new adquirir(car)
        alert(`El valor de su seleccion es de $ ${comprar.subtotal()}`)
        let respuestas = confirm("¿Quiere hacer la transaccion?")
            if (respuestas) {
                alert(comprar.adquisicionHecha())
                car.length = 0
            }
    } else {
        console.warn("No existen anillos.")        
    }
}

//4.
function pagar() {
    let referencia = (prompt(primerMensaje))
    if(!parseInt(referencia)){
        alert("🔴 Fallo en el numero de referencia.")
        let respuestas = confirm("Le gustaria volver a intentarlo?")
        if (respuestas) {
            pagar() 
        }
        return

    }

        let anilloElegido = explorarAnillo(referencia)
        if (anilloElegido !== undefined) {
            alert(`El anillo ${anilloElegido.material} ha sido agregado a compras.`)
            car.push(anilloElegido)
            let respuestas = confirm("Le gustaria llevar otro anillo?")
            if (respuestas) {
                pagar() 
            } else {
                concluirAdquisicion()
            }

        } else {
            alert("🔴 Fallo en el numero de referencia.")
            let respuestas = confirm("Le gustaria volver a intentarlo?")
            if (respuestas) {
                pagar() 
            }
            return
        }
    }
    

    


