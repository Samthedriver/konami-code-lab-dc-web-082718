const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

// // Keys for A, B, and C keys.
// const alphabet = ['a', 'b', 'c'];

// Keep track of index outside of the event handler.


function init() {
  // your code here
  let index = 0;
  document.body.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key === codes[index])
    {
      index++;

      if (index === codes.length) {
        alert("Hurray!");

        index = 0;
      }
    }
    else
    {
      index = 0;
    }
  });
}
