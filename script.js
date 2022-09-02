// tangkap element absensi form
let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

// membuat array untuk menampung data absensi
let absensi_data = [];

// menambahkan event listener submit ke element absensi_form
absensi_form.addEventListener('submit', (el) => {
  el.preventDefault();

  let fullname = el.target.fullname.value;

  // validasi mini
  if (fullname == '') {
    alert('Nama tidak boleh kosong');
    return;
  }

  // push data ke dalama array absensi data
  absensi_data.push({
    nama: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(['ban', 'id'], {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  });

  //reset input field
  el.target.fullname.value = '';

  // console.table(absensi_data);

  render();
});

// fungsi untukl ernder data array ke html
function render() {
  //reset element div root
  root.innerHTML = '';

  //mapping array  ke html elment
  absensi_data.forEach((e, i) => {
    root.innerHTML += `<div class="card" draggable="true" ondragend="handleDelete(${i})">
                        <span>${i + 1}. ${e.nama}</span>
                         <span> ${e.waktu} &nbsp ${e.tanggal} </span>
                         </div>`;
  });
}

// delete fungsi
function handleDelete(index) {
  // console.info(index);

  //delete 1 data dari array
  absensi_data.splice(index, 1);

  //render kembali data dalam array ke html
  render();
}
