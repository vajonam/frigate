(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),b=(a(0),a(92)),i={id:"api",title:"HTTP API"},l={unversionedId:"usage/api",id:"usage/api",isDocsHomePage:!1,title:"HTTP API",description:"A web server is available on port 5000 with the following endpoints.",source:"@site/docs/usage/api.md",slug:"/usage/api",permalink:"/frigate/usage/api",editUrl:"https://github.com/blakeblackshear/frigate/edit/master/docs/docs/usage/api.md",version:"current",sidebar:"docs",previous:{title:"Web Interface",permalink:"/frigate/usage/web"},next:{title:"MQTT",permalink:"/frigate/usage/mqtt"}},c=[{value:"<code>/api/&lt;camera_name&gt;</code>",id:"apicamera_name",children:[]},{value:"<code>/api/&lt;camera_name&gt;/&lt;object_name&gt;/best.jpg[?h=300&amp;crop=1]</code>",id:"apicamera_nameobject_namebestjpgh300crop1",children:[]},{value:"<code>/api/&lt;camera_name&gt;/latest.jpg[?h=300]</code>",id:"apicamera_namelatestjpgh300",children:[]},{value:"<code>/api/stats</code>",id:"apistats",children:[]},{value:"<code>/api/config</code>",id:"apiconfig",children:[]},{value:"<code>/api/version</code>",id:"apiversion",children:[]},{value:"<code>/api/events</code>",id:"apievents",children:[]},{value:"<code>/api/events/summary</code>",id:"apieventssummary",children:[]},{value:"<code>/api/events/&lt;id&gt;</code>",id:"apieventsid",children:[]},{value:"<code>/api/events/&lt;id&gt;/thumbnail.jpg</code>",id:"apieventsidthumbnailjpg",children:[]},{value:"<code>/api/events/&lt;id&gt;/snapshot.jpg</code>",id:"apieventsidsnapshotjpg",children:[]},{value:"<code>/clips/&lt;camera&gt;-&lt;id&gt;.mp4</code>",id:"clipscamera-idmp4",children:[]},{value:"<code>/clips/&lt;camera&gt;-&lt;id&gt;.jpg</code>",id:"clipscamera-idjpg",children:[]}],p={toc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"A web server is available on port 5000 with the following endpoints."),Object(b.b)("h3",{id:"apicamera_name"},Object(b.b)("inlineCode",{parentName:"h3"},"/api/<camera_name>")),Object(b.b)("p",null,"An mjpeg stream for debugging. Keep in mind the mjpeg endpoint is for debugging only and will put additional load on the system when in use."),Object(b.b)("p",null,"Accepts the following query string parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"fps")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Frame rate")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"h")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Height in pixels")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bbox")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show bounding boxes for detected objects (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"timestamp")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Print the timestamp in the upper left (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"zones")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw the zones on the image (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"mask")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overlay the mask on the image (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"motion")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw blue boxes for areas with detected motion (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"regions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw green boxes for areas where object detection was run (0 or 1)")))),Object(b.b)("p",null,"You can access a higher resolution mjpeg stream by appending ",Object(b.b)("inlineCode",{parentName:"p"},"h=height-in-pixels")," to the endpoint. For example ",Object(b.b)("inlineCode",{parentName:"p"},"http://localhost:5000/back?h=1080"),". You can also increase the FPS by appending ",Object(b.b)("inlineCode",{parentName:"p"},"fps=frame-rate")," to the URL such as ",Object(b.b)("inlineCode",{parentName:"p"},"http://localhost:5000/back?fps=10")," or both with ",Object(b.b)("inlineCode",{parentName:"p"},"?fps=10&h=1000"),"."),Object(b.b)("h3",{id:"apicamera_nameobject_namebestjpgh300crop1"},Object(b.b)("inlineCode",{parentName:"h3"},"/api/<camera_name>/<object_name>/best.jpg[?h=300&crop=1]")),Object(b.b)("p",null,"The best snapshot for any object type. It is a full resolution image by default."),Object(b.b)("p",null,"Example parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"h=300"),": resizes the image to 300 pixes tall"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"crop=1"),": crops the image to the region of the detection rather than returning the entire image")),Object(b.b)("h3",{id:"apicamera_namelatestjpgh300"},Object(b.b)("inlineCode",{parentName:"h3"},"/api/<camera_name>/latest.jpg[?h=300]")),Object(b.b)("p",null,"The most recent frame that frigate has finished processing. It is a full resolution image by default."),Object(b.b)("p",null,"Accepts the following query string parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"h")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Height in pixels")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bbox")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show bounding boxes for detected objects (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"timestamp")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Print the timestamp in the upper left (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"zones")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw the zones on the image (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"mask")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overlay the mask on the image (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"motion")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw blue boxes for areas with detected motion (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"regions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Draw green boxes for areas where object detection was run (0 or 1)")))),Object(b.b)("p",null,"Example parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"h=300"),": resizes the image to 300 pixes tall")),Object(b.b)("h3",{id:"apistats"},Object(b.b)("inlineCode",{parentName:"h3"},"/api/stats")),Object(b.b)("p",null,"Contains some granular debug info that can be used for sensors in HomeAssistant."),Object(b.b)("p",null,"Sample response:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  /* Per Camera Stats */\n  "back": {\n    /***************\n     * Frames per second being consumed from your camera. If this is higher\n     * than it is supposed to be, you should set -r FPS in your input_args.\n     * camera_fps = process_fps + skipped_fps\n     ***************/\n    "camera_fps": 5.0,\n    /***************\n     * Number of times detection is run per second. This can be higher than\n     * your camera FPS because frigate often looks at the same frame multiple times\n     * or in multiple locations\n     ***************/\n    "detection_fps": 1.5,\n    /***************\n     * PID for the ffmpeg process that consumes this camera\n     ***************/\n    "capture_pid": 27,\n    /***************\n     * PID for the process that runs detection for this camera\n     ***************/\n    "pid": 34,\n    /***************\n     * Frames per second being processed by frigate.\n     ***************/\n    "process_fps": 5.1,\n    /***************\n     * Frames per second skip for processing by frigate.\n     ***************/\n    "skipped_fps": 0.0\n  },\n  /***************\n   * Sum of detection_fps across all cameras and detectors.\n   * This should be the sum of all detection_fps values from cameras.\n   ***************/\n  "detection_fps": 5.0,\n  /* Detectors Stats */\n  "detectors": {\n    "coral": {\n      /***************\n       * Timestamp when object detection started. If this value stays non-zero and constant\n       * for a long time, that means the detection process is stuck.\n       ***************/\n      "detection_start": 0.0,\n      /***************\n       * Time spent running object detection in milliseconds.\n       ***************/\n      "inference_speed": 10.48,\n      /***************\n       * PID for the shared process that runs object detection on the Coral.\n       ***************/\n      "pid": 25321\n    }\n  },\n  "service": {\n    /* Uptime in seconds */\n    "uptime": 10,\n    "version": "0.8.0-8883709"\n  }\n}\n')),Object(b.b)("h3",{id:"apiconfig"},Object(b.b)("inlineCode",{parentName:"h3"},"/api/config")),Object(b.b)("p",null,"A json representation of your configuration"),Object(b.b)("h3",{id:"apiversion"},Object(b.b)("inlineCode",{parentName:"h3"},"/api/version")),Object(b.b)("p",null,"Version info"),Object(b.b)("h3",{id:"apievents"},Object(b.b)("inlineCode",{parentName:"h3"},"/api/events")),Object(b.b)("p",null,"Events from the database. Accepts the following query string parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"before")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Epoch time")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"after")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Epoch time")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"camera")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Camera name")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"label")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Label name")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"zone")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Zone name")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"limit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Limit the number of events returned")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"has_snapshot")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filter to events that have snapshots (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"has_clip")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filter to events that have clips (0 or 1)")))),Object(b.b)("h3",{id:"apieventssummary"},Object(b.b)("inlineCode",{parentName:"h3"},"/api/events/summary")),Object(b.b)("p",null,"Returns summary data for events in the database. Used by the HomeAssistant integration."),Object(b.b)("h3",{id:"apieventsid"},Object(b.b)("inlineCode",{parentName:"h3"},"/api/events/<id>")),Object(b.b)("p",null,"Returns data for a single event."),Object(b.b)("h3",{id:"apieventsidthumbnailjpg"},Object(b.b)("inlineCode",{parentName:"h3"},"/api/events/<id>/thumbnail.jpg")),Object(b.b)("p",null,"Returns a thumbnail for the event id optimized for notifications. Works while the event is in progress and after completion. Passing ",Object(b.b)("inlineCode",{parentName:"p"},"?format=android")," will convert the thumbnail to 2:1 aspect ratio."),Object(b.b)("h3",{id:"apieventsidsnapshotjpg"},Object(b.b)("inlineCode",{parentName:"h3"},"/api/events/<id>/snapshot.jpg")),Object(b.b)("p",null,"Returns the snapshot image for the event id. Works while the event is in progress and after completion."),Object(b.b)("p",null,"Accepts the following query string parameters, but they are only applied when an event is in progress. After the event is completed, the saved snapshot is returned from disk without modification:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"h")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Height in pixels")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bbox")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show bounding boxes for detected objects (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"timestamp")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Print the timestamp in the upper left (0 or 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"crop")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Crop the snapshot to the  (0 or 1)")))),Object(b.b)("h3",{id:"clipscamera-idmp4"},Object(b.b)("inlineCode",{parentName:"h3"},"/clips/<camera>-<id>.mp4")),Object(b.b)("p",null,"Video clip for the given camera and event id."),Object(b.b)("h3",{id:"clipscamera-idjpg"},Object(b.b)("inlineCode",{parentName:"h3"},"/clips/<camera>-<id>.jpg")),Object(b.b)("p",null,"JPG snapshot for the given camera and event id."))}o.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(a),s=n,j=d["".concat(i,".").concat(s)]||d[s]||m[s]||b;return a?r.a.createElement(j,l(l({ref:t},p),{},{components:a})):r.a.createElement(j,l({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<b;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);