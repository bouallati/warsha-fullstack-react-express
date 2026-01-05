import axios from "axios";

const BASE_URL = process.env.API_URL;

export const getProducts = async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const response = await axios.post(BASE_URL, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.patch(
      `${process.env.API_URL}/${id}`,
      req.body
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error patching product" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};
