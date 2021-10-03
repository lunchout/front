import geoapifyParser from './index'

describe("geoapifyParser", () => {
    const testCases = {
        features: [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        5.040967,
                        47.32049
                    ]
                },
                "properties": {
                    "name": "Place Saint-Fiacre",
                    "street": "Place Saint-Fiacre",
                    "country": "France",
                    "county": "Cote d'Or",
                    "datasource": {
                        "sourcename": "openstreetmap",
                        "attribution": "© OpenStreetMap contributors",
                        "license": "Open Database License",
                        "url": "https://www.openstreetmap.org/copyright"
                    },
                    "country_code": "fr",
                    "postcode": "21000",
                    "state": "Burgundy-Franche-Comte",
                    "district": "Dijon",
                    "city": "Dijon",
                    "lon": 5.040967,
                    "lat": 47.32049,
                    "formatted": "Place Saint-Fiacre, 21000 Dijon, France",
                    "address_line1": "Place Saint-Fiacre",
                    "address_line2": "21000 Dijon, France",
                    "result_type": "street",
                    "rank": {
                        "confidence": 1,
                        "match_type": "full_match"
                    },
                    "place_id": "5166dcd440f329144059f758fad005a94740f00103f9011421f20e00000000c00204920312506c616365205361696e742d466961637265"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.533055,
                        49.218873
                    ]
                },
                "properties": {
                    "name": "Place Saint-Cloud",
                    "street": "Place Saint-Cloud",
                    "country": "France",
                    "county": "Manche",
                    "datasource": {
                        "sourcename": "openstreetmap",
                        "attribution": "© OpenStreetMap contributors",
                        "license": "Open Database License",
                        "url": "https://www.openstreetmap.org/copyright"
                    },
                    "country_code": "fr",
                    "state": "Normandy",
                    "district": "Angoville-Sur-Ay",
                    "city": "Angoville-sur-Ay",
                    "suburb": "Lessay",
                    "lon": -1.533055,
                    "lat": 49.218873,
                    "formatted": "Place Saint-Cloud, Angoville-sur-Ay, France",
                    "address_line1": "Place Saint-Cloud",
                    "address_line2": "Angoville-sur-Ay, France",
                    "result_type": "street",
                    "rank": {
                        "confidence": 1,
                        "match_type": "full_match"
                    },
                    "place_id": "512c82ffad6487f8bf591c7dcc07049c4840f00102f9010d24ab0f00000000c00204920311506c616365205361696e742d436c6f7564"
                },
                "bbox": [
                    -1.5334108,
                    49.2187807,
                    -1.5327,
                    49.2189647
                ]
            }
        ],
        query: {
            "text": "place saint",
            "parsed": {
                "street": "place saint",
                "expected_type": "unknown"
            }
        }
    };

    const parsed = geoapifyParser(testCases);
    
    testCases.features.forEach((testCase, i) => {
        it (`should parse suggestion #${i}'s address`, () => {
            expect(parsed[i].display).toEqual(testCase.properties.formatted);
        });

        it(`should parse suggestion #${i}'s coordinates properly`, () => {
            expect(parsed[i].value.latitude).toEqual(testCase.properties.lat);
            expect(parsed[i].value.longitude).toEqual(testCase.properties.lon);
        });
    })
});