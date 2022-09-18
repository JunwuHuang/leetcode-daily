var largestRectangleArea = function(heights) {
    let large = 0;
    let shift = [{ index: -1, height: -1 }];
    for(let i = 0; i < heights.length; i++) {
        // 队列中最后一个元素为非初始化元素
       while(shift[shift.length - 1].height !== -1 && shift[shift.length - 1].height > heights[i]) {
           const pop = shift.pop();
           large = Math.max(large, pop.height * (i - 1 - shift[shift.length - 1].index) );
       }
       shift.push({ index: i,height: heights[i] });
    }
    const top = shift[shift.length - 1].index;
    
    while(shift[shift.length - 1].height !== -1) {
        const pop = shift.pop();
        large = Math.max(large, pop.height * (top - shift[shift.length - 1].index));
    }
    return large
};
