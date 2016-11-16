console.log('\'Allo \'Allo!');


$(document).ready(function () {
    GetLatestReleaseInfo();
    var OSName = GetOperatingSystem();

    var iconClass;
    if(OSName == 'Windows')
        iconClass = 'fa-windows';
    else if(OSName == 'MacOS')
        iconClass = 'fa-apple';
    else if(OSName == 'Linux')
        iconClass = 'fa-linux';
    $('.lunasound-download i').addClass(iconClass);
});

function GetLatestReleaseInfo() {
    $.getJSON('https://api.github.com/repos/vidhu/LunaSound/releases').done(function (release) {
        var assets = release[0].assets;

        var OSName = GetOperatingSystem();
        var extention;

        if(OSName == 'Windows')
            extention = 'exe';
        else if(OSName == 'MacOS')
            extention = 'app.zip';
        else if(OSName == 'Linux')
            extention = 'deb';

        var downloadUrl;
        for(let i=0; i<assets.length; i++){
            if(assets[i].name.indexOf(extention) != -1){
                downloadUrl = assets[i].browser_download_url;
                break;
            }
        }

        $('.lunasound-download').attr('href', downloadUrl);
    });
}

function GetOperatingSystem() {
    var OSName = 'Windows';
    if (navigator.appVersion.indexOf('Win')!=-1) OSName='Windows';
    if (navigator.appVersion.indexOf('Mac')!=-1) OSName='MacOS';
    if (navigator.appVersion.indexOf('X11')!=-1) OSName='UNIX';
    if (navigator.appVersion.indexOf('Linux')!=-1) OSName='Linux';
    return OSName;
}

