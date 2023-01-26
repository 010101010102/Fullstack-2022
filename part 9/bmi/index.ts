/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
const app = express();

import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const PORT = 3003;

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { weigth, height } = req.query;

  if (isNaN(Number(weigth)) || isNaN(Number(height))) {
    return res.send({ error: "malformatted parameters" }).status(400);
  }

  const bmi = calculateBmi(Number(height), Number(weigth));

  return res.send({
    weigth, height, bmi
  });
});
