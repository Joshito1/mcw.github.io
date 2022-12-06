const arr = [
  "Hello World!",
  "Who Voted for phantoms!!",
  "Who likes axolotles?",
];
const el = document.querySelector("#status");

// `log` accepts and array of words, and an element
function log(arr, el) {
  // Makes a copy of that array
  let copy = [...arr];

  // Main loop that `setTimeout` calls over and over...
  function loop() {
    // Get the random number
    const rnd = Math.floor(Math.random() * copy.length);

    // Get a word by `splicing` it out of the array copy
    const word = copy.splice(rnd, 1);

    // Updated the element text content
    el.textContent = word;

    // If there are no words left in the copy, reset it
    if (!copy.length) copy = [...arr];

    // Call `loop` again
    setTimeout(loop, 600000);
  }

  // Call `loop`
  loop();
}

log(arr, el);
