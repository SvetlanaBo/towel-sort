// You should implement your task here.

module.exports = (matrix) => {
    if (!matrix || matrix.length === 0) {
        return [];
    } else {
        let result = [];
        let resultLength = 0;
        for (i = 0; i < matrix.length; i++) {
            resultLength += matrix[i].length;
        }
        let min = matrix[0][0];
        for (i = 0; i < matrix.length; i++) {
            if ((i % 2) == 0) {
                Array.prototype.push.apply(result, matrix[i]);
            } else {
                Array.prototype.push.apply(result, matrix[i].reverse());
            }
        }
        return result;
    }
};