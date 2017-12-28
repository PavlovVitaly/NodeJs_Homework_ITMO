;(function () {
    window.ArrayFunc = {
        Min: function (arr) {
            return Math.min.apply(null, arr);
        },
        Max: function (arr) {
            return Math.max.apply(null, arr);
        },
        ArithmeticMean: function (arr) {
            var lengthOfArr = arr.length;
            var mean = 0;
            for (var i = 0; i < lengthOfArr; i++) {
                mean += arr[i];
            }
            mean /= lengthOfArr;
            return mean;
        },
        Copy: function (arr) {
            return arr.slice();
        }
    };
}());
