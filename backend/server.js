const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const {OpenAI}= require('openai');


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
    // apiKey:'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'
});
// console.log(process.env.API_KEY)

// const openai = new require("openai")({
//     apiKey: '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'
//   });

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.post('/chat',async(req,res)=>{
    const {search}=req.body;
    // console.log(search)
    const completion= await openai.completions.create({
        model: 'text-davinci-003',
        prompt:search,
    });

    res.send(completion.choices[0].text);
    // res.send(search);

});

const port = 3000;
app.listen(port,()=>{
    console.log('server on port 3000');
})