  // Function to play a local video
        function playVideo(file) {
            var videoPlayer = document.getElementById("videoPlayer");
            var videoContainer = document.getElementById("videoContainer");

            // Hide videoContainer in case YouTube video was previously playing
            videoContainer.innerHTML = '';

            // Create video element for local video
            var video = document.createElement('video');
            video.src = file;
            // video.width = "100%";
            video.controls = true;
            video.autoplay = true;
            video.controlsList = "nodownload";
            video.oncontextmenu = function() { return false; };

            // Append video element to videoContainer
            videoContainer.appendChild(video);

            // Show the video player
            videoPlayer.style.display = "block";
        }

        // Function to play a YouTube video

        function playYouTubeVideo(videoId) {
            var videoPlayer = document.getElementById("videoPlayer");
            var videoContainer = document.getElementById("videoContainer");

            // Hide videoContainer in case local video was previously playing
            videoContainer.innerHTML = '';

            // Create YouTube iframe
            var iframe = document.createElement('iframe');
            iframe.src = "https://www.youtube.com/embed/" + videoId;
           

            iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;


            // Append iframe to videoContainer
            videoContainer.appendChild(iframe);

            // Show the video player
            videoPlayer.style.display = "block";
            videoPlayer.muted = false;
        }

        // Function to stop the video and hide the player
        function stopVideo() {
            var videoPlayer = document.getElementById("videoPlayer");

            // Hide the video player
            videoPlayer.style.display = "none";
            videoPlayer.muted = true;
               // Pause the video
           videoPlayer.pause();
            // Reset the current time to start
           videoPlayer.currentTime = 0;


            // Stop YouTube video if it's playing
            var youtubePlayer = document.getElementById("videoContainer").querySelector("iframe");
            if (youtubePlayer) {
                youtubePlayer.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            }

            // Stop local video if it's playing
            var localVideo = document.getElementById("videoContainer").querySelector("video");
            if (localVideo) {
                localVideo.pause();
                localVideo.currentTime = 0;
            }
        }
function showPlayer() {
    var videoPlayer = document.getElementById("videoPlayer");
    var floatingIcon = document.getElementById("floatingIcon");

    // Show the video player
    videoPlayer.style.display = "block";

    
}