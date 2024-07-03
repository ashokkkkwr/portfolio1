// src/index.ts
import express from 'express';
import mongoose from 'mongoose'
import userRoute from './controller/user.controller'
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.use('/api',userRoute);

mongoose.connect('mongodb://localhost:27017/jvaye',)
.then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
}).catch((error)=>{
    console.error(error)
})
console.log('lala')
console.log('ssjd');
