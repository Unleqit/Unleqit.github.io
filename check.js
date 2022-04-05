const response = [{text: "Access allowed", allowed: 'false'}];

function validate()
{
    if (navigator.userAgent.includes('unlqvt Client'))
    {
        response[0].allowed = 'true'; 
    }
    else
    {
        response[0].allowed = 'false';
    }
    var data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(response));
    alert(data);
    var dlAnchorElem = document.getElementById("downloadAnchorElem");
    dlAnchorElem.setAttribute("href", data);
    dlAnchorElem.setAttribute("download", "check.json");
    dlAnchorElem.click();

    
}

