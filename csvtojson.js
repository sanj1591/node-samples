/* Method 1 */

// const csvtojson = require('csvtojson')
// const fs = require('fs')
// const path = require('path')
// const converter=csvtojson({
//    flatKeys:true
// })
// const csvfilepath = path.join(__dirname,'customer-data.csv')
// let buff = []
// csvtojson()
// .fromFile(csvfilepath)
// .on('data',(jsonObj)=>{
//     buff.push(jsonObj)
//     console.log(buff.length)
//     fs.writeFileSync(path.join(__dirname, 'customer-data.json'), buff)
// })
// .on('done',(error)=>{
//    fs.appendFileSync(path.join(__dirname, 'customer-data.json'),)
// })

/* Method 1 */

const csvFilePath = 'customer-data.csv'
const fs = require('fs')
const csv = require('csvtojson')

let arr = []

csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    arr.push(jsonObj)
    
})
.on('done',(error)=>{
	if(error) return process.exit(1)
		console.log(arr.length)
    fs.writeFile('customer-data.json', JSON.stringify(arr,null,2),(error)=>{
    	if(error) return process.exit(1)
    		console.log('done')
    	process.exit(0)
    })
})