const express =require('express');
const app = express();
const PORT=process.env.PORT || 5000;
const appRoute=require('./routes/route.js');

app.use(express.json());
//routes
app.use('/api',appRoute);
app.listen(PORT,()=>{
    console.log(`Server has started ${PORT}`)
})