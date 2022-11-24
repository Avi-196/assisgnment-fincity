
// Write a function or class to transpose a given N-Dimension Array. 
// Please use your own assumptions to define an N-Dimension array data strucutre.

// Q>1 a = [[1,2],[3,4]];
// transpose(a, [1, 0]);
// display(a);
// [[1 3]
//  [2 4]]

function transpose(a) {
  
    const result = [];

    for (let i = 0; i < a[0].length; i++) {
      const emtyarr = []
      for (let j = 0; j < a.length; j++) {
        emtyarr.push(a[j][i]);
      }
      result.push(emtyarr)
    }
  
    return result

};

console.log(transpose([[1,2],[3,4]]))

// Q>2 
// a = [[1,2],[3,4]];
// transpose(a, [0, 1]);
// display(a);
// [[1 2]
//  [3 4]]

function transpose2(a) {
  
    const result = [];

    for (let i = 0; i < a[0].length; i++) {
      const emtyarr = []
      for (let j = 0; j < a.length; j++) {
        emtyarr.push(a[i][j]);
      }
      result.push(emtyarr)
    }
  
    return result

};

console.log(transpose2([[1,2],[3,4]]))

