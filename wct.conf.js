module.exports = {
    verbose: true,
    plugins: {
        sauce: {
            disabled: false,
            browsers: [
                "Windows 10/microsoftedge",
                "Windows 8.1/internet explorer",
                "OS X 10.10/chrome",
                "OS X 10.10/firefox",
                "OS X 10.10/safari"
            ]
        }
    }
};