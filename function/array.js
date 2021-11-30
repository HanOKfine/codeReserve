let array = [1,2,3,3,1,2,1,2,3,2];

//数组去重 方法一
let uniqueArray = Array.from(new Set(array));

console.log(uniqueArray);

//数组去重 方法二
let uniqueArray1 = [...new Set(array)];

console.log(uniqueArray1);

//数组中替换指定的值
array.splice(0,2, 5, 6,7);

console.log(array);

let arrays = [[1,2,3],[4,5,6]];

console.log(typeof [] === 'object')

const b = true;
console.log(Object.prototype.toString.call(b))


//拆分
const arr = [1,2,3,4,5,6,7]

const temp = arr.map((item,index)=>{
    if(index+1 !== arr.length)return [item, arr[index+1]]
}).filter(item=>item)
console.log(temp)

console.log(arr.map((item, index) => [item, arr[index+1]]).slice(0 , arr.length-1))


console.log(arr.reduce((pre,cur, index)=>{
    console.log('pre:',pre)
    console.log('cur:',cur)
    console.log('index:',index)
    return [arr[index-1], cur]
}))



let arr = [1,2,[3,4,[5,[6]]]]
console.log(arr.flat(3))



console.log(Array.from(new Array(8)).map((item, index)=>index+1))



//阿拉伯数字转换为简写汉字
function ArabiaToSimplifiedChinese(Num) {
    for (let i = Num.length - 1; i >= 0; i--) {
        Num = Num.replace(",", "")//替换Num中的“,”
        Num = Num.replace(" ", "")//替换Num中的空格
    }    
    if (isNaN(Num)) { //验证输入的字符是否为数字
        //alert("请检查小写金额是否正确");
        return;
    }
    //字符处理完毕后开始转换，采用前后两部分分别转换
    let part = String(Num).split(".");
    let newchar = "";
    //小数点前进行转化
    for (let i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
            //alert("位数过大，无法计算");
            return "";
        }//若数量超过拾亿单位，提示
        let tmpnewchar = ""
        let perchar = part[0].charAt(i);
        switch (perchar) {
            case "0":  tmpnewchar = "零" + tmpnewchar;break;
            case "1": tmpnewchar = "一" + tmpnewchar; break;
            case "2": tmpnewchar = "二" + tmpnewchar; break;
            case "3": tmpnewchar = "三" + tmpnewchar; break;
            case "4": tmpnewchar = "四" + tmpnewchar; break;
            case "5": tmpnewchar = "五" + tmpnewchar; break;
            case "6": tmpnewchar = "六" + tmpnewchar; break;
            case "7": tmpnewchar = "七" + tmpnewchar; break;
            case "8": tmpnewchar = "八" + tmpnewchar; break;
            case "9": tmpnewchar = "九" + tmpnewchar; break;
        }
        switch (part[0].length - i - 1) {
            case 0: tmpnewchar ; break;
            case 1: if (parseInt(perchar) !== 0) tmpnewchar = tmpnewchar + "十"; break;
            case 2: if (parseInt(perchar) !== 0) tmpnewchar = tmpnewchar + "百"; break;
            case 3: if (parseInt(perchar) !== 0) tmpnewchar = tmpnewchar + "千"; break;
            case 4: tmpnewchar = tmpnewchar + "万"; break;
            case 5: if (parseInt(perchar) !== 0) tmpnewchar = tmpnewchar + "十"; break;
            case 6: if (parseInt(perchar) !== 0) tmpnewchar = tmpnewchar + "百"; break;
            case 7: if (parseInt(perchar) !== 0) tmpnewchar = tmpnewchar + "千"; break;
            case 8: tmpnewchar = tmpnewchar + "亿"; break;
            case 9: tmpnewchar = tmpnewchar + "十"; break;
        }
        newchar = tmpnewchar + newchar;
    }   
    //替换所有无用汉字，直到没有此类无用的数字为止
    while (newchar.search("零零") !== -1 || newchar.search("零亿") !== -1 || newchar.search("亿万") !== -1 || newchar.search("零万") !== -1) {
        newchar = newchar.replace("零亿", "亿");
        newchar = newchar.replace("亿万", "亿");
        newchar = newchar.replace("零万", "万");
        newchar = newchar.replace("零零", "零");      
    }
    //替换以“一十”开头的，为“十”
    if (newchar.indexOf("一十") === 0) {
        newchar = newchar.substr(1);
    }
    //替换以“零”结尾的，为“”
    if (newchar.lastIndexOf("零") === newchar.length - 1) {
        newchar = newchar.substr(0, newchar.length - 1);
    }
    return newchar;
}


console.log(Arabia_To_SimplifiedChinese(100))