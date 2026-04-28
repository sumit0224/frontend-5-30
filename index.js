const obj = {
    speak : ()=>{

    }
}

class Car {
    drive (){
        console.log("your can drive the car")
    }
}

let a = new Car()

a.drive()


class Bmw extends Car {
    drive(){
        console.log("you can drive the bmw ")
    }
}