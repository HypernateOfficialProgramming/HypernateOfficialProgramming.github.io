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

function processText() {
  const text = document.getElementById("inputText").value;
  const seed = parseInt(document.getElementById("seedInput").value);

  if (isNaN(seed)) {
    alert("Warning: Seed not valid!");
    return;
  }

  const rand = mulberry32(seed);
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const bit = rand() < 0.5 ? 0 : 1;

    if (bit === 1) {
      result += atbash(text[i]);
    } else {
      result += text[i];
    }
  }

  document.getElementById("outputText").value = result;
}
