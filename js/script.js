var pad = document.getElementById("pad");
var wraper = document.getElementById("wraper");

var types = [1,2,3,4,5,6,7,8,9,10];
var items = [];
var trainTypes = types.map(function(type){

return $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/' + type + "/",
    dataType: 'json',
    method: 'GET'
});


});

$.when.apply(null,trainTypes)
    .then(function(){

var pokemonTypes = Array.prototype.slice.call(arguments);
     getPokemon(pokemonTypes) 
    });

function getPokemon(pokemonTypes){
   
    pokemonTypes = pokemonTypes.map(function(types){
         items.push(types[0]);
     
        return types[0];
    });
    pokemonTypes = flatten(pokemonTypes);
    var $tag = $('#tab1');
    var $tableBody = $('<div  id="tab" class="elem"></div>');
    console.log(items);
    for(var i = 0; i < pokemonTypes.length;i++){
     
    //  console.log(pokemonTypes[i].name);   
    //   console.log(pokemonTypes[i].stats[0].base_stat); 

      var poke = pokemonTypes[i].name;
      var stat = pokemonTypes[i].stats[0].base_stat;
      var sprites = pokemonTypes[i].sprites.front_default;

      var $row = $('<a class="table-row size"></a>').attr("href",i );
      var $name = $('<span class="table-cell"></span>');
      var $nameText = $('<b class="scale"></b>').text(poke);
      var $val = $name.append($nameText);
      $row.append($val);

      var $name1 = $('<span class="table-cell"></span>');
      var $nameText1 = $('<b></b>').text(stat);
      var $val1 = $name1.append($nameText1);
      $row.append($val1);

       var $name2 = $('<span class="table-cell"></span>');
      var $nameText2 = $('<img/>').attr("src",sprites);
      var $val2 = $name2.append($nameText2);
      $row.append($val2);
      $('#loader').remove();
      $tableBody.append($row);

    }
    $tag.append($tableBody);

    $("a").click(function(e){
    e.preventDefault();
    var ahref = $(this).attr('href');
    console.log( ahref);

    $('#tab').css('display','none');
		
		
     var $row = ($('<div id="image"></div>'));
		var txt1 = '<div class="back"><span id="back">&lt;</span></div>';
		var txt2 = '<div id="pad"><img class="animate" src="img/'+ ahref +'.png" width="250" height="250" alt=""/><h1>'+items[ahref].name+'</h1></div>';
		$row.append(txt1,txt2);
      
      
    $('#view1').append($row);
		
		var $row1 = ($('<div id="stats"></div>'));
		$row1 = ($('<div id="wraper"></div>'));
		var $table = ($('<table id="tab2" class="animate"></table>'));
		var txt3 = '<tr><td>Hp</td><td>'+items[ahref].stats[5].base_stat+'</td></tr>';
		var txt4 = '<tr><td>Attack</td><td>'+items[ahref].stats[4].base_stat+'</td></tr>';
		var txt5 = '<tr><td>Defense</td><td>'+items[ahref].stats[3].base_stat+'</td></tr>';
		var txt6 = '<tr><td>Special attack</td><td>'+items[ahref].stats[2].base_stat+'</td></tr>';
		var txt7 = '<tr><td>Special defence</td><td>'+items[ahref].stats[1].base_stat+'</td></tr>';
		var txt8 = '<tr><td>Speed</td><td>'+items[ahref].stats[0].base_stat+'</td></tr>';
		$table.append(txt3,txt4,txt5,txt6,txt7,txt8);
		$row1.append($table);
		$('#view2').append($row1);
	
    $('#back').click(function(){
        $('#view1').empty();
		 $('#view2').empty();
         $('#tab').css('display','table');
    });
});


}

function flatten(arrayToFlatten){
    return arrayToFlatten.reduce(function(a,b){
        return a.concat(b);
    },[]);
}


