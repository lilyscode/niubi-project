
/**
 * @file the ouput of graphic methods
 * 
 */
const utilApp = getApp();


function getCtx () {
    console.log('utilApp:' + utilApp);
    return utilApp;
    
}

class Line {
    constructor () {
        
    }

    
}


// class fill

class AllMethods {
    
}


class Ctx extends AllMethods {
    constructor (ctx) {
        super();
        this._name = 'Ctx';
        (utilApp.globalData && utilApp.globalData.g_cvsCtx && (this.__ctx = utilApp.globalData.g_cvsCtx)) || null;
        ctx && (this.__ctx = ctx);
    }

    static consoleName () {
        console.log(this);
    }
    consoleName () {
        console.log(`from Ctx.consoleName -- ${this._name}`);
        return 'console name from Ctx';
    }
}



export default Ctx;
