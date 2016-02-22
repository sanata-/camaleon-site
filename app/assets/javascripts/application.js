    //= require modernizr
    //= require jquery
    //= require materialize-sprockets
    //= require jquery_ujs
    //= require turbolinks
    //= require_tree .
$( document ).ready(function(){
      $(".button-collapse").sideNav();
      $('ul.tabs').tabs('select_tab', 'tab_id');
       $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

});
