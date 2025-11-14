const ex= require("express");

const app=ex();

app.get("/sum",(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    const sum=a+b;
    res.send(sum);
});

app.listen(3000);