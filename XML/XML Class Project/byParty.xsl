<?xml version="1.0"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:template match="/">
		<html>
			<body>
				
		
				<xsl:apply-templates/>
				
				
				
				
				
				<!-- <xsl:apply-templates/> -->
				
			</body>
		</html>
	</xsl:template>	
	
	<xsl:template match="title-info">
		<h1> <xsl:value-of select="congress-text"/> </h1>
		<br />
		<table>
			<tr>
				<th> Republicans </th>
				<th> Democrats </th>
			</tr>
			<tr>
				<td> <xsl:value-of select="count(//members/member[member-info/party = 'R'])" /> </td>
				<td> <xsl:value-of select="count(//members/member[member-info/party = 'D'])" /> </td>
			</tr>
		</table>
		<br />
	</xsl:template>
	
	<xsl:template match="members">
		<table>
			<tr> <!-- First Row -->
				<th> Name of Representative </th>
				<th> Position </th>
			</tr> <!-- /First Row -->
					
					<!-- Rest of the Rows -->
			<xsl:apply-templates select="member[not(member-info/footnote)]">
				<xsl:sort select="member-info/party"/>
			</xsl:apply-templates>
		</table>
	</xsl:template>
	
	<xsl:template match="member">
		
			<tr>
				<td> <xsl:value-of select="member-info/courtesy"/> &#160;<xsl:value-of select="member-info/firstname"/> &#160;<xsl:value-of select="member-info/middlename"/>&#160;<xsl:value-of select="member-info/lastname"/></td>
				<td> <xsl:value-of select="member-info/party"/>-<xsl:value-of select="member-info/state/state-fullname"/> </td>
				
			</tr>
					<!-- /Rest of the Rows -->	
	</xsl:template>
	
	<xsl:template match="committees">
		<!-- NOTHING -->
	</xsl:template>
	
</xsl:stylesheet>