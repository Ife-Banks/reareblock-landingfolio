const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');   
     }
})

/*<div class="flex gap-x-5 h-150 lg:basis-1/5   w-90 mx-auto" >
                <div class="bg-[url('/public/img/ife.jpg')] h-100 w-30  self-center rounded-3xl bg-cover border border-gray-300 shadow-sm 0  self-center rounded-3xl bg-cover bg-[center_right_15rem]">
            
                </div>
               <!-- <img src="/public/img/R.png" alt="" srcset="" class="h-150 w-50 border self-end rounded-3xl object-cover object-[50%_20%] pb-0">-->
                <div class="bg-[url('/public/img/ife.jpg'),url('/public/img/ife.jpg')] bg-cover  h-100 w-30  self-end rounded-3xl border border-gray-300 shadow-sm bg-no-repeat bg-blend-multiply  bg-[length:100%_10%,5px_5px]  bg-[position:center_bottom_6rem,right_bottom]" >
                    <!-- content here -->
                  </div>
                    <div class="bg-[url('/public/img/ife.jpg')] h-100 w-30  self-center rounded-3xl bg-cover bg-[center_left_15rem] border border-gray-300 shadow-sm">
            
                    </div>
              
               </div>