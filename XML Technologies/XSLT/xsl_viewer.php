<?php
// Load XML file
$xml = new DOMDocument;
$xml->load('ClassReptFall_9_19.xml');

// Load XSL file
$xsl = new DOMDocument;
$xsl->load('Classes.xsl');

// Configure the transformer
$proc = new XSLTProcessor;

// Attach the xsl rules
$proc->importStyleSheet($xsl);

$result = $proc->transformToXML($xml);

echo $result;
?>