import express from "express";

const app =express();

app.use(express.json())
const PORT = 3000;

let problems = [
    {
        id:0,
        title:"Data1",
        desccription:'Hello World'
    },
    {
        id:1,
        title:"Data2",
        desccription:'Hello World'
    }
]

app.get('/api/problems',(req,res)=>{
    res.json(problems)
})

app.post('/api/problems',(req,res)=>{
        const body = req.body;
        problems = [
            ...problems,
            body
        ]
        res.json(problems);
})

app.put('/api/problems/:id',(req,res)=>{
    const body = req.body;
    const id = req.params.id;
    problems = [...problems,body]
    problems = problems.map((p)=>{
        if(p.id==id)
        {
            return {
                id,
                ...body
            }
            return p
        }
    })

    res.json(problems)
})
app.listen(PORT,()=>{
    console.log(`server up and running on ${PORT}`)
})