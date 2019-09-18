
function onSubmit(){
    var para = document.getElementById("textarea").value;
    var output = document.getElementById("frequency_table");
    var tablecontent = "";
    para = para.toLowerCase();
    if (para !== "") {
        
            var dict = {};
            para.replace(/\S+/g,function(word){
                word = word.split('.')[0]
                word = word.split(',')[0]
                if (dict[word] == undefined){
                dict[word] = 1;
                } else {
                dict[word]++;
                }
        })

        tablecontent += "<table class='ftable'> <thead> <th>Word</th> <th>Frequency</th> </thead> <tbody>";
        
        for (word in dict) {
            tablecontent += "<tr><td>" + word + "</td><td>" + dict[word] + "</td></tr>";
        }

        tablecontent += "</tbody></table>";
        output.innerHTML = tablecontent;
     
    }
}