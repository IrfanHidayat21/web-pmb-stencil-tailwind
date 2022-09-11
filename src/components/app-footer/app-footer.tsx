import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',

})
export class AppFooter implements ComponentInterface {

  render() {
    return (
      <footer class="flex justify-center px-4 text-gray-100 bg-gray-800">
              <div class="container py-6">
    
                  <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                      <div class="flex">
                        <div>
                        <img src="/assets/imgs/logo-uim.png" class="logo-uim-das" alt=""/>
                        </div>
                        <div class=" my-auto ml-4">
                        <p class=" text-sm">Copyright ©2020 UIM</p>
                        </div>
                        
                      </div>
                      <div class="flex mt-4 md:m-0">
                          <div class="-mx-4">
                            <a href="#" class="px-4 text-sm">Credits</a>
                            <a href="#" class="px-4 text-sm">Panitia PMB</a>
                            <a href="#" class="px-4 text-sm">App by PDTI</a>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
    );
  }

}
