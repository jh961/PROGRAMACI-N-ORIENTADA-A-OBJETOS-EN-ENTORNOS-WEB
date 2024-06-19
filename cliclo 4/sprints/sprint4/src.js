const express =require('express');
const app = express();
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get(
    '/api/agricultural-inputs/technical-visit',
    (req,res)=>{
        res.json(technical_visit);
    }
);

app.post(
    '/api/agricultural-inputs/technical-visit',
    (req, res) => {
        const visitaNueva = req.body;
        technical_visit.push(visitaNueva);
        res.status(200).json(technical_visit);
    }
);

module.exports=app;