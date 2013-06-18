// The config is read from config.js wich is not added for security reasons.
// var config = {
//     height: 400, // Height of the relative route div
//     base_url: 'URL HERE'
// };
function getURLParameters () {
    var hash_url = window.location.hash;
    var obj = {};
    var parameters = null;

    if ( hash_url.length > 1 ) {
        // Chop off the # itself
        hash_url = unescape(hash_url.substring(1, hash_url.length));
        parameters = hash_url.split('&');
    }

    if (parameters) {
        for (var i = 0; i < parameters.length; i++) {
            var splitted = parameters[i].split('=');
            if (splitted.length === 2) {
                if (splitted[1] === 'true') {
                    obj[splitted[0]] = true;
                } else if (splitted[1] === 'false') {
                    obj[splitted[0]] = false;
                // } else if (!isNaN(parseInt(splitted[1], 10))) {
                //     obj[splitted[0]] = parseInt(splitted[1], 10);
                // } else if (!isNaN(parseFloat(splitted[1]))) {
                //     obj[splitted[0]] = parseFloat(splitted[1]);
                } else {
                    obj[splitted[0]] = splitted[1];
                }
            }
        }
    }
    return obj;
}

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
        html += '<span>' + (departure.getHours().toString().length === 2 ? departure.getHours().toString() : '0' + departure.getHours().toString()) + ':' + (departure.getMinutes().toString().length === 2 ? departure.getMinutes().toString() : '0' + departure.getMinutes().toString()) + ' ' + (leg.departure.name ? leg.departure.name : '') + '</span>';
        html += '<br/>';
        html += '<span>' + (arrival.getHours().toString().length === 2 ? arrival.getHours().toString() : '0' + arrival.getHours().toString()) + ':' + (arrival.getMinutes().toString().length === 2 ? arrival.getMinutes().toString() : '0' + arrival.getMinutes().toString()) + ' ' + (leg.arrival.name ? leg.arrival.name : '') + '</span>';
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
        'date': new Date().getTime() / 1000, // To unix TS
        'timeType': 'departure',
        'modes': 'bus,train,tram,metro,ferry,car,bike,foot'
    }, options);
    var url = config.base_url;
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
    // Load values:
    var options = $.extend({
        'from': null,
        'to': null,
        'arriveBy': true,
        'startDate': new Date(),
        'modes': 'bus,train,tram,metro,ferry,car,bike,foot'
    }, getURLParameters());

    var datePicker = $( ".datepicker" ).datepicker({
        'dateFormat': "yy-mm-dd",
        'defaultDate': new Date()
    });
    $( ".datepicker" ).datepicker('setDate', options.startDate);
    $('input[name="time"]').val((options.startDate.getHours().toString().length === 2 ? options.startDate.getHours().toString() : '0' + options.startDate.getHours().toString()) + ':' + (options.startDate.getMinutes().toString().length === 2 ? options.startDate.getMinutes().toString() : '0' + options.startDate.getMinutes().toString()));

    if (options.from) {
        $('input[name="from"]').val(options.from);
    }
    if (options.to) {
        $('input[name="to"]').val(options.to);
    }
    if (options.modes) {
        var splittedModes = options.modes.split(',');
        $('.form-row.modes input[type="checkbox"]').each(function () {
            if (splittedModes.indexOf($(this).attr('name')) === -1) {
                $(this).attr('checked', false);
            }
        });
    }

    // Load google auto completes
    var fromAutocomplete = new google.maps.places.Autocomplete($('input[name="from"]').get(0));
    var toAutocomplete = new google.maps.places.Autocomplete($('input[name="to"]').get(0));

    // Render test data.
    // renderResult(testData.providers);

    // Bind form submit
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
            if (date && time) {
                datetime = Math.round(new Date(date + ' ' + time).getTime() / 1000); // To unix TS
            } else {
                datetime = Math.round(new Date().getTime() / 1000); // To unix TS                
            }
        } catch (err) {
            console.warn('Error parsing date');
        }

        if (from && to && datetime) {
            var requestOptions = {
                'from': from,
                'to': to,
                'date': datetime,
                'modes': modes.join(',')
            };

            window.location.hash = $.param(requestOptions);

            getRoutes(requestOptions);
        } else {
            console.warn('One of the fields are not valid! From:', from, ' To:', to, ' Datetime:', datetime);
        }
        return false;
    });

    if (options.from && options.to) {
        $('form').trigger('submit');
    }
});