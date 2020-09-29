var name = Cookies.get('name');
var id = Cookies.get('id');
var isGuest = Cookies.get('isGuest');
var frame = Cookies.get('frame');

if (name != undefined && id != undefined && isGuest != undefined && frame != undefined){
    document.location.replace("statement.html");
}
