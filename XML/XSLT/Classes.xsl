<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
    <header>
      James Fulford CIS Capstone : XSLT
    <link rel="stylesheet" type="text/css" href="Classes.css"/>
    </header>
  <body>
  <h2>MCC Classes</h2>
  <!-- <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
  </div>
  </div> -->
  <div id="dropdown" class="dropdown"/>
  <script type="text/javascript" src="dropdown.js"/> <!-- Creates dropdown menu. -->
  <table>
    <tr id="headers">
      <th>Code</th>
      <th>CRN</th>
      <th>Course Title</th>
      <th>Days</th>
      <th>Time</th>
      <th>Section</th>
      <th>Seats Left</th>
    </tr>
    <xsl:for-each select="allRecords/rec">
      <xsl:sort select="Sort_Key"/>
        <xsl:apply-templates select="."/>
    </xsl:for-each>

  </table>
  <script src="parse_records.js"/> <!-- Goes through records and makes them nice. Would be nice to do this on change or something associated with the table tag. -->
  </body>
  </html>
</xsl:template>

<xsl:template match="rec">
  <tr class="rec">
    <td class="Code"></td>
    <td class="CRN"></td>
    <td class="Course Title"><xsl:value-of select="Class_Name"/></td>
    <td class="Days"><xsl:value-of select="Crn_Day_Time"/></td>
    <td class="Time"></td>
    <td class="Section"></td>
    <td class="Seats Left"><xsl:value-of select="Seats_Consumed"/>/<xsl:value-of select="Total_Seats"/></td>
  </tr>
</xsl:template>

</xsl:stylesheet>