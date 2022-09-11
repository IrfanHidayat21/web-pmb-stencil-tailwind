import { Component, ComponentInterface, State, Element, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
})
export class AppHeader implements ComponentInterface {
    @Element() el!: HTMLElement;
    @State() sideMenu;


    topMenu(x) {
        if(x == 1){
            document.getElementById('sidemenu').style.display = 'block';
            document.getElementById('open').style.display = 'none';
            document.getElementById('close').style.display = 'block';
        }else{
            document.getElementById('sidemenu').style.display = 'none';
            document.getElementById('open').style.display = 'block';
            document.getElementById('close').style.display = 'none';
          setTimeout(()=>{
            this.sideMenu.remove();
          }, 500);
          
        }
        
      }

  render() {
    return (
      <nav
              class="flex items-center justify-between flex-wrap bg-gray-200 py-4 lg:px-12 shadow border-solid border-t-2">
              <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                  <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                  <img src="/assets/imgs/logo-uim.png" class="logo-uim-das" alt=""/>
                  </div>
                  <div class="block lg:hidden ">
                      <button onClick={() => this.topMenu(1)}
                          id="open"
                          class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                          </svg>
                      </button>

                      <button onClick={() => this.topMenu(0)}
                          id="close"
                          class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                          </svg>
                      </button>
                  </div>
              </div>

              <div id="sidemenu" class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                  <div class="text-md font-bold text-blue-700 lg:flex-grow">
                <ul class="flex flex-wrap text-sm md:text-base" id="menu_nav">
                  <li class="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                      <a 
                         class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                          Dashboard
                      </a>
                      <ul class="absolute left-0 top-0 mt-12 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <svg class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <stencil-route-link class="px-2 py-1" url="/dashboard">
                                <span class="">Jalur Non UTBK</span>
                            </stencil-route-link>
                        </li>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <stencil-route-link class="px-2 py-1" url="/dashboard">
                                <span class="">Jalur UTBK</span>
                            </stencil-route-link>
                        </li>
                    </ul>
                </li>

                <li class="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                <stencil-route-link url="/form"
                         class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                          My Form
                      </stencil-route-link>
                     
                </li>

                <li class="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                <a
                         class=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                          Informasi
                      </a>
                      <ul class="absolute left-0 top-0 mt-12 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <svg class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <stencil-route-link class="px-2 py-1" url="">
                                <span class="">Download Panduan PMB</span>
                            </stencil-route-link>
                        </li>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <stencil-route-link class="px-2 py-1" url="/prodi">
                                <span class="">Daftar Prodi dan Peringkat Akreditas</span>
                            </stencil-route-link>
                        </li>
                    </ul>
                </li>
                </ul>

                  </div>
                  <div class="relative mx-auto text-gray-600 lg:block hidden">
                      <input
                          class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                          type="search" name="search" placeholder="Search" />
                      <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
                          <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                               version="1.1" id="Capa_1" x="0px" y="0px"
                               viewBox="0 0 56.966 56.966" style={{'enable-background' : 'new 0 0 56.966 56.966' }}
                               xmlSpace="preserve"
                               width="512px" height="512px">
                      <path
                          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
                      </button>
                  </div>
                  <div class="flex ">
                      <stencil-route-link url="/profile"
                         class="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">Account
                          </stencil-route-link>
          
                      <stencil-route-link url="/"
                         class=" block text-md px-4  ml-2 py-2 rounded bg-red-400 text-white font-bold mt-4 hover:bg-red-700 lg:mt-0">Log Out</stencil-route-link>
                  </div>
              </div>
          </nav>
    );
  }
  
}

