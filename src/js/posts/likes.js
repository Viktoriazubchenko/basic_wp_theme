(function(){
    const post_info_likes = document.querySelector('.post-info__likes');
    if(!post_info_likes){
        return;
    }
    const root_url = localizedData.root_url;

    const like_btn = document.querySelector('.post-info__likes .dashicons');

    const add_like = () => {
        jQuery.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader("X-WP-Nonce", localizedData.nonce)
            },
            url: localizedData.root_url + '/wp-json/viktoria/v1/manage_likes',
            type: 'POST',
            data: {
                post_id: like_btn.dataset.postid
            },
            success: (response) => {
                like_btn.classList.remove('dashicons-star-empty'); 
                like_btn.classList.add('dashicons-star-filled');
                like_btn.dataset.exist = "yes";
                let likeCount = parseInt(document.querySelector('.post-info__likes .likes-count').textContent, 10);
                likeCount++;
                document.querySelector('.post-info__likes .likes-count').textContent = likeCount;
                like_btn.dataset.like = response;
            },
            error: (response) => {
                console.log(response);
            }
        })
    }

    const remove_like = () => {
        jQuery.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader("X-WP-Nonce", localizedData.nonce)
            },
            url: localizedData.root_url + '/wp-json/viktoria/v1/manage_likes',
            type: 'DELETE',
            data: {
                'like': like_btn.dataset.like
            },
            success: (response) => {
                like_btn.classList.remove('dashicons-star-filled');
                like_btn.classList.add('dashicons-star-empty'); 
                like_btn.dataset.exist = "no";
                let likeCount = parseInt(document.querySelector('.post-info__likes .likes-count').textContent, 10);
                likeCount--;
                document.querySelector('.post-info__likes .likes-count').textContent = likeCount;
                like_btn.dataset.like = '';
            },
            error: (response) => {
                console.log(response);
            }
        }) 
    }

    like_btn.addEventListener('click', () => {
        if(like_btn.getAttribute("data-exist") == "yes"){
            remove_like();
        } else {
            add_like();
        } 
    })
}())