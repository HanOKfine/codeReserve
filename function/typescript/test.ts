function consoleLog(nameArray: Array<string>): Array<string>{
    return nameArray.map(name=>'hello '+name)
}
let names = ['mike','sherly','aily']
console.log(consoleLog(names))
let str: Array<string> = [];
str = ['hello']

console.log(str)


let arr = [1,2,3,4,5,6];
console.log(
    arr.map((item, index)=>[item,arr[index+1]]).slice(0, arr.length-1)
)






let template: string = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}

function render(template, data) {
    const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
    if (reg.test(template)) { // 判断模板里是否有模板字符串
      const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
      template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
      return render(template, data); // 递归的渲染并返回渲染后的结构
    }
    return template; // 如果模板没有模板字符串直接返回
  }

  console.log(render(template, data)); // 我是姓名，年龄18，性别undefined



class Subject{
    name: string;
    observers: Array<Observer>;
    state: string;
    constructor(name){
        this.name = name
        this.observers = []
        this.state = 'XXXX'
    }
    // 被观察者要提供一个接受观察者的方法
    attach(observer: Observer){
        this.observers.push(observer)
    }

    // 改变被观察着的状态
    setState(newState){
        this.state = newState
        this.observers.forEach(o=>{
        o.update(newState)
        })
    }
}


class Observer{
    name: string;
    constructor(name){
      this.name = name
    }
  
    update(newState){
      console.log(`${this.name}say: ${newState}`)
    }
}

// 被观察者 灯
let sub = new Subject('灯')
let mm = new Observer('小明')
let jj = new Observer('小健')


// 订阅 观察者
sub.attach(mm)
sub.attach(jj)

sub.setState('灯亮了来电了')