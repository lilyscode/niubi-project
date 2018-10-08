App({
    onLaunch (option) {
        console.log('APP onLaunch');
        console.log(option);
    },
    onShow () {

    },
    onHide () {
        console.log(this.globalData)
    },
    globalData: {
        g_cvsCtx: {}
    }
})