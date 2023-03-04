import axios from "axios";
async function create(body: any) {
    return await axios.post('https://api.supermomos-dev.com/interview/social', body);
}
async function get(body: any) {
    return await axios.post('https://api.supermomos-dev.com/interview/social', body);
}
export {
    create
}