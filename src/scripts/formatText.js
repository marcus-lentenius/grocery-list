function caseString(str) {
    str = str.slice(0, 1)
            .toUpperCase() +
        str.slice(1, str.length)
            .toLowerCase();
    return str;
}
export default caseString