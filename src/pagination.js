const pagination = (data) => {
    let itemsPerPage = 10;
    let pages = Math.ceil(data.length/ itemsPerPage);
    let subArrays = Array.from({ length: pages }, (items, index) => {
        let starting = index*itemsPerPage;
        return data.slice(starting,starting+itemsPerPage)
    })
   
    return subArrays
}

export default pagination