

function formatDate(date) {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear().toString().slice(2);
    month = month.length < 2 ? '0' + month : month
    day = day.length < 2 ? '0' + day : day;
    return [year, month, day].join('-');
    }