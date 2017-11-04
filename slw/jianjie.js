/*
 * @Author: Administrator
 * @Date:   2017-10-09 00:22:00
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-11-03 23:35:59
 */
$(function() {
    $('.advantage ul li div').click(function() {
        $('.advantage ul li div').parent().next().hide();
        $(this).parent().next().slideDown();

    })

    $('.box .ticher ul li div').click(function() {
        $('.box .ticher ul li div').parent().next().hide();
        $(this).parent().next().slideDown();

    })

 })