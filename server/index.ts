import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { exampleRouter } from './routes';

const PORT = 4000;

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/v1', exampleRouter);

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
server.on('error', console.error);

export default app;
