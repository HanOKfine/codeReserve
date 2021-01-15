/**
 * 随机生成类真实姓名
 */
function getName(){
    let familyNames = new Array(
    "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", 
    "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
    "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", 
    "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
    "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦", 
    "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
    "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", 
    "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
    "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", 
    "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
    );
    let givenNames = new Array(
    "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛", 
    "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊", 
    "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政", 
    "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建", 
    "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋", 
    "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅", 
    "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡", 
    "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕", 
    "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵", 
    "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
    );
    let i = parseInt(50 * Math.random()) + parseInt(50 * Math.random());
    let familyName = familyNames[i];
    let j = parseInt(50 * Math.random()) + parseInt(50 * Math.random());
    let givenName = givenNames[j];
    let name = familyName + givenName;
    return name;
}
/**
 * 随机获取类真实电话号码
 */
function getPhoneNumber() {
    let prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    let i = parseInt(10 * Math.random());
    let prefix = prefixArray[i];
    for (let j = 0; j < 8; j++) {
    prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix;
}

/**
 * 随机生成类真实身份证号码
 */
function getIdCode(){
    let coefficientArray = [ "7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"];// 加权因子
    let lastNumberArray = [ "1","0","X","9","8","7","6","5","4","3","2"];// 校验码
    let address = "420101"; // 住址
    let birthday = "19810101"; // 生日
    let s = Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString();
    let array = (address + birthday + s).split(""); 
    let total = 0;
    for(i in array){
    total = total + parseInt(array[i])*parseInt(coefficientArray[i]);
    } 
    let lastNumber = lastNumberArray[parseInt(total%11)];
    return address + birthday + s + lastNumber;
}
/**
 * 随机生成类真实车牌号
 */
function getCarNubmer(){
    const citys = ["鄂","津","京","宁","浙","沪"];
    const en = ["A","B","C","D","E","F","G"];
    return citys[parseInt(Math.random()*6)]+en[parseInt(Math.random()*6)]+parseInt(Math.random()*10)+parseInt(Math.random()*10)+parseInt(Math.random()*10)+parseInt(Math.random()*10)+parseInt(Math.random()*10)+parseInt(Math.random()*10)
}


function getAddress(){
    const province = ["河北省","山西省","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","海南省","四川省","贵州省","云南省","陕西省","甘肃省","青海省","台湾省"];
    const city = ["安康市","安庆市","安顺市","安阳市","鞍山市","巴彦淖尔市","巴中市","白城市","白山市","白银市","百色市","蚌埠市","包头市","宝鸡市","保定市","保山市","北海市","本溪市","滨州市","沧州市","昌都地区","长春市","长沙市","长治市","常德市","常州市","巢湖市","朝阳市","潮州市","郴州市","成都市","承德市","池州市","赤峰市","崇左市","滁州市","达州市","大连市","大庆市","大同市","丹东市","德阳市","德州市","定西市","东莞市","东营市","鄂尔多斯市","鄂州市","防城港市","佛山市","福州市","抚顺市","抚州市","阜新市","阜阳市","甘南州","赣州市","固原市","广安市","广元市","广州市","贵港市","贵阳市","桂林市","哈尔滨市","哈密地区","海北藏族自治州","海东地区","海口市","邯郸市","汉中市","杭州市","毫州市","合肥市","河池市","河源市","菏泽市","贺州市","鹤壁市","鹤岗市","黑河市","衡水市","衡阳市","呼和浩特市","呼伦贝尔市","湖州市","葫芦岛市","怀化市","淮安市","淮北市","淮南市","黄冈市","黄山市","黄石市","惠州市","鸡西市","吉安市","吉林市","济南市","济宁市","佳木斯市","嘉兴市","嘉峪关市","江门市","焦作市","揭阳市","金昌市","金华市","锦州市","晋城市","晋中市","荆门市","荆州市","景德镇市","九江市","酒泉市","开封市","克拉玛依市","昆明市","拉萨市","来宾市","莱芜市","兰州市","廊坊市","乐山市","丽江市","丽水市","连云港市","辽阳市","辽源市","聊城市","临沧市","临汾市","临沂市","柳州市","六安市","六盘水市","龙岩市","陇南市","娄底市","泸州市","吕梁市","洛阳市","漯河市","马鞍山市","茂名市","眉山市","梅州市","绵阳市","牡丹江市","内江市","南昌市","南充市","南京市","南宁市","南平市","南通市","南阳市","宁波市","宁德市","攀枝花市","盘锦市","平顶山市","平凉市","萍乡市","莆田市","濮阳市","普洱市","七台河市","齐齐哈尔市","钦州市","秦皇岛市","青岛市","清远市","庆阳市","曲靖市","衢州市","泉州市","日照市","三门峡市","三明市","三亚市","汕头市","汕尾市","商洛市","商丘市","上饶市","韶关市","邵阳市","绍兴市","深圳市","沈阳市","十堰市","石家庄市","石嘴山市","双鸭山市","朔州市","四平市","松原市","苏州市","宿迁市","宿州市","绥化市","随州市","遂宁市","台州市","太原市","泰安市","泰州市","唐山市","天水市","铁岭市","通化市","通辽市","铜川市","铜陵市","铜仁市","吐鲁番地区","威海市","潍坊市","渭南市","温州市","乌海市","乌兰察布市","乌鲁木齐市","无锡市","吴忠市","芜湖市","梧州市","武汉市","武威市","西安市","西宁市","锡林郭勒盟","厦门市","咸宁市","咸阳市","湘潭市","襄樊市","孝感市","忻州市","新乡市","新余市","信阳市","兴安盟","邢台市","徐州市","许昌市","宣城市","雅安市","烟台市","延安市","盐城市","扬州市","阳江市","阳泉市","伊春市","伊犁哈萨克自治州","宜宾市","宜昌市","宜春市","益阳市","银川市","鹰潭市","营口市","永州市","榆林市","玉林市","玉溪市","岳阳市","云浮市","运城市","枣庄市","湛江市","张家界市","张家口市","张掖市","漳州市","昭通市","肇庆市","镇江市","郑州市","中山市","中卫市","舟山市","周口市","株洲市","珠海市","驻马店市","资阳市","淄博市","自贡市","遵义市"];
    const area = ["伊春区","带岭区","南岔区","金山屯区","西林区","美溪区","乌马河区","翠峦区","友好区","新青区","上甘岭区","五营区","红星区","汤旺河区","乌伊岭区","榆次区"]
    const road = ["爱国路","安边路","安波路","安德路","安汾路","安福路","安国路","安化路","安澜路","安龙路","安仁路","安顺路","安亭路","安图路","安业路","安义路","安远路","鞍山路","鞍山支路","澳门路","八一路","巴林路","白城路","白城南路","白渡路","白渡桥","白兰路","白水路","白玉路","百安路（方泰镇）","百官街","百花街","百色路","板泉路","半淞园路","包头路","包头南路","宝安公路","宝安路","宝昌路","宝联路","宝林路","宝祁路","宝山路","宝通路","宝杨路","宝源路","保德路","保定路","保屯路","保屯路","北艾路"];
    const home = ["金色家园","耀江花园","阳光翠竹苑","东新大厦","溢盈河畔别墅","真新六街坊","和亭佳苑","协通公寓","博泰新苑","菊园五街坊","住友嘉馨名园","复华城市花园","爱里舍花园"]

    let province_index = Math.random()*province.length;
    let city_index = Math.random()*city.length;
    let area_index = Math.random()*area.length;
    let road_index = Math.random()*road.length;
    let home_index = Math.random()*home.length;
    return province[parseInt(province_index)] + city[parseInt(city_index)] + area[parseInt(area_index)] + road[parseInt(road_index)] + home[parseInt(home_index)];

}



function getFalseData(){
    return `驾驶员${getName()},驾驶${getCarNubmer()}位于${getAddress()}停车时间过长`
}

console.log(getFalseData())