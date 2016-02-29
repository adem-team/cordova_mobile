myAppModule.controller("SalesMapController", ["$scope", "$location","$http", "authService", "auth","$window","NgMap","LocationService","apiService","ngToast", 
function ($scope, $location, $http, authService, auth,$window,NgMap,LocationService,apiService,ngToast) 
{
    $scope.zoomvalue = 17;
    $scope.loading  = true;
    var geocoder = new google.maps.Geocoder;
    LocationService.GetLocation().then(function(data)
    {
        $scope.lat = data.latitude;
        $scope.long = data.longitude;
    });

    apiService.listcustomer()
    .then(function (result) 
    {
        $scope.customers = result.Customer;
        $scope.loading  = false;  
    });
    //http://stackoverflow.com/questions/5968559/retrieve-latitude-and-longitude-of-a-draggable-pin-via-google-maps-api-v3
    $scope.doSth = function($event,customer)
    {
        var idcustomer = customer.CUST_KD;
        console.log(customer);
        customer.MAP_LNG = this.getPosition().lng();
        customer.MAP_LAT = this.getPosition().lat();
        customer.NPWP = 200;
        customer.TLP1 = 081260014478;
        customer.TLP2 = 081260014478;
        customer.FAX  = 081260014478;
        
        function serializeObj(obj) 
        {
          var result = [];
          for (var property in obj) result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
          return result.join("&");
        }
        
        var serialized = serializeObj(customer); 

        var config = 
        {
            headers : 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8;'
                
            }
        };
        
        $http.put("http://labtest3-api.int/master/customers/" + idcustomer,serialized,config)
        .success(function(data,status, headers, config) 
        {
            //$location.path("/mapcustomer");

            ngToast.create(
            {
                
                content: 'Data Berhasi Di Ubah',
                
            });

        })
        .error(function (data, status, header, config) 
        {
            // console.log(data);
            // console.log(status);
            // console.log(header);
            // console.log(config);      
        })

        .finally(function()
        {
            $scope.loading = false;
        });
        // geocoder.geocode(
        // {
        //     'location': this.getPosition()
        // }, 
        // function(results, status) 
        // {
        //     console.log(results);
        //     if (status === google.maps.GeocoderStatus.OK) 
        //     {
        //           if (results[1]) 
        //           {
        //             console.log(results[2]);
        //             console.log(this.getPosition);
        //           } 
        //           else 
        //           {
        //             window.alert('No results found');
        //           }
        //     } 
        //     else 
        //     {
        //       window.alert('Geocoder failed due to: ' + status);
        //     }
        // });
    }

    $scope.toggleBounce = function() 
    {
      if (this.getAnimation() != null) 
      {
        this.setAnimation(null);    
      } 
      else 
      {
        this.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
}]);



myAppModule.controller("DetailCustomerController", ["$scope", "$location","$http", "authService", "auth","$window","$routeParams","NgMap","LocationService","$cordovaBarcodeScanner","$cordovaCamera","$cordovaCapture","apiService","singleapiService","ngToast","$mdDialog","$filter",
function ($scope, $location, $http, authService, auth,$window,$routeParams,NgMap,LocationService,$cordovaBarcodeScanner,$cordovaCamera,$cordovaCapture,apiService,singleapiService,ngToast,$mdDialog,$filter) 
{
    $scope.loading = true;
    var idsalesman = auth.id;
    var idcustomer = $routeParams.idcustomer;
    $scope.zoomvalue = 17;
    var geocoder = new google.maps.Geocoder;

    var tanggal = $filter('date')(new Date(),'yyyy-MM-dd');

    LocationService.GetLocation().then(function(data)
    {
        //alert("Cek Location Service");
        $scope.lat = data.latitude;
        $scope.long = data.longitude;
        singleapiService.singlelistcustomer(idcustomer)
        .then(function (result) 
        {
            
            // alert("Cek Single Customer");
            $scope.customer = result;

            $scope.loading  = false;
            var longitude1     = $scope.lat;
            var latitude1      = $scope.long;

            var longitude2     = result.MAP_LAT;
            var latitude2      = result.MAP_LNG;

            //alert(longitude1);
            //alert(longitude2);

            var thetalong      = (longitude1 - longitude2)*(Math.PI / 180); 
            var thetalat       = (latitude1 - latitude2)*(Math.PI / 180);
            //console.log(thetalong);
            //console.log(thetalat);


            var a = 0.5 - Math.cos(thetalat)/2 + Math.cos(latitude1 * Math.PI / 180) * Math.cos(latitude2 * Math.PI / 180) * (1 - Math.cos(thetalong))/2;
            var jarak = 12742 * Math.asin(Math.sqrt(a));

            singleapiService.detailkunjungan(idsalesman,idcustomer,tanggal)
            .then(function (result) 
            {
                if(result.DetailKunjungan)
                {

                }
                else
                {
                    function serializeObj(obj) 
                    {
                      var result = [];
                      for (var property in obj) result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                      return result.join("&");
                    }

                    var detail={};

                    detail.USER_ID=idsalesman;
                    detail.CUST_ID=idcustomer;
                    detail.TGL=tanggal;
                    detail.LAT=$scope.lat;
                    detail.LAG=$scope.long = data.longitude;
                    detail.RADIUS=jarak;
                    detail.CREATE_BY=idsalesman;
                    detail.SCDL_GROUP=$scope.customer.SCDL_GROUP;

                    var serialized = serializeObj(detail); 
                    var config = 
                    {
                        headers : 
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8;'
                            
                        }
                    };
                        

                    //console.log(jarak);
                    //if( 0.03 > jarak )
                  
                        //$http.post("http://api.lukison.int/master/detailkunjungans",serialized,config)
                    $http.post("http://labtest3-api.int/master/detailkunjungans",serialized,config)
                    .success(function(data,status, headers, config) 
                    {
                        //ngToast.create('Detail Telah Berhasil Di Update');
                    })

                    .finally(function()
                    {
                        $scope.loading = false;  
                    });
                 

                    $scope.takeapicture = function()
                    {
                        document.addEventListener("deviceready", function () {

                          var options = {
                            quality: 100,
                            destinationType: Camera.DestinationType.DATA_URL,
                            sourceType: Camera.PictureSourceType.CAMERA,
                            allowEdit: false,
                            encodingType: Camera.EncodingType.JPEG,
                            targetWidth: 100,
                            targetHeight: 100,
                            popoverOptions: CameraPopoverOptions,
                            saveToPhotoAlbum: false,
                            correctOrientation:true
                          };

                          $cordovaCamera.getPicture(options).then(function(imageData) 
                          {
                            var image = document.getElementById('myImage');
                            image.src = "data:image/jpeg;base64," + imageData;
                            var gambar = imageData;
                          }, 
                          function(err) 
                          {
                            // error
                          });

                        }, false);
                    }
                }
            });
        });


    });

    $scope.scanbarcode = function()
    {
        $cordovaBarcodeScanner.scan().then(function(imageData) 
        {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, 
        function(error) 
        {
            console.log("An error happened -> " + error);
        });
    }

    $scope.takeapicture = function()
    {
        document.addEventListener("deviceready", function () {

          var options = {
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation:true
          };

          $cordovaCamera.getPicture(options).then(function(imageData) 
          {
            //var image = document.getElementById('myImage');
            //image.src = "data:image/jpeg;base64," + imageData;
            singleapiService.detailkunjungan(idsalesman,idcustomer,tanggal)
            .then(function (result) 
            {
                idjadwalkunjungan = result.DetailKunjungan[0].ID;
                function serializeObj(obj) 
                {
                  var result = [];
                  for (var property in obj) result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                  return result.join("&");
                }

                var gambarkunjungan={};

                gambarkunjungan.ID_DETAIL=idjadwalkunjungan;
                gambarkunjungan.IMG_NM="gambar start";
                gambarkunjungan.IMG_DECODE=imageData;
                gambarkunjungan.STATUS=1;
                gambarkunjungan.CREATE_BY=idsalesman;

                var serialized = serializeObj(gambarkunjungan); 
                var config = 
                {
                    headers : 
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8;'
                        
                    }
                };
                $http.post("http://labtest3-api.int/master/gambarkunjungans",serialized,config)
                .success(function(data,status, headers, config) 
                {
                    ngToast.create('Gambar Telah Berhasil Di Update');
                })

                .finally(function()
                {
                    $scope.loading = false;  
                });
                
            });
          }, 
          function(err) 
          {
            // error
          });

        }, false);
    }

    
    $scope.endtakeapicture = function()
    {
        document.addEventListener("deviceready", function () {

          var options = {
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation:true
          };

          $cordovaCamera.getPicture(options).then(function(imageData) 
          {
            //var image = document.getElementById('myImage');
            //image.src = "data:image/jpeg;base64," + imageData;
             singleapiService.detailkunjungan(idsalesman,idcustomer,tanggal)
            .then(function (result) 
            {
                idjadwalkunjungan = result.DetailKunjungan[0].ID;
                
                function serializeObj(obj) 
                {
                  var result = [];
                  for (var property in obj) result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                  return result.join("&");
                }

                var gambarkunjungan={};

                gambarkunjungan.ID_DETAIL=idjadwalkunjungan;
                gambarkunjungan.IMG_NM="gambar end";
                gambarkunjungan.IMG_DECODE=imageData;
                gambarkunjungan.STATUS=1;
                gambarkunjungan.CREATE_BY=idsalesman;

                var serialized = serializeObj(gambarkunjungan); 
                var config = 
                {
                    headers : 
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8;'
                        
                    }
                };
                $http.post("http://labtest3-api.int/master/gambarkunjungans",serialized,config)
                .success(function(data,status, headers, config) 
                {
                    ngToast.create('Gambar Telah Berhasil Di Update');
                })

                .finally(function()
                {
                    $scope.loading = false;  
                });
                
            });
          }, 
          function(err) 
          {
            // error
          });

        }, false);
    }
    
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);

myAppModule.controller("EditCustomerPositionController", ["$scope", "$location","$http", "authService", "auth","$window","$routeParams","NgMap","LocationService","$cordovaBarcodeScanner","$cordovaCamera","$cordovaCapture","apiService","singleapiService","ngToast",
function ($scope, $location, $http, authService, auth,$window,$routeParams,NgMap,LocationService,$cordovaBarcodeScanner,$cordovaCamera,$cordovaCapture,apiService,singleapiService,ngToast) 
{

    $scope.loading = true;
    var idcustomer = $routeParams.idcustomer;
    $scope.zoomvalue = 17;
    var geocoder = new google.maps.Geocoder;
    LocationService.GetLocation().then(function(data)
    {
        //alert("Cek Location Service");
        $scope.lat = data.latitude;
        $scope.long = data.longitude;

        singleapiService.singlelistcustomer(idcustomer)
        .then(function (result) 
        {
            
            // alert("Cek Single Customer");
            $scope.customer = result;

            $scope.loading  = false;
            var longitude1     = $scope.lat;
            var latitude1      = $scope.long;

            var longitude2     = result.MAP_LAT;
            var latitude2      = result.MAP_LNG;

            //alert(longitude1);
            //alert(longitude2);

            var thetalong      = (longitude1 - longitude2)*(Math.PI / 180); 
            var thetalat       = (latitude1 - latitude2)*(Math.PI / 180);
            //console.log(thetalong);
            //console.log(thetalat);


            var a = 0.5 - Math.cos(thetalat)/2 + Math.cos(latitude1 * Math.PI / 180) * Math.cos(latitude2 * Math.PI / 180) * (1 - Math.cos(thetalong))/2;
            var jarak = 12742 * Math.asin(Math.sqrt(a));
            //console.log(jarak);
            if( 0.03 > jarak )
            {
                // alert("Dalam Radius");
                // alert(jarak + " km");
            }
            else
            {
                
                $location.path('/agenda');
                //alert("Tidak Dalam Radius. Anda Tidak Bisa Check In Di Tempat Ini");
            }
        });

    });



    $scope.doSth = function($event,customer)
    {
        customer.MAP_LNG = this.getPosition().lng();
        customer.MAP_LAT = this.getPosition().lat();
        customer.NPWP = 200;
        customer.TLP1 = 081260014478;
        customer.TLP2 = 081260014478;
        customer.FAX  = 081260014478;
        function serializeObj(obj) 
        {
          var result = [];
          for (var property in obj) result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
          return result.join("&");
        }
        
        var serialized = serializeObj(customer); 

        var config = 
        {
            headers : 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8;'
                
            }
        };
        
        $http.put("http://labtest3-api.int/master/customers/" + idcustomer,serialized,config)
        .success(function(data,status, headers, config) 
        {
            //$location.path("/mapcustomer");
            ngToast.create({className: 'success',content: 'Data Berhasi Di Ubah'});

        })
        .error(function (data, status, header, config) 
        {
            // console.log(data);
            // console.log(status);
            // console.log(header);
            // console.log(config);      
        })

        .finally(function()
        {
            $scope.loading = false;
        });
        // geocoder.geocode(
        // {
        //     'location': this.getPosition()
        // }, 
        // function(results, status) 
        // {
        //     console.log(results);
        //     if (status === google.maps.GeocoderStatus.OK) 
        //     {
        //           if (results[1]) 
        //           {
        //             console.log(results[2]);
        //             console.log(this.getPosition);
        //           } 
        //           else 
        //           {
        //             window.alert('No results found');
        //           }
        //     } 
        //     else 
        //     {
        //       window.alert('Geocoder failed due to: ' + status);
        //     }
        // });
    }


    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);