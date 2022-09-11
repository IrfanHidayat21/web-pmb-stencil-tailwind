import { Component, ComponentInterface, Prop, State, h } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
tag: 'page-form',
styleUrl: 'page-form.css',
})
export class PageForm implements ComponentInterface {
    @Prop() history?: RouterHistory;
    @State() typePay1: boolean = false;
    @State() typePay2: boolean = false;
    @State() bankName = this.history?.location.state.bankName;
    @State() bankNo = this.history?.location.state.bankNo;
    @State() iconPay1: string = 'ios-arrow-forward';
    @State() iconPay2: string = 'ios-arrow-forward';

    moreTypePay(num: number){
        if(num == 1){
          if(this.typePay1 == false){
            this.iconPay1 = 'ios-arrow-down';
            this.typePay1 = true;
          }else{
            this.iconPay1 = 'ios-arrow-forward';
            this.typePay1 = false;
          }
        }else if(num == 2){
          if(this.typePay2 == false){
            this.iconPay2 = 'ios-arrow-down';
            this.typePay2 = true;
          }else{
            this.iconPay2 = 'ios-arrow-forward';
            this.typePay2 = false;
          }
    
        }
      }
      
componentDidLoad() {
    document.getElementById('form1').style.display = 'block';
    document.getElementById('form2').style.display = 'none';
    document.getElementById('form3').style.display = 'none';
    document.getElementById('form4').style.display = 'none';
    document.getElementById('step1a').style.color = '#ffffff';
    document.getElementById('step1b').style.backgroundColor = '#319795';
    document.getElementById('step2a').style.color = '#a0aec0';
    document.getElementById('step2b').style.backgroundColor = '#ffffff';
    document.getElementById('step3a').style.color = '#a0aec0';
    document.getElementById('step3b').style.backgroundColor = '#ffffff';
    document.getElementById('step4a').style.color = '#a0aec0';
    document.getElementById('step4b').style.backgroundColor = '#ffffff';
    document.getElementById('line2').style.borderColor = '#e2e8f0';
    document.getElementById('line3').style.borderColor = '#e2e8f0';
    document.getElementById('line4').style.borderColor = '#e2e8f0';
}
clickPrev(ev:any) {
    console.log(ev,'prev');

    if (ev == '1') {
        document.getElementById('form1').style.display = 'block';
        document.getElementById('form2').style.display = 'none';
        document.getElementById('form3').style.display = 'none';
        document.getElementById('form4').style.display = 'none';
        document.getElementById('step1a').style.color = '#ffffff';
        document.getElementById('step1b').style.backgroundColor = '#319795';
        document.getElementById('step2a').style.color = '#a0aec0';
        document.getElementById('step2b').style.backgroundColor = '#ffffff';
        document.getElementById('step3a').style.color = '#a0aec0';
        document.getElementById('step3b').style.backgroundColor = '#ffffff';
        document.getElementById('step4a').style.color = '#a0aec0';
        document.getElementById('step4b').style.backgroundColor = '#ffffff';
        document.getElementById('line2').style.borderColor = '#e2e8f0';
        document.getElementById('line3').style.borderColor = '#e2e8f0';
        document.getElementById('line4').style.borderColor = '#e2e8f0';
    } else if (ev == '2') {
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'block';
        document.getElementById('form3').style.display = 'none';
        document.getElementById('form4').style.display = 'none';
        document.getElementById('step1a').style.color = '#ffffff';
        document.getElementById('step1b').style.backgroundColor = '#319795';
        document.getElementById('step2a').style.color = '#ffffff';
        document.getElementById('step2b').style.backgroundColor = '#319795';
        document.getElementById('step3a').style.color = '#a0aec0';
        document.getElementById('step3b').style.backgroundColor = '#ffffff';
        document.getElementById('step4a').style.color = '#a0aec0';
        document.getElementById('step4b').style.backgroundColor = '#ffffff';
        document.getElementById('line2').style.borderColor = '#319795';
        document.getElementById('line3').style.borderColor = '#e2e8f0';
        document.getElementById('line4').style.borderColor = '#e2e8f0';
    } else if (ev == '3') {
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'none';
        document.getElementById('form3').style.display = 'block';
        document.getElementById('form4').style.display = 'none';
        document.getElementById('step1a').style.color = '#ffffff';
        document.getElementById('step1b').style.backgroundColor = '#319795';
        document.getElementById('step2a').style.color = '#ffffff';
        document.getElementById('step2b').style.backgroundColor = '#319795';
        document.getElementById('step3a').style.color = '#ffffff';
        document.getElementById('step3b').style.backgroundColor = '#319795';
        document.getElementById('step4a').style.color = '#a0aec0';
        document.getElementById('step4b').style.backgroundColor = '#ffffff';
        document.getElementById('line2').style.borderColor = '#319795';
        document.getElementById('line3').style.borderColor = '#319795';
        document.getElementById('line4').style.borderColor = '#e2e8f0';
    } else if (ev == '4') {
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'none';
        document.getElementById('form3').style.display = 'none';
        document.getElementById('form4').style.display = 'block';
        document.getElementById('step1a').style.color = '#ffffff';
        document.getElementById('step1b').style.backgroundColor = '#319795';
        document.getElementById('step2a').style.color = '#ffffff';
        document.getElementById('step2b').style.backgroundColor = '#319795';
        document.getElementById('step3a').style.color = '#ffffff';
        document.getElementById('step3b').style.backgroundColor = '#319795';
        document.getElementById('step4a').style.color = '#ffffff';
        document.getElementById('step4b').style.backgroundColor = '#319795';
        document.getElementById('line2').style.borderColor = '#319795';
        document.getElementById('line3').style.borderColor = '#319795';
        document.getElementById('line4').style.borderColor = '#319795';
    } else {
        document.getElementById('form1').style.display = 'block';
        document.getElementById('form2').style.display = 'none';
        document.getElementById('form3').style.display = 'none';
        document.getElementById('form4').style.display = 'none';
        document.getElementById('step1a').style.color = '#ffffff';
        document.getElementById('step1b').style.backgroundColor = '#319795';
        document.getElementById('step2a').style.color = '#a0aec0';
        document.getElementById('step2b').style.backgroundColor = '#ffffff';
        document.getElementById('step3a').style.color = '#a0aec0';
        document.getElementById('step3b').style.backgroundColor = '#ffffff';
        document.getElementById('step4a').style.color = '#a0aec0';
        document.getElementById('step4b').style.backgroundColor = '#ffffff';
        document.getElementById('line2').style.borderColor = '#e2e8f0';
        document.getElementById('line3').style.borderColor = '#e2e8f0';
        document.getElementById('line4').style.borderColor = '#e2e8f0';
        
    }
}

clickNext(ev:any) {
    console.log(ev,'next');
    if (ev == '1') {
        document.getElementById('form1').style.display = 'block';
        document.getElementById('form2').style.display = 'none';
        document.getElementById('form3').style.display = 'none';
        document.getElementById('form4').style.display = 'none';
        document.getElementById('step1a').style.color = '#ffffff';
        document.getElementById('step1b').style.backgroundColor = '#319795';
        document.getElementById('step2a').style.color = '#a0aec0';
        document.getElementById('step2b').style.backgroundColor = '#ffffff';
        document.getElementById('step3a').style.color = '#a0aec0';
        document.getElementById('step3b').style.backgroundColor = '#ffffff';
        document.getElementById('step4a').style.color = '#a0aec0';
        document.getElementById('step4b').style.backgroundColor = '#ffffff';
        document.getElementById('line2').style.borderColor = '#e2e8f0';
        document.getElementById('line3').style.borderColor = '#e2e8f0';
        document.getElementById('line4').style.borderColor = '#e2e8f0';
    } else if (ev == '2') {
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'block';
        document.getElementById('form3').style.display = 'none';
        document.getElementById('form4').style.display = 'none';
        document.getElementById('step1a').style.color = '#ffffff';
        document.getElementById('step1b').style.backgroundColor = '#319795';
        document.getElementById('step2a').style.color = '#ffffff';
        document.getElementById('step2b').style.backgroundColor = '#319795';
        document.getElementById('step3a').style.color = '#a0aec0';
        document.getElementById('step3b').style.backgroundColor = '#ffffff';
        document.getElementById('step4a').style.color = '#a0aec0';
        document.getElementById('step4b').style.backgroundColor = '#ffffff';
        document.getElementById('line2').style.borderColor = '#319795';
        document.getElementById('line3').style.borderColor = '#e2e8f0';
        document.getElementById('line4').style.borderColor = '#e2e8f0';
    } else if (ev == '3') {
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'none';
        document.getElementById('form3').style.display = 'block';
        document.getElementById('form4').style.display = 'none';
        document.getElementById('step1a').style.color = '#ffffff';
        document.getElementById('step1b').style.backgroundColor = '#319795';
        document.getElementById('step2a').style.color = '#ffffff';
        document.getElementById('step2b').style.backgroundColor = '#319795';
        document.getElementById('step3a').style.color = '#ffffff';
        document.getElementById('step3b').style.backgroundColor = '#319795';
        document.getElementById('step4a').style.color = '#a0aec0';
        document.getElementById('step4b').style.backgroundColor = '#ffffff';
        document.getElementById('line2').style.borderColor = '#319795';
        document.getElementById('line3').style.borderColor = '#319795';
        document.getElementById('line4').style.borderColor = '#e2e8f0';
    } else if (ev == '4') {
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'none';
        document.getElementById('form3').style.display = 'none';
        document.getElementById('form4').style.display = 'block';
        document.getElementById('step1a').style.color = '#ffffff';
        document.getElementById('step1b').style.backgroundColor = '#319795';
        document.getElementById('step2a').style.color = '#ffffff';
        document.getElementById('step2b').style.backgroundColor = '#319795';
        document.getElementById('step3a').style.color = '#ffffff';
        document.getElementById('step3b').style.backgroundColor = '#319795';
        document.getElementById('step4a').style.color = '#ffffff';
        document.getElementById('step4b').style.backgroundColor = '#319795';
        document.getElementById('line2').style.borderColor = '#319795';
        document.getElementById('line3').style.borderColor = '#319795';
        document.getElementById('line4').style.borderColor = '#319795';
    } else {
        document.getElementById('form1').style.display = 'block';
        document.getElementById('form2').style.display = 'none';
        document.getElementById('form3').style.display = 'none';
        document.getElementById('form4').style.display = 'none';
        document.getElementById('step1a').style.color = '#ffffff';
        document.getElementById('step1b').style.backgroundColor = '#319795';
        document.getElementById('step2a').style.color = '#a0aec0';
        document.getElementById('step2b').style.backgroundColor = '#ffffff';
        document.getElementById('step3a').style.color = '#a0aec0';
        document.getElementById('step3b').style.backgroundColor = '#ffffff';
        document.getElementById('step4a').style.color = '#a0aec0';
        document.getElementById('step4b').style.backgroundColor = '#ffffff';
        document.getElementById('line2').style.borderColor = '#e2e8f0';
        document.getElementById('line3').style.borderColor = '#e2e8f0';
        document.getElementById('line4').style.borderColor = '#e2e8f0';
        
    }
}

clickSave() {

}

render() {
return (
<main>
  <app-header></app-header>

  <div class="alert-footer w-full fixed bottom-0">
    <input type="checkbox" class="hidden" id="footeralert" />

    <div class="flex items-center justify-between w-full p-2 bg-blue-500 shadow text-white">
      Harap lengkapi formulir pendaftaran!

      <label class="close cursor-pointer" title="close" htmlFor="footertoast">
        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
          viewBox="0 0 18 18">
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
          </path>
        </svg>
      </label>
    </div>
  </div>


  <div class="p-5">
    <div class="mx-4 p-4">
      <div class="flex items-center">
        <div id="step1a" class="flex items-center text-gray-500 relative">
          <div id="step1b"
            class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-user-plus ">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          </div>
          <div class="hidden md:block absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Formulir
          </div>
        </div>
        <div id="line2" class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
        <div id="step2a" class="flex items-center text-gray-500 relative">
          <div id="step2b" class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-bookmark ">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <div class="hidden md:block absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
            Pembayaran</div>
        </div>
        <div id="line3" class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
        <div id="step3a" class="flex items-center text-gray-500 relative">
          <div id="step3b" class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-mail ">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div class="hidden md:block absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
            Pengumuman</div>
        </div>
        <div id="line4" class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
        <div id="step4a" class="flex items-center text-gray-500 relative">
          <div id="step4b" class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-database ">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
          </div>
          <div class="hidden md:block absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Selesai
          </div>
        </div>
      </div>
    </div>
    <div id="form1" class="mt-8 p-4">
      <div>

        <div class="flex flex-col md:flex-row">
          <div class="w-full flex-1 mx-2 svelte-1l8159u">
            <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Jenis Kelamin*</div>
            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <select class="p-1 px-2 outline-none w-full text-gray-800">
                <option value="" disabled={true}>Jenis Kelamin*</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>
          </div>
          <div class="w-full flex-1 mx-2 svelte-1l8159u">
            <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Asal Sekolah/Universitas*
            </div>
            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <input placeholder="Asal Sekolah/Universitas"
                class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
            </div>
          </div>
          <div class="w-full flex-1 mx-2 svelte-1l8159u">
            <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Tahun Lulus*</div>
            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">

              <select class="p-1 px-2 outline-none w-full text-gray-800">
                <option value="" disabled={true}>Tahun Lulus*</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row">
          <div class="w-full mx-2 flex-1 svelte-1l8159u">
            <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Jalur Pendaftaran*</div>
            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <select class="p-1 px-2 outline-none w-full text-gray-800">
                <option value="" disabled={true}>Jalur Pendaftaran*</option>
                <option value="reg01">UTBK Agama Islam</option>
                <option value="reg02">Non UTBK Agama Islam</option>
                <option value="reg03">UTBK Soshum</option>
                <option value="reg04">Non UTBK Soshum</option>
              </select>
            </div>
          </div>
          <div class="w-full mx-2 flex-1 svelte-1l8159u">
            <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Prodi Pilihan*</div>
            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <select class="p-1 px-2 outline-none w-full text-gray-800">
                <option value="" disabled={true}>Prodi Pilihan*</option>
                <option value="prd01">Hukum Keluarga Islam (Syariah - Ahwal Al-Syahkshiyyah)</option>
                <option value="prd02">Pendidikan Agama Islam</option>
                <option value="prd03">Pendidikan Bahasa Arab</option>
              </select>
            </div>
          </div>
          <div class="w-full mx-2 flex-1 svelte-1l8159u">
            <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Pilih Jenjang Studi</div>
            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <select class="p-1 px-2 outline-none w-full text-gray-800">
                <option value="" disabled={true}>Pilih Jenjang Studi</option>
                <option value="s1">S1</option>
                <option value="s2">S2</option>
                <option value="D4">D4</option>
                <option value="d3">D3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="flex p-2 mt-4">
    
        <div class="flex-auto flex flex-row-reverse">
          <button class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition" onClick={()=>this.clickNext('2')}>Next</button>
        
        </div>
      </div>
    </div>


    <div id="form2" class="mt-8 p-4">
      <div>

        <div class="flex flex-col md:flex-row">
          <div class="w-full flex-1 mx-2 svelte-1l8159u">
            <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Metode Pembayaran*</div>
            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <select class="p-1 px-2 outline-none w-full text-gray-800">
                <option value="" disabled={true}>Metode Pembayaran*</option>
                <option value="BNI">Transfer BNI</option>
                <option value="BRI">Transfer BRI</option>
                <option value="BCA">Transfer BCA</option>
              </select>
            </div>
          </div>
          <div class="w-full flex-1 mx-2 svelte-1l8159u">
            <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Nominal Pembayaran</div>
            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">

              <input placeholder="Rp 0,-" class="p-1 px-2 outline-none w-full text-gray-800" />
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row">
        <div class="w-full flex-1 mx-2 svelte-1l8159u">
            <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Nomor Pendaftaran</div>
            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">

              <input placeholder="" class="p-1 px-2 outline-none w-full text-gray-800" />
            </div>
          </div>

          <div class="w-full flex-1 mx-2 svelte-1l8159u">
            <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Nama Lengkap</div>
            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">

              <input placeholder="" class="p-1 px-2 outline-none w-full text-gray-800" />
            </div>
          </div>

          <div class="w-full flex-1 mx-2 svelte-1l8159u">
            <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Nomor Virtual Account</div>
            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">

              <input placeholder="" class="p-1 px-2 outline-none w-full text-gray-800" />
            </div>
          </div>
        </div>
        
      </div>
      <div class="flex p-2 mt-4">
        <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition" onClick={()=>this.clickPrev('1')}>Previous</button>
        <div class="flex-auto flex flex-row-reverse">
          <button class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition" onClick={()=>this.clickNext('3')}>Next</button>
        
        </div>
      </div>
    </div>




    <div id="form3" class="mt-8 p-4">
      <div>

        
        <div class="">
            <p class="text-xl md:text-2xl font-bold text-teal-700">PEMBAYARAN VIA TRANSFER BNI46/BNI SYARIAH</p>
            <p class="text-sm md:text-base text-gray-800 mt-6">Batas pembayaran via transfer paling lambat 12 Juli 2020 13:00:00</p>
            <p  class="text-sm md:text-base text-gray-800">Silahkan melihat alur penerimaan mahasiswa baru <a class="text-blue-700 underline cursor-pointer">DISINI</a></p>
            <p class="text-sm md:text-base text-gray-800">Silahkan unduh cara pembayaran via transfer <a class="text-blue-700 underline cursor-pointer">DISINI</a> atau silahkan baca panduan dibawah</p>
            <div class="bg-gray-200 px-4 py-6 mt-6">
            <p class="font-bold text-base md:text-xl uppercase mb-6">PANDUAN PEMBAYARAN</p>

<div class="">
<ion-item  mode="md" lines="none" button class="item-btn" onClick={() => this.moreTypePay(1)}>
  <p class="label-panduan"><b>Transfer lewat ATM antar bank</b></p>
  <ion-icon name={this.iconPay1} slot="end"></ion-icon>
</ion-item>
{this.typePay1 == true
?<div class="isi-panduan">
  <p class="p-panduan"><b>1. </b>Masukan kartu ATM ke mesin ATM</p>
  <p class="p-panduan"><b>2. </b>Silahkan masukan PIN ATM Anda</p>
  <p class="p-panduan"><b>3. </b>Pilih transaksi lainnya</p>
  <p class="p-panduan"><b>4. </b>Pilih transfer</p>
  <p class="p-panduan"><b>5. </b>Pilih antar bank</p>
  <p class="p-panduan"><b>6. </b>Masukan nomor rekening <b>{this.bankNo}</b> A/N <b>{this.bankName}</b>. Pilih 'BENAR'</p>
  <p class="p-panduan"><b>7. </b>Masukan jumlah uang yang ingin di transfer, <b>pastikan nominal angkanya sudah benar</b></p>
  <p class="p-panduan"><b>8. </b>Pilih 'BENAR' untuk melanjutkan</p>
  <p class="p-panduan"><b>9. </b>Konfirmasi transfer. Pilih 'YA'</p>
  <p class="p-panduan"><b>10. </b>Ambil bukti transfer</p>
  <p class="p-panduan"><b>11. </b>Transaksi selesai. Pilih 'KELUAR'</p>
</div>
:''
}
 <ion-item  mode="md" lines="none" button class="item-btn" onClick={() => this.moreTypePay(2)}>
  <p class="label-panduan"><b>Transfer lewat ATM bank lain</b></p>
  <ion-icon name={this.iconPay2} slot="end"></ion-icon>
</ion-item>
{this.typePay2 == true
?<div class="isi-panduan">
  <p class="p-panduan"><b>1. </b>Masukan kartu ATM ke mesin ATM</p>
  <p class="p-panduan"><b>2. </b>Silahkan masukan PIN ATM Anda</p>
  <p class="p-panduan"><b>3. </b>Pilih transaksi lainnya</p>
  <p class="p-panduan"><b>4. </b>Pilih transfer</p>
  <p class="p-panduan"><b>5. </b>Pilih bank lainnya</p>
  <p class="p-panduan"><b>6. </b>Masukkan kode bank dan nomor rekening tujuan (Bank Lain). Pilih 'BENAR'</p>
  <p class="p-panduan"><b>7. </b>Masukkan nomor referensi (kosongkan bila tidak ada)</p>
  <p class="p-panduan"><b>8. </b>Masukkan kembali kode bank dan nomor rekening <b>{this.bankNo}</b> A/N <b>{this.bankName}</b>. Pilih 'BENAR'</p>
  <p class="p-panduan"><b>9. </b>Masukan nomor rek tujuan diawali kode bank. Pilih 'BENAR'</p>
  <p class="p-panduan"><b>10. </b>Masukan jumlah uang yang ingin di transfer, <b>pastikan nominal angkanya sudah benar</b></p>
  <p class="p-panduan"><b>11. </b>Pilih 'BENAR' untuk melanjutkan</p>
  <p class="p-panduan"><b>12. </b>Konfirmasi transfer. Pilih 'YA'</p>
  <p class="p-panduan"><b>13. </b>Ambil bukti transfer</p>
  <p class="p-panduan"><b>14. </b>Transaksi selesai. Pilih 'KELUAR'</p>
</div>
:''
}
</div> 
            </div>
        </div>
      </div>
      <div class="flex p-2 mt-4">
        <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition" onClick={()=>this.clickPrev('2')}>Previous</button>
        <div class="flex-auto flex flex-row-reverse">
          <button class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition" onClick={()=>this.clickNext('4')}>Next</button>
        
        </div>
      </div>
    </div>



    <div id="form4" class="mt-8 p-4">
      <div>
        <img src="/assets/imgs/done.svg" alt="done" class="iconsuccess"/>
        <div class="mx-auto text-center">
            <p class="text-xl md:text-3xl font-bold text-green-700">Selamat!</p>
            <p class="text-xs md:text-base text-gray-800">Anda telah menyelesaikan pendaftaran</p>
        </div>
      </div>
      <div class="flex p-2 mt-4">
        <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition" onClick={()=>this.clickPrev('3')}>Previous</button>
        <div class="flex-auto flex flex-row-reverse">
          <button class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition" onClick={()=>this.clickSave()}>Save</button>
        
        </div>
      </div>
    </div>
    
  </div>


  <app-footer></app-footer>
</main>
);
}

}
