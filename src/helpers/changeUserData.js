const changeUserData = (obj) => {
    const key = Object.keys(obj)[1];
    const value = Object.values(obj)[1];
    const changedData = { [key]: value };
    return changedData;
}
export default changeUserData;