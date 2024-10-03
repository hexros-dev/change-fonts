// ==UserScript==
// @name         Change Font
// @version      1.8
// @description  Thay đổi font cơ bản và thêm font vào lựa chọn đổi font trong truyện
// @author       Hexros Raymond
// @match        *://sangtacviet.vip/*
// @icon         https://raw.githubusercontent.com/hexros-dev/change-fonts/master/logo.svg
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poltawski+Nowy:ital,wght@0,400..700;1,400..700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Brygada+1918:ital,wght@0,400..700;1,400..700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400..900;1,400..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&display=swap');
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
	font_names = ["Merienda", "Aleo", "STIX Two Text", "Playfair Display", "Fira Sans", "Playfair", "Poltawski Nowy", "Brygada 1918", "Vollkorn", "Cormorant"]
	font_names.forEach((font) => {
		addFontOption(font);
	});
})();
