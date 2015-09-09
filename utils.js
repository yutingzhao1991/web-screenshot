'use strict';

function addCommaNumber(source, length) {
    length = length || 3
    source = String(source).split(".")
    // 1234567 -> 1,234,567.
    // toLocaleString in NodeJS has a bug, so use regexp.
    source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{' + length + '})+$)', 'ig'), "$1,")
    return source.join(".")
}

exports.toPercentage = function(value) {
    value = parseFloat(value)
    if (isNaN(value)) {
        return 'N/A'
    } else {
        return (value * 100).toFixed(2) + '%'
    }
}

exports.isNormalNumber = function(value) {
    return !(isNaN(value) || value == Infinity || value == -Infinity)
}

exports.commaNumber = function(value) {
    var value = parseFloat(value)
    if (isNaN(value)) {
        return 'N/A'
    } else {
        return addCommaNumber(value)
    }
}