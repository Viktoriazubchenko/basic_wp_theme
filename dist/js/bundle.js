/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/events-archive-sidebar.js":
/*!**************************************************!*\
  !*** ./src/js/modules/events-archive-sidebar.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(function () {
  if (!document.querySelector('.sidebar-trigger') || !document.querySelector('.events-archive__sidebar')) {
    return;
  }
  var open_sidebar = document.querySelector('.sidebar-trigger .button');
  var hide_sidebar = document.querySelector('.hide-sidebar .button');
  var sidebar = document.querySelector('.events-archive__sidebar');
  open_sidebar.addEventListener('click', function () {
    sidebar.classList.add('opened');
  });
  hide_sidebar.addEventListener('click', function () {
    sidebar.classList.remove('opened');
  });
})();

/***/ }),

/***/ "./src/js/modules/faq-accordion.js":
/*!*****************************************!*\
  !*** ./src/js/modules/faq-accordion.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(function () {
  var faq_items = document.querySelectorAll('.faq-block__item');
  if (!faq_items) {
    return;
  }
  var question_items = document.querySelectorAll('.faq-block__question');
  var answer_items = document.querySelectorAll('.faq-block__answer');
  question_items.forEach(function (item) {
    item.addEventListener('click', function () {
      var answer = item.nextElementSibling;
      var removeClass = function removeClass(items_name, class_name) {
        items_name.forEach(function (item) {
          item.classList.remove(class_name);
        });
      };
      if (answer.classList.contains('show')) {
        removeClass(answer_items, 'show');
        removeClass(question_items, 'opened-question');
      } else {
        removeClass(answer_items, 'show');
        removeClass(question_items, 'opened-question');
        answer.classList.add('show');
        item.classList.add('opened-question');
      }
    });
  });
})();

/***/ }),

/***/ "./src/js/modules/navigation-dropdown.js":
/*!***********************************************!*\
  !*** ./src/js/modules/navigation-dropdown.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(function () {
  var site_header = document.querySelector('.site-header');
  if (!site_header) {
    return;
  }
  var menu_items_with_children = document.querySelectorAll('.menu-item-has-children');
  var menu_items = document.querySelectorAll('.menu-item');
  var sub_menus = document.querySelectorAll('.sub-menu');
  var burger_btn = document.querySelector('.button-burger');
  var navigation_wrap = document.querySelector('.site-header__wrapper');
  var width = document.documentElement.clientWidth || window.innerWidth;
  var small_screen_width = 767.98;
  burger_btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (navigation_wrap.classList.contains('active')) {
      navigation_wrap.classList.remove('active');
    } else {
      navigation_wrap.classList.add('active');
    }
  });
  if (menu_items) {
    menu_items.forEach(function (item) {
      if (width > small_screen_width) {
        item.addEventListener('mouseover', function () {
          document.querySelectorAll('.active-children').forEach(function (item) {
            item.classList.remove('active-children');
          });
          item.classList.add('active-children');
        });
      } else {
        item.addEventListener('click', function () {
          if (item.classList.contains('active-children')) {
            item.classList.remove('active-children');
          } else {
            item.classList.add('active-children');
          }
        });
      }
    });
    sub_menus.forEach(function (menu) {
      menu.addEventListener('mouseout', function () {
        document.querySelectorAll('.active-children').forEach(function (item) {
          item.classList.remove('active-children');
        });
      });
    });
  }
})();

/***/ }),

/***/ "./src/js/modules/posts-slider.js":
/*!****************************************!*\
  !*** ./src/js/modules/posts-slider.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
var $jq = jQuery.noConflict();
$jq(document).ready(function () {
  $jq('.posts-slider__slider-post').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $jq('.posts-slider__controllers-post'),
    dotsClass: 'posts-slick-dots',
    prevArrow: '<div class="slider-arrow-btn slider-arrow-btn-prev"><span class="dashicons dashicons-arrow-left-alt"></span></div>',
    nextArrow: '<div class="slider-arrow-btn slider-arrow-btn-next"><span class="dashicons dashicons-arrow-right-alt"></span></div>',
    responsive: [{
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        appendDots: $jq('.posts-slider__dots-post')
      }
    }, {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  });
});
$jq(document).ready(function () {
  $jq('.posts-slider__slider-event').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $jq('.posts-slider__controllers-event'),
    dotsClass: 'posts-slick-dots',
    prevArrow: '<div class="slider-arrow-btn slider-arrow-btn-prev"><span class="dashicons dashicons-arrow-left-alt"></span></div>',
    nextArrow: '<div class="slider-arrow-btn slider-arrow-btn-next"><span class="dashicons dashicons-arrow-right-alt"></span></div>',
    responsive: [{
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        appendDots: $jq('.posts-slider__dots-event')
      }
    }, {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  });
});

/***/ }),

/***/ "./src/js/posts/events.js":
/*!********************************!*\
  !*** ./src/js/posts/events.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
var events_list = document.querySelector('#events-grid');
var events_sort = document.querySelector('#sort-events');
var events_filter = document.querySelector('#filter-events');
var keyword = document.querySelector('#keyword');
var only_upcoming_check = document.querySelector('.only-upcoming-check');
var show_only_upcoming_posts = false;

// all checkboxes 
var event_filter_checkboxes = document.querySelectorAll('.event-filter-check');
var chosen_filters = document.querySelector('.chosen-filters');
var chosen_filters_data = [];
var event_type_checkboxes = document.querySelectorAll('.event-type-check');
var chosen_type_filters_data = [];
var all_type_filters_data = [];
var event_level_checkboxes = document.querySelectorAll('.event-level-check');
var chosen_level_filters_data = [];
var all_level_filters_data = [];
var event_format_checkboxes = document.querySelectorAll('.event-format-check');
var chosen_format_filters_data = [];
var all_format_filters_data = [];
var loader = document.getElementById("loader");
if (events_list) {
  var fetch_events = function fetch_events() {
    loader.style.display = "inline-block";
    var event_type_key = chosen_type_filters_data.length != 0 ? chosen_type_filters_data : all_type_filters_data;
    var event_level_key = chosen_level_filters_data.length != 0 ? chosen_level_filters_data : all_level_filters_data;
    var event_format_key = chosen_format_filters_data.length != 0 ? chosen_format_filters_data : all_format_filters_data;
    var category_name = events_filter.value;
    var request_data = {
      action: 'fetch_events',
      order_by: events_sort.value,
      order: events_sort.value === "title" ? "ASC" : "DESC",
      category_name: category_name,
      keyword: keyword.value,
      event_type_key: event_type_key,
      event_level_key: event_level_key,
      event_format_key: event_format_key,
      only_upcoming_posts: show_only_upcoming_posts
    };
    jQuery.ajax({
      url: localizedData.ajax_url,
      type: 'POST',
      data: request_data,
      success: function success(data) {
        loader.style.display = "none";
        events_list.innerHTML = "";
        events_list.insertAdjacentHTML("afterbegin", data);
      }
    });
  };
  var getUrlParameter = function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
  var preselectOptions = function preselectOptions(checkboxes, chosen_options, param_value) {
    checkboxes.forEach(function (checkbox) {
      if (checkbox.value === param_value) {
        checkbox.checked = true;
        chosen_options.push(checkbox.value);
        chosen_filters_data.push(checkbox.name);
        var filterBadge = document.createElement('span');
        filterBadge.textContent = checkbox.name;
        filterBadge.classList.add('badge');
        chosen_filters.appendChild(filterBadge);
      }
    });
  };
  var preselectFilters = function preselectFilters() {
    var event_type_param = getUrlParameter('event_type');
    var event_level_param = getUrlParameter('event_level');
    var event_format_param = getUrlParameter('event_format');
    var category_name_param = getUrlParameter('category_name');
    if (event_type_param) {
      preselectOptions(event_type_checkboxes, chosen_type_filters_data, event_type_param);
    }
    if (event_level_param) {
      preselectOptions(event_level_checkboxes, chosen_level_filters_data, event_level_param);
    }
    if (event_format_param) {
      preselectOptions(event_format_checkboxes, chosen_format_filters_data, event_format_param);
    }
    if (category_name_param) {
      events_filter.value = category_name_param;
    }
  };
  var filter_functionality = function filter_functionality(checkboxes_selector, all_options_array, chosen_options_array) {
    checkboxes_selector.forEach(function (box) {
      all_options_array.push(box.value);
      box.addEventListener('click', function () {
        chosen_filters.innerHTML = "";
        if (box.checked) {
          chosen_options_array.push(box.value);
          chosen_filters_data.push(box.name);
        } else {
          var value_index = chosen_options_array.indexOf(box.value);
          chosen_options_array.splice(value_index, 1);
          var name_index = chosen_filters_data.indexOf(box.name);
          chosen_filters_data.splice(name_index, 1);
        }
        chosen_filters_data.forEach(function (box) {
          var filter_bage = document.createElement('span');
          filter_bage.textContent = box;
          filter_bage.classList.add('badge');
          chosen_filters.appendChild(filter_bage);
        });
        fetch_events();
      });
    });
    fetch_events();
  };
  preselectFilters();
  fetch_events();
  events_sort.addEventListener('change', fetch_events);
  events_filter.addEventListener('change', fetch_events);
  keyword.addEventListener('input', fetch_events);
  filter_functionality(event_type_checkboxes, all_type_filters_data, chosen_type_filters_data);
  filter_functionality(event_level_checkboxes, all_level_filters_data, chosen_level_filters_data);
  filter_functionality(event_format_checkboxes, all_format_filters_data, chosen_format_filters_data);
  only_upcoming_check.addEventListener('click', function () {
    if (only_upcoming_check.checked) {
      show_only_upcoming_posts = true;
      fetch_events();
    } else {
      show_only_upcoming_posts = false;
      fetch_events();
    }
  });
}

/***/ }),

/***/ "./src/js/posts/likes.js":
/*!*******************************!*\
  !*** ./src/js/posts/likes.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(function () {
  var post_info_likes = document.querySelector('.post-info__likes');
  if (!post_info_likes) {
    return;
  }
  var root_url = localizedData.root_url;
  var like_btn = document.querySelector('.post-info__likes .dashicons');
  var add_like = function add_like() {
    jQuery.ajax({
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader("X-WP-Nonce", localizedData.nonce);
      },
      url: localizedData.root_url + '/wp-json/viktoria/v1/manage_likes',
      type: 'POST',
      data: {
        post_id: like_btn.dataset.postid
      },
      success: function success(response) {
        like_btn.classList.remove('dashicons-star-empty');
        like_btn.classList.add('dashicons-star-filled');
        like_btn.dataset.exist = "yes";
        var likeCount = parseInt(document.querySelector('.post-info__likes .likes-count').textContent, 10);
        likeCount++;
        document.querySelector('.post-info__likes .likes-count').textContent = likeCount;
        like_btn.dataset.like = response;
      },
      error: function error(response) {
        console.log(response);
      }
    });
  };
  var remove_like = function remove_like() {
    jQuery.ajax({
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader("X-WP-Nonce", localizedData.nonce);
      },
      url: localizedData.root_url + '/wp-json/viktoria/v1/manage_likes',
      type: 'DELETE',
      data: {
        'like': like_btn.dataset.like
      },
      success: function success(response) {
        like_btn.classList.remove('dashicons-star-filled');
        like_btn.classList.add('dashicons-star-empty');
        like_btn.dataset.exist = "no";
        var likeCount = parseInt(document.querySelector('.post-info__likes .likes-count').textContent, 10);
        likeCount--;
        document.querySelector('.post-info__likes .likes-count').textContent = likeCount;
        like_btn.dataset.like = '';
      },
      error: function error(response) {
        console.log(response);
      }
    });
  };
  like_btn.addEventListener('click', function () {
    if (like_btn.getAttribute("data-exist") == "yes") {
      remove_like();
    } else {
      add_like();
    }
  });
})();

/***/ }),

/***/ "./src/js/posts/posts.js":
/*!*******************************!*\
  !*** ./src/js/posts/posts.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(function () {
  var posts_grid = document.querySelector('#post-cat-archive__grid');
  if (!posts_grid) {
    return;
  }
  var load_posts_btn = document.querySelector('#load-more');
  var category = posts_grid.dataset.category;
  var posts_per_page = 6;
  var currentPage = 1;
  var load_more_cat_posts = function load_more_cat_posts() {
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
      success: function success(res) {
        if (currentPage >= res.max) {
          load_posts_btn.style.display = "none";
        }
        posts_grid.insertAdjacentHTML('beforeend', res.html);
      }
    });
  };
  load_posts_btn.addEventListener('click', function () {
    load_more_cat_posts();
  });
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts/events.js */ "./src/js/posts/events.js");
/* harmony import */ var _posts_posts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts/posts.js */ "./src/js/posts/posts.js");
/* harmony import */ var _posts_likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts/likes.js */ "./src/js/posts/likes.js");
/* harmony import */ var _modules_navigation_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/navigation-dropdown.js */ "./src/js/modules/navigation-dropdown.js");
/* harmony import */ var _modules_events_archive_sidebar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/events-archive-sidebar.js */ "./src/js/modules/events-archive-sidebar.js");
/* harmony import */ var _modules_posts_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/posts-slider.js */ "./src/js/modules/posts-slider.js");
/* harmony import */ var _modules_faq_accordion_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/faq-accordion.js */ "./src/js/modules/faq-accordion.js");







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7VUFDdkJSLGNBQWMsQ0FBQ2hGLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07UUFDekM7UUFDQThFLFVBQVUsQ0FBQzFELGtCQUFrQixDQUFDLFdBQVcsRUFBRWtFLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO01BQ3hEO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVEVCxjQUFjLENBQUN0SixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUMzQzBKLG1CQUFtQixFQUFFO0VBQ3pCLENBQUMsQ0FBQztBQUVOLENBQUMsR0FBRTs7Ozs7O1VDckNIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDJCO0FBQ0Q7QUFDQTtBQUdnQjtBQUNHO0FBQ1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWt0b3JpYV9wYWNrYWdlLy4vc3JjL2pzL21vZHVsZXMvZXZlbnRzLWFyY2hpdmUtc2lkZWJhci5qcyIsIndlYnBhY2s6Ly92aWt0b3JpYV9wYWNrYWdlLy4vc3JjL2pzL21vZHVsZXMvZmFxLWFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly92aWt0b3JpYV9wYWNrYWdlLy4vc3JjL2pzL21vZHVsZXMvbmF2aWdhdGlvbi1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly92aWt0b3JpYV9wYWNrYWdlLy4vc3JjL2pzL21vZHVsZXMvcG9zdHMtc2xpZGVyLmpzIiwid2VicGFjazovL3Zpa3RvcmlhX3BhY2thZ2UvLi9zcmMvanMvcG9zdHMvZXZlbnRzLmpzIiwid2VicGFjazovL3Zpa3RvcmlhX3BhY2thZ2UvLi9zcmMvanMvcG9zdHMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vdmlrdG9yaWFfcGFja2FnZS8uL3NyYy9qcy9wb3N0cy9wb3N0cy5qcyIsIndlYnBhY2s6Ly92aWt0b3JpYV9wYWNrYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Zpa3RvcmlhX3BhY2thZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92aWt0b3JpYV9wYWNrYWdlLy4vc3JjL2pzL2J1bmRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcbiAgICBpZighIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXRyaWdnZXInKSB8fCAhIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ldmVudHMtYXJjaGl2ZV9fc2lkZWJhcicpKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9wZW5fc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXRyaWdnZXIgLmJ1dHRvbicpO1xuICAgIGNvbnN0IGhpZGVfc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRlLXNpZGViYXIgLmJ1dHRvbicpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXZlbnRzLWFyY2hpdmVfX3NpZGViYXInKTtcblxuICAgIG9wZW5fc2lkZWJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdvcGVuZWQnKTtcbiAgICB9KVxuXG4gICAgaGlkZV9zaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW5lZCcpO1xuICAgIH0pXG59KCkpOyIsIihmdW5jdGlvbigpe1xuICAgIGNvbnN0IGZhcV9pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXEtYmxvY2tfX2l0ZW0nKTtcbiAgICBpZighZmFxX2l0ZW1zKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBxdWVzdGlvbl9pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXEtYmxvY2tfX3F1ZXN0aW9uJyk7XG4gICAgY29uc3QgYW5zd2VyX2l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcS1ibG9ja19fYW5zd2VyJyk7XG5cblxuICAgIHF1ZXN0aW9uX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlQ2xhc3MgPSAoaXRlbXNfbmFtZSwgY2xhc3NfbmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW1zX25hbWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NfbmFtZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoYW5zd2VyLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKXtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhhbnN3ZXJfaXRlbXMsICdzaG93Jyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MocXVlc3Rpb25faXRlbXMsICdvcGVuZWQtcXVlc3Rpb24nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoYW5zd2VyX2l0ZW1zLCAnc2hvdycpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHF1ZXN0aW9uX2l0ZW1zLCAnb3BlbmVkLXF1ZXN0aW9uJyk7XG4gICAgICAgICAgICAgICAgYW5zd2VyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ29wZW5lZC1xdWVzdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG5cblxufSgpKTsiLCIoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBzaXRlX2hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuXG4gICAgaWYgKCAhIHNpdGVfaGVhZGVyICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJyk7XG4gICAgY29uc3QgbWVudV9pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0nKTtcbiAgICBjb25zdCBzdWJfbWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLW1lbnUnKTtcbiAgICBjb25zdCBidXJnZXJfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1idXJnZXInKTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uX3dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXJfX3dyYXBwZXInKTtcbiAgICBjb25zdCB3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBzbWFsbF9zY3JlZW5fd2lkdGggPSA3NjcuOTg7XG4gICAgXG4gICAgYnVyZ2VyX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYobmF2aWdhdGlvbl93cmFwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICAgICAgbmF2aWdhdGlvbl93cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2aWdhdGlvbl93cmFwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSlcblxuXG4gICAgaWYobWVudV9pdGVtcyl7XG4gICAgICAgIG1lbnVfaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYod2lkdGggPiBzbWFsbF9zY3JlZW5fd2lkdGgpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZS1jaGlsZHJlbicpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWNoaWxkcmVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWNoaWxkcmVuJyk7ICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLWNoaWxkcmVuJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtY2hpbGRyZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1jaGlsZHJlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9KVxuXG4gICAgICAgIHN1Yl9tZW51cy5mb3JFYWNoKChtZW51KSA9PiB7XG4gICAgICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUtY2hpbGRyZW4nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWNoaWxkcmVuJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgfVxufSgpKTsiLCJ2YXIgJGpxID0galF1ZXJ5Lm5vQ29uZmxpY3QoKTtcblxuXG4kanEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkgeyBcbiAgICAkanEoJy5wb3N0cy1zbGlkZXJfX3NsaWRlci1wb3N0Jykuc2xpY2soe1xuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXBwZW5kQXJyb3dzOiAkanEoJy5wb3N0cy1zbGlkZXJfX2NvbnRyb2xsZXJzLXBvc3QnKSxcbiAgICAgICAgZG90c0NsYXNzOiAncG9zdHMtc2xpY2stZG90cycsXG4gICAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJzbGlkZXItYXJyb3ctYnRuIHNsaWRlci1hcnJvdy1idG4tcHJldlwiPjxzcGFuIGNsYXNzPVwiZGFzaGljb25zIGRhc2hpY29ucy1hcnJvdy1sZWZ0LWFsdFwiPjwvc3Bhbj48L2Rpdj4nLFxuICAgICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwic2xpZGVyLWFycm93LWJ0biBzbGlkZXItYXJyb3ctYnRuLW5leHRcIj48c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctcmlnaHQtYWx0XCI+PC9zcGFuPjwvZGl2PicsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc1Ljk4LFxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJGpxKCcucG9zdHMtc2xpZGVyX19kb3RzLXBvc3QnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgfSk7XG59KTtcbiRqcShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7IFxuICAkanEoJy5wb3N0cy1zbGlkZXJfX3NsaWRlci1ldmVudCcpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcHBlbmRBcnJvd3M6ICRqcSgnLnBvc3RzLXNsaWRlcl9fY29udHJvbGxlcnMtZXZlbnQnKSxcbiAgICAgIGRvdHNDbGFzczogJ3Bvc3RzLXNsaWNrLWRvdHMnLFxuICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cInNsaWRlci1hcnJvdy1idG4gc2xpZGVyLWFycm93LWJ0bi1wcmV2XCI+PHNwYW4gY2xhc3M9XCJkYXNoaWNvbnMgZGFzaGljb25zLWFycm93LWxlZnQtYWx0XCI+PC9zcGFuPjwvZGl2PicsXG4gICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwic2xpZGVyLWFycm93LWJ0biBzbGlkZXItYXJyb3ctYnRuLW5leHRcIj48c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtYXJyb3ctcmlnaHQtYWx0XCI+PC9zcGFuPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNTc1Ljk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgYXBwZW5kRG90czogJGpxKCcucG9zdHMtc2xpZGVyX19kb3RzLWV2ZW50JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICB9KTtcbn0pOyIsImNvbnN0IGV2ZW50c19saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2ZW50cy1ncmlkJyk7XG5jb25zdCBldmVudHNfc29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LWV2ZW50cycpO1xuY29uc3QgZXZlbnRzX2ZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItZXZlbnRzJyk7XG5sZXQga2V5d29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrZXl3b3JkJyk7XG5cblxuY29uc3Qgb25seV91cGNvbWluZ19jaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmx5LXVwY29taW5nLWNoZWNrJyk7XG5sZXQgc2hvd19vbmx5X3VwY29taW5nX3Bvc3RzID0gZmFsc2U7XG5cbi8vIGFsbCBjaGVja2JveGVzIFxubGV0IGV2ZW50X2ZpbHRlcl9jaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50LWZpbHRlci1jaGVjaycpO1xubGV0IGNob3Nlbl9maWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNob3Nlbi1maWx0ZXJzJyk7XG5sZXQgY2hvc2VuX2ZpbHRlcnNfZGF0YSA9IFtdO1xuXG5sZXQgZXZlbnRfdHlwZV9jaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50LXR5cGUtY2hlY2snKTtcbmxldCBjaG9zZW5fdHlwZV9maWx0ZXJzX2RhdGEgPSBbXTtcbmxldCBhbGxfdHlwZV9maWx0ZXJzX2RhdGEgPSBbXTtcblxubGV0IGV2ZW50X2xldmVsX2NoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbnQtbGV2ZWwtY2hlY2snKTtcbmxldCBjaG9zZW5fbGV2ZWxfZmlsdGVyc19kYXRhID0gW107XG5sZXQgYWxsX2xldmVsX2ZpbHRlcnNfZGF0YSA9IFtdO1xuXG5sZXQgZXZlbnRfZm9ybWF0X2NoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbnQtZm9ybWF0LWNoZWNrJyk7XG5sZXQgY2hvc2VuX2Zvcm1hdF9maWx0ZXJzX2RhdGEgPSBbXTtcbmxldCBhbGxfZm9ybWF0X2ZpbHRlcnNfZGF0YSA9IFtdO1xuXG5sZXQgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXJcIik7XG5cbmlmIChldmVudHNfbGlzdCkge1xuICBjb25zdCBmZXRjaF9ldmVudHMgPSAoKSA9PiB7XG4gICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXG4gICAgY29uc3QgZXZlbnRfdHlwZV9rZXkgPSBjaG9zZW5fdHlwZV9maWx0ZXJzX2RhdGEubGVuZ3RoICE9IDAgPyBjaG9zZW5fdHlwZV9maWx0ZXJzX2RhdGEgOiBhbGxfdHlwZV9maWx0ZXJzX2RhdGE7XG4gICAgY29uc3QgZXZlbnRfbGV2ZWxfa2V5ID0gY2hvc2VuX2xldmVsX2ZpbHRlcnNfZGF0YS5sZW5ndGggIT0gMCA/IGNob3Nlbl9sZXZlbF9maWx0ZXJzX2RhdGEgOiBhbGxfbGV2ZWxfZmlsdGVyc19kYXRhO1xuICAgIGNvbnN0IGV2ZW50X2Zvcm1hdF9rZXkgPSBjaG9zZW5fZm9ybWF0X2ZpbHRlcnNfZGF0YS5sZW5ndGggIT0gMCA/IGNob3Nlbl9mb3JtYXRfZmlsdGVyc19kYXRhIDogYWxsX2Zvcm1hdF9maWx0ZXJzX2RhdGE7XG4gICAgY29uc3QgY2F0ZWdvcnlfbmFtZSA9IGV2ZW50c19maWx0ZXIudmFsdWU7XG5cbiAgICBjb25zdCByZXF1ZXN0X2RhdGEgPSB7XG4gICAgICBhY3Rpb246ICdmZXRjaF9ldmVudHMnLFxuICAgICAgb3JkZXJfYnk6IGV2ZW50c19zb3J0LnZhbHVlLFxuICAgICAgb3JkZXI6IGV2ZW50c19zb3J0LnZhbHVlID09PSBcInRpdGxlXCIgPyBcIkFTQ1wiIDogXCJERVNDXCIsXG4gICAgICBjYXRlZ29yeV9uYW1lOiBjYXRlZ29yeV9uYW1lLFxuICAgICAga2V5d29yZDoga2V5d29yZC52YWx1ZSxcbiAgICAgIGV2ZW50X3R5cGVfa2V5OiBldmVudF90eXBlX2tleSxcbiAgICAgIGV2ZW50X2xldmVsX2tleTogZXZlbnRfbGV2ZWxfa2V5LFxuICAgICAgZXZlbnRfZm9ybWF0X2tleTogZXZlbnRfZm9ybWF0X2tleSxcbiAgICAgIG9ubHlfdXBjb21pbmdfcG9zdHM6IHNob3dfb25seV91cGNvbWluZ19wb3N0c1xuICAgIH1cblxuICAgIGpRdWVyeS5hamF4KHtcbiAgICAgIHVybDogbG9jYWxpemVkRGF0YS5hamF4X3VybCxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHJlcXVlc3RfZGF0YSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZXZlbnRzX2xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZXZlbnRzX2xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRVcmxQYXJhbWV0ZXIgPSAobmFtZSkgPT4ge1xuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tbXS8sICdcXFxcWycpLnJlcGxhY2UoL1tcXF1dLywgJ1xcXFxdJyk7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdbXFxcXD8mXScgKyBuYW1lICsgJz0oW14mI10qKScpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSByZWdleC5leGVjKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIHJldHVybiByZXN1bHRzID09PSBudWxsID8gJycgOiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1sxXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG4gIH07XG5cbiAgY29uc3QgcHJlc2VsZWN0T3B0aW9ucyA9IChjaGVja2JveGVzLCBjaG9zZW5fb3B0aW9ucywgcGFyYW1fdmFsdWUpID0+IHtcbiAgICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICBpZiAoY2hlY2tib3gudmFsdWUgPT09IHBhcmFtX3ZhbHVlKSB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBjaG9zZW5fb3B0aW9ucy5wdXNoKGNoZWNrYm94LnZhbHVlKTtcbiAgICAgICAgY2hvc2VuX2ZpbHRlcnNfZGF0YS5wdXNoKGNoZWNrYm94Lm5hbWUpO1xuICAgICAgICBjb25zdCBmaWx0ZXJCYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZmlsdGVyQmFkZ2UudGV4dENvbnRlbnQgPSBjaGVja2JveC5uYW1lO1xuICAgICAgICBmaWx0ZXJCYWRnZS5jbGFzc0xpc3QuYWRkKCdiYWRnZScpO1xuICAgICAgICBjaG9zZW5fZmlsdGVycy5hcHBlbmRDaGlsZChmaWx0ZXJCYWRnZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcHJlc2VsZWN0RmlsdGVycyA9ICgpID0+IHtcbiAgICBjb25zdCBldmVudF90eXBlX3BhcmFtID0gZ2V0VXJsUGFyYW1ldGVyKCdldmVudF90eXBlJyk7XG4gICAgY29uc3QgZXZlbnRfbGV2ZWxfcGFyYW0gPSBnZXRVcmxQYXJhbWV0ZXIoJ2V2ZW50X2xldmVsJyk7XG4gICAgY29uc3QgZXZlbnRfZm9ybWF0X3BhcmFtID0gZ2V0VXJsUGFyYW1ldGVyKCdldmVudF9mb3JtYXQnKTtcbiAgICBjb25zdCBjYXRlZ29yeV9uYW1lX3BhcmFtID0gZ2V0VXJsUGFyYW1ldGVyKCdjYXRlZ29yeV9uYW1lJyk7XG5cbiAgICBpZiAoZXZlbnRfdHlwZV9wYXJhbSkge1xuICAgICAgcHJlc2VsZWN0T3B0aW9ucyhldmVudF90eXBlX2NoZWNrYm94ZXMsIGNob3Nlbl90eXBlX2ZpbHRlcnNfZGF0YSwgZXZlbnRfdHlwZV9wYXJhbSk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50X2xldmVsX3BhcmFtKSB7XG4gICAgICBwcmVzZWxlY3RPcHRpb25zKGV2ZW50X2xldmVsX2NoZWNrYm94ZXMsIGNob3Nlbl9sZXZlbF9maWx0ZXJzX2RhdGEsIGV2ZW50X2xldmVsX3BhcmFtKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnRfZm9ybWF0X3BhcmFtKSB7XG4gICAgICBwcmVzZWxlY3RPcHRpb25zKGV2ZW50X2Zvcm1hdF9jaGVja2JveGVzLCBjaG9zZW5fZm9ybWF0X2ZpbHRlcnNfZGF0YSwgZXZlbnRfZm9ybWF0X3BhcmFtKTtcbiAgICB9XG5cbiAgICBpZiAoY2F0ZWdvcnlfbmFtZV9wYXJhbSkge1xuICAgICAgZXZlbnRzX2ZpbHRlci52YWx1ZSA9IGNhdGVnb3J5X25hbWVfcGFyYW07XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbHRlcl9mdW5jdGlvbmFsaXR5ID0gKGNoZWNrYm94ZXNfc2VsZWN0b3IsIGFsbF9vcHRpb25zX2FycmF5LCBjaG9zZW5fb3B0aW9uc19hcnJheSkgPT4ge1xuICAgIGNoZWNrYm94ZXNfc2VsZWN0b3IuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBhbGxfb3B0aW9uc19hcnJheS5wdXNoKGJveC52YWx1ZSk7XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNob3Nlbl9maWx0ZXJzLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGlmIChib3guY2hlY2tlZCkge1xuICAgICAgICAgIGNob3Nlbl9vcHRpb25zX2FycmF5LnB1c2goYm94LnZhbHVlKTtcbiAgICAgICAgICBjaG9zZW5fZmlsdGVyc19kYXRhLnB1c2goYm94Lm5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCB2YWx1ZV9pbmRleCA9IGNob3Nlbl9vcHRpb25zX2FycmF5LmluZGV4T2YoYm94LnZhbHVlKTtcbiAgICAgICAgICBjaG9zZW5fb3B0aW9uc19hcnJheS5zcGxpY2UodmFsdWVfaW5kZXgsIDEpO1xuICAgICAgICAgIGxldCBuYW1lX2luZGV4ID0gY2hvc2VuX2ZpbHRlcnNfZGF0YS5pbmRleE9mKGJveC5uYW1lKTtcbiAgICAgICAgICBjaG9zZW5fZmlsdGVyc19kYXRhLnNwbGljZShuYW1lX2luZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBjaG9zZW5fZmlsdGVyc19kYXRhLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbHRlcl9iYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIGZpbHRlcl9iYWdlLnRleHRDb250ZW50ID0gYm94O1xuICAgICAgICAgIGZpbHRlcl9iYWdlLmNsYXNzTGlzdC5hZGQoJ2JhZGdlJyk7XG4gICAgICAgICAgY2hvc2VuX2ZpbHRlcnMuYXBwZW5kQ2hpbGQoZmlsdGVyX2JhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgZmV0Y2hfZXZlbnRzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBmZXRjaF9ldmVudHMoKTtcbiAgfTtcblxuICBwcmVzZWxlY3RGaWx0ZXJzKCk7XG4gIGZldGNoX2V2ZW50cygpO1xuXG4gIGV2ZW50c19zb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZldGNoX2V2ZW50cyk7XG4gIGV2ZW50c19maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZmV0Y2hfZXZlbnRzKTtcbiAga2V5d29yZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZldGNoX2V2ZW50cyk7XG5cbiAgZmlsdGVyX2Z1bmN0aW9uYWxpdHkoZXZlbnRfdHlwZV9jaGVja2JveGVzLCBhbGxfdHlwZV9maWx0ZXJzX2RhdGEsIGNob3Nlbl90eXBlX2ZpbHRlcnNfZGF0YSk7XG4gIGZpbHRlcl9mdW5jdGlvbmFsaXR5KGV2ZW50X2xldmVsX2NoZWNrYm94ZXMsIGFsbF9sZXZlbF9maWx0ZXJzX2RhdGEsIGNob3Nlbl9sZXZlbF9maWx0ZXJzX2RhdGEpO1xuICBmaWx0ZXJfZnVuY3Rpb25hbGl0eShldmVudF9mb3JtYXRfY2hlY2tib3hlcywgYWxsX2Zvcm1hdF9maWx0ZXJzX2RhdGEsIGNob3Nlbl9mb3JtYXRfZmlsdGVyc19kYXRhKTtcblxuICBvbmx5X3VwY29taW5nX2NoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChvbmx5X3VwY29taW5nX2NoZWNrLmNoZWNrZWQpIHtcbiAgICAgIHNob3dfb25seV91cGNvbWluZ19wb3N0cyA9IHRydWU7XG4gICAgICBmZXRjaF9ldmVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd19vbmx5X3VwY29taW5nX3Bvc3RzID0gZmFsc2U7XG4gICAgICBmZXRjaF9ldmVudHMoKTtcbiAgICB9XG4gIH0pO1xuXG59XG4iLCIoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBwb3N0X2luZm9fbGlrZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdC1pbmZvX19saWtlcycpO1xuICAgIGlmKCFwb3N0X2luZm9fbGlrZXMpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJvb3RfdXJsID0gbG9jYWxpemVkRGF0YS5yb290X3VybDtcblxuICAgIGNvbnN0IGxpa2VfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtaW5mb19fbGlrZXMgLmRhc2hpY29ucycpO1xuXG4gICAgY29uc3QgYWRkX2xpa2UgPSAoKSA9PiB7XG4gICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICh4aHIpID0+IHtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtV1AtTm9uY2VcIiwgbG9jYWxpemVkRGF0YS5ub25jZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmw6IGxvY2FsaXplZERhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vdmlrdG9yaWEvdjEvbWFuYWdlX2xpa2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwb3N0X2lkOiBsaWtlX2J0bi5kYXRhc2V0LnBvc3RpZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxpa2VfYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhc2hpY29ucy1zdGFyLWVtcHR5Jyk7IFxuICAgICAgICAgICAgICAgIGxpa2VfYnRuLmNsYXNzTGlzdC5hZGQoJ2Rhc2hpY29ucy1zdGFyLWZpbGxlZCcpO1xuICAgICAgICAgICAgICAgIGxpa2VfYnRuLmRhdGFzZXQuZXhpc3QgPSBcInllc1wiO1xuICAgICAgICAgICAgICAgIGxldCBsaWtlQ291bnQgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdC1pbmZvX19saWtlcyAubGlrZXMtY291bnQnKS50ZXh0Q29udGVudCwgMTApO1xuICAgICAgICAgICAgICAgIGxpa2VDb3VudCsrO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LWluZm9fX2xpa2VzIC5saWtlcy1jb3VudCcpLnRleHRDb250ZW50ID0gbGlrZUNvdW50O1xuICAgICAgICAgICAgICAgIGxpa2VfYnRuLmRhdGFzZXQubGlrZSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlX2xpa2UgPSAoKSA9PiB7XG4gICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICh4aHIpID0+IHtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtV1AtTm9uY2VcIiwgbG9jYWxpemVkRGF0YS5ub25jZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmw6IGxvY2FsaXplZERhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vdmlrdG9yaWEvdjEvbWFuYWdlX2xpa2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICdsaWtlJzogbGlrZV9idG4uZGF0YXNldC5saWtlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGlrZV9idG4uY2xhc3NMaXN0LnJlbW92ZSgnZGFzaGljb25zLXN0YXItZmlsbGVkJyk7XG4gICAgICAgICAgICAgICAgbGlrZV9idG4uY2xhc3NMaXN0LmFkZCgnZGFzaGljb25zLXN0YXItZW1wdHknKTsgXG4gICAgICAgICAgICAgICAgbGlrZV9idG4uZGF0YXNldC5leGlzdCA9IFwibm9cIjtcbiAgICAgICAgICAgICAgICBsZXQgbGlrZUNvdW50ID0gcGFyc2VJbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtaW5mb19fbGlrZXMgLmxpa2VzLWNvdW50JykudGV4dENvbnRlbnQsIDEwKTtcbiAgICAgICAgICAgICAgICBsaWtlQ291bnQtLTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdC1pbmZvX19saWtlcyAubGlrZXMtY291bnQnKS50ZXh0Q29udGVudCA9IGxpa2VDb3VudDtcbiAgICAgICAgICAgICAgICBsaWtlX2J0bi5kYXRhc2V0Lmxpa2UgPSAnJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSBcbiAgICB9XG5cbiAgICBsaWtlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYobGlrZV9idG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1leGlzdFwiKSA9PSBcInllc1wiKXtcbiAgICAgICAgICAgIHJlbW92ZV9saWtlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRfbGlrZSgpO1xuICAgICAgICB9IFxuICAgIH0pXG59KCkpIiwiKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgcG9zdHNfZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3N0LWNhdC1hcmNoaXZlX19ncmlkJyk7XG5cbiAgICBpZighcG9zdHNfZ3JpZCl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkX3Bvc3RzX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkLW1vcmUnKTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IHBvc3RzX2dyaWQuZGF0YXNldC5jYXRlZ29yeTtcbiAgICBjb25zdCBwb3N0c19wZXJfcGFnZSA9IDY7XG4gICAgbGV0IGN1cnJlbnRQYWdlID0gMTtcbiAgICBcbiAgICBjb25zdCBsb2FkX21vcmVfY2F0X3Bvc3RzID0gKCkgPT57XG4gICAgICAgIGN1cnJlbnRQYWdlKys7XG4gICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgIHVybDogbG9jYWxpemVkRGF0YS5hamF4X3VybCxcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnbG9hZF9tb3JlX3Bvc3RzJyxcbiAgICAgICAgICAgICAgICBwYWdlZDogY3VycmVudFBhZ2UsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIHBvc3RzX3Blcl9wYWdlOiBwb3N0c19wZXJfcGFnZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50UGFnZSA+PSByZXMubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRfcG9zdHNfYnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9zdHNfZ3JpZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJlcy5odG1sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgbG9hZF9wb3N0c19idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvYWRfbW9yZV9jYXRfcG9zdHMoKTtcbiAgICB9KVxuXG59KCkpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0ICcuL3Bvc3RzL2V2ZW50cy5qcyc7XG5pbXBvcnQgJy4vcG9zdHMvcG9zdHMuanMnO1xuaW1wb3J0ICcuL3Bvc3RzL2xpa2VzLmpzJztcblxuXG5pbXBvcnQgJy4vbW9kdWxlcy9uYXZpZ2F0aW9uLWRyb3Bkb3duLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL2V2ZW50cy1hcmNoaXZlLXNpZGViYXIuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvcG9zdHMtc2xpZGVyLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL2ZhcS1hY2NvcmRpb24uanMnO1xuXG5cblxuXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib3Blbl9zaWRlYmFyIiwiaGlkZV9zaWRlYmFyIiwic2lkZWJhciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJmYXFfaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVlc3Rpb25faXRlbXMiLCJhbnN3ZXJfaXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsImFuc3dlciIsIm5leHRFbGVtZW50U2libGluZyIsInJlbW92ZUNsYXNzIiwiaXRlbXNfbmFtZSIsImNsYXNzX25hbWUiLCJjb250YWlucyIsInNpdGVfaGVhZGVyIiwibWVudV9pdGVtc193aXRoX2NoaWxkcmVuIiwibWVudV9pdGVtcyIsInN1Yl9tZW51cyIsImJ1cmdlcl9idG4iLCJuYXZpZ2F0aW9uX3dyYXAiLCJ3aWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNtYWxsX3NjcmVlbl93aWR0aCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lbnUiLCIkanEiLCJqUXVlcnkiLCJub0NvbmZsaWN0IiwicmVhZHkiLCJzbGljayIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJkb3RzQ2xhc3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiZG90cyIsImFycm93cyIsImFwcGVuZERvdHMiLCJldmVudHNfbGlzdCIsImV2ZW50c19zb3J0IiwiZXZlbnRzX2ZpbHRlciIsImtleXdvcmQiLCJvbmx5X3VwY29taW5nX2NoZWNrIiwic2hvd19vbmx5X3VwY29taW5nX3Bvc3RzIiwiZXZlbnRfZmlsdGVyX2NoZWNrYm94ZXMiLCJjaG9zZW5fZmlsdGVycyIsImNob3Nlbl9maWx0ZXJzX2RhdGEiLCJldmVudF90eXBlX2NoZWNrYm94ZXMiLCJjaG9zZW5fdHlwZV9maWx0ZXJzX2RhdGEiLCJhbGxfdHlwZV9maWx0ZXJzX2RhdGEiLCJldmVudF9sZXZlbF9jaGVja2JveGVzIiwiY2hvc2VuX2xldmVsX2ZpbHRlcnNfZGF0YSIsImFsbF9sZXZlbF9maWx0ZXJzX2RhdGEiLCJldmVudF9mb3JtYXRfY2hlY2tib3hlcyIsImNob3Nlbl9mb3JtYXRfZmlsdGVyc19kYXRhIiwiYWxsX2Zvcm1hdF9maWx0ZXJzX2RhdGEiLCJsb2FkZXIiLCJnZXRFbGVtZW50QnlJZCIsImZldGNoX2V2ZW50cyIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50X3R5cGVfa2V5IiwibGVuZ3RoIiwiZXZlbnRfbGV2ZWxfa2V5IiwiZXZlbnRfZm9ybWF0X2tleSIsImNhdGVnb3J5X25hbWUiLCJ2YWx1ZSIsInJlcXVlc3RfZGF0YSIsImFjdGlvbiIsIm9yZGVyX2J5Iiwib3JkZXIiLCJvbmx5X3VwY29taW5nX3Bvc3RzIiwiYWpheCIsInVybCIsImxvY2FsaXplZERhdGEiLCJhamF4X3VybCIsInR5cGUiLCJkYXRhIiwic3VjY2VzcyIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50SFRNTCIsImdldFVybFBhcmFtZXRlciIsIm5hbWUiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicHJlc2VsZWN0T3B0aW9ucyIsImNoZWNrYm94ZXMiLCJjaG9zZW5fb3B0aW9ucyIsInBhcmFtX3ZhbHVlIiwiY2hlY2tib3giLCJjaGVja2VkIiwicHVzaCIsImZpbHRlckJhZGdlIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwcmVzZWxlY3RGaWx0ZXJzIiwiZXZlbnRfdHlwZV9wYXJhbSIsImV2ZW50X2xldmVsX3BhcmFtIiwiZXZlbnRfZm9ybWF0X3BhcmFtIiwiY2F0ZWdvcnlfbmFtZV9wYXJhbSIsImZpbHRlcl9mdW5jdGlvbmFsaXR5IiwiY2hlY2tib3hlc19zZWxlY3RvciIsImFsbF9vcHRpb25zX2FycmF5IiwiY2hvc2VuX29wdGlvbnNfYXJyYXkiLCJib3giLCJ2YWx1ZV9pbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJuYW1lX2luZGV4IiwiZmlsdGVyX2JhZ2UiLCJwb3N0X2luZm9fbGlrZXMiLCJyb290X3VybCIsImxpa2VfYnRuIiwiYWRkX2xpa2UiLCJiZWZvcmVTZW5kIiwieGhyIiwic2V0UmVxdWVzdEhlYWRlciIsIm5vbmNlIiwicG9zdF9pZCIsImRhdGFzZXQiLCJwb3N0aWQiLCJyZXNwb25zZSIsImV4aXN0IiwibGlrZUNvdW50IiwicGFyc2VJbnQiLCJsaWtlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlX2xpa2UiLCJnZXRBdHRyaWJ1dGUiLCJwb3N0c19ncmlkIiwibG9hZF9wb3N0c19idG4iLCJjYXRlZ29yeSIsInBvc3RzX3Blcl9wYWdlIiwiY3VycmVudFBhZ2UiLCJsb2FkX21vcmVfY2F0X3Bvc3RzIiwiZGF0YVR5cGUiLCJwYWdlZCIsInJlcyIsIm1heCIsImh0bWwiXSwic291cmNlUm9vdCI6IiJ9