<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Using let instead of const for broader compatibility
        let playButton = document.getElementById('play-btn');
        let videoPlaceholder = document.getElementById('video-placeholder');
        let youtubeIframe = document.getElementById('youtube-iframe');

        // Function to handle the play button click
        function playVideo() {
            // Set the YouTube video URL
            let videoId = 'YOUR_YOUTUBE_VIDEO_ID'; // Replace with your YouTube video ID
            let videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

            // Set iframe source and make it visible
            youtubeIframe.src = videoUrl;
            videoPlaceholder.style.display = 'block';
            playButton.style.display = 'none'; // Hide the play button
        }

        // Add event listener to the play button
        playButton.addEventListener('click', playVideo);
    });
</script>
