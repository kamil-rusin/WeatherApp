export const dateTimeConverter = (UNIX_timestamp) => {
    return dateConverter(UNIX_timestamp) + ' ' + timeConverter(UNIX_timestamp);
};

export const timeConverter = (UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp * 1000);
    const hour = a.getUTCHours();
    const min = a.getUTCMinutes() < 10 ? '0' + a.getUTCMinutes() : a.getUTCMinutes();
    const sec = a.getUTCSeconds() < 10 ? '0' + a.getUTCSeconds() : a.getUTCSeconds();
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
    const year = a.getUTCFullYear();
    const month = months[a.getUTCMonth()];
    const date = a.getUTCDate();
    return date + ' ' + month + ' ' + year;
};
