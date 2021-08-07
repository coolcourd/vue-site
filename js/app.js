Vue.component('button-counter', {
    data() {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })


  Vue.component('page-header', {
    data() {
      return {
        mobileOpen: false,
        profileOpen: false
      }
    },
    template: `
    <header>
    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <button @click="mobileOpen=!mobileOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-col text-gray-300">
                <span>Courd Headman</span>
                <span class="text-xs">Web developer</span>
              </div>
              <div class="hidden sm:block sm:ml-6" >
                <div class="flex space-x-4">
                  <a href="/" class="${window.location.pathname === '/' ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 text-gray-300 hover:text-white'} px-3  py-2 rounded-md text-sm font-medium">Home</a>
      
                  <a href="/services" class="${window.location.pathname.match('/services') ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 text-gray-300 hover:text-white'} px-3  py-2 rounded-md text-sm font-medium">Services</a>
      
                  <a href="/portfolio" class="${window.location.pathname.match('/portfolio') ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 text-gray-300 hover:text-white'} px-3  py-2 rounded-md text-sm font-medium">Portfolio</a>
      
                  <a href="/contact" class="${window.location.pathname.match('/contact') ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 text-gray-300 hover:text-white'} px-3  py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">      
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div @click="profileOpen=!profileOpen" v-on:blur="profileOpen=false">
                  <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://i.imgflip.com/1keb2v.gif" alt="">
                  </button>
                </div>
      
                <div v-show="profileOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu" v-show="mobileOpen">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>
      
            <a href="/services" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
      
            <a href="/portfolio" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
      
            <a href="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      </nav>
</header>
`
  })

  

  Vue.component('page-footer', {
    data() {
      return {
        count: 0
      }
    },
    template: `
    <footer class="bg-gray-800 p-2 sm:flex justify-around">
      <div>
        <!-- col one -->
      </div>
      <div>
        <!-- col two -->
      </div>
      <div>
        <!-- col three -->
        <h1 class="text-gray-300 sm:inline">Copywrite ${(new Date()).getFullYear()}</h1>
      </div>
    </footer>
`
  })
   
const app = new Vue({
  el: '#root',
  data: {
    numbers: [1,4,7,3,6,32,5]
  },
  computed: {

  },
})