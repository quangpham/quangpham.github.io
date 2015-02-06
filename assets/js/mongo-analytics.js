var guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + s4() + s4();
  };
})();


window.sendDataToMongolab = function(dbcollection, data) {
    // if (typeof $.cookie('qpa_ipdata') === 'undefined') {
    //     $.getJSON("http://ip-api.com/json/?callback",function (ipdata) {
    //         $.cookie('qpa_ipdata', JSON.stringify(ipdata), { expires: 1 });
    //     }
    //     return;
    // }
    
    data.ip = JSON.parse($.cookie('qpa_ipdata'));
    // if (data.ip.query == "88.195.149.153") { return; }
    if (data.ip.isp == "Tumblr") { return; }

    data.browser = navigator.userAgent;
    if (data.browser == "gosquared-thumbnailer/1.0") { return; }

    data.screen_size = $(window).width().toString() + "x" + $(window).height().toString();
    data.qp_uuid = $.cookie('qpa_uuid');

    var created_time = new Date();
    data.created_at = created_time.toString();
    data.timestamp = created_time.getTime();
    
    
    $.ajax({
        url: "https://api.mongolab.com/api/1/databases/quangpham-com/collections/" + dbcollection + "?apiKey=JDJZ1z9STUdxPyqDqmjVqwsHahD9sAXd",
        data: JSON.stringify(data),
        type: "POST",
        crossDomain : true,
        contentType: "application/json" 
    });
}

window.initializeMongoAnalytic = function(){
    // Init uuid
    if (typeof $.cookie('qpa_uuid') === 'undefined'){
        $.cookie('qpa_uuid', guid(), { expires: 365*24 });
    }

    if (typeof $.cookie('qpa_ipdata') === 'undefined'){
        $.getJSON("http://ip-api.com/json/?callback",function (ipdata) {
            $.cookie('qpa_ipdata', JSON.stringify(ipdata), { expires: 1 });
            window.sendDataToMongolab("website", {url: window.location.href} );
        });
    } else {
        window.sendDataToMongolab("website", {url: window.location.href} );
    }

}

$(document).ready(function() {
    window.initializeMongoAnalytic();
});