<h4>One Click Changes HTML Content</h4>
<p id="mainTxt">JavaScript can change HTML content.</p>

<button type="button" onclick='document.
getElementById("mainTxt").innerHTML = "Hello World!"'>Click Me!</button>

<button type="button" onclick='document.
getElementById("mainTxt").innerHTML = "JavaScript can change HTML content."'>revert</button>



<h4>Light Bulb Demo</h4>
<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image. (Like this Light Bulb Image)</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px"></img>

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>



<h4>One Click style change</h4>
<p id="style">JavaScript can change the style of an HTML element.</p>

<button type="button" onclick="document.getElementById('style').style.fontSize='35px'">Click Me!</button>



<h4>Hiding Html Elements</h4>

<p id="hdTxt">JavaScript can hide HTML elements.</p>

<button type="button" onclick="document.getElementById('hdTxt').style.display='none'">Click Me!</button>



<h4>Showing Html Elements</h4>

<p>JavaScript can show hidden HTML elements.</p>

<p id="showHdtxt" style="display:none">Hello JavaScript!</p>

<button type="button" onclick="document.getElementById('showHdtxt').style.display='block'">Click Me!</button>



<h4>JavaScript in Body</h4>

<p id="scptTag"></p>
<script>
document.getElementById("scptTag").innerHTML = "My First JavaScript";
</script>