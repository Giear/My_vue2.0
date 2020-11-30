import axios from "axios";

let http = axios.create({
  baseURL: "http://10.71.246.229:8080",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  transformRequest: [
    function(data) {
      return JSON.stringify(data);

      // let newData = "";
      // for (let k in data) {
      //   if (data.hasOwnProperty(k) === true) {
      //     newData +=
      //       encodeURIComponent(k) + "=" + encodeURIComponent(data[k]) + "&";
      //   }
      // }
      // return newData;
    }
  ]
});

function apiAxios(method, url, params) {
  return http({
    method: method,
    url: url,
    data: method === "POST" ? params : null,
    params: method === "GET" ? params : null
  })
    .then(function(res) {
      return Promise.resolve(res);
    })
    .catch(function(err) {
      return Promise.reject(err);
    });
}

export default {
  get(url, params) {
    return apiAxios("GET", url, params);
  },
  post(url, params) {
    return apiAxios("POST", url, params);
  },
  put(url, params) {
    return apiAxios("PUT", url, params);
  },
  delete(url, params) {
    return apiAxios("DELETE", url, params);
  }
};
