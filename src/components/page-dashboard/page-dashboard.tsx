import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'page-dashboard',
  styleUrl: 'page-dashboard.css',
})
export class PageDashboard implements ComponentInterface {

  render() {
    return [
      <header class="headerapp">
              <app-header></app-header>
      </header>,
      <main class="mainapp">
        <div class="py-6 bg-green-800">
          <h2 class="md:text-xl text-base font-bold text-gray-200 text-center px-4 mx-auto w-full">DASHBOARD JADWAL KEGIATAN PENERIMAAN MABA 2020-2021 (JALUR NON UTBK)</h2>
          <hr class="h-px mt-6 bg-gray-200 border-none"/>
          <li class="font-bold md:text-xl text-base text-white mt-6 ml-4 px-2">FAKULTAS NON KEDOKTERAN DAN NON KEDOKTERAN GIGI</li>
        </div>
        <div class="flex flex-col justify-center m-auto">
          <div class="flex md:flex-row flex-col bg-teal-200 justify-center md:text-left text-center">
            <div class="flex flex-col justify-center items-center relative">
              <div class="w-56 h-12 md:flex hidden justify-center">
                <div class="h-full  border-teal-300 border-dashed"></div>
              </div>
              <div
                class="rounded-full w-12 h-12 text-xl text-teal-100 bg-teal-700 font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2">
                1</div>
              <img alt="step1" class="w-56 h-56 rounded-full shadow my-5 object-scale-down"
                src="https://image.flaticon.com/icons/svg/1330/1330216.svg" />
              <div class="w-56 h-12 md:flex hidden justify-center">
                <div class="h-full border-r-4 border-teal-300 border-dashed"></div>
              </div>
            </div>
            <div class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-teal-200">
              <div class="text-xs uppercase font-bold text-teal-500">Step 1 - 02 Mei - 12 Juli 2020</div>
              <div class="md:text-3xl text-xl font-bold text-teal-700">MASA PENDAFTARAN MABA UIM 2020/2021</div>
              <div class="mt-4 text-teal-800">Pendaftaran Online dan pembayaran menggunakan BNI Virtual Account
Pendaftaran offline dilakukan dengan mengambil formulir di Gedung Rektorat Menara UIM.</div>
            </div>
          </div>
          <div class="flex md:flex-row flex-col bg-orange-200 justify-center md:text-left text-center">
            <div class="flex flex-col justify-center items-center relative">
              <div class="w-56 h-12 md:flex hidden justify-center">
                <div class="h-full border-r-4 border-orange-300 border-dashed"></div>
              </div>
              <div
                class="rounded-full w-12 h-12 text-xl text-orange-100 bg-orange-700 font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2">
                2</div>
              <img alt="step2" class="w-56 h-56 rounded-full shadow my-5 object-scale-down"
                src="https://image.flaticon.com/icons/svg/1330/1330216.svg" />
              <div class="w-56 h-12 md:flex hidden justify-center">
                <div class="h-full border-r-4 border-orange-300 border-dashed"></div>
              </div>
            </div>
            <div class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-orange-200">
              <div class="text-xs uppercase font-bold text-orange-500">Step 2 - 13 Juli 2020</div>
              <div class="md:text-3xl text-xl font-bold text-orange-700">UJIAN SELEKSI</div>
              <div class="mt-4 text-orange-800">
                  Ujian Seleksi Sistem Paper Based (Ujian Tes Tulis), kecuali Fakultas Farmasi menggunakan sistem Computer Based Test (CBT).
                  Ujian Paper Based meliputi:
                  <ul class="mt-4">
                    <li class="li-list">Kelompok IPA	: Agama, Bahasa Indonesia, Bahasa Inggris, Matematika, Biologi, Kimia, Fisika, dan IPA Terpadu.</li>
                    <li class="li-list">Kelompok IPS	: Agama, Bahasa Indonesia, Bahasa Inggris, Matematika, Kewarganegaraan, Ekonomi, dan IPS Terpadu.</li>
                    <li class="li-list">Kelompok IPC	: Agama, Bahasa Indonesia, Bahasa Inggris, Matematika, Kimia, Kewarganegaraan, dan IPA Terpadu.</li>
                  </ul>
              </div>
            </div>
          </div>
          <div class="flex md:flex-row flex-col bg-indigo-200 justify-center md:text-left text-center">
            <div class="flex flex-col justify-center items-center relative">
              <div class="w-56 h-12 md:flex hidden justify-center">
                <div class="h-full border-r-4 border-indigo-300 border-dashed"></div>
              </div>
              <div
                class="rounded-full w-12 h-12 text-xl text-indigo-100 bg-indigo-700 font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2">
                3</div>
              <img alt="step3" class="w-56 h-56 rounded-full shadow my-5 object-scale-down"
                src="https://image.flaticon.com/icons/svg/1330/1330216.svg" />
              <div class="w-56 h-12 md:flex hidden justify-center">
                <div class="h-full border-r-4 border-indigo-300 border-dashed"></div>
              </div>
            </div>
            <div class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-indigo-200">
              <div class="text-xs uppercase font-bold text-indigo-500">Step 3 - 20 Juli 2020</div>
              <div class="md:text-3xl text-xl font-bold text-indigo-700">PENGUMUMAN HASIL UJIAN</div>
              <div class="mt-4 text-indigo-800">Pengumuman Hasil Ujian Seleksi Masuk FAKULTAS NON KEDOKTERAN DAN NON KEDOKTERAN GIGI JALUR NON UTBK</div>
            </div>
          </div>
          <div class="flex md:flex-row flex-col bg-pink-200 justify-center md:text-left text-center">
            <div class="flex flex-col justify-center items-center relative">
              <div class="w-56 h-12 md:flex hidden justify-center">
                <div class="h-full border-r-4 border-pink-300 border-dashed"></div>
              </div>
              <div
                class="rounded-full w-12 h-12 text-xl text-pink-100 bg-pink-700 font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2">
                4</div>
              <img alt="step4" class="w-56 h-56 rounded-full shadow my-5 object-scale-down"
                src="https://image.flaticon.com/icons/svg/1330/1330216.svg" />
              <div class="w-56 h-12 md:flex hidden justify-center">
                <div class="h-full  border-pink-300 border-dashed"></div>
              </div>
            </div>
            <div class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-pink-200">
              <div class="text-xs uppercase font-bold text-pink-500">Step 4 - 27 Juli - 18 Agustus 2020</div>
              <div class="md:text-3xl text-xl font-bold text-pink-700">PEMERIKSAAN KESEHATAN DAN PENDAFTARAN ULANG</div>
              <div class="mt-4 text-pink-800">Pemeriksaan Kesehatan dan Pendaftaran/Registrasi Mahasiswa Baru</div>
            </div>
          </div>
        </div>

        <app-footer></app-footer>
      </main>
    ];
  }

}
