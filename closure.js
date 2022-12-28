//closures
// is combination of a funtions buddled with reference to its surronding state(lexigacal envinorment)
let b = 9;
function a() {
  function x() {
    function c() {
      console.log(b);
    }
    return c;
    // c();

  }
//   c();
//   x();
//   x()();
//   console.log(x());
  return x;
}

a()()();
