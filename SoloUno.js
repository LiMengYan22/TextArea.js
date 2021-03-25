<script src="http://js.nicedit.com/nicEdit-latest.js" type="text/javascript"></script>
<script type="text/javascript">bkLib.onDomLoaded(function() { new nicEditor().panelInstance('texcontenido'); });</script>

//1.-En donde panelInstance contiene el nombre del textarea..
//2.-En el parentesis de new niceditor se pone el listado de botones que aparecerán, ejemplo:
new niceditor({buttonList : ['fontSize', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'html', 'image']}).panelInstance('texcontenido')
