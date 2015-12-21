module.exports = {
    app: {
        options: {
            sourceMap: '<%= target %>/scripts/account.min.map.js'
        },
        src: '<%= concat.release.dest %>',
        dest: '<%= target %>/scripts/account.min.js'
    }
};