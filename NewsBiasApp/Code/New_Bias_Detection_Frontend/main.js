$(document).ready(function () {
  $.ajax({
    type: 'GET',
    beforesend: function () {
      $('#loader').show();
    },
    complete: function () {
      $('#loader').hide();
      $('.main-body').show();
    },
    data: 'json',
    url:
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=4e387979e9134700ac8c766be618dbaf',
    success: function (result) {
      console.log(result);
      //api key 4e387979e9134700ac8c766be618dbaf
      //       var url = new URL(window.location.href);
      //       var id = 0;
      //       console.log(url.pathname);
      //       if (url.pathname === '/neerajroy/') {
      //         id = 0;
      //       } else if (url.pathname === '/siddhartharoy/') {
      //         id = 1;
      //       } else if (url.pathname === '/sauminshah/') {
      //         id = 2;
      //       } else if (url.pathname === '/anujbajpai/') {
      //         id = 3;
      //       } else if (url.pathname === '/raunaqroy/') {
      //         id = 4;
      //       } else if (url.pathname === '/frankpereria/') {
      //         id = 5;
      //       } else if (url.pathname === '/kalpendupandya/') {
      //         id = 6;
      //       }
      //       // console.log(url.searchParams.get('id'));
      //       // var id = url.searchParams.get('id');
      //       //   console.log('Hello');
      //       var user_data = result[0]['users_data'];
      //       var gallery_data = result[0]['gallery_data'];
      //       var video_data = result[0]['video_data'];
      //       document.getElementById('card_owner').innerHTML =
      //         user_data[id]['Card_Owner'];
      //       document.getElementById('designation').innerHTML =
      //         user_data[id]['designation'];
      //       document.getElementById('logo_2').src = user_data[id]['Personal_Photo'];
      //       document.getElementById('mobile_icon').href =
      //         'tel:+91' + user_data[id]['mobile_number'];
      //       document.getElementById('whatsapp_icon').href =
      //         user_data[id]['whatsapp_link'];
      //       document.getElementById('qr_modal_img').src = user_data[id]['qr_link'];
      //       document.getElementById('sms_icon').href = user_data[id]['sms_link'];
      //       document.getElementById('linked_in_icon').href =
      //         user_data[id]['forward_linked_in'];
      //       document.getElementById('facebook_icon').href =
      //         user_data[id]['forward_facebook_link'];
      //       document.getElementById('forward_whatsapp_icon').href =
      //         user_data[id]['forward_whatsapp'];

      //       document.getElementById('myInput').value = user_data[id]['card_link'];
      //       document.getElementById('address_text').href =
      //         user_data[id]['address_link'];
      //       document.getElementById('address_icon').href =
      //         user_data[id]['address_link'];
      //       document.getElementById('address_text').innerHTML =
      //         user_data[id]['address'];
      //       document.getElementById('email_text').href = user_data[id]['email_link'];
      //       document.getElementById('email_icon').href = user_data[id]['email_link'];
      //       document.getElementById('vcf_icon').href = user_data[id]['vcf_link'];
      //       document.getElementById('email_text').innerHTML = user_data[id]['email'];
      //       document.getElementById('phone_icon').href =
      //         'tel:+91' + user_data[id]['mobile_number'];
      //       document.getElementById('phone_text').href =
      //         'tel:+91' + user_data[id]['mobile_number'];
      //       document.getElementById('phone_text').innerHTML =
      //         user_data[id]['mobile_number'];

      //       if (navigator.userAgent.toLowerCase().indexOf('iphone') > -1) {
      //         document.getElementById('music').href =
      //           'https://apps.apple.com/in/app/hungama-music-songs-radio/id414009038';
      //         document.getElementById('play').href =
      //           'https://apps.apple.com/in/app/hungama-play-movies-tv-show/id959839618';
      //         document.getElementById('bollywood').href =
      //           'https://apps.apple.com/in/app/bollywood-hungama/id455903294';
      //         document.getElementById('aa').href =
      //           'https://play.google.com/store/apps/details?id=com.hungama.artistaloud';
      //       } else {
      //         document.getElementById('music').href =
      //           'https://play.google.com/store/apps/details?id=com.hungama.myplay.activity';
      //         document.getElementById('play').href =
      //           'https://play.google.com/store/apps/details?id=com.hungama.movies';
      //         document.getElementById('bollywood').href =
      //           'https://play.google.com/store/apps/details?id=com.bollywoodhungama';
      //         document.getElementById('aa').href =
      //           'https://play.google.com/store/apps/details?id=com.hungama.artistaloud';
      //       }

      //       gallery_data.forEach((element) => {
      //         document.getElementById('gallery_body').innerHTML =
      //           document.getElementById('gallery_body').innerHTML +
      //           '<div class="mx-auto mt-3 product-card" style="padding: 5px;"><img src=' +
      //           element['link'] +
      //           ' class="card-img-top mx-auto product-img mt-2"/><div class="card-body product-desc"><p class="card-text product_wala_para">' +
      //           element['description'] +
      //           '</p></div></div>';
      //       });
      //       video_data.forEach((element) => {
      //         document.getElementById('video_body').innerHTML =
      //           document.getElementById('video_body').innerHTML +
      //           '<div class="mx-auto mt-3 product-card" style="padding: 3px"><iframe  src="' +
      //           element['link'] +
      //           '" class="card-img-top mx-auto product-img mt-2"></iframe><div class="card-body product-desc"></div></div>';
      //       });
    },
  });
});
