
/**
 * 深拷贝 - 递归复制
 * param: obj 数组/对象
 */
function deepCopyByCycle(obj){
    let result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === "object" && obj[key]!==null) {
                result[key] = this.deepCopy(obj[key]);//递归复制
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

/**
 * 深拷贝 - json转换
 * param: obj 数组/对象
 * ps: 无法拷贝对象中的方法
 */
function deepCopyByJson(obj){
    return JSON.parse(JSON.stringify(obj));
}