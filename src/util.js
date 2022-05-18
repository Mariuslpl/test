function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
}

function arrayBufferToString(arrayBuffer, decoderType = "utf-8") {
  let decoder = new TextDecoder(decoderType);
  return decoder.decode(arrayBuffer);
}

async function processFile(file) {
  try {
    let arrayBuffer = await readFileAsync(file);
    let first20Bytes = arrayBufferToString(arrayBuffer.slice(0, 20));
    document.getElementById("result").innerText = first20Bytes;
  } catch (err) {
    console.log(err);
  }
}
