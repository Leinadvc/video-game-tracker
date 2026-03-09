import express from 'express';
import cors from 'cors';
import path from 'path';
import listEndpoints from 'express-list-endpoints';

const app = express();
const port = process.env.PORT || 3000;

// CORS
app.use(cors({
    origin: ["http://localhost:8080", "http://127.0.0.1:8080", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// JSON middleware
app.use(express.json());

// uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// 🔵 Servir frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// rutas API
import routes from './routes';
app.use('/api', routes);

// ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// iniciar servidor
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
    console.log(`✅ Database connection established`);

    const endpoints = listEndpoints(app);
    console.table(endpoints);
});
