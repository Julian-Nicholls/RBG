<?php
$connect=new mysqli("localhost","root","","mydatabase");
 
if (!$connect)
{
	die('Could not connect: ' . mysql_error());
}
 
?>