window.onload=getAnaliza;

function getAnaliza(){
    document.getElementById("js-map").innerHTML="";
    document.getElementById("container2").style.display="none";
    document.getElementById("container1").style.display="inline";
    layerlist = [ new ol.layer.Tile({
        source: new ol.source.OSM()
    })];
    const map = new ol.Map({
        view: new ol.View({
            center: [1914866.827507854,	5584804.9745491035],
            zoom: 7
        }),
        layers: layerlist,
        target: 'js-map'

    })

    var koordinate = [];  
    var uslov = false;
    


    map.on('click', function(e){
        koordinate.push(e.coordinate);
        if(koordinate.length == 1){
            let row = document.getElementById('tacka').insertRow(2);
            row.insertCell(0).innerHTML=koordinate[0][0];
            row.insertCell(1).innerHTML=koordinate[0][1];
            

        }
        else{
            let row = document.getElementById('poligon').insertRow(koordinate.length);
            row.insertCell(0).innerHTML=koordinate[koordinate.length-1][0];
            row.insertCell(1).innerHTML=koordinate[koordinate.length-1][1];
        }
   
    

    })
  
   
    document.getElementById('provjera').onclick = function(){
        let point = new ol.geom.Point(koordinate[0]);
        koordinate.push(koordinate[1]);
        let lin_ring = koordinate.slice(1);
        
        let polygon = new ol.geom.Polygon([lin_ring]);

        uslov = polygon.intersectsCoordinate(koordinate[0]);
        
        
        let poli="";
        for (i=0; i<lin_ring.length-1; i++){
            poli+="["+lin_ring[i]+"],";
            }
        poli+="["+lin_ring[lin_ring.length-1]+"]";
    
    
        if(koordinate.length>4){
                var row = document.getElementById("rezultat").insertRow(1);
                row.insertCell(0).innerHTML = uslov;
                row.insertCell(1).innerHTML ="["+ koordinate[0]+"]";
                row.insertCell(2).innerHTML ="[ [ "+ poli+" ] ]";
            }
        


        koordinate=[];
        document.getElementById("tacka").deleteRow(2);
        for(i=0; i<lin_ring.length-1; i++ ){
            document.getElementById("poligon").deleteRow(2);
        }

    }



}


function getPregled(){
    document.getElementById("container1").style.display="none";
    document.getElementById("container2").style.display="inline";
}