/**
 * 转换url参数为对象
 * @param {*} url 入参
 */
function getUrlParam(url){
    let paramObj = {};
    let matchList = url.match(/([^\?&]+)=([^&]+)/g) || [];
    for (let i = 0, len = matchList.length; i < len; i++) {
        let r = matchList[i].match(/([^\?&]+)=([^&]+)/);
        paramObj[r[1]] = r[2];
    }
    return paramObj;
}

let url = "https://webpack.js.org/configuration/resolve/#resolve-alias?param=12211&code=001";
let paramObj = getUrlParam(url);
console.log("paramObj:",paramObj); // {param : 12211, code : 001}


/*
    获取url中 参数的值
    key: 参数前面的key
    return: 对应key的value
*/
function getUrlParam(key) {
    let paramObj = {};
    let matchList = window.location.href.match(/([^\?&]+)=([^&]+)/g) || [];
    for (let i = 0, len = matchList.length; i < len; i++) {
        let r = matchList[i].match(/([^\?&]+)=([^&]+)/);
        paramObj[r[1]] = r[2];
    }
    if (key) {
        return paramObj[key];
    } else {
        return paramObj;
    }
}