const sw =  require('stopword')
const INDEX = "features_profile"
const TYPE = "labels"

const generateCascadePhrase = (label)=>{
//console.log(label)
const preprocessedOldString = label.replace(/\/|\-/g,"")
const oldString = preprocessedOldString.match(/\S+/g)
const newString = sw.removeStopwords(oldString,sw.es)
const numSting = newString.length
let cascadePhrase = []

for(let i = 0 ; i<numSting ; i++){
  cascadePhrase.push(newString.slice(i,numSting).join(' '))
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