module.exports = (plugin) => {
    const nvim = plugin.nvim;
    plugin.setOptions({
        dev: true,
    });
    function onBufWrite() {
        console.log("Buffer written!");
    }

    plugin.registerAutocmd("BufWritePre", onBufWrite, {
        pattern: "*",
    });
    async turboStatus() = >{
    
    }
    plugin.registerCommand("Tstatus", turboStatus, {
        sync: false,
        range: "",
        nargs: "*",
    });

};
