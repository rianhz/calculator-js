let viewer = document.getElementById('screen-viewer');

function ulang() {
  viewer.value = '';
}

function show(num) {
  viewer.value += num;
  console.log(num);
}

function result() {
  try {
    viewer.value = eval(viewer.value);
    console.log(viewer.value);
  } catch (err) {
    console.log('input yang anda masukan bukan angka');
  }
}

function hapus() {
  viewer.value = viewer.value.slice(0, -1);
}
