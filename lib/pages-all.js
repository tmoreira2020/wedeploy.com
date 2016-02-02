var fs = require('fs');
var path = require('path');
var strip = require('remove-markdown');

exports.read = function(lang) {
    var icon;
    var iconBackground;

    if (lang === 'js') {
        icon = 'icon-16-globe';
        iconBackground = '#ffb700';
        langFriendly = 'JavaScript';
    } else if (lang === 'java') {
        icon = 'icon-16-cup';
        iconBackground = '#ff536b';
        langFriendly = 'Java';
    } else if (lang === 'curl') {
        icon = 'icon-16-command-line';
        iconBackground = '#00a4ff';
        langFriendly = 'cURL';
    }

    return [
        {
            path: '/' + lang + '/',
            title: 'Quickstart with ' + langFriendly,
            content: read('index.md', 'Quickstart with ' + langFriendly, lang),
            iconBackground: iconBackground,
            icon: icon
        },
        {
            path: '/' + lang + '/building-apis.html',
            title: 'Building APIs with ' + langFriendly,
            content: read('building-apis.md', 'Building APIs with ' + langFriendly, lang),
            iconBackground: iconBackground,
            icon: icon
        },
        {
            path: '/' + lang + '/understanding-data.html',
            title: 'Understanding Data with ' + langFriendly,
            content: read('understanding-data.md', 'Understanding Data with ' + langFriendly, lang),
            iconBackground: iconBackground,
            icon: icon
        }
    ];
}

function read(filename, title, lang) {
    var location = path.join(__dirname, '../bower_components/docs', lang, filename);
    var file = fs.readFileSync(location, 'utf-8');
    var content = strip(file);

    return content.substr(title.length);
}