$(window).load(function(){
	$('.loading').fadeOut('fast', function(){
		$('.dark-screen').fadeIn('fast');
	});
	$('.container').hide();
});

$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-300},500);
			$('#b22').animate({top:240, left: vw-200},500);
			$('#b33').animate({top:240, left: vw-100},500);
			$('#b44').animate({top:240, left: vw},500);
			$('#b55').animate({top:240, left: vw+100},500);
			$('#b66').animate({top:240, left: vw+200},500);
			$('#b77').animate({top:240, left: vw+300},500);
		});

	// Light Toggle Switch
	$('#light-toggle').change(function(){
		if($(this).is(':checked')){
			// Update label
			$('.off-label').hide();
			$('.on-label').show();
			
			// Turn on lights
			$('#bulb_yellow').addClass('bulb-glow-yellow');
			$('#bulb_red').addClass('bulb-glow-red');
			$('#bulb_blue').addClass('bulb-glow-blue');
			$('#bulb_green').addClass('bulb-glow-green');
			$('#bulb_pink').addClass('bulb-glow-pink');
			$('#bulb_orange').addClass('bulb-glow-orange');
			$('body').addClass('peach');
			
			// Hide dark screen and show container
			$('.dark-screen').addClass('hide');
			setTimeout(function(){
				$('.container').fadeIn('slow');
			}, 1000);
			
			// Show play button after delay (standalone, no container)
			setTimeout(function(){
				$('#play').fadeIn('slow');
			}, 6000);
		} else {
			// Update label
			$('.on-label').hide();
			$('.off-label').show();
			
			// Turn off lights
			$('#bulb_yellow').removeClass('bulb-glow-yellow');
			$('#bulb_red').removeClass('bulb-glow-red');
			$('#bulb_blue').removeClass('bulb-glow-blue');
			$('#bulb_green').removeClass('bulb-glow-green');
			$('#bulb_pink').removeClass('bulb-glow-pink');
			$('#bulb_orange').removeClass('bulb-glow-orange');
			$('body').removeClass('peach');
			
			// Show dark screen and hide all buttons
			$('.container').fadeOut('slow');
			$('.btn-step').fadeOut('slow');
			setTimeout(function(){
				$('.dark-screen').removeClass('hide');
			}, 500);
		}
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        
        // Activate beautiful music effects
        $('.music-effects').addClass('active');
        
        // Create floating music notes
        function createMusicNote() {
			var notes = ['♪', '♫', '♬', '♩', '♭', '♯'];
			var note = $('<div class="music-note">' + notes[Math.floor(Math.random() * notes.length)] + '</div>');
			note.css({
				left: Math.random() * 100 + '%',
				top: Math.random() * 100 + '%',
				animationDelay: Math.random() * 2 + 's',
				color: ['rgba(255, 107, 107, 0.7)', 'rgba(102, 126, 234, 0.7)', 'rgba(255, 215, 0, 0.7)', 'rgba(76, 175, 80, 0.7)'][Math.floor(Math.random() * 4)]
			});
			$('.music-notes').append(note);
			setTimeout(function() {
				note.fadeOut(500, function() {
					note.remove();
				});
			}, 4000);
		}
		
		// Create music notes periodically
		var noteInterval = setInterval(createMusicNote, 800);
		
		// Stop creating notes after 10 seconds
		setTimeout(function() {
			clearInterval(noteInterval);
		}, 10000);
        
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		// Add beautiful effect
		createEffectWaves('#4ecdc4');
		createFloatingEmojis('🎉', 10);
		
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		// Add beautiful effect
		createEffectWaves('#f5576c');
		createFloatingEmojis('🎈', 15);
		
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		// Add beautiful effect
		createEffectWaves('#ff9a56');
		createFloatingEmojis('🎂', 8);
		
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		// Add beautiful effect
		createEffectWaves('#ffd700');
		createFloatingEmojis('✨', 12);
		
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		// Add beautiful effect
		createEffectWaves('#667eea');
		createFloatingEmojis('🎊', 20);
		
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-300},500);
		$('#b22').animate({top:240, left: vw-200},500);
		$('#b33').animate({top:240, left: vw-100},500);
		$('#b44').animate({top:240, left: vw},500);
		$('#b55').animate({top:240, left: vw+100},500);
		$('#b66').animate({top:240, left: vw+200},500);
		$('#b77').animate({top:240, left: vw+300},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		// Add beautiful effect
		createEffectWaves('#fa709a');
		createFloatingEmojis('💌', 15);
		
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
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
	
	// Helper function to create effect waves
	function createEffectWaves(color) {
		for(var i = 0; i < 3; i++) {
			setTimeout(function() {
				var wave = $('<div class="effect-wave"></div>');
				wave.css({
					position: 'fixed',
					top: '50%',
					left: '50%',
					width: '0',
					height: '0',
					border: '3px solid ' + color,
					borderRadius: '50%',
					transform: 'translate(-50%, -50%)',
					opacity: '0.8',
					pointerEvents: 'none',
					zIndex: '99',
					animation: 'effectWaveExpand 2s ease-out forwards'
				});
				$('body').append(wave);
				setTimeout(function() {
					wave.remove();
				}, 2000);
			}, i * 300);
		}
	}
	
	// Helper function to create floating emojis
	function createFloatingEmojis(emoji, count) {
		for(var i = 0; i < count; i++) {
			setTimeout(function() {
				var floatEmoji = $('<div class="floating-emoji">' + emoji + '</div>');
				floatEmoji.css({
					position: 'fixed',
					left: Math.random() * 100 + '%',
					top: Math.random() * 100 + '%',
					fontSize: (20 + Math.random() * 20) + 'px',
					pointerEvents: 'none',
					zIndex: '99',
					opacity: '0.8',
					animation: 'floatUp 3s ease-out forwards'
				});
				$('body').append(floatEmoji);
				setTimeout(function() {
					floatEmoji.fadeOut(500, function() {
						floatEmoji.remove();
					});
				}, 3000);
			}, i * 100);
		}
	}
});




//alert('hello');