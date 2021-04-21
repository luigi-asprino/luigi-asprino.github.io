$.ajaxSetup({
	beforeSend : function(xhr) {
		if (xhr.overrideMimeType) {
			xhr.overrideMimeType("application/json");
		}
	}
});
$.getJSON("./js/publications_data.json", function(data) {

	for ( var k in data) {

		var accordionElem = document.getElementById("accordionPub");
		var cardElement = document.createElement('div');
		cardElement.setAttribute('class', 'card');

		cardElement.innerHTML = getHeaderDiv(data[k].year)
				+ getCollapseDiv(data[k].year, data[k].publications);

		accordionElem.appendChild(cardElement);
	}

});

function getHeaderDiv(year) {
	return "<div class=\"card-header\" id=\"heading"
			+ year
			+ "\"> <h5 class=\"mb-0\"><button class=\"btn btn-year\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse"
			+ year + "\"aria-expanded=\"true\" aria-controls=\"collapse" + year
			+ "\">" + year + "</button></h5></div>";
}

function getCollapseDiv(year, pubs) {
	var s = "<div id=\"collapse" + year
			+ "\" class=\"collapse\" aria-labelledby=\"heading" + year
			+ "\" data-parent=\"#accordionPub\"> <div class=\"card-body\">";

	pubs.forEach(function(e, i) {
		if(!("book" in e) || e.book == null){
				s = s + addPub(e.id, i+1, e.authors, e.title, e.inField,e.doi,e.bibtex,e.url,false);
		}else{
			s = s + addPub(e.id, i+1, e.authors, e.title, e.inField,e.doi,e.bibtex,e.url,true);
		}

	});

	s = s + "</div></div>";

	return s;
}

function addPub(id, num, aurhorsListHTML, title, inField, doi, bibtex, url, book) {
	var s = "<p>" + num + ". " + aurhorsListHTML;

	if (url != null) {
		s = s + ". <a href=\"" + url + "\">" + title + "</a>. ";
	} else {
		s = s + ". " + title + ". ";
	}

	if(!book){
			s = s + " In: <i>" + inField + "</i>";
	}else{
			s = s + " <i>" + inField + "</i>";
	}


	if (doi != null) {
		s = s + " DOI: <a href=\"https://doi.org/" + doi + "\">" + doi
				+ "</a> ";
	}

	s = s
			+ " <button class=\"btn btn-bibtex \" type=\"button\" data-toggle=\"collapse\" href=\"#collapseBib"
			+ id
			+ "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseBib"
			+ id + "\">bibtex</button></p>";

	s = s + "<div class=\"collapse\" id=\"collapseBib" + id
			+ "\"><div class=\"card card-body\">" + bibtex + "</div></div><br/>";

	return s;

}
