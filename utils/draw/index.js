
/**
 * @file the ouput of graphic methods
 * 
 */
const utilApp = getApp();


function getCtx () {
    console.log('utilApp:' + utilApp);
    return utilApp;
    
}

Class Ctx {
    constructor () {
        (utilApp.globalData && utilApp.globalData.g_cvsCtx && (this.__ctx = utilApp.globalData.g_cvsCtx)) || ;

    }
}

export default getCtx;
