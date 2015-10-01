// $.ajax( { url: 'https://api.mongolab.com/api/1/databases/quangpham-com/collections/website/560a662ce4b05eb6ff4e9858?apiKey=JDJZ1z9STUdxPyqDqmjVqwsHahD9sAXd',crossDomain : true,type: "DELETE",contentType: "application/json" } );

function $_GET_PARAM(param) {
    var vars = {};
    window.location.href.replace( 
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;    
    }
    return vars;
}

var guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + "-" +s4() + "-" +s4() + "-" +s4() + "-" +s4() + "-" + (new Date()).getTime().toString();
  };
})();

window.sendDataToMongolab = function(dbcollection, data) {
    if (window.location.href.indexOf("http://localhost:4000/") > -1) { return; }

    data.url = window.location.pathname;
    
    data.ip = JSON.parse(Cookies('qpa_ipdata'));
    if (data.ip.isp == "Tumblr") { return; }
    if (data.ip.isp == "Googlebot") { return; }
    if (data.ip.isp == "Digital Ocean") { return; }

    data.browser = navigator.userAgent;
    if (data.browser == "gosquared-thumbnailer/1.0") { return; }

    data.screen_size = $(window).width().toString() + "x" + $(window).height().toString();
    data.qp_uuid = Cookies('qpa_uuid');
    data.qp_user_name = Cookies('qpa_user_name');
    
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
    if ($_GET_PARAM("_su")) {
        Cookies.set('qpa_user_name', $_GET_PARAM("_su"), { expires: 365*24 });
    }

    if (typeof Cookies('qpa_uuid') === 'undefined'){
        Cookies.set('qpa_uuid', guid(), { expires: 365*24 });
    }

    if (typeof Cookies('qpa_ipdata') === 'undefined'){
        $.getJSON("http://ip-api.com/json/?callback",function (ipdata) {
            Cookies.set('qpa_ipdata', JSON.stringify(ipdata), { expires: 1 });
            window.sendDataToMongolab("website", {} );
        });
    } else {
        window.sendDataToMongolab("website", {} );
    }

}

$(document).ready(function() {
    window.initializeMongoAnalytic();

    $('a').click(function(){
        if ($(this).attr('target') == '_blank') {
            window.sendDataToMongolab("website", {ext_url: $(this).attr('href')});
        }
        return true;
    });

});