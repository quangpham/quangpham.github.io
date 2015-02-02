window.postAnalytic = function (behaviour)  {
    behaviour = behaviour || "";
    $.getJSON("http://ip-api.com/json/?callback",function (ipdata) {
        var analyticdata = {url: window.location.href, ip: ipdata}

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