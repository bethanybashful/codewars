// Area or perimeter

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example (Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9

// My solution
const areaOrPerimeter = function(l, w) {
  if (l === w) {
    return l * w
  } else {
    return (2 * (l + w))
  }
};

// Best solutions
const areaOrPerimeter = function(l, w) {
  return l == w ? l * w : 2 * (l + w)
};

const areaOrPerimeter = (l, w) => l === w ? l * w : 2 * (l + w);