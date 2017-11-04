/*
* @Author: Administrator
* @Date:   2017-11-03 23:32:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-03 23:34:04
*/
 $(function(){

      var index = 0;

    setInterval(function() {
        var long = $('.box .banner ol li').length;

        var offset = $('.box .banner ol').position();

        var _left = Math.ceil(offset.left);

        var w = $('.box .banner ol li').outerWidth();
        w = -w;

        var ol = $('.box .banner ol');

        if (ol.css('left') == 4 * w + 'px') {

            ol.stop(true);
            ol.css('left', '0px');

        } else {

            $('.box .banner ol').animate({ left: _left + w + 'px' }, 500)

            index++;
            console.log(index)


        }

        if (index == 4) {
            index = 0;
        }



        $('.box .banner ul li').css('background', '#ccc9c9');

        $('.box .banner ul li').eq(index).css('background', '#FFFFFF').siblings().css('background', '#ccc9c9');







    }, 1000)

 })