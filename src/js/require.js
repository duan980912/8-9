define(function() {
    function require(arr, fn) {
        arr.map(function(file) {
            require(file)
            fn(file)
        })
    }

    function define(name, arr, fn) {
        var module = name;
        arr.map(function(file) {
            require(file)
        })
        fn()
    }

    return {
        require: "require",
        define: "define"
    }
})