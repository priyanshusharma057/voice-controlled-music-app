var result 
 var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
	var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
	var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
	// commands are added
	var options = [ 'play the song' , 'pause the song' ];
	var grammar = '#JSGF V1.0; grammar options; public <options> = ' + options.join(' | ') + ' ;'

	var recognition = new SpeechRecognition();
	var speechRecognitionList = new SpeechGrammarList();

	recognition.grammars = speechRecognitionList;
	//recognition.continuous = false;
	recognition.lang = 'en-US';
	recognition.interimResults = false;
	recognition.maxAlternatives = 1;
	// allowment of microphone
	$('.fa-microphone').on('click',function() {
		$('.fa-microphone').removeClass("active");
  recognition.start();
  console.log('Ready to receive a options command.');
	})

	recognition.onresult = function(event) {
		
	var last = event.results.length - 1;
	 result = event.results[last][0].transcript;
	 // play command id added
	 if(result == "play the song"){
		 $('.fa-microphone').addClass("active");
		 var song = document.querySelector('audio');
		 
			console.log('Playing');
			$('.play-icon').removeClass('fa-play').addClass('fa-pause');
			song.play();
	 }
	 // pause command is added
	 if(result == "pause the song"){
		 $('.fa-microphone').addClass("active");
		 var song = document.querySelector('audio');
		 
			console.log('Pausing');
			$('.play-icon').removeClass('fa-pause').addClass('fa-play');
			song.pause();
	 }
	 
	 
	 
	 
	 
	}

	//recognition.onspeechend = function() {
	//  recognition.stop();
	//}
	
	
	
	