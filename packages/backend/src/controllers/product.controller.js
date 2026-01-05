import axios from "axios";
import { asyncHandler } from "../middlewares/index.js";

const BASE_URL = process.env.API_URL;

export const getProducts = asyncHandler(async (req, res) => {
  const response = await axios.get(BASE_URL);
  res.status(200).json(response.data);
});

export const getProductById = asyncHandler(async (req, res) => {
  const response = await axios.get(`${BASE_URL}/${req.params.id}`);
  res.status(200).json(response.data);
});

export const createProduct = asyncHandler(async (req, res) => {
  const response = await axios.post(BASE_URL, req.body);
  res.status(201).json(response.data);
});

export const updateProduct = asyncHandler(async (req, res) => {
  const response = await axios.put(`${BASE_URL}/${req.params.id}`, req.body);
  res.status(200).json(response.data);
});

export const patchProduct = asyncHandler(async (req, res) => {
  const response = await axios.patch(`${BASE_URL}/${req.params.id}`, req.body);
  res.status(200).json(response.data);
});

export const deleteProduct = asyncHandler(async (req, res) => {
  await axios.delete(`${BASE_URL}/${req.params.id}`);
  res.status(200).json({ message: "Product deleted successfully" });
});

// console.log("API URL is:", process.env.API_URL);
