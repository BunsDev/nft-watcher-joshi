import axios from "axios";

export default axios.create({
    baseURL: "https://deep-index.moralis.io/api/v2",
});