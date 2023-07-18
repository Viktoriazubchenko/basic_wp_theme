(function(){
    const posts_grid = document.querySelector('#post-cat-archive__grid');

    if(!posts_grid){
        return;
    }

    const load_posts_btn = document.querySelector('#load-more');
    const category = posts_grid.dataset.category;
    const posts_per_page = 6;
    let currentPage = 1;
    
    const load_more_cat_posts = () =>{
        currentPage++;
        jQuery.ajax({
            url: localizedData.ajax_url,
            type: 'POST',
            dataType: 'json',
            data: {
                action: 'load_more_posts',
                paged: currentPage,
                category: category,
                posts_per_page: posts_per_page
            },
            success: function (res) {
                if(currentPage >= res.max) {
                    load_posts_btn.style.display = "none";
                }
                posts_grid.insertAdjacentHTML('beforeend', res.html);
            }
        })
    };

    load_posts_btn.addEventListener('click', () => {
        load_more_cat_posts();
    })

}())