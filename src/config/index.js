// let apiServerPath = "http://61.50.135.114:50015";
let apiServerPath = "http://172.16.14.52:8091";

if (apiServerPath === "") {
    apiServerPath = window.location.protocol + "//" + window.location.host;
}
console.log(apiServerPath)
export default apiServerPath;