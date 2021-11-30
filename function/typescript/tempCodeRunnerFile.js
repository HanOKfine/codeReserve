var merge = function(intervals) {
    if(intervals.length === 0)return [[]]
    intervals.sort((a, b)=>a[0]-b[0])
    let index = 0
    let res = []
    let start = intervals[0][0]
    let end = intervals[0][1]
    for(let i = 0; i<intervals.length; i++){
       if(end>=intervals[i][0]){
        // console.log('start',start)
        // console.log(intervals[i][1])
        end = Math.max(intervals[i][1], end)
       }else{
           console.log('start,end',start,end)
        res.push([start, end])
        index++;
        start = intervals[i][0];
        end = intervals[i][1];
       }
    }
    res[index] = [start, end];
    return [...res]
};

console.log(merge([[1,4],[4,5]]))