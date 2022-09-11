import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'page-profile',
  styleUrl: 'page-profile.css',
})
export class PageProfile implements ComponentInterface {

  render() {
    return [
<header class="headerapp">
  <app-header></app-header>
</header>,
<main class="mainapp">
<div class="block lg:flex px-4">
<div class="my-10 mt-10 mx-auto">
      <div class="bg-gray-200 rounded-lg overflow-hidden ">
        <div class="text-center p-6  border-b">
          <img
            class="h-24 w-24 rounded-full mx-auto"
            src="https://randomuser.me/api/portraits/men/24.jpg"
            alt="Randy Robertson"
          />
          <p class="pt-2 text-lg font-semibold">Randy Robertson</p>
          <p class="text-sm text-gray-600">randy.robertson@example.com</p>
          <div class="mt-5">
            <a
              href="#"
              class="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
            >
              Manage your Account
            </a>
          </div>
        </div>
        <div class="border-b">
          <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">Statement</p>
              <p class="text-xs text-gray-500">Add/manage users &amp; teams</p>
            </div>
          </a>
          <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">Personal settings</p>
              <p class="text-xs text-gray-500">Email, profile, telepon</p>
            </div>
          </a>
          <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-green-600">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">
              Status formulir Anda
              </p>
              <p class="text-xs text-gray-500">Cek status formulir</p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="bg-gray-200 pt-2 font-sans my-10 w-full rounded md:w-9/12 md:rounded-lg mx-auto">
        <div class="container mx-auto mt-6">
            <div class="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 class="text-2xl text-gray-900">Pengaturan Akun</h2>
                <form class="mt-6 border-t border-gray-400 pt-4">
                    <div class='flex flex-wrap -mx-3 mb-6'>
                           <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>user name</label>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required />
                            </div>

                        <div class='w-full md:w-full px-3 mb-6 '>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Password</label>
                            <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">change your password</button>
                        </div>
                        {/* <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>pick your country</label>
                            <div class="flex-shrink w-full inline-block relative">
                                <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                    <option>choose ...</option>
                                    <option>USA</option>
                                    <option>France</option>
                                    <option>Spain</option>
                                    <option>UK</option>
                                </select>
                                <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>fav language</label>
                            <div class="flex-shrink w-full inline-block relative">
                                <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                    <option>choose ...</option>
                                    <option>English</option>
                                    <option>France</option>
                                    <option>Spanish</option>
                                </select>
                                <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div> */}
                        <div class="personal w-full border-t border-gray-400 pt-4">
                            <h2 class="text-2xl text-gray-900">Personal info:</h2>
                            <div class="flex items-center justify-between mt-4">
                                <div class='w-full px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Nama Lengkap</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required />
                                </div>
                            </div>

                            <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Alamat email</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder=''  required />
                            </div>

                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Nomor Kontak</label>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder=''  required />
                           
                            </div>
                            <div class="flex justify-end">
                                <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">save changes</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
    <app-footer></app-footer>
</main>
    ];
  }

}
