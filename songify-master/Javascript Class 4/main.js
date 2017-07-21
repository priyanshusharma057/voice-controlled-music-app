					//array declaration 
						var songs = [{
						'name': 'mercy',
						'artist': 'Badshah',
						'album': 'mery',
						'duration': '2:42',
					   'fileName': 'song1.mp3',
					   'image': 'song1.png',
					},
					{
						'name': 'veer vaar',
						'artist': 'Diljit',
						'album': 'Sardar Ji',
						'duration': '2:22',
						'fileName': 'song2.mp3',
						 'image': 'song2.jpg',
					},
					{
						'name': 'Phir Mohabbat',
						'artist': 'Darshan Raval',
						'album': 'Raw Star',
						'duration': '3:50',
						'fileName': 'song3.mp3',
						 'image': 'song3.jpg',
					},
					{
						'name': 'chal wahn jate hain',
						'artist': 'Arijit singh',
						'album': 'chal wahain jate hain',
						'duration': '5:29',
						'fileName': 'song5.mp3',
						 'image': 'song5.jpg',
					},
					{
						'name': 'Zindabaad yarian',
						'artist': 'Ammy Virk',
						'album': 'Zindabaad yarian',
						'duration': '3:20',
						'fileName': 'song4.mp3', 
						 'image': 'song4.jpg',
					}]
					// variable declaration
					var currentSongNumber = 1;
					var willLoop = 0;
					var willShuffle = 0; 
					
                   //volume control 
					function setvolume(){
						var song =document.querySelector('audio');
						song.volume =slider.value/100;
					
						
					}
					
					//Toggle function is added
			function toggleSong() {
			var song = document.querySelector('audio');
			if(song.paused == true) {
			console.log('Playing');
			$('.play-icon').removeClass('fa-play').addClass('fa-pause');
			song.play();
			}
			else {
			console.log('Pausing');
			$('.play-icon').removeClass('fa-pause').addClass('fa-play');
			song.pause();
			}
			}
			
			
	
	//Time format changes fromm seconds to minutes
			function fancyTimeFormat(time)
			{   
			// Hours, minutes and seconds
			var hrs = ~~(time / 3600);
			var mins = ~~((time % 3600) / 60);
			var secs = time % 60;

			// Output like "1:01" or "4:03:59" or "123:03:59"
			var ret = "";

			if (hrs > 0) {
				ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
			}

			ret += "" + mins + ":" + (secs < 10 ? "0" : "");
			ret += "" + secs;
			return ret;
			}
		
		//code for slider
			 function updateTimer(){
		var song = document.querySelector('audio');
		var ct = song.currentTime;
		var td = song.duration;
		var percentage = (ct/td)*100;
		$('.progress-filled').css('width', percentage+ "%");
	}
			
			// changes details of song 
			function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image);
    $('.current-song-name').text(songObj.name);
    $('.current-song-album').text(songObj.album);
	
}

   
     function timeJump() {
    var song = document.querySelector('audio');
    song.currentTime = song.duration - 5;
     }
	 
	
			
				
	//time elapsed and song duration ko show krna
				function updateCurrentTime() {
				var song = document.querySelector('audio');
				//console.log(song.currentTime);
				//console.log(song.duration);
				var currentTime =Math.floor(song.currentTime);
				currentTime = fancyTimeFormat(currentTime);
				var duration = Math.floor(song.duration);
				duration = fancyTimeFormat(duration);
				$('.time-elapsed').text(currentTime);
				$('.song-duration').text(duration);
				}
				
				
				function addSongNameClickEvent(songObj,position) {
					var id ="#song" + position;
					var songName = songObj.fileName; 
			$(id).click(function() {
					currentSongNumber = (position);
			var audio = document.querySelector('audio');
			var currentSong = audio.src;
			if(currentSong.search(songName) != -1)
			{
			toggleSong();
			}
			else {
			audio.src = songName;
			toggleSong();
			 changeCurrentSongDetails(songObj); // Function Call
			}
			});
			}
			
			 function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}
	
				//main screen settings
				window.onload = function() {
					
			  changeCurrentSongDetails(songs[0]);
				updateCurrentTime();
				setInterval(function(){
				updateCurrentTime();
				updateTimer();
				},1000);
				//var songName1 = 'Tamma Song';
				//var songName2 = 'Humma Song';
				//var songName3 = 'Nashe Si Chadh Gayi';
				//var songName4 = 'The Breakup Song';
				// declaration of array
			 
				 // var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
					//var durationList = ['2:56','3:15','2:34','2:29'];
					
                 //playlist ke liye loop use kiya
				 for(var i =0; i < songs.length;i++) {
					var Obj = songs[i];
					var name = '#song' + (i+1);
					var song = $(name);
					song.find('.song-name').text(Obj.name);
					song.find('.song-artist').text(Obj.artist);
					song.find('.song-album').text(Obj.album);
					song.find('.song-length').text(Obj.duration);
					addSongNameClickEvent(Obj,i+1)
				}
				
					//addSongNameClickEvent(fileNames[0],1);
					//addSongNameClickEvent(fileNames[1],2);
					//addSongNameClickEvent(fileNames[2],3);
					//addSongNameClickEvent(fileNames[3],4);
					
					//for (var i = 0; i < fileNames.length ; i++) {
						//addSongNameClickEvent(fileNames[i],i)
					//} 
					$('#songs').DataTable({
        paging: false
    });
					
				}
				
		
	//settings of welcome-screen and main-screen
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
	
	//click function added
    $('.play-icon').on('click', function() {
       toggleSong();
    });
	
	//keypress function added
    $('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});

      
        changeCurrentSongDetails(songs[0]); // Update Image
       // currentSongNumber = currentSongNumber + 1; // Change State
    //loop is added
		  $('.fa-repeat').on('click',function() {
			$('.fa-repeat').toggleClass('disabled');
			willLoop = 1 - willLoop;
		});
     //shuffle is added
		$('.fa-random').on('click',function() {
			$('.fa-random').toggleClass('disabled');
			willShuffle = 1 - willShuffle;
		});
	//mousemove function added to volume control	
		$('#slider').on('mousemove',function()
		{
			setvolume();
			
		});
	//click function added to volume control	
		$('#slider').on('click',function()
		{
			setvolume();
			
		});

$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
     if (willShuffle == 1) {
         var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
         var nextSongObj = songs[nextSongNumber-1];
         audio.src = nextSongObj.fileName;
         toggleSong();
         changeCurrentSongDetails(nextSongObj);
         currentSongNumber = nextSongNumber;
     }
    else if(currentSongNumber < 4) {
        var nextSongObj = songs[currentSongNumber];
		console.log(currentSongNumber);
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
    else if(willLoop == 1) {
		
        var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = 1;
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
		});

//variable declaration
		  var Playingnumber = 0  ;
		var shuffle=0;
		var equal = 0;




		function changeSong() 
		{
		var music =  songs[Playingnumber].fileName;
		var song = document.querySelector("audio");
		song.src = music;
		toggleSong();
		changeCurrentSongDetails(songs[Playingnumber])
		}




        // forward the song

			$(".fa-step-forward").click(function(){

			if(shuffle==1)
			{
			var audio = document.querySelector('audio');
			var nextSongNumber = randomExcluded(0,3,Playingnumber); // Calling our function from Stackoverflow

			var nextSongObj = songs[nextSongNumber];
			audio.src = nextSongobj.fileName;
			toggleSong();
			changeCurrentSongDetails(nextSongobj);
			Playingnumber = nextSongNumber;


			}


			else {

			if(Playingnumber == songs.length-1){
			Playingnumber = 0;
			changeSong();
			}

			else {
			console.log("two");
			console.log(Playingnumber);
			Playingnumber++;
			changeSong();
			}

			}

			})



          //backward the song
			$(".fa-step-backward").click(function(){

			if(Playingnumber == 0){
			console.log("one");
			Playingnumber = (songs.length-1);
			changeSong();




			}

			else {
			console.log("two");
			console.log(Playingnumber);
			Playingnumber--;
			changeSong();
			}




			})