document.getElementById("year").innerHTML = new Date().getFullYear();


if (Date.parse(document.lastModified) != 0)
    document.write('<p><hr><small><i>Last modified: '
                   + document.lastModified
                   + '</i></small>');

document.getElementById("lastModified").innerHTML = document.lastModified;