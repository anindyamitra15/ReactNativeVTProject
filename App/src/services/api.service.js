export const fetchSomething = async() => {
    const data = await new Promise((resolve, reject)=>{
        // reject({data: 'fail'})
        resolve({data: "info"});
    });
    return data;
};
