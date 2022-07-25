const adamsData = `
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix ex: <http://example.org/>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.

ex:eudora foaf:name "Eudora Addams" ;
        ex:hasPartner ex:gomez ;
        ex:hasChild ex:pugsley ;
        ex:hasChild ex:wednesday ;
        ex:gender ex:F .

ex:todoList rdfs:label "Todo List" .
ex:todoList rdfs:label "Todo List (De)"@de .
ex:todoList rdfs:label "Todo List (Fr)"@fr .
ex:todoList rdfs:label "Todo List (Es)"@es .

ex:gomez foaf:name "Gomez Addams" ;
        a foaf:Person ;
        a ex:Celebrity ;
       ex:gender ex:M ;
       ex:livesWith ex:morticia  ;
       ex:hasPartner ex:morticia ;
       ex:hasBrother ex:uncle ;
       ex:hasChild ex:pugsley ;
       ex:hasChild ex:wednesday ;
       rdfs:label "Gomez Addams";
       ex:lives_at [
                    rdfs:label "Address" ;
                    ex:street "Cemetery Lane" ;
                    ex:number "001" ;
 #                   ex:_namedNode [ ex:property "value" ; ex:property "value"] 
                 ] ;
       ex:todoList ( ex:drinkTea "Go to the supermarket" ex:readNewspaper) ;
       ex:spouseIn ex:second_generation .

ex:drinkTea foaf:name "Drink tea" ;
            ex:amount 2 .
ex:readNewspaper foaf:name "Read the newspaper" .

ex:morticia foaf:name "Morticia A. Addams" ;
          ex:gender ex:F ;
          ex:hasPartner ex:gomez .

ex:uncle foaf:name "Uncle Fester" ;
       ex:gender ex:M .

ex:pugsley foaf:name "Pugsley Addams" ;
         ex:gender ex:M .

ex:wednesday foaf:name "Wednesday Friday Addams" ;
           ex:gender ex:F .

ex:lurch foaf:name "Lurch" ;
       ex:gender ex:M .

ex:thing foaf:name "Thing" ;
       ex:romanceWith ex:ladyfingers ;
       ex:gender ex:M .

ex:ladyfingers foaf:name "Lady Fingers" ;
             ex:gender ex:F .

ex:eudora foaf:img <https://vignette.wikia.nocookie.net/addamsfamily/images/4/44/Gr1.jpg/revision/latest?cb=20170324004607> .
ex:uncle foaf:img <https://vignette.wikia.nocookie.net/addamsfamily/images/3/30/FesterOrgApp.jpg/revision/latest?cb=20091221151414&format=original> .
ex:gomez foaf:img <https://vignette.wikia.nocookie.net/addamsfamily/images/d/db/Little_helper_gomez.jpg/revision/latest?cb=20150403201303> .
ex:morticia foaf:img <https://vignette.wikia.nocookie.net/addamsfamily/images/8/88/MorticiaOrgApp.jpg/revision/latest?cb=20091209074043> .
ex:pugsley foaf:img <https://vignette.wikia.nocookie.net/addamsfamily/images/2/20/PugsOrgApp.jpg/revision/latest?cb=20091221151620> .
ex:wednesday foaf:img <https://vignette.wikia.nocookie.net/addamsfamily/images/d/d6/Wednesday.png/revision/latest?cb=20140225145056> .
ex:lurch foaf:img <https://vignette.wikia.nocookie.net/addamsfamily/images/0/08/Lurch4.jpg/revision/latest?cb=20110707003536> .
ex:thing foaf:img <https://vignette.wikia.nocookie.net/addamsfamily/images/8/82/Thing_1991.jpg/revision/latest?cb=20100108153017> .
ex:ladyfingers foaf:img <https://vignette.wikia.nocookie.net/addamsfamily/images/2/2e/36._Thing%27s_Romance_026.jpg/revision/latest?cb=20121020154800> .
`
export { adamsData }
