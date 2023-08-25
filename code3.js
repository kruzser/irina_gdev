gdjs.MeniCode = {};
gdjs.MeniCode.GDplayerObjects1= [];
gdjs.MeniCode.GDplayerObjects2= [];
gdjs.MeniCode.GDfinishObjects1= [];
gdjs.MeniCode.GDfinishObjects2= [];
gdjs.MeniCode.GDplatformObjects1= [];
gdjs.MeniCode.GDplatformObjects2= [];
gdjs.MeniCode.GDspikeObjects1= [];
gdjs.MeniCode.GDspikeObjects2= [];
gdjs.MeniCode.GDLevel1Objects1= [];
gdjs.MeniCode.GDLevel1Objects2= [];
gdjs.MeniCode.GDLevel3Objects1= [];
gdjs.MeniCode.GDLevel3Objects2= [];
gdjs.MeniCode.GDLevel2Objects1= [];
gdjs.MeniCode.GDLevel2Objects2= [];
gdjs.MeniCode.GDmenuObjects1= [];
gdjs.MeniCode.GDmenuObjects2= [];
gdjs.MeniCode.GDexitObjects1= [];
gdjs.MeniCode.GDexitObjects2= [];


gdjs.MeniCode.mapOfGDgdjs_9546MeniCode_9546GDLevel1Objects1Objects = Hashtable.newFrom({"Level1": gdjs.MeniCode.GDLevel1Objects1});
gdjs.MeniCode.mapOfGDgdjs_9546MeniCode_9546GDLevel2Objects1Objects = Hashtable.newFrom({"Level2": gdjs.MeniCode.GDLevel2Objects1});
gdjs.MeniCode.mapOfGDgdjs_9546MeniCode_9546GDLevel3Objects1Objects = Hashtable.newFrom({"Level3": gdjs.MeniCode.GDLevel3Objects1});
gdjs.MeniCode.mapOfGDgdjs_9546MeniCode_9546GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.MeniCode.GDexitObjects1});
gdjs.MeniCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.MeniCode.GDLevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MeniCode.mapOfGDgdjs_9546MeniCode_9546GDLevel1Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.MeniCode.GDLevel2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MeniCode.mapOfGDgdjs_9546MeniCode_9546GDLevel2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level3"), gdjs.MeniCode.GDLevel3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MeniCode.mapOfGDgdjs_9546MeniCode_9546GDLevel3Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.MeniCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MeniCode.mapOfGDgdjs_9546MeniCode_9546GDexitObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.MeniCode.GDLevel1Objects1);
{for(var i = 0, len = gdjs.MeniCode.GDLevel1Objects1.length ;i < len;++i) {
    gdjs.MeniCode.GDLevel1Objects1[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.MeniCode.GDLevel1Objects1);
{for(var i = 0, len = gdjs.MeniCode.GDLevel1Objects1.length ;i < len;++i) {
    gdjs.MeniCode.GDLevel1Objects1[i].setAnimation(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.MeniCode.GDLevel2Objects1);
{for(var i = 0, len = gdjs.MeniCode.GDLevel2Objects1.length ;i < len;++i) {
    gdjs.MeniCode.GDLevel2Objects1[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.MeniCode.GDLevel2Objects1);
{for(var i = 0, len = gdjs.MeniCode.GDLevel2Objects1.length ;i < len;++i) {
    gdjs.MeniCode.GDLevel2Objects1[i].setAnimation(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level3"), gdjs.MeniCode.GDLevel3Objects1);
{for(var i = 0, len = gdjs.MeniCode.GDLevel3Objects1.length ;i < len;++i) {
    gdjs.MeniCode.GDLevel3Objects1[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level3"), gdjs.MeniCode.GDLevel3Objects1);
{for(var i = 0, len = gdjs.MeniCode.GDLevel3Objects1.length ;i < len;++i) {
    gdjs.MeniCode.GDLevel3Objects1[i].setAnimation(1);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MeniCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MeniCode.GDplayerObjects1.length = 0;
gdjs.MeniCode.GDplayerObjects2.length = 0;
gdjs.MeniCode.GDfinishObjects1.length = 0;
gdjs.MeniCode.GDfinishObjects2.length = 0;
gdjs.MeniCode.GDplatformObjects1.length = 0;
gdjs.MeniCode.GDplatformObjects2.length = 0;
gdjs.MeniCode.GDspikeObjects1.length = 0;
gdjs.MeniCode.GDspikeObjects2.length = 0;
gdjs.MeniCode.GDLevel1Objects1.length = 0;
gdjs.MeniCode.GDLevel1Objects2.length = 0;
gdjs.MeniCode.GDLevel3Objects1.length = 0;
gdjs.MeniCode.GDLevel3Objects2.length = 0;
gdjs.MeniCode.GDLevel2Objects1.length = 0;
gdjs.MeniCode.GDLevel2Objects2.length = 0;
gdjs.MeniCode.GDmenuObjects1.length = 0;
gdjs.MeniCode.GDmenuObjects2.length = 0;
gdjs.MeniCode.GDexitObjects1.length = 0;
gdjs.MeniCode.GDexitObjects2.length = 0;

gdjs.MeniCode.eventsList0(runtimeScene);

return;

}

gdjs['MeniCode'] = gdjs.MeniCode;
