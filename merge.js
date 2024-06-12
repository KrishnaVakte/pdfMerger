const PDFMerger = require('pdf-merger-js');
const path = require('path')
var merger = new PDFMerger();

let mergePdf = async (p) => {
  for(item of p){
     await merger.add(item);  //merge all pages. parameter is the path to file and filename.
  }
let d = new Date().getTime()
await merger.save(path.join(__dirname,`public/${d}.pdf`)); //save under given name and reset the internal document
return d;
}
module.exports = {mergePdf}