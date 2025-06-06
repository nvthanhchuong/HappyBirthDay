$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw = $(window).width();
		var vwm = vw/2;
		$(window).resize(function(){
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
			$('#b11').animate({top:280, left: vwm-400},500);
			$('#b22').animate({top:280, left: vwm-300},500);
			$('#b33').animate({top:280, left: vwm-200},500);
			$('#b44').animate({top:280, left: vwm-100},500);
			$('#b55').animate({top:280, left: vwm},500);
			$('#b66').animate({top:280, left: vwm+100},500);
			$('#b77').animate({top:280, left: vwm+200},500);
			$('#b88').animate({top:280, left: vwm+300},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
		$('.hbd_container').addClass('d_flag_bg');
		$('.container_hbp_image').fadeIn('slow').css('display','flex');
		const images = document.querySelectorAll('.gallery > img');
	
	// Thay đổi kích thước hình ảnh ngẫu nhiên từ 180px đến 320px
	images.forEach(img => {
		const randomSize = Math.random() * (320 - 180) + 180; // Kích thước ngẫu nhiên từ 180px đến 320px
		img.style.width = `${randomSize}px`; // Áp dụng chiều rộng ngẫu nhiên
		img.style.height = `${randomSize}px`; // Đảm bảo chiều cao giữ tỉ lệ đúng
	});
	
	  
		$('.gallery').fadeIn('slow').css('display','grid');


		// Tạo mảng chứa bông tuyết
		let snowflakes = [];

		// Hàm tạo bông tuyết
		function createSnowflake() {
		  const snowflake = document.createElement("div");
		  snowflake.classList.add("snowflake");
		  snowflake.style.left = Math.random() * window.innerWidth + "px";
		  snowflake.style.animationDuration = 4 + Math.random() * 5 + "s";  // Tăng thời gian để giảm tốc độ rơi
		  snowflake.style.opacity = Math.random();
		  snowflake.style.fontSize = 10 + Math.random() * 20 + "px";
		  
		  // Tạo màu ngẫu nhiên cho mỗi bông tuyết
		  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F1', '#F1FF33'];
		  snowflake.style.color = colors[Math.floor(Math.random() * colors.length)];
	
		  snowflake.innerHTML = "❄";
		  document.body.appendChild(snowflake);
		  snowflakes.push(snowflake);
	
		  // Xóa bông tuyết sau 9 giây
		  setTimeout(() => {
			snowflake.remove();
			snowflakes.shift();
		  }, 9000); // Thời gian sống của bông tuyết
		}
	
		// Tạo bông tuyết sau mỗi 100ms
		setInterval(createSnowflake, 100);

		
	});

	function loopOne() {
		var randleft = vw*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = vw*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = vw*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = vw*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = vw*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = vw*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = vw*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = vw*Math.random();
		var randtop = 500*Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b11').animate({top:280, left: vwm-400},500);
		$('#b22').animate({top:280, left: vwm-300},500);
		$('#b33').animate({top:280, left: vwm-200},500);
		$('#b44').animate({top:280, left: vwm-100},500);
		$('#b55').animate({top:280, left: vwm},500);
		$('#b66').animate({top:280, left: vwm+100},500);
		$('#b77').animate({top:280, left: vwm+200},500);
		$('#b88').animate({top:280, left: vwm+300},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		// $('.cake').fadeOut('fast').promise().done(function(){
		// 	$('.message').fadeIn('slow');
		// });

		$('.message').fadeIn('slow');

		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');