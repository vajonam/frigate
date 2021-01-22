(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),i=(a(0),a(92)),b={id:"api",title:"HTTP API"},l={unversionedId:"usage/api",id:"usage/api",isDocsHomePage:!1,title:"HTTP API",description:"A web server is available on port 5000 with the following endpoints.",source:"@site/docs/usage/api.md",slug:"/usage/api",permalink:"/frigate/usage/api",editUrl:"https://github.com/blakeblackshear/frigate/edit/master/docs/docs/usage/api.md",version:"current",sidebar:"docs",previous:{title:"Web Interface",permalink:"/frigate/usage/web"},next:{title:"MQTT",permalink:"/frigate/usage/mqtt"}},c=[{value:"<code>/api/&lt;camera_name&gt;</code>",id:"apicamera_name",children:[]},{value:"<code>/api/&lt;camera_name&gt;/&lt;object_name&gt;/best.jpg[?h=300&amp;crop=1]</code>",id:"apicamera_nameobject_namebestjpgh300crop1",children:[]},{value:"<code>/api/&lt;camera_name&gt;/latest.jpg[?h=300]</code>",id:"apicamera_namelatestjpgh300",children:[]},{value:"<code>/api/stats</code>",id:"apistats",children:[]},{value:"<code>/api/config</code>",id:"apiconfig",children:[]},{value:"<code>/api/version</code>",id:"apiversion",children:[]},{value:"<code>/api/events</code>",id:"apievents",children:[]},{value:"<code>/api/events/summary</code>",id:"apieventssummary",children:[]},{value:"<code>/api/events/&lt;id&gt;</code>",id:"apieventsid",children:[]},{value:"<code>/api/events/&lt;id&gt;/thumbnail.jpg</code>",id:"apieventsidthumbnailjpg",children:[]},{value:"<code>/api/events/&lt;id&gt;/snapshot.jpg</code>",id:"apieventsidsnapshotjpg",children:[]},{value:"<code>/clips/&lt;camera&gt;-&lt;id&gt;.mp4</code>",id:"clipscamera-idmp4",children:[]},{value:"<code>/clips/&lt;camera&gt;-&lt;id&gt;.jpg</code>",id:"clipscamera-idjpg",children:[]}],p={toc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A web server is available on port 5000 with the following endpoints."),Object(i.b)("h3",{id:"apicamera_name"},Object(i.b)("inlineCode",{parentName:"h3"},"/api/<camera_name>")),Object(i.b)("p",null,"An mjpeg stream for debugging. Keep in mind the mjpeg endpoint is for debugging only and will put additional load on the system when in use."),Object(i.b)("p",null,"Accepts the following query string parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"param"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"fps")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Frame rate")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"h")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Height in pixels")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"bbox")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show bounding boxes for detected objects (0 or 1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"timestamp")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Print the timestamp in the upper left (0 or 1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"zones")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw the zones on the image (0 or 1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mask")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overlay the mask on the image (0 or 1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"motion")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw blue boxes for areas with detected motion (0 or 1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"regions")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw green boxes for areas where object detection was run (0 or 1)")))),Object(i.b)("p",null,"You can access a higher resolution mjpeg stream by appending ",Object(i.b)("inlineCode",{parentName:"p"},"h=height-in-pixels")," to the endpoint. For example ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:5000/back?h=1080"),". You can also increase the FPS by appending ",Object(i.b)("inlineCode",{parentName:"p"},"fps=frame-rate")," to the URL such as ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:5000/back?fps=10")," or both with ",Object(i.b)("inlineCode",{parentName:"p"},"?fps=10&h=1000"),"."),Object(i.b)("h3",{id:"apicamera_nameobject_namebestjpgh300crop1"},Object(i.b)("inlineCode",{parentName:"h3"},"/api/<camera_name>/<object_name>/best.jpg[?h=300&crop=1]")),Object(i.b)("p",null,"The best snapshot for any object type. It is a full resolution image by default."),Object(i.b)("p",null,"Example parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"h=300"),": resizes the image to 300 pixes tall"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"crop=1"),": crops the image to the region of the detection rather than returning the entire image")),Object(i.b)("h3",{id:"apicamera_namelatestjpgh300"},Object(i.b)("inlineCode",{parentName:"h3"},"/api/<camera_name>/latest.jpg[?h=300]")),Object(i.b)("p",null,"The most recent frame that frigate has finished processing. It is a full resolution image by default."),Object(i.b)("p",null,"Accepts the following query string parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"param"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"h")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Height in pixels")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"bbox")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show bounding boxes for detected objects (0 or 1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"timestamp")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Print the timestamp in the upper left (0 or 1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"zones")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw the zones on the image (0 or 1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mask")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overlay the mask on the image (0 or 1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"motion")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw blue boxes for areas with detected motion (0 or 1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"regions")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw green boxes for areas where object detection was run (0 or 1)")))),Object(i.b)("p",null,"Example parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"h=300"),": resizes the image to 300 pixes tall")),Object(i.b)("h3",{id:"apistats"},Object(i.b)("inlineCode",{parentName:"h3"},"/api/stats")),Object(i.b)("p",null,"Contains some granular debug info that can be used for sensors in HomeAssistant."),Object(i.b)("p",null,"Sample response:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  /* Per Camera Stats */\n  "back": {\n    /***************\n     * Frames per second being consumed from your camera. If this is higher\n     * than it is supposed to be, you should set -r FPS in your input_args.\n     * camera_fps = process_fps + skipped_fps\n     ***************/\n    "camera_fps": 5.0,\n    /***************\n     * Number of times detection is run per second. This can be higher than\n     * your camera FPS because frigate often looks at the same frame multiple times\n     * or in multiple locations\n     ***************/\n    "detection_fps": 1.5,\n    /***************\n     * PID for the ffmpeg process that consumes this camera\n     ***************/\n    "capture_pid": 27,\n    /***************\n     * PID for the process that runs detection for this camera\n     ***************/\n    "pid": 34,\n    /***************\n     * Frames per second being processed by frigate.\n     ***************/\n    "process_fps": 5.1,\n    /***************\n     * Frames per second skip for processing by frigate.\n     ***************/\n    "skipped_fps": 0.0\n  },\n  /***************\n   * Sum of detection_fps across all cameras and detectors.\n   * This should be the sum of all detection_fps values from cameras.\n   ***************/\n  "detection_fps": 5.0,\n  /* Detectors Stats */\n  "detectors": {\n    "coral": {\n      /***************\n       * Timestamp when object detection started. If this value stays non-zero and constant\n       * for a long time, that means the detection process is stuck.\n       ***************/\n      "detection_start": 0.0,\n      /***************\n       * Time spent running object detection in milliseconds.\n       ***************/\n      "inference_speed": 10.48,\n      /***************\n       * PID for the shared process that runs object detection on the Coral.\n       ***************/\n      "pid": 25321\n    }\n  },\n  "service": {\n    /* Uptime in seconds */\n    "uptime": 10,\n    "version": "0.8.0-8883709"\n  }\n}\n')),Object(i.b)("h3",{id:"apiconfig"},Object(i.b)("inlineCode",{parentName:"h3"},"/api/config")),Object(i.b)("p",null,"A json representation of your configuration"),Object(i.b)("h3",{id:"apiversion"},Object(i.b)("inlineCode",{parentName:"h3"},"/api/version")),Object(i.b)("p",null,"Version info"),Object(i.b)("h3",{id:"apievents"},Object(i.b)("inlineCode",{parentName:"h3"},"/api/events")),Object(i.b)("p",null,"Events from the database. Accepts the following query string parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"param"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"before")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Epoch time")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"after")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Epoch time")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"camera")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Camera name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"label")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Label name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"zone")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Zone name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"limit")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Limit the number of events returned")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"has_snapshot")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filter to events that have snapshots (0 or 1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"has_clip")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filter to events that have clips (0 or 1)")))),Object(i.b)("h3",{id:"apieventssummary"},Object(i.b)("inlineCode",{parentName:"h3"},"/api/events/summary")),Object(i.b)("p",null,"Returns summary data for events in the database. Used by the HomeAssistant integration."),Object(i.b)("h3",{id:"apieventsid"},Object(i.b)("inlineCode",{parentName:"h3"},"/api/events/<id>")),Object(i.b)("p",null,"Returns data for a single event."),Object(i.b)("h3",{id:"apieventsidthumbnailjpg"},Object(i.b)("inlineCode",{parentName:"h3"},"/api/events/<id>/thumbnail.jpg")),Object(i.b)("p",null,"Returns a thumbnail for the event id optimized for notifications. Works while the event is in progress and after completion. Passing ",Object(i.b)("inlineCode",{parentName:"p"},"?format=android")," will convert the thumbnail to 2:1 aspect ratio."),Object(i.b)("h3",{id:"apieventsidsnapshotjpg"},Object(i.b)("inlineCode",{parentName:"h3"},"/api/events/<id>/snapshot.jpg")),Object(i.b)("p",null,"Returns the snapshot image for the event id. Works while the event is in progress and after completion."),Object(i.b)("p",null,"Accepts the following query string parameters, but they are only applied when an event is in progress. After the event is completed, the saved snapshot is returned from disk without modification:\n|param|Type|Description|\n|----|-----|--|\n|",Object(i.b)("inlineCode",{parentName:"p"},"h"),"|int|Height in pixels|\n|",Object(i.b)("inlineCode",{parentName:"p"},"bbox"),"|int|Show bounding boxes for detected objects (0 or 1)|\n|",Object(i.b)("inlineCode",{parentName:"p"},"timestamp"),"|int|Print the timestamp in the upper left (0 or 1)|\n|",Object(i.b)("inlineCode",{parentName:"p"},"crop"),"|int|Crop the snapshot to the  (0 or 1)|"),Object(i.b)("h3",{id:"clipscamera-idmp4"},Object(i.b)("inlineCode",{parentName:"h3"},"/clips/<camera>-<id>.mp4")),Object(i.b)("p",null,"Video clip for the given camera and event id."),Object(i.b)("h3",{id:"clipscamera-idjpg"},Object(i.b)("inlineCode",{parentName:"h3"},"/clips/<camera>-<id>.jpg")),Object(i.b)("p",null,"JPG snapshot for the given camera and event id."))}o.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(a),m=n,j=d["".concat(b,".").concat(m)]||d[m]||s[m]||i;return a?r.a.createElement(j,l(l({ref:t},p),{},{components:a})):r.a.createElement(j,l({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var p=2;p<i;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);