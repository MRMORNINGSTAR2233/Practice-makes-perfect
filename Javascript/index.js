import express from 'express';
import path from "path";

const app = express();

app.get("/",(res,req)=>{
    const pathloc = path.resolve();
    res.sendFile(path.join(pathloc,"./index.html"));
});


app.listen(5009,()=>{
    console.log("Server is working");
});