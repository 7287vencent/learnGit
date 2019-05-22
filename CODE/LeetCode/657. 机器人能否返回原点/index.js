/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let rArr = moves.match(/R/g) || []
    let lArr = moves.match(/L/g) || []
    let uArr = moves.match(/U/g) || []
    let dArr = moves.match(/D/g) || []
    // console.log(rArr)
    
    return rArr.length === lArr.length && uArr.length === dArr.length
    
};

console.log(judgeCircle('UDR'))