import {
    getCountryEndPoints,
    limitPerPage,
    searchKeyword,
    pageSize,
} from "../lib/const/endPoints";
import dotenv from 'dotenv';
import api from "./api";

// Here congig dotenv to access env variable
dotenv.config();

// Set Base URL Here
const baseUrl = process.env.REACT_APP_API_URL;

/**
 *
 * @param {*} payload
 */

// Get country API
export const getCountry = ({ page, limit, serachValue }) =>
    api(baseUrl).get(`${getCountryEndPoints}${pageSize}${page}${limitPerPage}${limit}${serachValue ? `${searchKeyword}${serachValue}` : ""}`);