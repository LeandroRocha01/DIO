function getAdmins(map){
    let admins = [];
    for([key, value] of map){//acessa a key e valor 
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');

console.log(getAdmins(usuarios));