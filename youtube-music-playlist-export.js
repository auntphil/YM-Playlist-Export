let rows = document.getElementById('contents').getElementsByClassName('ytmusic-playlist-shelf-renderer');
let tracks = []
let track = []
for( let r = 0; r < rows.length; r++ ){
    try{
        track = []
        track[0] = rows[r].getElementsByClassName('title')[0].innerText
        track[1] = (rows[r].getElementsByClassName('secondary-flex-columns')[0].getElementsByClassName('flex-column')[0].innerText).replaceAll("\n","").replaceAll(",",";")
        track[2] = (rows[r].getElementsByClassName('secondary-flex-columns')[0].getElementsByClassName('flex-column')[1].innerText).replaceAll("\n","").replaceAll(",",";")
        tracks[r-1] = track
    }catch{
        continue
    }
}
let csvContent = "data:text/csv;charset=utf-8," + tracks.map(e => e.join(",")).join("\n");

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", document.getElementsByTagName('h2')[0].innerText + ".csv");
document.body.appendChild(link).click();