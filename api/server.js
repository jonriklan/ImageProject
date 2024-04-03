const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080, ()=>{
    console.log("Server is running");
    }
);

const uri ="";
mongoose.connect(uri, {
    useNewUrlParser: true
}).then(()=>{
    console.log("Connected to Database");
}).catch(console.error);

const Image = require('./models/image');

app.get('/images', async(req, res)=>{
    const images = await Image.find();
    res.json(images);
});


app.post('/image/new', (req , res, next)=>{
    const image = new Image({
        title: req.body.title,
        author: req.body.author,
        img: req.body.img,
    });
    image.save();

    res.json(image);
});

app.delete('/image/delete/:id', async(req,res)=>{
    const result = await Image.findByIdAndDelete(req.params.id);
    res.json(result);
})

app.delete('/image/delete',async (req, res)=>{
    const images = await Image.deleteMany({});
    res.json(images);
})

app.put('/image/changeTitle/:id', async(req, res)=>{
    const image = await Image.findById(req.params.id);
    if(req.body.title){
        image.title = req.body.title;
    }
    image.save();
    res.json(image);
});

app.listen(3001, ()=>{
    console.log("server started on port 3001");
});