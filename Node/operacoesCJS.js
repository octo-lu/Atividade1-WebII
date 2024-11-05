function calculateAge(dt){

    var today = new Date();
    var birthDate = new Date(dt);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
  
    return age;
}

module.exports = {

    calculateAge
}