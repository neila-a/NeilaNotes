const error = (err, doing) => {
    console.error(`${doing}失败，原因：`);
    console.error(err);
    return [
        false,
        err
    ];
};
export default error;