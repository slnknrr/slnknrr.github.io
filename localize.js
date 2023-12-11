function localize(locales) { //0.1.0; TODO: force lang and object->text->regexp->custum tags get
	var locale = Intl.DateTimeFormat().resolvedOptions().locale.replace(/^z(h|n)-CN$/i, 'zn-CN');
	var page=window.location.toString().replace(/\/$/,'/index.html');

	if (locales.includes(locale)) {	
		var localized=page.replace(/\.html$/i,`.${locale}.htm`);
	} else {
		var localized=page.replace(/\.html$/i,`.${locales[0]}.htm`);
	}
	document.getElementById('main').innerHTML=`<object data="${localized}">`;
}
