var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_vatakara_1 = new ol.format.GeoJSON();
var features_vatakara_1 = format_vatakara_1.readFeatures(json_vatakara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vatakara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vatakara_1.addFeatures(features_vatakara_1);
var lyr_vatakara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vatakara_1, 
                style: style_vatakara_1,
                popuplayertitle: "vatakara",
                interactive: true,
                title: '<img src="styles/legend/vatakara_1.png" /> vatakara'
            });
var format_geomorphology2_2 = new ol.format.GeoJSON();
var features_geomorphology2_2 = format_geomorphology2_2.readFeatures(json_geomorphology2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphology2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphology2_2.addFeatures(features_geomorphology2_2);
var lyr_geomorphology2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphology2_2, 
                style: style_geomorphology2_2,
                popuplayertitle: "geomorphology2",
                interactive: true,
    title: 'geomorphology2<br />\
    <img src="styles/legend/geomorphology2_2_0.png" /> Coastal Plain<br />\
    <img src="styles/legend/geomorphology2_2_1.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/geomorphology2_2_2.png" /> Valley Fill<br />\
    <img src="styles/legend/geomorphology2_2_3.png" /> Water Body<br />'
        });
var format_junctions1_3 = new ol.format.GeoJSON();
var features_junctions1_3 = format_junctions1_3.readFeatures(json_junctions1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_junctions1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_junctions1_3.addFeatures(features_junctions1_3);
var lyr_junctions1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_junctions1_3, 
                style: style_junctions1_3,
                popuplayertitle: "junctions1",
                interactive: true,
                title: '<img src="styles/legend/junctions1_3.png" /> junctions1'
            });
var format_railways_4 = new ol.format.GeoJSON();
var features_railways_4 = format_railways_4.readFeatures(json_railways_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railways_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railways_4.addFeatures(features_railways_4);
var lyr_railways_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railways_4, 
                style: style_railways_4,
                popuplayertitle: "railways",
                interactive: true,
                title: '<img src="styles/legend/railways_4.png" /> railways'
            });
var format_hospitals_5 = new ol.format.GeoJSON();
var features_hospitals_5 = format_hospitals_5.readFeatures(json_hospitals_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospitals_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospitals_5.addFeatures(features_hospitals_5);
var lyr_hospitals_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hospitals_5, 
                style: style_hospitals_5,
                popuplayertitle: "hospitals",
                interactive: true,
                title: '<img src="styles/legend/hospitals_5.png" /> hospitals'
            });
var format_roads_6 = new ol.format.GeoJSON();
var features_roads_6 = format_roads_6.readFeatures(json_roads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_6.addFeatures(features_roads_6);
var lyr_roads_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_6, 
                style: style_roads_6,
                popuplayertitle: "roads",
                interactive: true,
    title: 'roads<br />\
    <img src="styles/legend/roads_6_0.png" /> BOUNDARY<br />\
    <img src="styles/legend/roads_6_1.png" /> DISTRICT ROAD<br />\
    <img src="styles/legend/roads_6_2.png" /> NATIONAL HIGHWAY<br />\
    <img src="styles/legend/roads_6_3.png" /> VILLAGE ROAD<br />'
        });
var format_drinage_7 = new ol.format.GeoJSON();
var features_drinage_7 = format_drinage_7.readFeatures(json_drinage_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drinage_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drinage_7.addFeatures(features_drinage_7);
var lyr_drinage_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drinage_7, 
                style: style_drinage_7,
                popuplayertitle: "drinage",
                interactive: true,
    title: 'drinage<br />\
    <img src="styles/legend/drinage_7_0.png" /> Main River<br />\
    <img src="styles/legend/drinage_7_1.png" /> Oder 1<br />\
    <img src="styles/legend/drinage_7_2.png" /> Oder 2<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_vatakara_1.setVisible(true);lyr_geomorphology2_2.setVisible(true);lyr_junctions1_3.setVisible(true);lyr_railways_4.setVisible(true);lyr_hospitals_5.setVisible(true);lyr_roads_6.setVisible(true);lyr_drinage_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_vatakara_1,lyr_geomorphology2_2,lyr_junctions1_3,lyr_railways_4,lyr_hospitals_5,lyr_roads_6,lyr_drinage_7];
lyr_vatakara_1.set('fieldAliases', {'admin_leve': 'admin_leve', 'boundary': 'boundary', 'local_auth': 'local_auth', 'name': 'name', 'name_ml': 'name_ml', 'type': 'type', 'wikidata': 'wikidata', });
lyr_geomorphology2_2.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_junctions1_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Jn_Name': 'Jn_Name', 'District': 'District', 'Name': 'Name', });
lyr_railways_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_hospitals_5.set('fieldAliases', {'id': 'id', 'Hospitals': 'Hospitals', });
lyr_roads_6.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Length': 'Length', });
lyr_drinage_7.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', });
lyr_vatakara_1.set('fieldImages', {'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'local_auth': 'TextEdit', 'name': 'TextEdit', 'name_ml': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_geomorphology2_2.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_junctions1_3.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Jn_Name': 'TextEdit', 'District': 'TextEdit', 'Name': 'TextEdit', });
lyr_railways_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'ExternalResource', });
lyr_hospitals_5.set('fieldImages', {'id': 'TextEdit', 'Hospitals': 'ExternalResource', });
lyr_roads_6.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_drinage_7.set('fieldImages', {'fid': 'TextEdit', 'ORDER1': 'Range', });
lyr_vatakara_1.set('fieldLabels', {'admin_leve': 'no label', 'boundary': 'no label', 'local_auth': 'no label', 'name': 'no label', 'name_ml': 'no label', 'type': 'no label', 'wikidata': 'no label', });
lyr_geomorphology2_2.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_junctions1_3.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Jn_Name': 'no label', 'District': 'no label', 'Name': 'no label', });
lyr_railways_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_hospitals_5.set('fieldLabels', {'id': 'no label', 'Hospitals': 'no label', });
lyr_roads_6.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'Length': 'no label', });
lyr_drinage_7.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', });
lyr_drinage_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});