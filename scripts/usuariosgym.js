let usuarios = [];
function Usuario(matricula, nombre, apellido, nacimiento, celular, correo, plan) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.celular = celular;
    this.correo = correo;
    this.plan = plan;
}

function agregarUsuario() {
    let matricula = document.getElementById("txtMatricula").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let nacimiento = document.getElementById("txtNacimiento").value;
    let celular = document.getElementById("txtCelular").value;
    let correo = document.getElementById("txtCorreo").value;
    let plan = document.getElementById("txtPlan").value;

    let usuario = new Usuario(matricula, nombre, apellido, nacimiento, celular, correo, plan);
    usuarios.push(usuario);

    alert("El Usuario ha sido agregado");
    limpiarcampos();
}

function mostrarUsuarios () { 
    let listado = "";
    for(usuario of usuarios){
        for(let prop in usuario){
            listado = listado + prop.toUpperCase() + ": " + usuario[prop] + ","}
    listado = listado + "\n";
}
alert (listado);
}

function limpiarcampos (){
    document.getElementById("txtMatricula").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtNacimiento").value = "";
    document.getElementById("txtCelular").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtPlan").value = "";
}