export const dateTimeConverter = (UNIX_timestamp) => {
    return dateConverter(UNIX_timestamp) + ' ' + timeConverter(UNIX_timestamp);
};

export const timeConverter = (UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp * 1000);
    const hour = a.getHours();
    const min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
    const sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
    return hour + ':' + min + ':' + sec;
};

export const dateConverter = (UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp * 1000);
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    return date + ' ' + month + ' ' + year;
};
