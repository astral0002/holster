function copyText(){
    const text = '{"lowSpec":true,"shadows":false,"ambientShad":0,"ambientShading":false,"showTrails":false,"muzzleFlash":false,"textureAnim":false,"objectAnim":false,"screenShake":false,"lighting":"0","scaleUI":0.8,"dynamicHP":false,"showHitInd":false,"showDMG":false,"healthColE":"#ffcfcf","showMedals":false,"playMedals":false,"crosshairSho":"5","crosshairAlways":true,"crosshairColor":"#03d0d3","crosshairShadowThickess":0,"crosshairThick":1,"crosshairLen":100,"crosshairGap":-100,"crosshairDot":false,"sensitivityX":0.45,"sensitivityY":0.45,"aimSensitivityX":0.45,"aimSensitivityY":0.45,"sound":1,"gunsVolume":0.7,"fpsFOV":100,"weaponBob":0.4,"weaponLean":0.4,"weaponOffX":0,"weaponOffY":4,"weaponOffZ":1.9,"adsFovMlt":0.3,"hideADS":true,"showHands":false,"bulletTracerCol":"#ffcfcf","autoLoadLast":true,"scopeBorders":false,"endMessage":"She was Death herself","useDamageOverlay":false,"weaponBob_0":0,"weaponLean_0":0,"aimAnim_0":false,"hideADS_0":true,"weaponBob_1":0,"weaponLean_1":0,"aimAnim_1":false,"hideADS_1":true,"weaponBob_2":0,"weaponLean_2":0,"aimAnim_2":false,"hideADS_2":true,"weaponBob_3":0,"weaponLean_3":0,"aimAnim_3":false,"hideADS_3":true,"weaponBob_4":0,"weaponLean_4":0,"aimAnim_4":false,"hideADS_4":true,"weaponBob_5":0,"weaponLean_5":0,"aimAnim_5":false,"hideADS_5":true,"weaponBob_6":0,"weaponLean_6":0,"aimAnim_6":false,"hideADS_6":true,"weaponBob_7":0,"weaponLean_7":0,"aimAnim_7":false,"hideADS_7":true,"weaponBob_8":0,"weaponLean_8":0,"aimAnim_8":false,"hideADS_8":true,"weaponBob_9":0,"weaponLean_9":0,"aimAnim_9":false,"hideADS_9":true,"weaponBob_10":0,"weaponLean_10":0,"aimAnim_10":false,"hideADS_10":true,"weaponBob_11":0,"weaponLean_11":0,"aimAnim_11":false,"hideADS_11":true,"weaponBob_12":0,"weaponLean_12":0,"aimAnim_12":false,"hideADS_12":true,"weaponBob_13":0,"weaponLean_13":0,"aimAnim_13":false,"hideADS_13":true,"weaponBob_14":0,"weaponLean_14":0,"aimAnim_14":false,"hideADS_14":true,"weaponBob_15":0,"weaponLean_15":0,"aimAnim_15":false,"hideADS_15":true,"weaponBob_16":0,"weaponLean_16":0,"aimAnim_16":false,"hideADS_16":true,"weaponBob_17":0,"weaponLean_17":0,"aimAnim_17":false,"hideADS_17":true,"weaponBob_18":0,"weaponLean_18":0,"aimAnim_18":false,"hideADS_18":true,"weaponBob_19":0,"weaponLean_19":0,"aimAnim_19":false,"hideADS_19":true,"weaponBob_20":0,"weaponLean_20":0,"aimAnim_20":false,"hideADS_20":true,"weaponBob_21":0,"weaponLean_21":0,"aimAnim_21":false,"hideADS_21":true,"weaponBob_22":0,"weaponLean_22":0,"aimAnim_22":false,"hideADS_22":true,"weaponBob_23":0,"weaponLean_23":0,"aimAnim_23":false,"hideADS_23":true,"weaponBob_24":0,"weaponLean_24":0,"aimAnim_24":false,"hideADS_24":true,"weaponBob_25":0,"weaponLean_25":0,"aimAnim_25":false,"hideADS_25":true,"weaponBob_26":0,"weaponLean_26":0,"aimAnim_26":false,"hideADS_26":true,"weaponBob_27":0,"weaponLean_27":0,"aimAnim_27":false,"hideADS_27":true,"controls":{"jumpKey_alt":20000,"sBoardKey":70,"inspKey":9,"wepVisKey":192,"toggleSets":[-1,-1,-1,-1,-1,-1]},"customize":{"favorites":[1126,1078,3706,992,1188,2192,1199,1247,4318,1342,1617],"loadouts":{"Preset1":{"skinColIndex":-1,"hairCol":-1,"chatCol":-1,"dyeIndex":-3,"faceIndex":-3,"shoeIndex":-3,"attachIndex":-1,"reticleIndex":-1,"savedReticle":"","scopeIndex":1,"savedScope":"","meleeIndex":1617,"backIndex":3973,"petIndex":-3,"wristIndex":-3,"hatIndex":-3,"waistIndex":-3,"secondaryInd":2,"kcStatIndex":-1,"classindex":0,"streakIndex1":-1,"streakIndex2":1,"streakIndex3":0,"skins":"{\"0\":1126,\"1\":1188,\"2\":3353,\"3\":1247,\"4\":1342,\"7\":1529,\"10\":2290,\"13\":2298,\"15\":3706,\"16\":2735}"}}}}';
    navigator.clipboard.writeText(text);
    alert("You have copied the settings.")

}

window.onload = function greet(){
    const element = document.getElementById("welcome")
    const titles = [
        "👋 Hey!",
        "👋 Hi!",
        "👋 Hello!",
        "👋 Welcome!"
    ];
    var title = titles[Math.floor(Math.random()*titles.length)];
    element.innerHTML = title;
}
