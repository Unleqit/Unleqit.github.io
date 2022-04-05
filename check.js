const response = [{text: "Access", allowed: 'false'}];

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
    var dlAnchorElem = document.getElementById("downloadAnchorElem");
    dlAnchorElem.setAttribute("href", data);
    dlAnchorElem.setAttribute("download", "verify.json");
    dlAnchorElem.click();

    
}

