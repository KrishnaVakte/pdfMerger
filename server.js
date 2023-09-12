const express = require('express')
const path=require('path')
const app = express()
const port = 3000
const multer =require('multer')
const upload = multer({dest : 'pdfs/'})
const {mergePdf} = require('./merge')

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname,'template')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'template/index.html'))
})

app.post('/merge', upload.array('pdfs', 12),  function (req, res, next) {
    let pdfs=[];
    for(item of req.files){
        pdfs.push(path.join(__dirname,item.path))
    }
    (async ()=>{
     let d= await mergePdf(pdfs)
     res.redirect(`http://localhost:3000/static/${d}.pdf`)
    }
    )()
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})