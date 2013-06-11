var testData = {
    'providers': [{
        'name': '9292',
        'routes': [{
            "arrivalDate": new Date("2013-05-28 15:19:00").getTime() / 1000,
            "departureDate": new Date("2013-05-28 11:41:00").getTime() / 1000,
            "legs": [{
                    "departure": {
                        "date": new Date("2013-05-28 11:41:00").getTime() / 1000,
                        "name": null,
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 11:43:00").getTime() / 1000,
                        "name": "Rozenrust",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 11:43:00").getTime() / 1000,
                        "name": "Rozenrust",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 11:56:00").getTime() / 1000,
                        "name": "Station Voorburg",
                    },
                    "mode": "bus",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 11:56:00").getTime() / 1000,
                        "name": "Station Voorburg",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:00:00").getTime() / 1000,
                        "name": "Treinstation Voorburg",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:00:00").getTime() / 1000,
                        "name": "Treinstation Voorburg",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:21:00").getTime() / 1000,
                        "name": "Treinstation Gouda",
                    },
                    "mode": "train",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:24:00").getTime() / 1000,
                        "name": "Treinstation Gouda",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 14:44:00").getTime() / 1000,
                        "name": "Treinstation Groningen",
                    },
                    "mode": "train",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 14:44:00").getTime() / 1000,
                        "name": "Treinstation Groningen",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 14:52:00").getTime() / 1000,
                        "name": "Centraal station",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 14:52:00").getTime() / 1000,
                        "name": "Centraal station",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:05:00").getTime() / 1000,
                        "name": "Oliemuldersbrug",
                    },
                    "mode": "bus",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 15:05:00").getTime() / 1000,
                        "name": "Oliemuldersbrug",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:19:00").getTime() / 1000,
                        "name": null,
                    },
                    "mode": "foot",
                }
            ],
        }, {
            "arrivalDate": new Date("2013-05-28 15:49:00").getTime() / 1000,
            "departureDate": new Date("2013-05-28 12:10:00").getTime() / 1000,
            "legs": [{
                    "departure": {
                        "date": new Date("2013-05-28 12:10:00").getTime() / 1000,
                        "name": null,
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:12:00").getTime() / 1000,
                        "name": "Rozenrust",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:12:00").getTime() / 1000,
                        "name": "Rozenrust",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:43:00").getTime() / 1000,
                        "name": "Centraal Station",
                    },
                    "mode": "bus",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:43:00").getTime() / 1000,
                        "name": "Centraal Station",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:47:00").getTime() / 1000,
                        "name": "Treinstation Centraal",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:47:00").getTime() / 1000,
                        "name": "Treinstation Centraal",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:14:00").getTime() / 1000,
                        "name": "Treinstation Groningen",
                    },
                    "mode": "train",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 15:14:00").getTime() / 1000,
                        "name": "Treinstation Groningen",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:22:00").getTime() / 1000,
                        "name": "Centraal station",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 15:22:00").getTime() / 1000,
                        "name": "Centraal station"
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:35:00").getTime() / 1000,
                        "name": "Oliemuldersbrug",
                    },
                    "mode": "bus",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 15:35:00").getTime() / 1000,
                        "name": "Oliemuldersbrug",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:49:00").getTime() / 1000,
                        "name": null,
                    },
                    "mode": "foot"
                }
            ]
        }
    ]
},
{
        'name': 'ns',
        'routes': [{
            "arrivalDate": new Date("2013-05-28 15:22:00").getTime() / 1000,
            "departureDate": new Date("2013-05-28 11:20:00").getTime() / 1000,
            "legs": [{
                    "departure": {
                        "date": new Date("2013-05-28 11:41:00").getTime() / 1000,
                        "name": null,
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 11:43:00").getTime() / 1000,
                        "name": "Rozenrust",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 11:43:00").getTime() / 1000,
                        "name": "Rozenrust",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 11:56:00").getTime() / 1000,
                        "name": "Station Voorburg",
                    },
                    "mode": "bus",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 11:56:00").getTime() / 1000,
                        "name": "Station Voorburg",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:00:00").getTime() / 1000,
                        "name": "Treinstation Voorburg",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:00:00").getTime() / 1000,
                        "name": "Treinstation Voorburg",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:21:00").getTime() / 1000,
                        "name": "Treinstation Gouda",
                    },
                    "mode": "train",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:24:00").getTime() / 1000,
                        "name": "Treinstation Gouda",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 14:44:00").getTime() / 1000,
                        "name": "Treinstation Groningen",
                    },
                    "mode": "train",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 14:44:00").getTime() / 1000,
                        "name": "Treinstation Groningen",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 14:52:00").getTime() / 1000,
                        "name": "Centraal station",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 14:52:00").getTime() / 1000,
                        "name": "Centraal station",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:05:00").getTime() / 1000,
                        "name": "Oliemuldersbrug",
                    },
                    "mode": "bus",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 15:05:00").getTime() / 1000,
                        "name": "Oliemuldersbrug",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:19:00").getTime() / 1000,
                        "name": null,
                    },
                    "mode": "foot",
                }
            ],
        }, {
            "arrivalDate": new Date("2013-05-28 15:49:00").getTime() / 1000,
            "departureDate": new Date("2013-05-28 12:10:00").getTime() / 1000,
            "legs": [{
                    "departure": {
                        "date": new Date("2013-05-28 12:10:00").getTime() / 1000,
                        "name": null,
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:12:00").getTime() / 1000,
                        "name": "Rozenrust",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:12:00").getTime() / 1000,
                        "name": "Rozenrust",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:43:00").getTime() / 1000,
                        "name": "Centraal Station",
                    },
                    "mode": "bus",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:43:00").getTime() / 1000,
                        "name": "Centraal Station",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:47:00").getTime() / 1000,
                        "name": "Treinstation Centraal",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:47:00").getTime() / 1000,
                        "name": "Treinstation Centraal",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:14:00").getTime() / 1000,
                        "name": "Treinstation Groningen",
                    },
                    "mode": "train",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 15:14:00").getTime() / 1000,
                        "name": "Treinstation Groningen",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:22:00").getTime() / 1000,
                        "name": "Centraal station",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 15:22:00").getTime() / 1000,
                        "name": "Centraal station"
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:35:00").getTime() / 1000,
                        "name": "Oliemuldersbrug",
                    },
                    "mode": "bus",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 15:35:00").getTime() / 1000,
                        "name": "Oliemuldersbrug",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:49:00").getTime() / 1000,
                        "name": null,
                    },
                    "mode": "foot"
                }
            ]
        }
    ]
},
{
        'name': 'otp',
        'routes': [{
            "arrivalDate": new Date("2013-05-28 15:19:00").getTime() / 1000,
            "departureDate": new Date("2013-05-28 11:41:00").getTime() / 1000,
            "legs": [{
                    "departure": {
                        "date": new Date("2013-05-28 11:41:00").getTime() / 1000,
                        "name": null,
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 11:43:00").getTime() / 1000,
                        "name": "Rozenrust",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 11:43:00").getTime() / 1000,
                        "name": "Rozenrust",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 11:56:00").getTime() / 1000,
                        "name": "Station Voorburg",
                    },
                    "mode": "bus",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 11:56:00").getTime() / 1000,
                        "name": "Station Voorburg",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:00:00").getTime() / 1000,
                        "name": "Treinstation Voorburg",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:00:00").getTime() / 1000,
                        "name": "Treinstation Voorburg",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:21:00").getTime() / 1000,
                        "name": "Treinstation Gouda",
                    },
                    "mode": "train",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:24:00").getTime() / 1000,
                        "name": "Treinstation Gouda",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 14:44:00").getTime() / 1000,
                        "name": "Treinstation Groningen",
                    },
                    "mode": "train",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 14:44:00").getTime() / 1000,
                        "name": "Treinstation Groningen",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 14:52:00").getTime() / 1000,
                        "name": "Centraal station",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 14:52:00").getTime() / 1000,
                        "name": "Centraal station",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:05:00").getTime() / 1000,
                        "name": "Oliemuldersbrug",
                    },
                    "mode": "bus",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 15:05:00").getTime() / 1000,
                        "name": "Oliemuldersbrug",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:19:00").getTime() / 1000,
                        "name": null,
                    },
                    "mode": "foot",
                }
            ],
        }, {
            "arrivalDate": new Date("2013-05-28 15:49:00").getTime() / 1000,
            "departureDate": new Date("2013-05-28 12:10:00").getTime() / 1000,
            "legs": [{
                    "departure": {
                        "date": new Date("2013-05-28 12:10:00").getTime() / 1000,
                        "name": null,
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:12:00").getTime() / 1000,
                        "name": "Rozenrust",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:12:00").getTime() / 1000,
                        "name": "Rozenrust",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:43:00").getTime() / 1000,
                        "name": "Centraal Station",
                    },
                    "mode": "bus",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:43:00").getTime() / 1000,
                        "name": "Centraal Station",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 12:47:00").getTime() / 1000,
                        "name": "Treinstation Centraal",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 12:47:00").getTime() / 1000,
                        "name": "Treinstation Centraal",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:14:00").getTime() / 1000,
                        "name": "Treinstation Groningen",
                    },
                    "mode": "train",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 15:14:00").getTime() / 1000,
                        "name": "Treinstation Groningen",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:22:00").getTime() / 1000,
                        "name": "Centraal station",
                    },
                    "mode": "foot",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 15:22:00").getTime() / 1000,
                        "name": "Centraal station"
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:35:00").getTime() / 1000,
                        "name": "Oliemuldersbrug",
                    },
                    "mode": "bus",
                }, {
                    "departure": {
                        "date": new Date("2013-05-28 15:35:00").getTime() / 1000,
                        "name": "Oliemuldersbrug",
                    },
                    "arrival": {
                        "date": new Date("2013-05-28 15:49:00").getTime() / 1000,
                        "name": null,
                    },
                    "mode": "foot"
                }
            ]
        }
    ]
}
]};
