(function(){
    if(! document.querySelector('.sidebar-trigger') || ! document.querySelector('.events-archive__sidebar')){
        return;
    }

    const open_sidebar = document.querySelector('.sidebar-trigger .button');
    const hide_sidebar = document.querySelector('.hide-sidebar .button');
    const sidebar = document.querySelector('.events-archive__sidebar');

    open_sidebar.addEventListener('click', () => {
        sidebar.classList.add('opened');
    })

    hide_sidebar.addEventListener('click', () => {
        sidebar.classList.remove('opened');
    })
}());