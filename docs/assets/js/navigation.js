$(function () {
  const activeClass = 'active';
  const $navLinks = $('.gdm-nav .nav-link:not(.disabled)');
  $navLinks.on('click', function () {
    $navLinks.removeClass(activeClass);
    $(this).addClass(activeClass);
 })
});