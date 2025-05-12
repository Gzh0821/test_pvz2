System.register("chunks:///_virtual/MultiLanguage.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,t,r,i,u;return{setters:[function(n){e=n.inheritsLoose,t=n.createClass},function(n){r=n.cclegacy,i=n._decorator,u=n.Component}],execute:function(){r._RF.push({},"9a848kkozpCxLQ/C3LpYcys","MultiLanguage",void 0);i.ccclass,i.property;var o=n("LanguageEnum",function(n){return n[n.EN=0]="EN",n[n.ZH=1]="ZH",n[n.amount=2]="amount",n}({})),a=n("MultiLanguage",function(n){function r(){for(var e,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))||this).en="",e.zh="",e}return e(r,n),r.getNumberWithThousandComma=function(n){for(var e=Math.round(n),t=[];e>0;)t.push(e%1e3),e=Math.floor(e/1e3);var r="";return 0==Math.round(n)?r="0":t.reverse().forEach((function(n,e){for(var i=n.toString();0!=e&&i.length<3;)i="0"+i;r+=i,e!=t.length-1&&(r+=",")})),r},r.getString=function(n,e){var t,i;switch(r.currentLanguage){case o.EN:return null==n||null==(t=n.en)?void 0:t.concat();case o.ZH:return null==n||null==(i=n.zh)?void 0:i.concat()}return n.en},r.getDirectQuote=function(n){return n?r.getStringByPropsWithoutTricks("DirectQuote",n):""},r.getStringByProps=function(){for(var n=this.lyrics,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.forEach((function(e){n[e]&&(n=n[e])})),this.getString(n)},r.getStringByPropsWithoutTricks=function(){for(var n=this.lyrics,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.forEach((function(e){n[e]&&(n=n[e])})),n?this.getString(n,!1):""},r.getWorldMapLyrics=function(n){var e=this.lyrics.WorldMapScene.World.Default,t=this.lyrics.WorldMapScene.World[n];return null!=t&&t.Name&&(e.Name=t.Name),null!=t&&t.EndlessZoneName&&(e.EndlessZoneName=t.EndlessZoneName),null!=t&&t.EndlessZoneMiniGameName&&(e.EndlessZoneMiniGameName=t.EndlessZoneMiniGameName),null!=t&&t.Description&&(e.Description=t.Description),e},t(r,null,[{key:"isWhiteList",get:function(){return true||this.camelGamingTime>=10800||-1!=this.bilibiliNumberWhiteList.indexOf(this.bilibiliNumber)}}]),r}(u));a.currentLanguage=1,a.lyrics=void 0,a.camelGamingTime=0,a.bilibiliNumber=null,a.bilibiliNumberWhiteList=["31415926535897932384626","3.1415926535897932384626","DWJwe","Sharkfin085","442366357","350607092","21143967","47465141","2718222","miling2024","1583106389","244157289","3537122373929163","1588559528","66425694","86191635","3494363426457846","482398217","3493079061367345","200622073","51202546","323339071","347433548","123602899","Locutus0310"],r._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./MultiLanguage.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});