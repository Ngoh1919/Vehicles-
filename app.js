import express from 'express';


import { PORT } from './config/env.js';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import img from './routes/img.routes.js';


const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/img', img);






app.get('/', (req, res) => {
    res.send('Hello World?');
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);

export default app;