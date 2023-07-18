const events_list = document.querySelector('#events-grid');
const events_sort = document.querySelector('#sort-events');
const events_filter = document.querySelector('#filter-events');
let keyword = document.querySelector('#keyword');


const only_upcoming_check = document.querySelector('.only-upcoming-check');
let show_only_upcoming_posts = false;

// all checkboxes 
let event_filter_checkboxes = document.querySelectorAll('.event-filter-check');
let chosen_filters = document.querySelector('.chosen-filters');
let chosen_filters_data = [];

let event_type_checkboxes = document.querySelectorAll('.event-type-check');
let chosen_type_filters_data = [];
let all_type_filters_data = [];

let event_level_checkboxes = document.querySelectorAll('.event-level-check');
let chosen_level_filters_data = [];
let all_level_filters_data = [];

let event_format_checkboxes = document.querySelectorAll('.event-format-check');
let chosen_format_filters_data = [];
let all_format_filters_data = [];

let loader = document.getElementById("loader");

if (events_list) {
  const fetch_events = () => {
    loader.style.display = "inline-block";

    const event_type_key = chosen_type_filters_data.length != 0 ? chosen_type_filters_data : all_type_filters_data;
    const event_level_key = chosen_level_filters_data.length != 0 ? chosen_level_filters_data : all_level_filters_data;
    const event_format_key = chosen_format_filters_data.length != 0 ? chosen_format_filters_data : all_format_filters_data;
    const category_name = events_filter.value;

    const request_data = {
      action: 'fetch_events',
      order_by: events_sort.value,
      order: events_sort.value === "title" ? "ASC" : "DESC",
      category_name: category_name,
      keyword: keyword.value,
      event_type_key: event_type_key,
      event_level_key: event_level_key,
      event_format_key: event_format_key,
      only_upcoming_posts: show_only_upcoming_posts
    }

    jQuery.ajax({
      url: localizedData.ajax_url,
      type: 'POST',
      data: request_data,
      success: function(data) {
        loader.style.display = "none";
        events_list.innerHTML = "";
        events_list.insertAdjacentHTML("afterbegin", data);
      }
    });
  };

  const getUrlParameter = (name) => {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  const preselectOptions = (checkboxes, chosen_options, param_value) => {
    checkboxes.forEach((checkbox) => {
      if (checkbox.value === param_value) {
        checkbox.checked = true;
        chosen_options.push(checkbox.value);
        chosen_filters_data.push(checkbox.name);
        const filterBadge = document.createElement('span');
        filterBadge.textContent = checkbox.name;
        filterBadge.classList.add('badge');
        chosen_filters.appendChild(filterBadge);
      }
    });
  };

  const preselectFilters = () => {
    const event_type_param = getUrlParameter('event_type');
    const event_level_param = getUrlParameter('event_level');
    const event_format_param = getUrlParameter('event_format');
    const category_name_param = getUrlParameter('category_name');

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

  const filter_functionality = (checkboxes_selector, all_options_array, chosen_options_array) => {
    checkboxes_selector.forEach((box) => {
      all_options_array.push(box.value);
      box.addEventListener('click', () => {
        chosen_filters.innerHTML = "";
        if (box.checked) {
          chosen_options_array.push(box.value);
          chosen_filters_data.push(box.name);
        } else {
          let value_index = chosen_options_array.indexOf(box.value);
          chosen_options_array.splice(value_index, 1);
          let name_index = chosen_filters_data.indexOf(box.name);
          chosen_filters_data.splice(name_index, 1);
        }
        chosen_filters_data.forEach((box) => {
          const filter_bage = document.createElement('span');
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

  only_upcoming_check.addEventListener('click', () => {
    if (only_upcoming_check.checked) {
      show_only_upcoming_posts = true;
      fetch_events();
    } else {
      show_only_upcoming_posts = false;
      fetch_events();
    }
  });

}
