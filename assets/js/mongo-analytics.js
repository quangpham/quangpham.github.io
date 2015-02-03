windows.sendDataToMongolab = function(dbcollection, data) {
    var created_time = new Date();
    data.browser = navigator.userAgent;
    data.created_at = created_time.toString();
    data.timestamp = created_time.getTime();
    data.screen_size = $(window).width().toString() + "x" + $(window).height().toString()

    $.ajax({
        url: "https://api.mongolab.com/api/1/databases/quangpham-com/collections/" + dbcollection + "?apiKey=JDJZ1z9STUdxPyqDqmjVqwsHahD9sAXd",
        data: JSON.stringify(data),
        type: "POST",
        crossDomain : true,
        contentType: "application/json" 
    });
}

window.postAnalytic = function() {
    // behaviour = behaviour || "";
    $.getJSON("http://ip-api.com/json/?callback",function (ipdata) {

        // if (ipdata.query == "88.195.149.153") {
        //     return;
        // }

        window.sendDataToMongolab("website", {url: window.location.href, ip: ipdata} );
    })
}

$(document).ready(function() {
    window.postAnalytic();
});