xquery version "1.0";

<html>
	<body>
		<h1 align="center"> {doc("USHouseOfReps.xml")//title-info/congress-text} </h1>

		<br />
		<ol>
		{
			for $r in doc("USHouseOfReps.xml")MemberData/members/member
			let $state := $r/member-info/state[@postal-code]
			let $party := $r/member-info/party
			let $name := $r/member-info/official-name
			where $r[not(member-info/footnote)]
			order by $name, $state, $party
			return <li>{data($name)}, {data($party)}-{data($state)}</li>
		}
		</ol>
	</body>
</html>