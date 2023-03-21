
class adquirir {
    constructor(car) {
        this.car = car
    }
subtotal() {
    if (car.length > 0) {
        return this.car.reduce((acc, anillo) => acc + anillo.valor, 0)
    } else {
        return"Fallo!!"
    }

}
adquisicionHecha() {

    if (this.subtotal() !== 'Fallo!!') {
        return `🟢 Hecha la transaccion de $ ${this.subtotal()}. \n Gracias por su adquisicion!`
    } else {
        return `🔴 Fallo en la compra.`
    }
}
}





