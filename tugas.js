document.addEventListener("DOMContentLoaded", function () {

    const container = document.querySelector(".container");

    // =================================================
    // FORM JAVASCRIPT
    // =================================================

    const formJS = document.createElement("section");

    formJS.innerHTML = `

        <hr>

        <h2>7. Form JavaScript</h2>


        <!-- ================================================= -->
        <!-- DATA DIRI -->
        <!-- ================================================= -->

        <h3>Data Diri</h3>

        <p><b>Nama Depan:</b></p>

        <input
            type="text"
            id="namaDepan"
            placeholder="Masukkan nama depan"
        >


        <p><b>Nama Belakang:</b></p>

        <input
            type="text"
            id="namaBelakang"
            placeholder="Masukkan nama belakang"
        >


        <p><b>Email:</b></p>

        <input
            type="email"
            id="email"
            placeholder="Masukkan @gmail.com"
        >


        <!-- ================================================= -->
        <!-- HOBI -->
        <!-- ================================================= -->

        <hr>

        <h3>Hobi</h3>

        <p><b>Jumlah List Hobi:</b></p>

        <input
            type="number"
            id="jumlahHobi"
            min="1"
            placeholder="Contoh: 10"
        >

        <br><br>

        <button type="button" id="submitHobi">
            Submit Hobi
        </button>


        <div
            id="listHobi"
            style="display:none;"
        >

            <h3>Masukkan List Hobi</h3>

            <div id="inputHobi"></div>

            <br>

            <button type="button" id="buatCheckboxHobi">
                Pilih Hobi
            </button>

        </div>


        <div
            id="checkboxHobi"
            style="display:none;"
        >

            <h3>Hobi yang Kamu Suka</h3>

            <div id="daftarHobi"></div>

        </div>


        <!-- ================================================= -->
        <!-- KEGIATAN -->
        <!-- ================================================= -->

        <hr>

        <h3>Kegiatan</h3>

        <p><b>Jumlah List Kegiatan:</b></p>

        <input
            type="number"
            id="jumlahKegiatan"
            min="1"
            placeholder="Contoh: 5"
        >

        <br><br>

        <button type="button" id="submitKegiatan">
            Submit Kegiatan
        </button>


        <div
            id="listKegiatan"
            style="display:none;"
        >

            <h3>Masukkan List Kegiatan</h3>

            <div id="inputKegiatan"></div>

            <br>

            <button type="button" id="buatCheckboxKegiatan">
                Pilih Kegiatan
            </button>

        </div>


        <div
            id="checkboxKegiatan"
            style="display:none;"
        >

            <h3>Kegiatan yang Kamu Suka</h3>

            <div id="daftarKegiatan"></div>

        </div>


        <!-- ================================================= -->
        <!-- PENDIDIKAN -->
        <!-- ================================================= -->

        <hr>

        <h3>Pendidikan</h3>

        <p><b>Jumlah List Pendidikan:</b></p>

        <input
            type="number"
            id="jumlahPendidikan"
            min="1"
            placeholder="Contoh: 4"
        >

        <br><br>

        <button type="button" id="submitPendidikan">
            Submit Pendidikan
        </button>


        <div
            id="listPendidikan"
            style="display:none;"
        >

            <h3>Masukkan List Pendidikan</h3>

            <div id="inputPendidikan"></div>

            <br>

            <button type="button" id="buatCheckboxPendidikan">
                Pilih Pendidikan
            </button>

        </div>


        <div
            id="checkboxPendidikan"
            style="display:none;"
        >

            <h3>Pendidikan yang Kamu Pilih</h3>

            <div id="daftarPendidikan"></div>

        </div>


        <!-- ================================================= -->
        <!-- TAMPILKAN DATA -->
        <!-- ================================================= -->

        <hr>

        <button type="button" id="tampilkanData">
            Tampilkan Data
        </button>


        <!-- ================================================= -->
        <!-- HASIL -->
        <!-- ================================================= -->

        <div
            id="hasilBox"
            style="
                display:none;
                margin-top:20px;
                padding:15px;
                border:2px solid black;
            "
        >

            <h3>Hasil Data</h3>

            <div id="hasil"></div>

        </div>

    `;

    container.appendChild(formJS);


    // =================================================
    // HOBI - MEMBUAT INPUT
    // =================================================

    document
        .getElementById("submitHobi")
        .addEventListener("click", function () {

            const jumlah = parseInt(
                document.getElementById("jumlahHobi").value
            );

            const inputHobi =
                document.getElementById("inputHobi");

            inputHobi.innerHTML = "";

            if (isNaN(jumlah) || jumlah < 1) {

                alert("Masukkan jumlah hobi!");

                return;
            }


            for (let i = 1; i <= jumlah; i++) {

                inputHobi.innerHTML += `

                    <p>

                        <b>Hobi ${i}:</b>

                        <br>

                        <input
                            type="text"
                            class="namaHobi"
                            placeholder="Masukkan hobi ${i}"
                        >

                    </p>

                `;

            }


            document
                .getElementById("listHobi")
                .style.display = "block";

        });


    // =================================================
    // HOBI - MEMBUAT CHECKBOX
    // =================================================

    document
        .getElementById("buatCheckboxHobi")
        .addEventListener("click", function () {

            const semuaHobi =
                document.querySelectorAll(".namaHobi");

            const daftarHobi =
                document.getElementById("daftarHobi");

            daftarHobi.innerHTML = "";


            for (let i = 0; i < semuaHobi.length; i++) {

                if (semuaHobi[i].value.trim() === "") {

                    alert("Hobi " + (i + 1) + " belum diisi!");

                    return;
                }

            }


            semuaHobi.forEach(function (hobi) {

                const nama =
                    hobi.value.trim();

                daftarHobi.innerHTML += `

                    <p>

                        <label>

                            <input
                                type="checkbox"
                                name="hobi"
                                value="${nama}"
                                class="pilihanHobi"
                            >

                            ${nama}

                        </label>

                    </p>

                `;

            });


            document
                .getElementById("checkboxHobi")
                .style.display = "block";

        });


    // =================================================
    // KEGIATAN - MEMBUAT INPUT
    // =================================================

    document
        .getElementById("submitKegiatan")
        .addEventListener("click", function () {

            const jumlah = parseInt(
                document.getElementById("jumlahKegiatan").value
            );

            const inputKegiatan =
                document.getElementById("inputKegiatan");

            inputKegiatan.innerHTML = "";

            if (isNaN(jumlah) || jumlah < 1) {

                alert("Masukkan jumlah kegiatan!");

                return;
            }


            for (let i = 1; i <= jumlah; i++) {

                inputKegiatan.innerHTML += `

                    <p>

                        <b>Kegiatan ${i}:</b>

                        <br>

                        <input
                            type="text"
                            class="namaKegiatan"
                            placeholder="Masukkan kegiatan ${i}"
                        >

                    </p>

                `;

            }


            document
                .getElementById("listKegiatan")
                .style.display = "block";

        });


    // =================================================
    // KEGIATAN - MEMBUAT CHECKBOX
    // =================================================

    document
        .getElementById("buatCheckboxKegiatan")
        .addEventListener("click", function () {

            const semuaKegiatan =
                document.querySelectorAll(".namaKegiatan");

            const daftarKegiatan =
                document.getElementById("daftarKegiatan");

            daftarKegiatan.innerHTML = "";


            for (let i = 0; i < semuaKegiatan.length; i++) {

                if (semuaKegiatan[i].value.trim() === "") {

                    alert(
                        "Kegiatan " + (i + 1) + " belum diisi!"
                    );

                    return;
                }

            }


            semuaKegiatan.forEach(function (kegiatan) {

                const nama =
                    kegiatan.value.trim();

                daftarKegiatan.innerHTML += `

                    <p>

                        <label>

                            <input
                                type="checkbox"
                                name="kegiatan"
                                value="${nama}"
                                class="pilihanKegiatan"
                            >

                            ${nama}

                        </label>

                    </p>

                `;

            });


            document
                .getElementById("checkboxKegiatan")
                .style.display = "block";

        });


    // =================================================
    // PENDIDIKAN - MEMBUAT INPUT
    // =================================================

    document
        .getElementById("submitPendidikan")
        .addEventListener("click", function () {

            const jumlah = parseInt(
                document.getElementById("jumlahPendidikan").value
            );

            const inputPendidikan =
                document.getElementById("inputPendidikan");

            inputPendidikan.innerHTML = "";

            if (isNaN(jumlah) || jumlah < 1) {

                alert("Masukkan jumlah pendidikan!");

                return;
            }


            for (let i = 1; i <= jumlah; i++) {

                inputPendidikan.innerHTML += `

                    <p>

                        <b>Pendidikan ${i}:</b>

                        <br>

                        <input
                            type="text"
                            class="namaPendidikan"
                            placeholder="Masukkan pendidikan ${i}"
                        >

                    </p>

                `;

            }


            document
                .getElementById("listPendidikan")
                .style.display = "block";

        });


    // =================================================
    // PENDIDIKAN - MEMBUAT CHECKBOX
    // =================================================

    document
        .getElementById("buatCheckboxPendidikan")
        .addEventListener("click", function () {

            const semuaPendidikan =
                document.querySelectorAll(".namaPendidikan");

            const daftarPendidikan =
                document.getElementById("daftarPendidikan");

            daftarPendidikan.innerHTML = "";


            for (let i = 0; i < semuaPendidikan.length; i++) {

                if (semuaPendidikan[i].value.trim() === "") {

                    alert(
                        "Pendidikan " + (i + 1) + " belum diisi!"
                    );

                    return;
                }

            }


            semuaPendidikan.forEach(function (pendidikan) {

                const nama =
                    pendidikan.value.trim();

                daftarPendidikan.innerHTML += `

                    <p>

                        <label>

                            <input
                                type="checkbox"
                                name="pendidikan"
                                value="${nama}"
                                class="pilihanPendidikan"
                            >

                            ${nama}

                        </label>

                    </p>

                `;

            });


            document
                .getElementById("checkboxPendidikan")
                .style.display = "block";

        });


    // =================================================
    // TAMPILKAN DATA
    // =================================================

    document
        .getElementById("tampilkanData")
        .addEventListener("click", function () {


            // =========================================
            // DATA DIRI
            // =========================================

            const namaDepan =
                document
                    .getElementById("namaDepan")
                    .value
                    .trim();

            const namaBelakang =
                document
                    .getElementById("namaBelakang")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();
                    // VALIDASI NAMA

const polaNama = /^[A-Za-z\s]+$/;

if (namaDepan === "") {
    alert("Nama depan wajib diisi!");
    document.getElementById("namaDepan").focus();
    return;
}

if (!polaNama.test(namaDepan)) {
    alert("Nama depan hanya boleh menggunakan huruf!");
    document.getElementById("namaDepan").focus();
    return;
}

if (namaBelakang === "") {
    alert("Nama belakang wajib diisi!");
    document.getElementById("namaBelakang").focus();
    return;
}

if (!polaNama.test(namaBelakang)) {
    alert("Nama belakang hanya boleh menggunakan huruf!");
    document.getElementById("namaBelakang").focus();
    return;
}


// VALIDASI EMAIL

if (email === "") {
    alert("Email wajib diisi!");
    document.getElementById("email").focus();
    return;
}

const polaEmail = /^[A-Za-z0-9._%+-]+@gmail\.com$/;

if (!polaEmail.test(email)) {
    alert("Email harus menggunakan @gmail.com!");
    document.getElementById("email").focus();
    return;
}


            // =========================================
            // MENGAMBIL HOBI
            // =========================================

            const hobiDipilih =
                document.querySelectorAll(
                    ".pilihanHobi:checked"
                );

            let hobi = [];

            hobiDipilih.forEach(function (item) {

                hobi.push(item.value);

            });


            // =========================================
            // MENGAMBIL KEGIATAN
            // =========================================

            const kegiatanDipilih =
                document.querySelectorAll(
                    ".pilihanKegiatan:checked"
                );

            let kegiatan = [];

            kegiatanDipilih.forEach(function (item) {

                kegiatan.push(item.value);

            });


            // =========================================
            // MENGAMBIL PENDIDIKAN
            // =========================================

            const pendidikanDipilih =
                document.querySelectorAll(
                    ".pilihanPendidikan:checked"
                );

            let pendidikan = [];

            pendidikanDipilih.forEach(function (item) {

                pendidikan.push(item.value);

            });


            // =========================================
            // OUTPUT
            // =========================================

            document.getElementById("hasil").innerHTML = `

                <p>
                    <b>Nama:</b>
                    ${namaDepan} ${namaBelakang}
                </p>

                <p>
                    <b>Email:</b>
                    ${email}
                </p>

                <p>
                    <b>Hobi:</b>
                    ${
                        hobi.length > 0
                        ? hobi.join(", ")
                        : "Belum memilih"
                    }
                </p>

                <p>
                    <b>Kegiatan:</b>
                    ${
                        kegiatan.length > 0
                        ? kegiatan.join(", ")
                        : "Belum memilih"
                    }
                </p>

                <p>
                    <b>Pendidikan:</b>
                    ${
                        pendidikan.length > 0
                        ? pendidikan.join(", ")
                        : "Belum memilih"
                    }
                </p>

            `;


            document
                .getElementById("hasilBox")
                .style.display = "block";

        });

});