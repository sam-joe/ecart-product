import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = import.meta.env.VITE_API_END_POINT;

const GET = (reducer_name: string, endpoint: string = "") =>
  createAsyncThunk(reducer_name, async () => {
    const response = await axios
      .get(base_url + endpoint)
      .then((res) => res.data);

    return response;
  });

const POST = (reducer_name: string, endpoint: string, body: any = {}) =>
  createAsyncThunk(reducer_name, async () => {
    const response = await axios
      .post(base_url + endpoint, body)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      });
    return response;
  });

const PUT = (reducer_name: string, endpoint: string, body: any = {}) =>
  createAsyncThunk(reducer_name, async () => {
    const response = await axios
      .put(base_url + endpoint, body)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      });
    return response;
  });
const DELETE = (reducer_name: string, endpoint: string) =>
  createAsyncThunk(reducer_name, async () => {
    const response = await axios
      .delete(base_url + endpoint)
      .then((res) => res.data);

    return response;
  });

export { GET, POST, PUT, DELETE };
