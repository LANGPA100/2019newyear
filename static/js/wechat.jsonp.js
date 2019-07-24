var is_fistshare = false;
$(function () {
    
    window.share = {
        imgUrl : window.location.origin + '/images/share.png',
		link : window.location.href,
		title : "恭喜你抽中一次「回到10年前」的机会",
		desc : "回/不回"
    }


	var shareUrl = encodeURIComponent(window.location.href);

	$.ajax({

        url:"http://wechat.test.neone.com.cn/partner-api/getshare/1/?jsoncallback=callback&shareurl=" + shareUrl,
        dataType:'jsonp',  
        data:'',  
        jsonp:'callback', 
		jsoncallback:'neone',		
        success:function(result) {  
           // alert(result);
        },  
        timeout:3000  
    });  
});


function callback(data)
{
	 wx.config({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: data.appid, // 必填，公众号的唯一标识
		timestamp: data.timestamp, // 必填，生成签名的时间戳
		nonceStr: data.nonceStr, // 必填，生成签名的随机串
		signature: data.signature,// 必填，签名，见附录1
		jsApiList: [
			'checkJsApi',
			'onMenuShareTimeline',
			'onMenuShareAppMessage',
			'translateVoice',
			'startRecord',
			'stopRecord',
			'onVoiceRecordEnd',
			'playVoice',
			'onVoicePlayEnd',
			'pauseVoice',
			'stopVoice',
			'uploadVoice',
			'downloadVoice',
		] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});

	wx.ready(function () {
		
		wxcheck();
		function wxcheck(){
			wx.checkJsApi({
				jsApiList: [
					'onMenuShareTimeline',
					'onMenuShareAppMessage'
				],
				success: function (res) {
					//alert(JSON.stringify(res));
				}
			});
		}

		wx.onMenuShareTimeline({
			imgUrl : window.share.imgUrl,
			link : window.share.link,
			title : window.share.title,
			desc : window.share.title,
			success: function () {
				// 用户确认分享后执行的回调函数
				//    if(window.share.suc) window.share.suc();
                if(_hmt){
                    _hmt.push(['_trackEvent','click', "分享朋友圈"]);
                }
			},
			cancel: function () {
				// 用户取消分享后执行的回调函数
			}
		});

		wx.onMenuShareAppMessage({
			imgUrl : window.share.imgUrl,
			link : window.share.link,
			title : window.share.title,
			desc : window.share.desc,
			trigger: function (res) {
				//	alert('用户点击分享到朋友圈');
			},
			success: function (res) {
                if(_hmt){
                    _hmt.push(['_trackEvent','click', "分享朋友"]);
                }
				//	alert('已分享');
				//    if(window.share.suc) window.share.suc();
				//WeixinJSBridge.call('closeWindow');
			},
			cancel: function (res) {
				//	alert('已取消');
			},
			fail: function (res) {
				//	alert(JSON.stringify(res));
			}
		});

	});
}