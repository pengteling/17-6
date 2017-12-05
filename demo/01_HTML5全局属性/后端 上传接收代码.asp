<%Response.AddHeader "Access-Control-Allow-Origin","*"%>
<%Response.AddHeader "Access-Control-Allow-Methods","POST"%>
<%Response.AddHeader "Access-Control-Allow-Headers","x-requested-with,content-type"%>

<%
Randomize
filename = "uploads/t"&rnd &"1.jpg"

If request.servervariables("HTTP_REFERER") ="" Then
	'判断来源
End if
Server.ScriptTimeout=3600
i=Request.TotalBytes
r=1024*1024*3  '限制文件大小'
If i<r Then r=i
Set S=Server.CreateObject("Adodb.Stream")
S.Type=1
S.Mode=3
S.Open
While i>0
S.Write Request.BinaryRead(r)
i=i-r
Wend
S.Position=0
S.SaveToFile server.MapPath(filename),2
S.Close
%>