<?php
$found = true;
$id = 1;

while($found && $id < 15){
	$data = file_get_contents("http://pokeapi.co/api/v1/pokemon/".$id);
	if($data != ""){
		$rData = json_decode($data,true);
	
	echo ("Found pokemon, ".$rData['name'].", with ID ".$id."<br />");
	}else{
		die("No pokemon found - scan finished");
	}
	$id++;
}

?>