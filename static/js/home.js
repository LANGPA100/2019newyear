var nikname='',len = 0,is_click = false,is_save=false;
var canvas,mySwiper;
$(function () {
    $('body').on('touchstart',function () {
        $('#bg_music')[0].play()
    })
    var winhei = $(window).height()

    if(winhei<1250){
        $('.loading,.home').css('top','-115px')

        $('.ping_card').css('top',(winhei-870)/2+115)
    }else{
        $('.ping_card').css('top',(1334-870)/2)
    }
   ld_num(0);

   

    // $('span.l1').animate({
    //     'width':'158px'
    // },300,function () {
    //     $('span.l2').animate({
    //         'height':'114px'
    //     },300,function () {
    //         $('span.l3').animate({
    //             'height':'158px'
    //         },300)
    //     })
    // });


    $('.confirm_btn').on('touchstart',function () {
        $('#btn_music')[0].play()
        getcard()

    });

    $('.again').on('touchstart',function () {
        $('#btn_music')[0].play()
        if(is_save == false){
            is_save = true
            drawPic()
        }

    });
    $('.name').on('change',function () {
        $('#btn_music')[0].play()
        var name = $(this).val();
        getlen(name)

        if(len>30){
            $('.over_tips').fadeIn()
        }else{
            $('.over_tips').hide()
        }

    })
    $('.arr_btn').on('touchstart',function () {
      //  $('#bg_music')[0].play();
        $('#btn_music')[0].play()
        nikname = $('.name').val();
        if(nikname == ''){
            alert('请输入姓名！')
        }else {
            getlen(nikname)
            if(len>30){
                $('.over_tips').fadeIn()
            }else{
                $('.over_tips').hide()
                $('.ping_card .name').empty().html(nikname)
                $('.setInfo').hide();
                //frame open
                $('.input_up').animate({
                    'top':'321px'
                },900)
                $('.input_down').animate({
                    'top':'869px'
                },900)
                //cards open
                $('.select_Card,.card_ani').delay(800).fadeIn();
                setTimeout(function () {
                    $('#c1').animate({
                        'left':'0px'
                    },1000)
                    $('#c2').animate({
                        'left':'90px'
                    },1000)
                    $('#c4').animate({
                        'left':'402px'
                    },1000)
                    $('#c5').animate({
                        'left':'513px'
                    },1000)

                },800);
                //swiper plugin fadein
                $('.select_tips,.swiper-container').delay(1400).fadeIn(1000);
                setTimeout(function () {
                    mySwiper = new Swiper('.swiper-container',{
                        slidesPerView:3,
                        loop:true,
                        //Enable 3D Flow
                        tdFlow: {
                            rotate :30,
                            stretch :50,
                            depth: 185,
                            modifier : 1,
                            shadows:false
                        },
                        onSlideClick: function(swiper){
                            getcard()
                        }


                    })
                    $('.card_ani').fadeOut(700);

                },1400)

              //  touchmv();
            }

        }

    });

    $('span.closebtn').on('touchstart',function () {
        $('.final_card').hide()
    })
    $('span.save').on('touchstart',function () {
        $('#btn_music')[0].play();
        is_click=false;
        $('.md_lftlt,.md_rtlt,.md_btlt,.md_tplt').css('height','0');
        $('.right_lt').css('top','0')
        $('.left_lt').css('top','637px');
        $('.input_up,.input_down,.select_title,.card_wrap,.confirm_btn,.select_tips').fadeIn();
        $('.ping_card ,.comfirmcard_content').hide()
        $('.comfirmcard_content .comfirm_card ').removeClass('add_cardani add_cardani_2')
        $('.comfirmcard_content .comfirm_card ,.confirm_text').show()
    })



});

function getcard() {

    if(is_click==false){
        is_click=true;
        $('#flip_music')[0].play();
        $('.input_up,.input_down,.select_title,.card_wrap,.confirm_btn,.select_tips').fadeOut(500);
        $('.comfirmcard_content').show();
        $('.comfirm_card').addClass('add_cardani');
        var cid = Math.floor(Math.random()*17+1);
        setTimeout(function () {
            $('.p_cardbg').attr('src','https://langpa100.github.io/2019newyear/static/images/'+cid+'.jpg');
           
            $('.card_shadow').fadeIn()
            $('.md_lftlt').animate({
                'height':'332px'
            },500);
            $('.md_rtlt').animate({
                'height':'332px'
            },500);
            $('.left_lt').animate({
                'top':'0'
            },500);
            $('.right_lt').animate({
                'top':'637px'
            },500);

            $('span.md_btlt').animate({
                'height':'203px'
            },500);

            $('span.md_tplt').animate({
                'height':'203px'
            },500);
            $('.shadow_l1').delay(300).fadeIn(1000);
            $('.shadow_l2').delay(300).fadeIn(1000);
            setTimeout(function () {
                $('.comfirm_card').addClass('add_cardani_2');
                $('.confirm_text,.card_shadow').hide()
            },500)
            setTimeout(function () {
                $('.comfirm_card,.shadow_l1,.shadow_l2').fadeOut()
                $('.ping_card').show()
                $('.ping_card').addClass('add_cardani_3');
            },1000)
        },1000);

    }
}

function getlen(str) {
    len = 0;
    for (var i=0; i<str.length; i++) {
        var c = str.charCodeAt(i);
        //单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
            len++;
        }
        else {
            len+=2;
        }
    }
}
function ld_num(lnum) {
    if(lnum<100){
        lnum=lnum+1;
        $('.ld_num').empty().html(lnum+'%')
        setTimeout(function () {
            ld_num(lnum)
        },10)
    }
    if(lnum == 100){
        $('.home').delay(500).fadeIn()
        setTimeout(function () {
            $('.loading').fadeOut()
            $('.input_up,.input_down').delay(500).fadeIn(1000)
            $('.t1').delay(500).fadeIn(1200).animate({
      left:'170px',
      opacity:'1'
   
    },"slow");
            $('.t2').delay(1700).fadeIn(1400).animate({
      left:'140px',
      opacity:'1'
   
    },"slow");
            $('.t3').delay(3500).fadeIn(1400).animate({
      left:'240px',
      opacity:'1'
   
    },"slow");
            setTimeout(function () {
                $('.landing_txt').fadeOut()
                $('.input_up').delay(500).animate({
                    'top':'555px'
                },600)
                $('.input_down').delay(500).animate({
                    'top':'645px'
                },600)
                $('.setInfo,.name').delay(1100).fadeIn(800);
                $('.arr_btn').delay(1600).fadeIn(1000);
            },6600)

        },1000)


    }
}
function drawPic() {

   canvas = document.getElementById('myCanvas');
   var  ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    var cardimg = new Image();
    var qrcode = new Image();
    cardimg.crossOrigin = 'Anonymous'; //解决跨域问题
    cardimg.onload = function()
    {
        canvas.height = 1087;
        canvas.width = 750;
        ctx.drawImage(cardimg, 0, 0,750,1087);
 qrcode.crossOrigin = 'Anonymous'; //解决跨域问题
        qrcode.onload = function(){
            ctx.drawImage(qrcode, 78,900);
            ctx.font="bold 28px 黑体";
            ctx.fillStyle = "#413126";
            ctx.fillText(nikname,162+(30-len)*7,530);
  setTimeout(function () {
                        var dataURL = canvas.toDataURL('image/png');
                        $('.final_card img').attr('src',dataURL)
                        $('.final_card').delay(500).fadeIn();
                        is_save = false
                    },500)
            
          
        }
        qrcode.src='https://langpa100.github.io/2019newyear/static/images/03.jpg';
    }
    cardimg.src=$('.p_cardbg').attr('src');


}
function l_on(pnum) {

    if(pnum<8){
        pnum=pnum+1;
        $('.card_l span:nth-child('+pnum+')').css('opacity','1');
        setTimeout(function () {
            l_on(pnum)
        },200)
    }
    if(pnum==8){
        setTimeout(function () {
            $('.comfirm_card').addClass('add_cardani_2');
            $('.confirm_text').hide()
        },500)
        setTimeout(function () {
            $('.comfirm_card').hide()
            $('.ping_card').show()
            $('.ping_card').addClass('add_cardani_3');
        },800)
    }
}


