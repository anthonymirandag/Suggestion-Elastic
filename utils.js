const sw =  require('stopword')
const INDEX = "features_profile"
const TYPE = "labels"
const INDEX_PROFILE = "laborum"
const TYPE_PROFILE = "profile"
const TOTAL_PROFILE = 500
const generateRand = (max)=>{
  return parseInt(Math.random()*max);
}
const getRandomElement  = (array)=>{
  const length =  array.length
  const index = generateRand(length)
  return array[index]
}
const generateBulksProfile = (profiles)=>{
let arrBulks = []
const { names, 
        lastnames, 
        experiences:{
          industrias,
          puestos
        },
        educations :{
          conocimientos,
          grados,
          universidades
        } } = profiles
for(let i = 0 ; i<TOTAL_PROFILE ; i++  ){
  const name = getRandomElement(names)
  const lastname = getRandomElement(lastnames)
  let experiences = []

  const industry = getRandomElement(industrias)
  const job = getRandomElement(puestos)
  const knowledge = getRandomElement(conocimientos)
  const degree =  getRandomElement(grados)
  const university =  getRandomElement(universidades)
  const 
}

let doc = {
    name,
    lastname,
    education:{
      conocimientos,
      grados,
      universidades
    },
    experiences : {
      industrias,
      puestos
    }
  }
  arrBulks.push(...[{ index: { _index: INDEX_PROFILE,_type : TYPE_PROFILE} }, doc])

}
const generateCascadePhrase = (label)=>{
//console.log(label)
const preprocessedOldString = label.replace(/\/|\-/g,"")
const oldString = preprocessedOldString.match(/\S+/g)
const arrString = sw.removeStopwords(oldString,sw.es)
const numSting = newString.length
let cascadePhrase = []
let subPhrase = label
const lengthLabel = label.length
for(let i = 0 ; i<numSting ; i++){
  const indexInit = label.indexOf(arrString[i])
  subPhrase = label.substring(indexInit,lengthLabel)
  cascadePhrase.push(subPhrase)
}
return cascadePhrase
}
const generateBuckects  = (features)=>{
 let body = [] 
 features.forEach(feature => {
   const {property , labels} = feature
   let arrBucks = []
   labels.forEach((label)=>{
      const {name,population} = label
      const cascadePrase = generateCascadePhrase(name)
      let doc = {
        label : name,
        property : property,
        suggestion_label : {
        input :cascadePrase,
        contexts: {
          property: [property] 
        },
        weight: Math.ceil(population * 20/4000)
        }
       }
       arrBucks.push(...[{ index: { _index: INDEX,_type : TYPE} }, doc])
   })
   body.push(...arrBucks)
 });
// console.log(body)
 return body
}
module.exports = {
  generateBuckects,
  generateCascadePhrase
}