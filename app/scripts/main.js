console.log('\'Allo \'Allo!');


$(document).ready(function () {
    GetLatestReleaseInfo();
});

function GetLatestReleaseInfo() {
    $.getJSON('https://api.github.com/repos/vidhu/LunaSound/releases').done(function (release) {
        $('.lunasound-download').attr('href', release[0].assets[0].browser_download_url);
    });
}

