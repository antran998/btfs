/*Dropdown Menu*/
$('.dropdown--z').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown--z').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown--z .dropdown-menu li').click(function () {
    $(this).parents('.dropdown--z').find('span').text($(this).text());
    $(this).parents('.dropdown--z').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

/* datetime picker */
$('#picker').daterangepicker({
    autoApply:true,
    startDate:'+1d',
    endDate:'+2d',
    locale:{
        format: 'DD-MM-YYYY'
    }
});
/* datetime picker */

// login
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

      if (e.type === 'keyup') {
            if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
            label.removeClass('active highlight'); 
            } else {
            label.removeClass('highlight');   
            }   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
            label.removeClass('highlight'); 
            } 
      else if( $this.val() !== '' ) {
            label.addClass('highlight');
            }
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});
// login

// loader
window.addEventListener("load",function(){
    const loader = $('.loader--container');
    $(loader).css('opacity', '0');
    setTimeout(function(){
      $(loader).css('display', 'none');
    },1000)
})
// loader

