const bgToggle = document.getElementById('darkMode');
var whitexts = document.querySelectorAll('.whitext');
var blacktexts = document.querySelectorAll('.blacktext');
var navigatorbackground = document.querySelectorAll('#navigator');
darkMode.addEventListener('change', () => {
    if (darkMode.checked) {
        document.body.style.backgroundColor = 'white';
        whitexts.forEach(function(i) {
            i.style.color = 'black';
        });
        blacktexts.forEach(function(i) {
            i.style.color = 'white';
        });
        navigatorbackground.forEach(function(i) {
            i.style.backgroundColor = '#b7b7b7';
        });
    } else {
        document.body.style.backgroundColor = '#282828';
        whitexts.forEach(function(i) {
            i.style.color = 'white';
        });
        blacktexts.forEach(function(i) {
            i.style.color = 'black';
        });
        navigatorbackground.forEach(function(i) {
            i.style.backgroundColor = '#3a3a3a';
        });
    }
});