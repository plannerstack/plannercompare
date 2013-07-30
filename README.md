plannercompare
==============

A Simple Debug planner to Compare the Transit Planners on the Dutch Market (OpenTripPlanner, 9292, NS).

Deployment
----------

Just serv the html and add a config file with the url of the compare backend.

Example config:

```js
    var config = {
        height: 400, // Height of the relative route div
        base_url: 'URL HERE'
    };
```

Usage
-----

The tool can be used by browsing to the index.html without any parameters or the form can be prefilled by specifying the following parameters:

``from``
    The start location, a string containing ``latitude``,``longitude``.

``to``
    The destination location, using the the same format as ``from``.

``arriveBy``
    A boolean to specify arriveBy default: (true)

``startDate``
    The date and time of departure or arrival in milliseconds default: (now).

``modes``
    A comma seperated list of transit modes to use default: (bus,train,tram,metro,ferry,car,bike,foot)
