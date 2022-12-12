<script type='text/javascript'>
//<![CDATA[
var seconds = 30;
function generate() {
var id;
id = setInterval(function () {
if (seconds < 1){
clearInterval(id);
window.location = 'https://awdev-corporation.github.io';
}else {
btn.style.display = "none";
menunggu.style.display = "inline";
document.getElementById('tunggu').innerHTML = --seconds;
}
}, 3000);}
//]]>
</script>
<center><button onclick="generate()" id="btn" style="center">GET STARTED</button>
<div id="menunggu">LOADING .......<b><span id="tunggu"></span> second</b></div>
</center>
