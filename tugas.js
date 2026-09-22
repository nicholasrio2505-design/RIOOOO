// =====================================================
// JAVASCRIPT TUGAS
// HTML DAN CSS ASLI TIDAK DIUBAH
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =================================================
    // ARRAY
    // =================================================

    const hobi = [
        "Bermain Game",
        "Mendengarkan Musik",
        "Belajar Coding",
        "Menonton Film",
        "Jalan-jalan bersama teman"
    ];

    const kegiatan = [
        "Bangun pagi",
        "Pergi ke kampus",
        "Mengikuti perkuliahan",
        "Mengerjakan tugas",
        "Bermain atau berkumpul bersama teman"
    ];

    const pendidikan = [
        "SD",
        "SMP",
        "SMK",
        "Kuliah"
    ];


    // =================================================
    // MENCARI CONTAINER HTML ASLI
    // =================================================

    const container = document.querySelector(".container");


    // =================================================
    // MEMBUAT FORM MENGGUNAKAN JAVASCRIPT DOM
    // =================================================

    const formJS = document.createElement("section");

    formJS.innerHTML = `

        <hr>

        <h2>7. Form JavaScript</h2>

        <p>
            <b>Nama Lengkap</b>
        </p>

        <input
            type="text"
            id="namaJS"
            placeholder="Masukkan nama lengkap"
        >

        <p>
            <b>Jumlah Pilihan</b>
        </p>

        <input
            type="number"
            id="jumlahJS"
            min="1"
            max="10"
            value="3"
        >

        <span
            id="errorJumlah"
            style="color:red;">
        </span>


        <p>
            <b>Email</b>
        </p>

        <input
            type="email"
            id="emailJS"
            placeholder="contoh@gmail.com"
        >


        <h3>Pilih Hobi</h3>

        <div id="checkboxJS"></div>


        <h3>Pilih Kegiatan</h3>

        <select id="dropdownJS">

            <option value="">
                -- Pilih Kegiatan --
            </option>

        </select>


        <h3>Pilih Pendidikan</h3>

        <div id="radioJS"></div>


        <br>

        <button
            type="button"
            id="tombolJS">

            Tampilkan Data

        </button>


        <div
            id="outputJS"
            style="
                display:none;
                margin-top:20px;
                padding:15px;
                border:2px solid black;
            ">

            <h3>Output JavaScript DOM</h3>

            <div id="hasilJS"></div>

        </div>

    `;


    // Memasukkan form ke HTML asli
    container.appendChild(formJS);


    // =================================================
    // LOOP CHECKBOX
    // =================================================

    const checkboxJS =
        document.getElementById("checkboxJS");


    hobi.forEach(function (item) {

        checkboxJS.innerHTML += `

            <label>

                <input
                    type="checkbox"
                    name="hobiJS"
                    value="${item}"
                >

                ${item}

            </label>

            <br>

        `;

    });


    // =================================================
    // LOOP DROPDOWN
    // =================================================

    const dropdownJS =
        document.getElementById("dropdownJS");


    kegiatan.forEach(function (item) {

        dropdownJS.innerHTML += `

            <option value="${item}">
                ${item}
            </option>

        `;

    });


    // =================================================
    // LOOP RADIO BUTTON
    // =================================================

    const radioJS =
        document.getElementById("radioJS");


    pendidikan.forEach(function (item) {

        radioJS.innerHTML += `

            <label>

                <input
                    type="radio"
                    name="pendidikanJS"
                    value="${item}"
                >

                ${item}

            </label>

            <br>

        `;

    });


    // =================================================
    // NUMBER SPINNER + ERROR HANDLING
    // =================================================

    const jumlahJS =
        document.getElementById("jumlahJS");

    const errorJumlah =
        document.getElementById("errorJumlah");


    jumlahJS.addEventListener("input", function () {

        const jumlah =
            Number(jumlahJS.value);


        if (
            jumlah < 1 ||
            jumlah > 10 ||
            isNaN(jumlah)
        ) {

            errorJumlah.textContent =
                " Jumlah harus 1 sampai 10";

        } else {

            errorJumlah.textContent = "";

        }

    });


    // =================================================
    // TOMBOL
    // =================================================

    document
        .getElementById("tombolJS")
        .addEventListener("click", function () {


        // =============================================
        // INPUT TEXT
        // =============================================

        const nama =
            document
                .getElementById("namaJS")
                .value
                .trim();


        // =============================================
        // INPUT NUMBER
        // =============================================

        const jumlah =
            Number(
                document
                    .getElementById("jumlahJS")
                    .value
            );


        if (
            jumlah < 1 ||
            jumlah > 10 ||
            isNaN(jumlah)
        ) {

            alert(
                "Jumlah pilihan harus antara 1 sampai 10!"
            );

            jumlahJS.focus();

            return;

        }


        // =============================================
        // INPUT EMAIL
        // PATTERN MATCHING
        // =============================================

        const email =
            document
                .getElementById("emailJS")
                .value
                .trim();


        const polaEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!polaEmail.test(email)) {

            alert(
                "Format email tidak valid!\n\n" +
                "Silakan masukkan email yang benar.\n" +
                "Contoh: nama@gmail.com"
            );

            document
                .getElementById("emailJS")
                .focus();

            return;

        }


        // =============================================
        // CHECKBOX
        // ARRAY MENYIMPAN HASIL PILIHAN
        // =============================================

        const checkboxTerpilih =
            document.querySelectorAll(
                'input[name="hobiJS"]:checked'
            );


        let hobiDipilih = [];


        checkboxTerpilih.forEach(function (item) {

            hobiDipilih.push(item.value);

        });


        // =============================================
        // DROPDOWN
        // =============================================

        const kegiatanDipilih =
            dropdownJS.value;


        // =============================================
        // RADIO BUTTON
        // =============================================

        const radioTerpilih =
            document.querySelector(
                'input[name="pendidikanJS"]:checked'
            );


        let pendidikanDipilih =
            "Belum memilih";


        if (radioTerpilih) {

            pendidikanDipilih =
                radioTerpilih.value;

        }


        // =============================================
        // OUTPUT JAVASCRIPT DOM
        // =============================================

        document
            .getElementById("hasilJS")
            .innerHTML = `

                <p>
                    <b>Nama:</b>
                    ${nama || "Belum diisi"}
                </p>

                <p>
                    <b>Email:</b>
                    ${email}
                </p>

                <p>
                    <b>Jumlah:</b>
                    ${jumlah}
                </p>

                <p>
                    <b>Hobi:</b>
                    ${
                        hobiDipilih.length > 0
                        ? hobiDipilih.join(", ")
                        : "Belum memilih"
                    }
                </p>

                <p>
                    <b>Kegiatan:</b>
                    ${
                        kegiatanDipilih
                        || "Belum memilih"
                    }
                </p>

                <p>
                    <b>Pendidikan:</b>
                    ${pendidikanDipilih}
                </p>

            `;


        // Menampilkan output

        document
            .getElementById("outputJS")
            .style.display = "block";

    });

});