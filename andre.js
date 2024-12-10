const fonts = [
    "Arial", "Verdana", "Georgia", "Times New Roman", "Courier New", "Lucida Console", 
    "Comic Sans MS", "Impact", "Tahoma", "Trebuchet MS", "Arial Black", "Courier", 
    "Palatino", "Garamond", "Consolas", "Roboto", "Open Sans", "Lobster", 
    "Brush Script MT", "Helvetica", "Futura", "Montserrat", "Tahoma", "Georgia", 
    "PT Sans", "Merriweather", "Playfair Display", "Raleway", "Source Sans Pro", 
    "Ubuntu", "Lora", "Nunito", "Work Sans", "Poppins", "Quicksand", "Oswald", 
    "Roboto Slab", "Lato", "Josefin Sans", "Bitter", "Arvo", "Droid Sans", "Anton", 
    "Cabin", "Fira Sans", "Sarabun", "Noto Sans", "Dosis", "Cairo", "Varela Round", 
    "Exo", "Zilla Slab", "Be Vietnam", "Muli", "Overpass", "Signika", "Bree Serif", 
    "Gloock", "Bungee", "Inconsolata", "Caveat", "Rochester", "Sacramento", 
    "Playfair Display SC", "Mochiy Pop P One", "Noto Serif", "Balsamiq Sans", 
    "Bitter", "Fredericka the Great", "Righteous", "Courgette", "Shadows Into Light", 
    "Piedra", "Dancing Script", "Lobster Two", "Chewy", "Rock Salt", "Pacifico", 
    "Great Vibes", "Permanent Marker", "Dancing Script", "Yellowtail", "Satisfy", 
    "Tangerine", "Gloria Hallelujah", "Dosis", "Teko", "Arimo", "Slabo 27px", 
    "Abril Fatface", "Open Sans Condensed", "Oswald", "Be+Slab", "Karla", "Quicksand",
    "Great Vibes", "Raleway", "Gloria Hallelujah", "Pathway Gothic One", "Bitter", 
    "Arvo", "Rubik", "Orbitron", "Indie Flower", "RocknRoll One", "Oswald", "Oleo Script", 
    "Hammersmith One", "Fredericka the Great", "Hind Madurai", "KoHo", "Questrial", 
    "Signika Negative", "Inter", "Nunito", "Taviraj", "Droid Sans", "Russo One", 
    "Baloo Tamma", "Gloock", "Fira Sans", "Darker Grotesque", "Oxygen", "Alegreya", 
    "Dosis", "Indie Flower", "Bebas Neue", "Darker Grotesque", "Julius Sans One"
];

function FONTSHIT() {
    const XXX = fonts[Math.floor(Math.random() * fonts.length)];
    document.getElementById('FLEX').style.fontFamily = XXX;
}

setInterval(FONTSHIT, 50);

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('x').style.display = 'flex';
    const audio = document.getElementById('JUMPOUT');
    audio.play();
});