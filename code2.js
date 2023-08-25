gdjs.Level3Code = {};
gdjs.Level3Code.GDplayerObjects1= [];
gdjs.Level3Code.GDplayerObjects2= [];
gdjs.Level3Code.GDfinishObjects1= [];
gdjs.Level3Code.GDfinishObjects2= [];
gdjs.Level3Code.GDplatformObjects1= [];
gdjs.Level3Code.GDplatformObjects2= [];
gdjs.Level3Code.GDspikeObjects1= [];
gdjs.Level3Code.GDspikeObjects2= [];
gdjs.Level3Code.GDLevel1Objects1= [];
gdjs.Level3Code.GDLevel1Objects2= [];
gdjs.Level3Code.GDLevel3Objects1= [];
gdjs.Level3Code.GDLevel3Objects2= [];
gdjs.Level3Code.GDLevel2Objects1= [];
gdjs.Level3Code.GDLevel2Objects2= [];
gdjs.Level3Code.GDmenuObjects1= [];
gdjs.Level3Code.GDmenuObjects2= [];
gdjs.Level3Code.GDwinObjects1= [];
gdjs.Level3Code.GDwinObjects2= [];


gdjs.Level3Code.mapOfGDgdjs_9546Level3Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level3Code.GDplayerObjects1});
gdjs.Level3Code.mapOfGDgdjs_9546Level3Code_9546GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.Level3Code.GDfinishObjects1});
gdjs.Level3Code.mapOfGDgdjs_9546Level3Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level3Code.GDplayerObjects1});
gdjs.Level3Code.mapOfGDgdjs_9546Level3Code_9546GDspikeObjects1Objects = Hashtable.newFrom({"spike": gdjs.Level3Code.GDspikeObjects1});
gdjs.Level3Code.mapOfGDgdjs_9546Level3Code_9546GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.Level3Code.GDmenuObjects1});
gdjs.Level3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level3Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("win"), gdjs.Level3Code.GDwinObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.Level3Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDplayerObjects1[i].addForce(150, 0, 0);
}
}{for(var i = 0, len = gdjs.Level3Code.GDwinObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDwinObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level3Code.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Level3Code.GDplayerObjects1[i].getY() > 600 ) {
        isConditionTrue_0 = true;
        gdjs.Level3Code.GDplayerObjects1[k] = gdjs.Level3Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level3Code.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level3Code.GDplayerObjects1[i].getBehavior("InOnScreen2").IsOnScreen(5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Level3Code.GDplayerObjects1[k] = gdjs.Level3Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Level3Code.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level3Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_9546Level3Code_9546GDplayerObjects1Objects, gdjs.Level3Code.mapOfGDgdjs_9546Level3Code_9546GDfinishObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("win"), gdjs.Level3Code.GDwinObjects1);
{for(var i = 0, len = gdjs.Level3Code.GDwinObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDwinObjects1[i].setOpacity(255);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Meni", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("spike"), gdjs.Level3Code.GDspikeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_9546Level3Code_9546GDplayerObjects1Objects, gdjs.Level3Code.mapOfGDgdjs_9546Level3Code_9546GDspikeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.Level3Code.GDmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level3Code.mapOfGDgdjs_9546Level3Code_9546GDmenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Meni", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level3Code.GDplayerObjects1.length = 0;
gdjs.Level3Code.GDplayerObjects2.length = 0;
gdjs.Level3Code.GDfinishObjects1.length = 0;
gdjs.Level3Code.GDfinishObjects2.length = 0;
gdjs.Level3Code.GDplatformObjects1.length = 0;
gdjs.Level3Code.GDplatformObjects2.length = 0;
gdjs.Level3Code.GDspikeObjects1.length = 0;
gdjs.Level3Code.GDspikeObjects2.length = 0;
gdjs.Level3Code.GDLevel1Objects1.length = 0;
gdjs.Level3Code.GDLevel1Objects2.length = 0;
gdjs.Level3Code.GDLevel3Objects1.length = 0;
gdjs.Level3Code.GDLevel3Objects2.length = 0;
gdjs.Level3Code.GDLevel2Objects1.length = 0;
gdjs.Level3Code.GDLevel2Objects2.length = 0;
gdjs.Level3Code.GDmenuObjects1.length = 0;
gdjs.Level3Code.GDmenuObjects2.length = 0;
gdjs.Level3Code.GDwinObjects1.length = 0;
gdjs.Level3Code.GDwinObjects2.length = 0;

gdjs.Level3Code.eventsList0(runtimeScene);

return;

}

gdjs['Level3Code'] = gdjs.Level3Code;
