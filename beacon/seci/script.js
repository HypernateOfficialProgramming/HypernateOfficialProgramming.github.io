function mulberry32(a) {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

function atbash(char) {
  const isUpper = char >= 'A' && char <= 'Z';
  const isLower = char >= 'a' && char <= 'z';

  if (!isUpper && !isLower) return char;

  const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  return String.fromCharCode(base + (25 - (char.charCodeAt(0) - base)));
}

function caesar(char, offset) {
  const isUpper = char >= 'A' && char <= 'Z';
  const isLower = char >= 'a' && char <= 'z';

  if (!isUpper && !isLower) return char;

  const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  const normalized = char.charCodeAt(0) - base;

  return String.fromCharCode(base + ((normalized + offset) % 26));
}

function processText() {
  const text = document.getElementById("inputText").value;
  const seed = parseInt(document.getElementById("seedInput").value);

  if (isNaN(seed)) {
    alert("Warning: Seed not valid!");
    return;
  }

  const randMode = mulberry32(seed);
  const randShift = mulberry32(seed + 2);

  let result = "";

  for (let i = 0; i < text.length; i++) {
    const mode = Math.floor(randMode() * 3);

    if (mode === 1) {
      result += atbash(text[i]);
    } 
    else if (mode === 2) {
      const shift = Math.floor(randShift() * 26);
      result += caesar(text[i], shift);
    } 
    else {
      result += text[i];
    }
  }

  document.getElementById("outputText").value = result;
}
