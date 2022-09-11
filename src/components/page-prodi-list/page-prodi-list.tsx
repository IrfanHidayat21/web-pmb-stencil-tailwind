import { Component, ComponentInterface, h, State } from '@stencil/core';

@Component({
  tag: 'page-prodi-list',
  styleUrl: 'page-prodi-list.css',
})
export class PageProdiList implements ComponentInterface {
@State() open:boolean= false;

clickOpen(ev:any) {
  console.log(ev,'click');
  if (ev=='0') {
    this.open = true;
  } else {
    this.open = false;
  }
}

toggleColumn(ev:any) {
  console.log(ev, 'click');
}

  render() {
    return [
		<header class="headerapp">
		  <app-header></app-header>
		</header>,
		<main class="mainapp">
		  <div class="antialiased sans-serif bg-white h-auto">


		    <div class="container mx-auto py-6 px-4">
		      <h1 class="text-xl md:text-3xl py-4 border-b mb-10">Program Studi S1-Profesi dan Kode Peringkat Akreditasi</h1>

		      <div class="mb-4 flex justify-between items-center">
		        <div class="flex-1 pr-4">
		          <div class="relative md:w-1/3">
		            <input type="search"
		              class="w-full pl-10 pr-4 py-2 rounded-lg  bg-gray-200 shadow focus:outline-none focus:shadow-outline text-blue-700 font-medium"
		              placeholder="Search..." />
		            <div class="absolute top-0 left-0 inline-flex items-center p-2">
		              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" viewBox="0 0 24 24"
		                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
		                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
		                <circle cx="10" cy="10" r="7" />
		                <line x1="21" y1="21" x2="15" y2="15" />
		              </svg>
		            </div>
		          </div>
		        </div>
		        <div>
		          <div class="shadow rounded-lg flex">
					<select name="cars" class="rounded-lg inline-flex items-center bg-gray-200 hite hover:text-blue-500 focus:outline-none
		                focus:shadow-outline text-blue-700 font-semibold py-2 px-2 md:px-4" id="cars">
					  <option value="nama">Nama</option>
					  <option value="akreditas">Akreditas</option>
					  <option value="prodi">Prodi</option>
					</select>
		          </div>

		        </div>
		      </div>

		<div class="container mx-auto">
        <div class="py-8">
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Fakultas
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Program Studi
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Jenjang
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Kode
                                </th>
								<th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Peringkat Akreditasi
                                </th>
								<th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Syarat Jurusan SMA/SMK/MA/Pesantren
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="">

                                            <p class="text-blue-800 font-bold whitespace-no-wrap mb-2">
											   Agama Islam
                                            </p>

                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<li class="text-gray-900 whitespace-no-wrap mb-2">Hukum Keluarga Islam (Syariah - Ahwal Al-Syahkshiyyah)</li>								
									<li class="text-gray-900 whitespace-no-wrap mb-2">Hukum Ekonomi Syari'ah</li>								
									<li class="text-gray-900 whitespace-no-wrap mb-2">Pendidikan Agama Islam</li>
									<li class="text-gray-900 whitespace-no-wrap mb-2">Pendidikan Bahasa Arab</li>
									<li class="text-gray-900 whitespace-no-wrap mb-2">Pendidikan Guru Madrasah Ibtidaiyah (PGMI)</li>
									<li class="text-gray-900 whitespace-no-wrap mb-2">Komunikasi dan Penyiaran Islam (KPI)</li>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap mb-2">S1</p>
									<p class="text-gray-900 whitespace-no-wrap mb-2">S1</p>
									<p class="text-gray-900 whitespace-no-wrap mb-2">S1</p>
									<p class="text-gray-900 whitespace-no-wrap mb-2">S1</p>
									<p class="text-gray-900 whitespace-no-wrap mb-2">S1</p>
									<p class="text-gray-900 whitespace-no-wrap mb-2">S1</p>
                                </td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap mb-2">051</p>
									<p class="text-gray-900 whitespace-no-wrap mb-2">052</p>
									<p class="text-gray-900 whitespace-no-wrap mb-2">101</p>
									<p class="text-gray-900 whitespace-no-wrap mb-2">102</p>
									<p class="text-gray-900 whitespace-no-wrap mb-2">106</p>
									<p class="text-gray-900 whitespace-no-wrap mb-2">121</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
									<div class="mb-2 text-center">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative">A</span>
                                    </span>
									</div>
									<div class="mb-2 text-center">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"></span>
                                        <span class="relative">B</span>
                                    </span>
									</div>
									
									<div class="mb-2 text-center">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span class="relative">C</span>
                                    </span>
									</div>
									<div class="mb-2 text-center">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span class="relative">C</span>
                                    </span>
									</div>
									<div class="mb-2 text-center">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span class="relative">C</span>
                                    </span>
									</div>
									<div class="mb-2 text-center">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span class="relative">C</span>
                                    </span>
									</div>
                                </td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
								<li class="text-gray-900 whitespace-no-wrap mb-2">IPS, IPA, SMK Semua Jurusan</li>								
								<li class="text-gray-900 whitespace-no-wrap mb-2">IPS, IPA, SMK Semua Jurusan</li>								
								<li class="text-gray-900 whitespace-no-wrap mb-2">IPS, IPA, SMK Semua Jurusan</li>								
								<li class="text-gray-900 whitespace-no-wrap mb-2">IPS, IPA, SMK Semua Jurusan</li>								
								<li class="text-gray-900 whitespace-no-wrap mb-2">IPS, IPA, SMK Semua Jurusan</li>								
								<li class="text-gray-900 whitespace-no-wrap mb-2">IPS, IPA, SMK Semua Jurusan</li>								
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
		    </div>
		  </div>


		  <app-footer></app-footer>
		</main>
	];
  }


}
