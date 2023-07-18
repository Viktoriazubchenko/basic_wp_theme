(function(){
    const site_header = document.querySelector('.site-header');

    if ( ! site_header  ) {
        return;
    }

    const menu_items_with_children = document.querySelectorAll('.menu-item-has-children');
    const menu_items = document.querySelectorAll('.menu-item');
    const sub_menus = document.querySelectorAll('.sub-menu');
    const burger_btn = document.querySelector('.button-burger');
    const navigation_wrap = document.querySelector('.site-header__wrapper');
    const width = document.documentElement.clientWidth || window.innerWidth;
    const small_screen_width = 767.98;
    
    burger_btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(navigation_wrap.classList.contains('active')){
            navigation_wrap.classList.remove('active');
        } else {
            navigation_wrap.classList.add('active');
        }
    })


    if(menu_items){
        menu_items.forEach((item) => {
            if(width > small_screen_width) {
                item.addEventListener('mouseover', () => {
                    document.querySelectorAll('.active-children').forEach((item) => {
                        item.classList.remove('active-children');
                    })
                    item.classList.add('active-children');  
                })
            } else {
                item.addEventListener('click', () => {
                    if(item.classList.contains('active-children')){
                        item.classList.remove('active-children');
                    }  else {
                        item.classList.add('active-children');
                    }
                })
            }  
        })

        sub_menus.forEach((menu) => {
            menu.addEventListener('mouseout', () => {
                document.querySelectorAll('.active-children').forEach((item) => {
                    item.classList.remove('active-children');
                })
            })
        })

        
    }
}());