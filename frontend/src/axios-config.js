import axios from "axios"

axios.defaults.baseURL = "https://memories-95kh.onrender.com/memories"

axios.defaults.headers.post["Content-Type"] = "application/json"

axios.defaults.timeout = 10000

export default axios