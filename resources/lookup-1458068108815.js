(function(window, undefined) {
  var dictionary = {
    "67a5a768-897e-433c-a4c5-210b3ce3c9bc": "Geolocation_partner1",
    "a0911298-977b-4115-8e44-e6397536659e": "Matching",
    "1982dcfa-f7de-4388-91c5-372cecb522ce": "Goodbye",
    "70bb128e-46f2-4626-8d71-4815e1caf146": "Loading screen",
    "ff67a622-2319-42ea-9d22-14cbdefec330": "Messages",
    "fa7074f1-4a7d-48c2-94b3-b07dfbc2658a": "User-profile",
    "95adc887-3e85-4566-95d6-d7b6077c8c85": "Log In or Sign Up",
    "8a638ee1-d936-47c6-b4d7-1fa17ca84294": "Home",
    "5f319cdb-d9ee-4bed-a432-e133714032be": "Geolocation_partner2",
    "713e2002-2f76-4524-930b-948aa1d83a7a": "First connection",
    "77a594c9-ff0c-44f5-9f35-f5ec4c638d3b": "Search",
    "26723105-ecf1-44f9-9503-6f2e5f73eb6d": "Template 2",
    "1e8a452c-0c3e-434b-9a69-9f88c989dab1": "Template 1",
    "default": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);