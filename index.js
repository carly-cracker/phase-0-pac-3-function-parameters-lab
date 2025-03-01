
function introduction(name){
    return `Hi, my name is ${name}.`
}
console.log(introduction("aki"))

function introductionWithLanguage(name, language){
   return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguage("Aki","Ember.js"))

function introductionWithLanguageOptional(name, language = "Javascript"){
    return`Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageOptional ("gracie"))

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return`Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageOptional ("gracie", "Python"))
