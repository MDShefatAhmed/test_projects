const addToDb = id => {
    let applyingJobs = getApplyingNow();
    const quantity = applyingJobs[id];
    if (!quantity) {
        applyingJobs[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        applyingJobs[id] = newQuantity;
    }
    localStorage.setItem('apply-now', JSON.stringify(applyingJobs));
}
const removeFromDb = id => {
    const applyingNow = getApplyingNow();
    if (id in applyingNow) {
        delete applyingNow[id];
        localStorage.setItem('apply-now', JSON.stringify(applyingNow));
    }
}
const getApplyingNow = () => {
    let apllyingNow = {};
    const storedCart = localStorage.getItem('apply-now');
    if (storedCart) {
        apllyingNow = JSON.parse(storedCart);
    }
    return apllyingNow;
}
const deleteApplyNow = () => {
    localStorage.removeItem('apply-now');
}
export {
    addToDb,
    removeFromDb,
    getApplyingNow,
    deleteApplyNow
}





