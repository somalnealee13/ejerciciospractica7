import readline from "readline";




const interfaz = readline.createInterface ({
    input : process.stdin,
    output: process.stdout
})

const verificarUsuario = (tipoUsuario, totalApagar) => {


    if (tipoUsuario == "premium" ){
        let resultado;

        //el descuento va ha ser igual a 30%

        let descuento = 30
        let subtotal = (totalApagar*descuento)/100

        resultado = totalApagar - subtotal
        console.log(`su total a pagar es ${resultado}`)
    
    }else if (tipoUsuario == "normal") {
        
    }else if (tipoUsuario == "comun") {
        
    }else{

        console.log("porfavor ingrese un usuario valido");
    }
    
    
    }




const preguntarAlUsuario = () =>{

   interfaz.question("porfavor ingrese el tipo de usuario\nnormal, \npremium",(tipoUsuario) =>{

    
    interfaz.question("hola ingrese su total a pagar ", (total) =>{
    
        let totalApagar = parseFloat(total)

        verificarUsuario(tipoUsuario, total)
        
        }) 

   })

}

preguntarAlUsuario()