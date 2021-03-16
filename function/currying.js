
function add(a, b) {
    return a + b;
};

function createCurry() {
    var fn = arguments[0];
    var _args = [].slice.call(arguments, 1);
    var length = fn.length;
    
    return function() {
        var _allArgs = _args.slice(0);
        _allArgs = _allArgs.concat([].slice.call(arguments));
        if (arguments.length > 0 || _allArgs.length < length) {
            _allArgs.unshift(fn);
            return createCurry.apply(this, _allArgs);
        } else {
            return fn.apply(this, _allArgs);
        }
    }
}

const curryAdd = createCurry(add, 2);
let sum = curryAdd(3)(4)(5);    

console.log(sum);