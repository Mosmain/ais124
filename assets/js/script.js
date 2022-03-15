// window.addEventListener('DOMContentLoaded', event => {
//
//     // Activate Bootstrap scrollspy on the main nav element
//     const mainNav = document.body.querySelector('#mainNav');
//     if (mainNav) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainNav',
//             offset: 72,
//         });
//     };
//
//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });
//
// });
//
// $('.img-parallax').each(function(){
//     var img = $(this);
//     var imgParent = $(this).parent();
//     function parallaxImg () {
//         var speed = img.data('speed');
//         var imgY = imgParent.offset().top;
//         var winY = $(this).scrollTop();
//         var winH = $(this).height();
//         var parentH = imgParent.innerHeight();
//
//
//         // The next pixel to show on screen
//         var winBottom = winY + winH;
//
//         // If block is shown on screen
//         if (winBottom > imgY && winY < imgY + parentH) {
//             // Number of pixels shown after block appear
//             var imgBottom = ((winBottom - imgY) * speed);
//             // Max number of pixels until block disappear
//             var imgTop = winH + parentH;
//             // Porcentage between start showing until disappearing
//             var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
//         }
//         img.css({
//             top: imgPercent + '%',
//             transform: 'translate(-50%, -' + imgPercent + '%)'
//         });
//     }
//     $(document).on({
//         scroll: function () {
//             parallaxImg();
//         }, ready: function () {
//             parallaxImg();
//         }
//     });
// });