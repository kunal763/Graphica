

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Dekha Ek Khwab Song - Silsila - Amitabh Bachchan, Rekha - Kishore Kumar, Lata Mangeshkar, Shiv-Hari',
        'name': 'Dekha Ek Khwab Song - Silsila - Amitabh Bachchan, Rekha - Kishore Kumar, Lata Mangeshkar, Shiv-Hari.mp4',
        'duration': '4:26',
    },
    // {
    //     'id': 'a2',
    //     'title': 'Coldplay - Hymn For The Weekend (Official Video)',
    //     'name': 'Coldplay - Hymn For The Weekend (Official Video).mp4',
    //     'duration': '4:20',
    // },
    {
        'id': 'a3',
        'title': 'AURORA - Runaway',
        'name': 'AURORA - Runaway.mp4',
        'duration': '4:09',
    },

    // {
    //     'id': 'a4',
    //     'title': 'DHARIA - Sugar & Brownies (by Monoir) [Official Video]',
    //     'name': 'DHARIA - Sugar & Brownies (by Monoir) [Official Video].mp4',
    //     'duration': '3:31',
    // },
    // {
    //     'id': 'a5',
    //     'title': 'Romance Sengen',
    //     'name': 'Romance Sengen .mp4',
    //     'duration': '2:59',
    // },
    {
        'id': 'a6',
        'title': 'TheFatRat - Xenogenesis (Outro Song)',
        'name': 'TheFatRat - Xenogenesis (Outro Song).mp4',
        'duration': '3:55',
    },
    {
        'id': 'a7',
        'title': 'YourName',
        'name': 'YourName.mp4',
        'duration': '3:01',
    },

    // {
    //     'id': 'a8',
    //     'title': 'Glass Animals - Heat Waves (Official Video)',
    //     'name': 'Glass Animals - Heat Waves (Official Video).mp4',
    //     'duration': '3:55',
    // },
    // {
    //     'id': 'a9',
    //     'title': 'KSHMR & Lost Stories - Bombay Dreams [feat. Kavita Seth] (Official Music Video)',
    //     'name': 'KSHMR & Lost Stories - Bombay Dreams [feat. Kavita Seth] (Official Music Video).mp4',
    //     'duration': '3:42',
    // },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
