System.register("chunks:///_virtual/MultiLanguage.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,t,r,l,i;return{setters:[function(n){e=n.inheritsLoose,t=n.createClass},function(n){r=n.cclegacy,l=n._decorator,i=n.Component}],execute:function(){r._RF.push({},"9a848kkozpCxLQ/C3LpYcys","MultiLanguage",void 0);l.ccclass,l.property;var u=n("LanguageEnum",function(n){return n[n.EN=0]="EN",n[n.ZH=1]="ZH",n[n.amount=2]="amount",n}({})),o=n("MultiLanguage",function(n){function r(){for(var e,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return(e=n.call.apply(n,[this].concat(r))||this).en="",e.zh="",e}return e(r,n),r.getString=function(n,e){var t,l;switch(void 0===e&&(e=!0),r.currentLanguage){case u.EN:return null==n||null==(t=n.en)?void 0:t.concat();case u.ZH:return Math.random()<.6&&e&&!this.isWhiteList?"（作者用休息时间做的汉化，知耻吧，求汉化的）":null==n||null==(l=n.zh)?void 0:l.concat()}return n.en},r.getStringByProps=function(){for(var n=this.lyrics,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.forEach((function(e){n[e]&&(n=n[e])})),this.getString(n)},r.getStringByPropsWithoutTricks=function(){for(var n=this.lyrics,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.forEach((function(e){n[e]&&(n=n[e])})),n?this.getString(n,!1):null},r.getWorldMapLyrics=function(n){var e=this.lyrics.WorldMapScene.World.Default,t=this.lyrics.WorldMapScene.World[n];return null!=t&&t.Name&&(e.Name=t.Name),null!=t&&t.LevelCountStart&&(e.LevelCountStart=t.LevelCountStart),null!=t&&t.LevelCountEnd&&(e.LevelCountEnd=t.LevelCountEnd),null!=t&&t.EndlessZoneName&&(e.EndlessZoneName=t.EndlessZoneName),null!=t&&t.EndlessLevelCountStart&&(e.EndlessLevelCountStart=t.EndlessLevelCountStart),null!=t&&t.EndlessLevelCountEnd&&(e.EndlessLevelCountEnd=t.EndlessLevelCountEnd),e},t(r,null,[{key:"isWhiteList",get:function(){return-1!=this.bilibiliNumberWhiteList.indexOf(this.bilibiliNumber)}}]),r}(i));o.currentLanguage=1,o.lyrics=void 0,o.bilibiliNumber=null,o.bilibiliNumberWhiteList=["31415926535897932384626","3.1415926535897932384626","DWJwe","Sharkfin085","442366357","350607092","21143967","47465141","2718222","miling2024"],r._RF.pop()}}}));

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