$(document).ready(() => {
  $.ajax({
    method: 'GET',
    beforesend: function () {
      $('#loader').show();
    },
    complete: function () {
      $('#loader').hide();
      $('.main-body').show();
    },
    dataType: 'JSON',
    crossDomain: true,
    url: 'http://localhost:5000/get_news?category=sports',
    error: function (result) {
      console.log(result);
    },
    success: function (result) {
      console.log(result);

      document.getElementById('flash_news').innerHTML =
        result['articles'][Math.floor(Math.random() * 10) + 1]['title'];
      //   var today = new Date();
      //   d =
      //     today.getDay() +
      //     ' , ' +
      //     today.getDate() +
      //     '-' +
      //     (today.getMonth() + 1) +
      //     '-' +
      //     today.getFullYear();
      //   console.log(d);
      //   //document.getElementById('date').innerHTML = d;
      //   var rand = Math.floor(Math.random() * 10) + 1;

      //   document.getElementById('banner_img').src =
      //     result['articles'][rand]['urlToImage'];
      //   //console.log(result['articles'][0]['title']);
      //   document.getElementById('banner_title').innerHTML =
      //     result['articles'][rand]['title'];
      //   //document.getElementById('banner_content').src =
      //   // result['articles'][rand]['urlToImage'];
      //   document.getElementById('info').innerHTML =
      //     result['articles'][rand]['source']['name'] +
      //     '  ' +
      //     result['articles'][rand]['publishedAt'];

      //   var rand1 = Math.floor(Math.random() * 10) + 1;
      //   var rand2 = Math.floor(Math.random() * 10) + 1;
      //   var rand3 = Math.floor(Math.random() * 10) + 1;
      //   document.getElementById('l1').innerHTML =
      //     result['articles'][rand1]['title'];
      //   document.getElementById('l1_info').innerHTML =
      //     result['articles'][rand1]['source']['name'] +
      //     '  ' +
      //     result['articles'][rand1]['publishedAt'];
      //   document.getElementById('l1_img').src =
      //     result['articles'][rand1]['urlToImage'];

      //   document.getElementById('l2').innerHTML =
      //     result['articles'][rand2]['title'];
      //   document.getElementById('l2_info').innerHTML =
      //     result['articles'][rand2]['source']['name'] +
      //     '  ' +
      //     result['articles'][rand2]['publishedAt'];
      //   document.getElementById('l2_img').src =
      //     result['articles'][rand2]['urlToImage'];

      //   document.getElementById('l3').innerHTML =
      //     result['articles'][rand3]['title'];
      //   document.getElementById('l3_info').innerHTML =
      //     result['articles'][rand3]['source']['name'] +
      //     '  ' +
      //     result['articles'][rand3]['publishedAt'];
      //   document.getElementById('l3_img').src =
      //     result['articles'][rand3]['urlToImage'];
      // var rand4 = 0;
      // var rand5 = 1;
      // var rand6 = 2;
      // var rand7 = 3;
      // document.getElementById('i1_title').innerHTML =
      //   result['articles'][rand4]['title'];
      // if (result['articles'][rand4]['bias'] == 'neutral')
      //   document.getElementById('i1_title').classList.add('text-success');
      // else document.getElementById('i1_title').classList.add('text-danger');
      // document.getElementById('i1_info').innerHTML =
      //   result['articles'][rand4]['source']['name'] +
      //   '  ' +
      //   result['articles'][rand4]['publishedAt'];
      // document.getElementById('i1_img').src =
      //   result['articles'][rand4]['urlToImage'];
      // document.getElementById('i1_content').innerHTML =
      //   result['articles'][rand4]['content'];
      // document.getElementById('i1_link').href =
      //   result['articles'][rand4]['url'];

      // if (result['articles'][rand5]['bias'] == 'neutral')
      //   document.getElementById('i2_title').classList.add('text-success');
      // else document.getElementById('i2_title').classList.add('text-danger');

      // document.getElementById('i2_title').innerHTML =
      //   result['articles'][rand5]['title'];
      // document.getElementById('i2_info').innerHTML =
      //   result['articles'][rand5]['source']['name'] +
      //   '  ' +
      //   result['articles'][rand5]['publishedAt'];
      // document.getElementById('i2_img').src =
      //   result['articles'][rand5]['urlToImage'];
      // document.getElementById('i2_content').innerHTML =
      //   result['articles'][rand5]['content'];
      // document.getElementById('i2_link').href =
      //   result['articles'][rand5]['url'];

      // document.getElementById('i3_title').innerHTML =
      //   result['articles'][rand6]['title'];
      // document.getElementById('i3_info').innerHTML =
      //   result['articles'][rand6]['source']['name'] +
      //   '  ' +
      //   result['articles'][rand6]['publishedAt'];
      // document.getElementById('i3_img').src =
      //   result['articles'][rand6]['urlToImage'];
      // document.getElementById('i3_content').innerHTML =
      //   result['articles'][rand6]['content'];
      // document.getElementById('i3_link').href =
      //   result['articles'][rand6]['url'];

      // if (result['articles'][rand6]['bias'] == 'neutral')
      //   document.getElementById('i3_title').classList.add('text-success');
      // else document.getElementById('i3_title').classList.add('text-danger');

      // document.getElementById('i3_title').innerHTML =
      //   result['articles'][rand6]['title'];
      // document.getElementById('i3_info').innerHTML =
      //   result['articles'][rand6]['source']['name'] +
      //   '  ' +
      //   result['articles'][rand6]['publishedAt'];
      // document.getElementById('i3_img').src =
      //   result['articles'][rand6]['urlToImage'];
      // document.getElementById('i3_content').innerHTML =
      //   result['articles'][rand6]['content'];
      // document.getElementById('i3_link').href =
      //   result['articles'][rand6]['url'];

      // document.getElementById('i4_title').innerHTML =
      //   result['articles'][rand7]['title'];
      // document.getElementById('i4_info').innerHTML =
      //   result['articles'][rand7]['source']['name'] +
      //   '  ' +
      //   result['articles'][rand7]['publishedAt'];
      // document.getElementById('i4_img').src =
      //   result['articles'][rand7]['urlToImage'];
      // document.getElementById('i4_content').innerHTML =
      //   result['articles'][rand7]['content'];
      // document.getElementById('i4_link').href =
      //   result['articles'][rand7]['url'];

      // if (result['articles'][rand7]['bias'] == 'neutral')
      //   document.getElementById('i4_title').classList.add('text-success');
      // else document.getElementById('i4_title').classList.add('text-danger');

      result['articles'].forEach((element) => {
        var class_name =
          element['bias'] == 'neutral' ? 'text-success' : 'text-danger';
        document.getElementById('business_news').innerHTML =
          document.getElementById('business_news').innerHTML +
          `<div class="row">
                        <div class="col-sm-4 grid-margin">
                          <div class="rotate-img">
                            <img
                              src="` +
          element['urlToImage'] +
          `"
                              alt="banner"
                              class="img-fluid"
                              id="i1_img"
                            />
                          </div>
                        </div>
                        <div class="col-sm-8 grid-margin">
                          <a href="" style="color: black" id="i1_link">
                            <h2 class="font-weight-600 mb-2 ` +
          class_name +
          `" id="i1_title">
                              ` +
          element['title'] +
          `
                            </h2>
                          </a>
                          <p class="fs-13 text-muted mb-0">
                            <span class="mr-2" id="i1_info">` +
          element['source']['name'] +
          element['publishedAt'] +
          `</span>
                          </p>
                          <p class="fs-15" id="i1_content">
                            ` +
          element['content'] +
          `
                          </p>
                        </div>
                      </div>`;
      });
    },
  });
});
