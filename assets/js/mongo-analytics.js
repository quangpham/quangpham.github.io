window.postAnalytic = function (behaviour)  {
    behaviour = behaviour || "";
    $.getJSON("http://ip-api.com/json/?callback",function (ipdata) {

        if (ipdata.query == "88.195.149.153") {
            return;
        }
        var analyticdata = {url: window.location.href, ip: ipdata, browser: navigator.userAgent, created_at: Date.now()}

        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/quangpham-com/collections/website?apiKey=JDJZ1z9STUdxPyqDqmjVqwsHahD9sAXd",
            data: JSON.stringify(analyticdata),
            type: "POST",
            crossDomain : true,
            contentType: "application/json" 
        });
    })
}

$(document).ready(function() {
    window.postAnalytic();
});