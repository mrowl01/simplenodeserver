const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());


app.get('/', (req, res) => {
	res.send('server is running');
})

app.post('/test', (req,res)=>{
	console.log(req.body)
})

app.listen(4000, function(){
	console.log('server running');
});