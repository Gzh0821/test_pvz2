System.register("chunks:///_virtual/MultiLanguage.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,t,l,i,r;return{setters:[function(n){e=n.inheritsLoose,t=n.createClass},function(n){l=n.cclegacy,i=n._decorator,r=n.Component}],execute:function(){l._RF.push({},"9a848kkozpCxLQ/C3LpYcys","MultiLanguage",void 0);i.ccclass,i.property;var u=n("LanguageEnum",function(n){return n[n.EN=0]="EN",n[n.ZH=1]="ZH",n[n.amount=2]="amount",n}({})),s=n("MultiLanguage",function(n){function l(){for(var e,t=arguments.length,l=new Array(t),i=0;i<t;i++)l[i]=arguments[i];return(e=n.call.apply(n,[this].concat(l))||this).en="",e.zh="",e}return e(l,n),l.getString=function(n,e){var t,i;switch(void 0===e&&(e=!0),l.currentLanguage){case u.EN:return null==n||null==(t=n.en)?void 0:t.concat();case u.ZH:return null==n||null==(i=n.zh)?void 0:i.concat()}return n.en},l.getStringByProps=function(){for(var n=this.lyrics,e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];return t.forEach((function(e){n[e]&&(n=n[e])})),this.getString(n)},l.getStringByPropsWithoutTricks=function(){for(var n=this.lyrics,e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];return t.forEach((function(e){n[e]&&(n=n[e])})),n?this.getString(n,!1):null},l.getWorldMapLyrics=function(n){var e=this.lyrics.WorldMapScene.World.Default,t=this.lyrics.WorldMapScene.World[n];return null!=t&&t.Name&&(e.Name=t.Name),null!=t&&t.LevelCountStart&&(e.LevelCountStart=t.LevelCountStart),null!=t&&t.LevelCountEnd&&(e.LevelCountEnd=t.LevelCountEnd),null!=t&&t.EndlessZoneName&&(e.EndlessZoneName=t.EndlessZoneName),null!=t&&t.EndlessLevelCountStart&&(e.EndlessLevelCountStart=t.EndlessLevelCountStart),null!=t&&t.EndlessLevelCountEnd&&(e.EndlessLevelCountEnd=t.EndlessLevelCountEnd),null!=t&&t.EndlessZoneMiniGameName&&(e.EndlessZoneMiniGameName=t.EndlessZoneMiniGameName),null!=t&&t.EndlessLevelMiniGameCountStart&&(e.EndlessLevelMiniGameCountStart=t.EndlessLevelMiniGameCountStart),null!=t&&t.EndlessLevelMiniGameCountEnd&&(e.EndlessLevelMiniGameCountEnd=t.EndlessLevelMiniGameCountEnd),e},t(l,null,[{key:"isWhiteList",get:function(){return-1!=this.bilibiliNumberWhiteList.indexOf(this.bilibiliNumber)}}]),l}(r));s.currentLanguage=1,s.lyrics=void 0,s.bilibiliNumber=null,s.bilibiliNumberWhiteList=["31415926535897932384626","3.1415926535897932384626","DWJwe","Sharkfin085","442366357","350607092","21143967","47465141","2718222","miling2024","1583106389","244157289","3537122373929163","1588559528","66425694","86191635","3494363426457846","482398217","3493079061367345","200622073","51202546","323339071","347433548","云蒙春","123602899"],l._RF.pop()}}}));

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