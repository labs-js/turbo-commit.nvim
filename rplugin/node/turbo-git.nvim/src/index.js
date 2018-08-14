const util = require("util");
const exec = util.promisify(require("child_process").exec);

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

    async function turboStatus() {
        nvim.command("new");
        const buffer = await plugin.nvim.buffer;
        const {
            stdout,
            stderr
        } = await exec("git status");
        buffer.setLines(stdout.split('\n'), {
            start: 0,
            end: -1
        });
    }

    plugin.registerCommand("Tstatus", turboStatus, {
        sync: false,
        range: "",
        nargs: "*",
    });
};
