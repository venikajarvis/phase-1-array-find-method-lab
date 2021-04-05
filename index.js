// // Code
// function superbowlWin(recordArray) {
//     while (recordArray.result === "W") {
//         if (recordArray.result != "W") {
//             return false;
//         }
//     }
//     return array.find();
// }

// record.find(superbowlWin);


// this should return the object that makes superbowlWin true - how would I show that result?
// I tried console log
// function superbowlWin(recordArray) {
//     recordArray.find(isWin)
// }

// function isWin(gameObj) {
//     return gameObj.result === "W"
// }

// //1ST WAY
// function superbowlWin(recordArray) {
//     const result = recordArray.find(isWin)
//     if (result) /* result here will check if it's truthy or falsey */ {
//          return result.year
//     } else {
//         return result;
//     }
// }

// function isWin(gameObj) {
//     return gameObj.result === "W"
// }


// //2ND WAY
// function superbowlWin(recordArray) {
//     const result = recordArray.find(isWin)
//     return result ? result.year : result 
//     /* line 41 === ternery statement; shorthand for a simple if...else - this is the same as lines 27-31 */
// }

// function isWin(gameObj) {
//     return gameObj.result === "W"
// }


// //3RD WAY
// function superbowlWin(recordArray) {
//     const result = recordArray.find(function(gameObj) {
//         return gameObj.result === "W"
//     })
//     return result ? result.year : result 
// }


//4TH WAY
function superbowlWin(recordArray) {
    const result = recordArray.find(gameObj => gameObj.result === "W")
    return result ? result.year : result 
}

// //5TH WAY; w/o using a variable
// function superbowlWin(recordArray) {
//     return recordArray.find(gameObj => gameObj.result === "W") ? recordArray.find(gameObj => gameObj.result === "W").year : undefined 
// }