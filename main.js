// The config is read from config.js wich is not added for security reasons.
// var config = {
//     height: 400, // Height of the relative route div
//     base_url: 'URL HERE'
// };


function renderProvider (provider) {
    var absoluteRouteDiv = $('.absolute-routes');

    var html = '<div class="provider">' +
        '<h2>' + provider.name + '</h2>';

        provider.routes.forEach(function (route) {
            html += renderRoute(route);
        });

    html += '</div>';
    absoluteRouteDiv.append($(html));
}
function renderRoute (route) {
    var html = '<div class="route">';
        route.legs.forEach(function (leg) {
            html += renderLeg(leg);
        });
    html += '</div>';
    return html;
}

function renderLeg (leg) {
    var factor = 4; // 1min === 4px
    var height = (((leg.arrival.date * 1000) - (leg.departure.date * 1000) ) / 60 / 1000) * factor;
    var departure = new Date(leg.departure.date * 1000);
    var arrival = new Date(leg.arrival.date * 1000);
    var html = '<div class="leg" style="height: ' + height + 'px;">';
        html += '<span>' + departure.getHours() + ':' + departure.getMinutes() + ' ' + (leg.departure.name ? leg.departure.name : '') + '</span>';
        html += '<br/>';
        html += '<span>' + arrival.getHours() + ':' + arrival.getMinutes() + ' ' + (leg.arrival.name ? leg.arrival.name : '') + '</span>';
    html += '</div>';

    return html;
}

function renderRelative(providers) {
    var start = 2272147200000; // If we pass 2042 we should find a better solution ;-)
    var end = 0;

    providers.forEach(function (provider) {
        provider.routes.forEach(function (route) {
            var routeStart = route.legs[0].departure.date * 1000;
            var routeEnd = route.legs[route.legs.length - 1].arrival.date * 1000;
            if (routeStart < start) {
                start = routeStart;
            }
            if (routeEnd > end) {
                end = routeEnd;
            }
        });
    });
    var pxPerMs = config.height / (end - start);

    var html = '';
    providers.forEach(function (provider) {
        provider.routes.forEach(function (route) {
            var routeStart = route.legs[0].departure.date * 1000;
            var routeEnd = route.legs[route.legs.length - 1].arrival.date * 1000;

            var margin = (routeStart - start) * pxPerMs;
            var length = (routeEnd - routeStart) * pxPerMs;
            html += '<div class="column">';
                html += '<div class="route provider-' +  provider.name.toLowerCase() + '" style="margin-top: ' + margin + 'px; height: ' + length + 'px;"></div>';
            html += '</div>';
        });
    });
    $('.relative-routes').append(html);
}

function renderResult (providers) {
    $('.relative-routes').html('');
    $('.absolute-routes').html('');

    renderRelative(providers);

    providers.forEach(function (provider) {
        renderProvider(provider);
    });
}

function getRoutes (options) {
    var params = $.extend({
        'date': new Date().getTime(),
        'timeType': 'departure',
        'modes': 'bus,train,tram,metro,ferry,car,bike,foot'
    }, options);
    var url = config.base_url + options.from + '/' + options.to;
    $.ajax({
        'url': url,
        'type': 'POST',
        'data': params,
        'success': function (data) {
            console.info('XJAX Response data', data);
            renderResult(data);
        },
        'error': function () {
            console.warn('Something when requesting the API please try again.');
        }
    });
}




$(document).ready(function($) {
    $( ".datepicker" ).datepicker({
        'dateFormat': "yy-mm-dd"
    });

    // Render test data.
    // renderResult(testData.providers);

    var fromAutocomplete = new google.maps.places.Autocomplete($('input[name="from"]').get(0));
    var toAutocomplete = new google.maps.places.Autocomplete($('input[name="to"]').get(0));

    $('form').on('submit', function (e) {
        e.preventDefault();
        var from = null,
            to = null,
            datetime = null,
            date = $('input[name="date"]').val(),
            time = $('input[name="time"]').val();

        try {
            from = fromAutocomplete.getPlace().geometry.location.lat() + ',' + fromAutocomplete.getPlace().geometry.location.lng();
        } catch (err) {
            from = $('input[name="from"]').val(),
            console.warn('No google autocomplete found for from fallback to the input value');
        }

        try {
            to = toAutocomplete.getPlace().geometry.location.lat() + ',' + toAutocomplete.getPlace().geometry.location.lng();
        } catch (err) {
            to = $('input[name="to"]').val(),
            console.warn('No google autocomplete found for to fallback to the input value');
        }


        var modes = [];
        $('input[type="checkbox"]:checked').each(function () {
            modes.push($(this).attr('name'));
        });

        try {
            datetime = new Date(date + ' ' + time).getTime();
        } catch (err) {
            console.warn('Error parsing date');
        }

        if (from && to && datetime) {
            getRoutes({
                'from': from,
                'to': to,
                'date': datetime,
                'modes': modes.join(',')
            });
        } else {
            console.warn('One of the fields are not valid! From:', from, ' To:', to, ' Datetime:', datetime);
        }
        return false;
    });
});