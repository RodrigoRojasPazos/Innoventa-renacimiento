require('dotenv').config();
const express = require("express");
const http = require('http'); 
const cors = require('cors');
const multer = require('multer');
const path = require('path'); 

const app = express();
const httpServer = http.createServer(app);  


app.use(express.json());
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.urlencoded({ extended: true }));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); 
  },
});
const upload = multer({ storage: storage });


app.post('/upload-image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: 'No se recibió ningún archivo' });
  }

  const imageUrl = `/uploads/${req.file.filename}`; 
  res.send({ url: imageUrl });
});


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Importar y usar las rutas de la API
const endPoints = require('./routes/endPoints');
app.use('/', endPoints);


// Backend siempre usa el puerto 4000 internamente (nginx en puerto 80 hace proxy)
const PORT = 4000;


httpServer.listen(PORT, () => {
  console.log("El servidor está en el puerto " + PORT);
});

module.exports = app;
