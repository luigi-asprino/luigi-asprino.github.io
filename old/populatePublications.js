


function addPub(type, id, aurhorsListHTML, title, inField, doi, bibtex,url){
 var typeElement = document.getElementById(type);
 var pElement = document.createElement('p');
 pElement.setAttribute("id",id);
 
 var s = aurhorsListHTML ;
 
 if(url!=null){
 	s = s+ ". <a href=\""+url+"\">"+title+"</a>. ";
 }else{
 	s =  s +". " +title+". ";
 }
 
 s = s + " In: <i>" +inField+"</i>";
 
if(doi!=null){
     s = s + " DOI: <a href=\"https://doi.org/"+doi+"\">"+doi+"</a>";
 }
 
 pElement.innerHTML= s;
 
 /*
 if(doi!=null){
	pElement.innerHTML=aurhorsListHTML+". <a href=\""+url+"\">"+title+"</a> . In:<i> "+inField+"</i> DOI: <a href=\"https://doi.org/"+doi+"\">"+doi+"</a>";
 }else{
 	pElement.innerHTML=aurhorsListHTML+". <a href=\""+url+"\">"+title+"</a> . In:<i> "+inField+"</i>";
 }*/
 
 typeElement.appendChild(pElement);
 var inputElement = document.createElement('input');
 inputElement.type = "button";
 inputElement.setAttribute("value", "Bib");
 inputElement.style.color = "black";
 pElement.appendChild(inputElement);
 inputElement.addEventListener('click', function(){
   //alert(bibtex);
   var wnd = window.open("about:blank",  "_blank");
   wnd.document.write(bibtex);
   wnd.focus();
  });
}


addPub("chapters",
"Lodi2017","1. G. Lodi, <b>L. Asprino</b>, A.G. Nuzzolese, V. Presutti, A. Gangemi, D. Reforgiato Recupero, C. Veninata and A. Orsini",
"Semantic Web for Cultural Heritage Valorisation",
"Data Analytics in Digital Humanities",
"10.1007/978-3-319-54499-1_1",
"@Inbook{Lodi2017, \n author=\"Lodi, Giorgia and Asprino, Luigi and Nuzzolese, Andrea Giovanni and Presutti, Valentina and Gangemi, Aldo and Recupero, Diego Reforgiato and Veninata, Chiara and Orsini, Annarita\", \n editor=\"Hai-Jew, Shalin\", \n title=\"Semantic Web for Cultural Heritage Valorisation\", \n bookTitle=\"Data Analytics in Digital Humanities\", \n year=\"2017\", \n publisher=\"Springer International Publishing\",\n pages=\"3--37\", isbn=\"978-3-319-54499-1\", \n doi=\"10.1007/978-3-319-54499-1_1\"}",
"https://doi.org/10.1007/978-3-319-54499-1_1");

addPub("chapters",
"Asprino2018",
"2. <b>L. Asprino</b>, A. Gangemi, A. G. Nuzzolese, V. Presutti, D. Reforgiato Recupero and A. Russo",
"Ontology-based Knowledge Management for Comprehensive Geriatric Assessment and Reminiscence Therapy on Social Robots",
"Data Science for Healthcare: Methodologies and Applications (to appear)",
null,
"@Inbook{Asprino2018, \n author=\"Asprino, Luigi and Nuzzolese, Andrea Giovanni and Gangemi, Aldo and Presutti, Valentina  and Recupero, Diego Reforgiato and Russo, Alessandro\", \n editor=\"Consoli, Sergio  and Reforgiato Recupero, Diego  and Petkovic,Milan\", \n bookTitle=\"Data Science for Healthcare: Methodologies and Applications\", \n title=\"Ontology-based Knowledge Management for Comprehensive Geriatric Assessment and Reminiscence Therapy on Social Robots\", \n year=\"2018\", \n publisher=\"Springer\",\n pages=\"(to appear)\"}",
null);

addPub("conferenceProceedings",
"Peroni2016",
"1. S. Peroni, G. Lodi, <b>L. Asprino</b>, A. Gangemi and V. Presutti",
"FOOD: FOod in Open Data",
"Proceedings of the 15th International Semantic Web Conference (ISWC 2016). Kobe, Japan, 2016",
"10.1007/978-3-319-46547-0_18",
"@inproceedings{Peroni2016,\n author=\"Peroni, Silvio and Lodi, Giorgia and Asprino, Luigi and Gangemi, Aldo and Presutti, Valentina\",\n editor=\"Groth, Paul and Simperl, Elena and Gray, Alasdair and Sabou, Marta and Kr{\\\"o}tzsch, Markus and Lecue, Freddy and Fl{\\\"o}ck, Fabian and Gil, Yolanda\",\n title=\"FOOD: FOod in Open Data\",\n bookTitle=\"The Semantic Web -- Proceedings of the 15th International Semantic Web Conference (ISWC 2016), Part II\",\n year=\"2016\",\n publisher=\"Springer International Publishing\",\n pages=\"168--176\",\n isbn=\"978-3-319-46547-0\",\n doi=\"10.1007/978-3-319-46547-0_18\" }",
"https://doi.org/10.1007/978-3-319-46547-0_18"
);

addPub("conferenceProceedings",
"Presutti2016",
"2. V. Presutti, G. Lodi, A. G. Nuzzolese, A. Gangemi, S. Peroni and <b>L. Asprino</b>",
"The role of Ontology Design Patterns in Linked Data projects",
"Proceedings of the 35th International Conference on Conceptual Modeling (ER 2016). Gifu, Japan, 2016",
"10.1007/978-3-319-46397-1_9",
"@inproceedings{Presutti2016,\n author=\"Presutti, Valentina and Lodi, Giorgia and Nuzzolese, Andrea Giovanni and Gangemi, Aldo and Peroni, Silvio and Asprino, Luigi\", \n editor=\"Comyn-Wattiau, Isabelle and Tanaka, Katsumi and Song, Il-Yeol and Yamamoto, Shuichiro and Saeki, Motoshi\",\n title=\"The Role of Ontology Design Patterns in Linked Data Projects\",\n bookTitle=\"Proceedings of the 35th International Conference on Conceptual Modeling (ER 2016)\",\n year=\"2016\",\n publisher=\"Springer International Publishing\",\n pages=\"113--121\", \n isbn=\"978-3-319-46397-1\", \n doi=\"10.1007/978-3-319-46397-1_9\"}",
"https://doi.org/10.1007/978-3-319-46397-1_9");


addPub("conferenceProceedings",
"Gangemi2016",
"3. A. Gangemi, M. Alam, <b>L. Asprino</b>, V. Presutti and D. Reforgiato Recupero",
"Framester: A Wide Coverage Linguistic Linked Data Hub",
"Proceedings of the 20th International Conference on Knowledge Engineering and Knowledge Management (EKAW 2016). Bologna, Italy, 2016",
"10.1007/978-3-319-49004-5_16",
"@inproceedings{Gangemi2016,\n author=\"Gangemi, Aldo and Alam, Mehwish and Asprino, Luigi and Presutti, Valentina and Recupero, Diego Reforgiato\",\n editor=\"Blomqvist, Eva and Ciancarini, Paolo and Poggi, Francesco and Vitali, Fabio\",\n title=\"Framester: A Wide Coverage Linguistic Linked Data Hub\",\n bookTitle=\"Proceedings of the 20th International Conference on Knowledge Engineering and Knowledge Management (EKAW 2016)\",\n year=\"2016\",\n publisher=\"Springer International Publishing\",\n pages=\"239--254\",\n isbn=\"978-3-319-49004-5\",\n doi=\"10.1007/978-3-319-49004-5_16\",\n url=\"http://dx.doi.org/10.1007/978-3-319-49004-5_16\"\n }",
"https://doi.org/10.1007/978-3-319-49004-5_16"
);

addPub("conferenceProceedings",
"Asprino2016a",
"4. <b>L. Asprino</b>, V. Presutti and A. Gangemi",
"Matching Ontologies Using a Frame-Driven Approach",
"Proceedings of the 20th International Conference on Knowledge Engineering and Knowledge Management (EKAW 2016) - Satellite Events. Bologna, Italy, 2016",
"10.1007/978-3-319-58694-6_9",
"@Inbook{Asprino2016,\n author=\"Asprino, Luigi and Presutti, Valentina and Gangemi, Aldo\", \n editor=\"Ciancarini, Paolo and Poggi, Francesco and Horridge, Matthew and Zhao, Jun and Groza, Tudor and Suarez-Figueroa, Mari Carmen and d'Aquin, Mathieu and Presutti, Valentina\",\n title=\"Matching Ontologies Using a Frame-Driven Approach\",\n bookTitle=\"Proceedings of the 20th International Conference on Knowledge Engineering and Knowledge Management (EKAW 2016) - Satellite Events\",\n venue=\"Bologna, Italy\",\n year=\"2016\",\n publisher=\"Springer International Publishing\",\n pages=\"101--104\",\n isbn=\"978-3-319-58694-6\",\n doi=\"10.1007/978-3-319-58694-6_9\",\n url=\"http://dx.doi.org/10.1007/978-3-319-58694-6_9\"\n }",
"https://doi.org/10.1007/978-3-319-58694-6_9");


addPub("conferenceProceedings",
"Asprino2016b",
"5. <b>L. Asprino</b>",
"Addressing Knowledge Integration with a Frame-Driven Approach",
"Proceedings of the 20th International Conference on Knowledge Engineering and Knowledge Management (EKAW 2016) - Satellite Events. Bologna, Italy, 2016",
"10.1007/978-3-319-58694-6_32",
"@Inbook{Asprino2016,\n author=\"Asprino, Luigi\", \n editor=\"Ciancarini, Paolo and Poggi, Francesco and Horridge, Matthew and Zhao, Jun and Groza, Tudor and Suarez-Figueroa, Mari Carmen and d'Aquin, Mathieu and Presutti, Valentina\",\n title=\"Addressing Knowledge Integration with a Frame-Driven Approach\",\n bookTitle=\"Proceedings of the 20th International Conference on Knowledge Engineering and Knowledge Management (EKAW 2016) - Satellite Events\",\n venue=\"Bologna, Italy\",\n year=\"2016\",\n publisher=\"Springer International Publishing\",\n pages=\"205--210\",\n isbn=\"978-3-319-58694-6\",\n doi=\"10.1007/978-3-319-58694-6_32\",\n url=\"http://dx.doi.org/10.1007/978-3-319-58694-6_32\"\n }",
"https://doi.org/10.1007/978-3-319-58694-6_32");


addPub("conferenceProceedings",
"Asprino2017a",
"6. <b>L. Asprino</b>, V. Presutti, A. Gangemi and P. Ciancarini",
"Frame-Based Ontology Alignment",
"Proceedings of the 31st AAAI Conference on Artificial Intelligence (AAAI-17). San Francisco, California, USA, 2017",
null,
"@Inbook{Asprino2017,\n author=\"Asprino, Luigi and Presutti, Valentina and Gangemi, Aldo and Ciancarini, Paolo\", \n editor=\"Satinder P. Singh and Shaul Markovitch\",\n title=\"Frame-Based Ontology Alignment\",\n bookTitle=\"Proceedings of the Thirty-First AAAI Conference on Artificial Intelligence (AAAI-17)\",\n venue=\"San Francisco, California, USA\",\n year=\"2017\",\n publisher=\"AAAI Press\",\n pages=\"4905--4906\",\n isbn=\"978-1-57735-785-8\",\n doi=\"\",\n url=\"http://aaai.org/ocs/index.php/AAAI/AAAI17/paper/view/14897\"\n }",
"http://aaai.org/ocs/index.php/AAAI/AAAI17/paper/view/14897");


addPub("conferenceProceedings",
"Asprino2018a",
"7. <b>L. Asprino</b>, V. Basile, P. Ciancarini and V. Presutti",
"Empirical Analysis of Foundational Distinctions in Linked Open Data",
"Proceedings of the 27th International Joint Conference on Artificial Intelligence and the 23rd European Conference on Artificial Intelligence (IJCAI-ECAI-18). Stockholm, Sweden, 2018",
"10.24963/ijcai.2018/551",
"@Inbook{Asprino2018a,\n author=\"Asprino, Luigi and Basile,Valerio and Ciancarini, Paolo and Presutti, Valentina\", \n editor=\"Jérôme Lang\",\n title=\"Empirical Analysis of Foundational Distinctions in Linked Open Data\",\n bookTitle=\"Proceedings of the 27th International Joint Conference on Artificial Intelligence and the 23rd European Conference on Artificial Intelligence (IJCAI-ECAI-18)\",\n venue=\"Stockholm, Sweden\",\n year=\"2018\",\n publisher=\"International Joint Conferences on Artificial Intelligence\",\n pages=\" 3962--3969\",\n isbn=\"978-0-9992411-2-7\",\n doi=\"10.24963/ijcai.2018/551\",\n url=\"https://doi.org/10.24963/ijcai.2018/551\"\n }",
"https://doi.org/10.24963/ijcai.2018/551");

/*
*	Workshop proceedings
*/

addPub("workshopProceedings",
"Asprino2016c",
"1. <b>L. Asprino</b>, A.G. Nuzzolese, A. Russo, A. Gangemi, V. Presutti and S. Nolfi",
"An Ontology Design Pattern for supporting behaviour arbitration in cognitive agents",
"Proceedings of the 7th Workshop on Ontology and Semantic Web Patterns co-located with ISWC 2016 (WOP 2016). Kobe, Japan, 2016",
null,
"@Inbook{Asprino2016c,\n author=\"Asprino, Luigi and Nuzzolese, Andrea Giovanni and Russo, Alessandro and Gangemi, Aldo and Presutti, Valentina and Nolfi, Stefano\", \n editor=\"\",\n title=\"An Ontology Design Pattern for supporting behaviour arbitration in cognitive agents\",\n bookTitle=\"Proceedings of the 7th Workshop on Ontology and Semantic Web Patterns co-located with ISWC 2016 (WOP 2016)\",\n venue=\"Kobe, Japan\",\n year=\"2016\",\n publisher=\"\",\n pages=\"to appear\",\n isbn=\"\",\n doi=\"\",\n url=\"http://ontologydesignpatterns.org/wiki/images/0/03/WOP2016_paper_13.pdf\"\n }",
"http://ontologydesignpatterns.org/wiki/images/0/03/WOP2016_paper_13.pdf");

addPub("workshopProceedings",
"Asprino2017b",
"2. <b>L. Asprino</b>, A. Gangemi, A.G. Nuzzolese, V. Presutti, D. Reforgiato Recupero and A. Russo",
"Autonomous Comprehensive Geriatric Assessment",
"Proceedings of the 1st International Workshop on Application of Semantic Web technologies in Robotics co-located with 14th ESWC (ANSWER 2017), Portoroz, Slovenia, 2017",
null,
"@Inbook{Asprino2017b,\n author=\"Asprino, Luigi and Gangemi, Aldo and Nuzzolese, Andrea Giovanni and Presutti, Valentina and Recupero, Diego Reforgiato and Russo, Alessandro\", \n editor=\"Emanuele Bastianelli and Mathieu d'Aquin and Daniele Nardi\",\n title=\"Autonomous Comprehensive Geriatric Assessment\",\n bookTitle=\"Proceedings of the 1st International Workshop on Application of Semantic Web technologies in Robotics co-located with 14th ESWC (ANSWER 2017)\",\n venue=\"Portoroz, Slovenia\",\n year=\"2017\",\n publisher=\"CEUR-WS.org\",\n pages=\"41--45\",\n isbn=\"\",\n doi=\"\",\n url=\"http://ceur-ws.org/Vol-1935/paper-05.pdf\"\n }",
"http://ceur-ws.org/Vol-1935/paper-05.pdf");

addPub("workshopProceedings",
"Asprino2017c",
"3. <b>L. Asprino</b>, A. Gangemi, A.G. Nuzzolese, V. Presutti and A. Russo",
"Knowledge-driven Support for Reminiscence on Companion Robots",
"Proceedings of the 1st International Workshop on Application of Semantic Web technologies in Robotics co-located with 14th ESWC (ANSWER 2017), Portoroz, Slovenia, 2017",
null,
"@Inbook{Asprino2017c,\n author=\"Asprino, Luigi and Gangemi, Aldo and Nuzzolese, Andrea Giovanni and Presutti, Valentina and Russo, Alessandro\", \n editor=\"Emanuele Bastianelli and Mathieu d'Aquin and Daniele Nardi\",\n title=\"Knowledge-driven Support for Reminiscence on Companion Robots\",\n bookTitle=\"Proceedings of the 1st International Workshop on Application of Semantic Web technologies in Robotics co-located with 14th ESWC (ANSWER 2017)\",\n venue=\"Portoroz, Slovenia\",\n year=\"2017\",\n publisher=\"CEUR-WS.org\",\n pages=\"51--55\",\n isbn=\"\",\n doi=\"\",\n url=\"http://ceur-ws.org/Vol-1935/paper-07.pdf\"\n }",
"http://ceur-ws.org/Vol-1935/paper-07.pdf");

addPub("workshopProceedings",
"Asprino2017d",
"4. <b>L. Asprino</b>, A. Gangemi, A.G. Nuzzolese, V. Presutti and A. Russo",
"A Knowledge Management System for Assistive Robotics",
"Proceedings of the 1st International Workshop on Application of Semantic Web technologies in Robotics co-located with 14th ESWC (ANSWER 2017), Portoroz, Slovenia, 2017",
null,
"@Inbook{Asprino2017d,\n author=\"Asprino, Luigi and Gangemi, Aldo and Nuzzolese, Andrea Giovanni and Presutti, Valentina and Russo, Alessandro\", \n editor=\"Emanuele Bastianelli and Mathieu d'Aquin and Daniele Nardi\",\n title=\"A Knowledge Management System for Assistive Robotics\",\n bookTitle=\"Proceedings of the 1st International Workshop on Application of Semantic Web technologies in Robotics co-located with 14th ESWC (ANSWER 2017)\",\n venue=\"Portoroz, Slovenia\",\n year=\"2017\",\n publisher=\"CEUR-WS.org\",\n pages=\"46--50\",\n isbn=\"\",\n doi=\"\",\n url=\"http://ceur-ws.org/Vol-1935/paper-06.pdf\"\n }",
"http://ceur-ws.org/Vol-1935/paper-06.pdf");