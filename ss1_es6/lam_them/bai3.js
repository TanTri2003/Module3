const sv1={
    firstName: ' John',
    gender: 'male',
    degree:'bachelor',
    english:'English'
}
const sv2={
    name:'John',
    gender:'male',
    degree:'bachelor',
    english:'English'   
}
const getInfor=({ firstName = "Quân", degree = "NA" } = {})=> {
    console.log("First Name:", firstName);
    console.log("Degree:", degree);
}
getInfor(sv1)
getInfor(sv2)