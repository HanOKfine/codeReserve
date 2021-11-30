
var f = function(s) {
    return s.replace(/-\w/g, function(x) {
        return x.slice(1).toUpperCase();
    })
}

var s1 = "get-element-by-id"

console.log(f(s1))