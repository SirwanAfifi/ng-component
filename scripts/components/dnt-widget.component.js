(function () {
    
    "use strict";
    
    var app = angular.module("DNT");
    
    function DntArchiveController() {
      var model = this;
      
      model.panel = {
          title: "Panel Title",
          items: [
              {
                  title: "Dotnettips",
                  url: "http://www.dotnettips.info"
              },
              {
                  title: "Google",
                  url: "http://www.google.con"
              },
              {
                  title: "Yahoo",
                  url: "http://www.yahoo.con"
              }
          ]
      };  
    };
    
    app.component("dntWidget", {
        templateUrl: '/scripts/components/dnt-widget.component.html',
        controllerAs: "model",
        controller: DntArchiveController
    });
} ());