import  express  from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import env from 'dotenv'
import { Configuration,OpenAIApi, } from "openai";
const app = express()
env.config()
app.use(cors())
app.use(bodyParser.json())
// Configuration openai Api
const configuration = new Configuration({
    organization: process.env.API_ORGANISATION,
    apiKey: process.env.API_KEY
})
const openai = new OpenAIApi(configuration)
// listening
app.listen("3080", () => console.log("listening to the port 3080"))
// Dummy routes to test
app.get("/", (req,res) => {
    res.send("Hello World")
})
// Post routes for making a requests
app.post('/', async (req,res) => {
    const {message} = req.body
    try {
        const response = await openai.createCompletion({
            model:"text-davinci-003",
            prompt: `${message}`,
            max_tokens:100,
            temperature:.5
        })
        res.join({message: response.data.choices[0].text})
    } catch (err) {
        console.log(err)
        res.send(err).status(400)
    }
})