System.register("chunks:///_virtual/MultiLanguage.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,t,i,l,r;return{setters:[function(n){e=n.inheritsLoose,t=n.createClass},function(n){i=n.cclegacy,l=n._decorator,r=n.Component}],execute:function(){i._RF.push({},"9a848kkozpCxLQ/C3LpYcys","MultiLanguage",void 0);l.ccclass,l.property;var u=n("LanguageEnum",function(n){return n[n.EN=0]="EN",n[n.ZH=1]="ZH",n[n.amount=2]="amount",n}({})),s=n("MultiLanguage",function(n){function i(){for(var e,t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return(e=n.call.apply(n,[this].concat(i))||this).en="",e.zh="",e}return e(i,n),i.getString=function(n,e){var t;switch(void 0===e&&(e=!0),i.currentLanguage){case u.EN:return null==n||null==(t=n.en)?void 0:t.concat();case u.ZH:var l;return e&&Math.random()<.6&&!this.isWhiteList?"（木乃伊记忆无尽玩满 3 小时， 这句话就消失，现在才玩了 "+(Math.round(this.camelGamingTime/36)/100).toString()+"小时）":null==n||null==(l=n.zh)?void 0:l.concat()}return n.en},i.getStringByProps=function(){for(var n=this.lyrics,e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.forEach((function(e){n[e]&&(n=n[e])})),this.getString(n)},i.getStringByPropsWithoutTricks=function(){for(var n=this.lyrics,e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.forEach((function(e){n[e]&&(n=n[e])})),n?this.getString(n,!1):null},i.getWorldMapLyrics=function(n){var e=this.lyrics.WorldMapScene.World.Default,t=this.lyrics.WorldMapScene.World[n];return null!=t&&t.Name&&(e.Name=t.Name),null!=t&&t.LevelCountStart&&(e.LevelCountStart=t.LevelCountStart),null!=t&&t.LevelCountEnd&&(e.LevelCountEnd=t.LevelCountEnd),null!=t&&t.EndlessZoneName&&(e.EndlessZoneName=t.EndlessZoneName),null!=t&&t.EndlessLevelCountStart&&(e.EndlessLevelCountStart=t.EndlessLevelCountStart),null!=t&&t.EndlessLevelCountEnd&&(e.EndlessLevelCountEnd=t.EndlessLevelCountEnd),null!=t&&t.EndlessZoneMiniGameName&&(e.EndlessZoneMiniGameName=t.EndlessZoneMiniGameName),null!=t&&t.EndlessLevelMiniGameCountStart&&(e.EndlessLevelMiniGameCountStart=t.EndlessLevelMiniGameCountStart),null!=t&&t.EndlessLevelMiniGameCountEnd&&(e.EndlessLevelMiniGameCountEnd=t.EndlessLevelMiniGameCountEnd),e},t(i,null,[{key:"isWhiteList",get:function(){return true||this.camelGamingTime>=10800||-1!=this.bilibiliNumberWhiteList.indexOf(this.bilibiliNumber)}}]),i}(r));s.currentLanguage=1,s.lyrics=void 0,s.camelGamingTime=0,s.bilibiliNumber=null,s.bilibiliNumberWhiteList=["31415926535897932384626","3.1415926535897932384626","DWJwe","Sharkfin085","442366357","350607092","21143967","47465141","2718222","miling2024","1583106389","244157289","3537122373929163","1588559528","66425694","86191635","3494363426457846","482398217","3493079061367345","200622073","51202546","323339071","347433548","123602899","Locutus0310"],i._RF.pop()}}}));

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