import express from 'express';
import { GetUserResponseType } from '../generated';
import ExampleMock from '../mocks/example.json';

export const exampleRouter = express.Router();

exampleRouter.get('/example', (_req, res) => {
  const response: GetUserResponseType = ExampleMock;
  res.json(response);
});
