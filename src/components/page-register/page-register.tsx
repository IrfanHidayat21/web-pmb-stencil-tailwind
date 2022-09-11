import { Component, ComponentInterface, Prop, h } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'page-register',
  styleUrl: 'page-register.css',
})
export class PageRegister implements ComponentInterface {
	@Prop() history?: RouterHistory;


	pushPage(page: any){
	 const loading = document.createElement('ion-loading');
	 loading.message = 'Loading...',
	 loading.duration = 2000;
	 setTimeout(async () => {
	   document.body.appendChild(loading);
	   await loading.present();
	   this.history?.push(page, {});
 
	   loading.dismiss();
	 }, 500);
   }
   
  render() {
    return (
      <body class="bg-white font-sans h-screen">
        <div class="w-full flex flex-wrap">

          <div class="w-full md:w-1/2 flex flex-col">
            <h3 class="pt-4 text-2xl text-center">Buat Akun PMB UIM</h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="fullName" type="text" placeholder="" />
              </div>

              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700">
                  Nomor Telepon/Telegram
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="fullName" type="text" placeholder="" />
              </div>


              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700">
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email" type="email" placeholder="" />
              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label class="block mb-2 text-sm font-bold text-gray-700">
                    Password (min 8 karakter)
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="******************" />
                  <p class="text-xs italic text-red-500">Please choose a password.</p>
                </div>
                <div class="md:ml-2">
                  <label class="block mb-2 text-sm font-bold text-gray-700">
                    Konfirmasi Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="c_password" type="password" placeholder="******************" />
                </div>
              </div>
              <div class="mb-6 text-center">
                <button onClick={()=>this.pushPage('/dashboard')}
                  class="w-full px-4 py-2 font-bold text-white bg-black rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline"
                  type="button">
                  Register Account
                </button>
              </div>
              <hr class="mb-2 border-t" />
              <div class="flex items-center w-full ">
                <div class="w-full md:w-1/3 px-3 pt-4 mx-2">
                  <button
                    class='appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none'>
                    <svg class="h-6 w-6 fill-current text-gray-700" viewBox="0 0 512 512">
                      <path
                        d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                    </svg>
                  </button>
                </div>
                <div class="w-full md:w-1/3 px-3 pt-4 mx-2">
                  <button
                    class="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                    <svg class="h-6 w-6 fill-current text-gray-700" viewBox="0 0 512 512">
                      <path
                        d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                    </svg>
                  </button>
                </div>
                <div class="w-full md:w-1/3 px-3 pt-4 mx-2">
                  <button
                    class="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                    <svg class="h-6 w-6 fill-current text-gray-700" viewBox="0 0 512 512">
                      <path
                        d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* <div class="text-center">
                <stencil-route-link class="inline-block text-sm text-black align-baseline hover:text-gray-800" url="#">
                  Lupa password?
                </stencil-route-link>
              </div>
              <div class="text-center">
                <stencil-route-link class="inline-block text-sm text-black align-baseline hover:text-gray-800" url="/">
                  Sudah punya akun? Login!
                </stencil-route-link>
              </div> */}
            </form>
          </div>


          <div class="w-1/2 shadow-2xl">
            <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" />
          </div>
        </div>

        <div class="alert-toast fixed bottom-0 right-0 m-8 w-5/6 md:w-full max-w-sm">
          <input type="checkbox" class="hidden" id="footertoast" />

          <label
            class="close cursor-pointer flex items-start justify-between w-full p-2 bg-green-500 h-24 rounded shadow-lg text-white"
            title="close">
            Registrasi sukses! Silahkan login

            <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 18 18">
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </label>
        </div>

      </body>
    );
  }

}
