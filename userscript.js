// ==UserScript==
// @name         Change Font
// @version      1.2
// @description  Thay đổi font cơ bản và thêm font vào lựa chọn đổi font trong truyện
// @author       Hexros Raymond
// @match        *://sangtacviet.vip/*
// @icon         https://raw.githubusercontent.com/hexros-dev/change-fonts/master/logo.png
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/hexros-dev/change-fonts/master/userscript.js
// ==/UserScript==

(function () {
	'use strict';
	// import font cần thêm vào
	// Font cho body
	GM_addStyle(
		"@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');",
	);
	// Font cho thêm vào option
	GM_addStyle(`
        @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400..700;1,400..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playwrite+AR:wght@100..400&display=swap');
        `);
	// Thay đổi font cho body
	GM_addStyle(`
        body {
            font-family: 'Fira Sans';
        }`);
	function addFontOption(fontFamilyName) {
		let selfont = document.getElementById('selfont');
		let fontOption = document.createElement('option');
		fontOption.value = fontFamilyName;
		fontOption.text = fontFamilyName;
		selfont.appendChild(fontOption);
	}
	addFontOption('Merienda');
	addFontOption('Aleo');
	addFontOption('STIX Two Text');
	addFontOption('Playfair');
	addFontOption('Playwrite AR');
        addFontOption('Fira Sans');
})();
