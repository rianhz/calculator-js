let outputscreen = document.getElementById('screen-viewer');
function show(num) {
  outputscreen.value += num;
}
function result() {
  try {
    outputscreen.value = eval(outputscreen.value);
  } catch (err) {
    alert('cek ulang pengoperasian yang anda tulis!');
  }
}
function ulang() {
  outputscreen.value = '';
}

function hapus() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}
