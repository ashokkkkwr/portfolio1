const client = require('./connection.js')
const bodyParser = require('body-parser')
const express = require('express')
const app=express();
app.use(bodyParser.json())
app.listen(3000,()=>{
    console.log("server is now listening to the port 3000")
})

app.get('/users',(req,res)=>{
    client.query(`Select * from users`,(err,result)=>{
        if(!err){
            res.send(result.rows);
        }
        else{
            console.log(err)
        }
    });
    client.end;  
})
app.get('/users/:id',(req,res)=>{
    client.query(`select * from users where id=${req.params.id}`,(err,result)=>{
        if(!err){
            res.send(result.rows)
        }
        else{
            console.log(err)
        }
        client.end
    })
    
})
app.post('/users',(req,res)=>{
    const user = req.body;
    const insertQuery = 'INSERT INTO users (id,firstname,lastname,location) values ($1,$2,$3,$4)';
    const values=[user.id,user.firstname,user.lastname,user.location]
    client.query(insertQuery,values,(err,result)=>{

        if(!err){
            res.send('Insertion successfull')
        }else{
            console.log(err.message)
        }
        client.end;
    })
})
app.put('/users/:id',(req,res)=>{
    let userId= req.params.id;
    let user = req.body;
    let updateQuery = 'UPDATE users set firstname=$1,lastname=$2,location=$3 WHERE id=$4 ';
    const values=[user.firstname,user.lastname,user.location,userId]
    client.query(updateQuery,values,(err,result)=>{
        if(!err){
            res.send('Update successfull')
        }else{
            console.log(err.message)
        }
        client.end
    })
})
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
  
    const deleteQuery = 'DELETE FROM users WHERE id = $1';
    const values = [userId];
  
    client.query(deleteQuery, values, (err, result) => {
      if (!err) {
        res.send('Deletion successful');
      } else {
        console.log(err.message);
        res.status(500).send('Deletion failed');
      }
    });
  });
client.connect();
