 const obj = {}

 //判断是否为对象 
 console.log(Object.prototype.isPrototypeOf(obj))
 //判断对象内是否有属性
 console.log(Object.keys(obj).length === 0) // 该对象为空