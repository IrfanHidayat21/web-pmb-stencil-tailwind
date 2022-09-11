import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'page-login',
  styleUrl: 'page-login.css',
})
export class PageLogin implements ComponentInterface {
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
        <div class="alert-banner w-full fixed top-0">
          <input type="checkbox" class="hidden" id="banneralert" />

          <label class="close cursor-pointer flex items-center justify-between w-full p-2 bg-red-500 shadow text-white"
            title="close">
            Maaf email/password anda salah!

            <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 18 18">
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </label>
        </div>

        <div class="w-full flex flex-wrap">

          <div class="w-full md:w-1/2 flex flex-col">

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
              <div class=" w-full">
                <img src="/assets/imgs/logo-uim.png" class="logo-uim" alt="" />
              </div>
              <p class="text-center text-3xl">UIM PMB 2020 Sistem</p>
              <form class="flex flex-col pt-3 md:pt-8">
                <div class="flex flex-col pt-4">
                  <label class="text-lg">Email</label>
                  <input type="email" id="email" placeholder="your@email.com"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div class="flex flex-col pt-4">
                  <label class="text-lg">Password</label>
                  <input type="password" id="password" placeholder="Password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <button onClick={()=>this.pushPage('/dashboard')}
                  class="mt-8 w-full px-4 py-2 font-bold text-white bg-black rounded-full hover:bg-gray-700
                  focus:outline-none focus:shadow-outline"
                  type="button"
                  >
                  Log In
                </button>
                {/* <input type="submit" value="Log In"
                  class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 " /> */}
              </form>
              <div class="text-center pt-12 pb-12">
                <p>Belum Punya Akun UIM PMB 2020? <stencil-route-link url="/register" class="underline font-semibold">
                    Daftar Sekarang.</stencil-route-link>
                </p>
              </div>
            </div>

          </div>


          <div class="w-1/2 shadow-2xl">
            <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" />
          </div>
        </div>

      </body>
    );
  }

}
