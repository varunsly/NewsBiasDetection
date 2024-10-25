$(document).ready(() => {
  $.ajax({
    type: 'GET',
    beforesend: function () {
      $('#loader').show();
    },
    complete: function () {
      $('#loader').hide();
      $('.main-body').show();
    },
    dataType: 'JSON',
    crossDomain: true,
    url: 'http://localhost:5000/get_news?category=general',
    success: function (result) {
      console.log(result);
      document.getElementById('flash_news').innerHTML =
        result['articles'][Math.floor(Math.random() * 10) + 1]['title'];
      var today = new Date();
      d =
        today.getDay() +
        ' , ' +
        today.getDate() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getFullYear();
      console.log(d);
      //document.getElementById('date').innerHTML = d;
      var rand = Math.floor(Math.random() * 10) + 1;

      document.getElementById('banner_img').src =
        result['articles'][rand]['urlToImage'];
      //console.log(result['articles'][0]['title']);
      document.getElementById('banner_title').innerHTML =
        result['articles'][rand]['title'];
      if (result['articles'][rand]['bias'] == 'neutral') {
        document.getElementById('bias').innerHTML = 'Neutral';
        document.getElementById('bias').classList.add('badge-success');
      } else {
        document.getElementById('bias').innerHTML = 'Biased';
        document.getElementById('bias').classList.add('badge-danger');
      }
      //document.getElementById('banner_content').src =
      // result['articles'][rand]['urlToImage'];
      document.getElementById('info').innerHTML =
        result['articles'][rand]['source']['name'] +
        '  ' +
        result['articles'][rand]['publishedAt'];

      var rand1 = Math.floor(Math.random() * 10) + 1;
      var rand2 = Math.floor(Math.random() * 10) + 1;
      var rand3 = Math.floor(Math.random() * 10) + 1;
      document.getElementById('l1').innerHTML =
        result['articles'][rand1]['title'];
      if (result['articles'][rand1]['bias'] == 'neutral')
        document.getElementById('l1').classList.add('text-success');
      else document.getElementById('l1').classList.add('text-danger');
      document.getElementById('l1_info').innerHTML =
        result['articles'][rand1]['source']['name'] +
        '  ' +
        result['articles'][rand1]['publishedAt'];
      document.getElementById('l1_img').src =
        result['articles'][rand1]['urlToImage'];

      if (result['articles'][rand2]['bias'] == 'neutral')
        document.getElementById('l2').classList.add('text-success');
      else document.getElementById('l2').classList.add('text-danger');
      document.getElementById('l2').innerHTML =
        result['articles'][rand2]['title'];
      document.getElementById('l2_info').innerHTML =
        result['articles'][rand2]['source']['name'] +
        '  ' +
        result['articles'][rand2]['publishedAt'];
      document.getElementById('l2_img').src =
        result['articles'][rand2]['urlToImage'];

      if (result['articles'][rand3]['bias'] == 'neutral')
        document.getElementById('l3').classList.add('text-success');
      else document.getElementById('l3').classList.add('text-danger');

      document.getElementById('l3').innerHTML =
        result['articles'][rand3]['title'];
      document.getElementById('l3_info').innerHTML =
        result['articles'][rand3]['source']['name'] +
        '  ' +
        result['articles'][rand3]['publishedAt'];
      document.getElementById('l3_img').src =
        result['articles'][rand3]['urlToImage'];

      var rand4 = Math.floor(Math.random() * 10) + 1;
      var rand5 = Math.floor(Math.random() * 10) + 1;
      var rand6 = Math.floor(Math.random() * 10) + 1;

      document.getElementById('i1_title').innerHTML =
        result['articles'][rand4]['title'];
      if (result['articles'][rand4]['bias'] == 'neutral')
        document.getElementById('i1_title').classList.add('text-success');
      else document.getElementById('i1_title').classList.add('text-danger');
      document.getElementById('i1_info').innerHTML =
        result['articles'][rand4]['source']['name'] +
        '  ' +
        result['articles'][rand4]['publishedAt'];
      document.getElementById('i1_img').src =
        result['articles'][rand4]['urlToImage'];
      document.getElementById('i1_content').innerHTML =
        result['articles'][rand4]['content'];
      document.getElementById('i1_link').href =
        result['articles'][rand4]['url'];

      document.getElementById('i2_title').innerHTML =
        result['articles'][rand5]['title'];

      if (result['articles'][rand5]['bias'] == 'neutral')
        document.getElementById('i2_title').classList.add('text-success');
      else document.getElementById('i2_title').classList.add('text-danger');
      document.getElementById('i2_info').innerHTML =
        result['articles'][rand5]['source']['name'] +
        '  ' +
        result['articles'][rand5]['publishedAt'];
      document.getElementById('i2_img').src =
        result['articles'][rand5]['urlToImage'];
      document.getElementById('i2_content').innerHTML =
        result['articles'][rand5]['content'];
      document.getElementById('i2_link').href =
        result['articles'][rand5]['url'];

      document.getElementById('i3_title').innerHTML =
        result['articles'][rand6]['title'];

      if (result['articles'][rand6]['bias'] == 'neutral')
        document.getElementById('i3_title').classList.add('text-success');
      else document.getElementById('i3_title').classList.add('text-danger');
      document.getElementById('i3_info').innerHTML =
        result['articles'][rand6]['source']['name'] +
        '  ' +
        result['articles'][rand6]['publishedAt'];
      document.getElementById('i3_img').src =
        result['articles'][rand6]['urlToImage'];
      document.getElementById('i3_content').innerHTML =
        result['articles'][rand6]['content'];
      document.getElementById('i3_link').href =
        result['articles'][rand6]['url'];
    },
  });
});
