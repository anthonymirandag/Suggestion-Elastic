const { Client } = require('@elastic/elasticsearch')
const {generateBuckects} = require('./utils')
const {features} = require('./data')
const  main = async()=>{
  try{
    
    const client = new Client({
      cloud: {
        id: ':dXMtZWFzdC0xLmF3cy5mb3VuZC5pbyQ5ZmQ1OTY5MjE1NjQ0YWMwOGM5YTgxMzVhYjIxMTBkYiQ5YjQ4YTQ2OTU3ZDA0YzQ3ODMzMmFiMGNiZTMyZDU1Yg==',
      },
      auth: {
        username: 'elastic',
        password: 'Jim6b2BbbXRwIulKJvWcCaLG'
      }
    })
/*     const response = await client.search({
      index : 'features_profile',
      body : {
        query: {
          match_all: {}
        }
      }
    }) */
    
    
    const body = generateBuckects(features)
    console.log(body)
    const {body: bulkResponse} = await client.bulk({
    refresh : true,
    body
    })
    console.log(bulkResponse)
  }catch(err){
    console.log(err)
  }
/* console.log(
const sw =  require('stopword')esponse.body.hits)
const preprocessedOldString = "mineria /   petroleo".replace(/\/|\-/g,"")
const oldString = preprocessedOldString.match(/\S+/g)
const newString = sw.removeStopwords(oldString,sw.es)
const numSting = newString.length
let cascadePhrase = []

for(let i = 0 ; i<numSting ; i++){
  cascadePhrase.push(newString.slice(i,numSting).join(' '))
}
console.log(cascadePhrase) */
}
main()