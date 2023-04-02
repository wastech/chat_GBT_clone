import { Router } from 'express';
import express, { Request, Response } from "express";
import { generateImage } from "../openai";

const router = Router();
router.post("/generate-image", async (req: Request, res: Response) => {
    try {
      const prompt = req.query.prompt as string;
      const data = await generateImage(prompt);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred");
    }
  });


export { router as imageRoute };
