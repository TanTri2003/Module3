
function PaginationComponent({totalPage, page,setPage}){
    const handleNext = () => {
        if (page < totalPage) {
            setPage(pre => pre + 1)
        }
    }
    const handlePre = () => {
        if (page > 1) {
            setPage(pre => pre - 1)
        }
    }
    return(
        <div>
        <button onClick={handlePre}>Pre</button>
        {[...new Array(totalPage)].map((e, i) =>
            (<button className={`${page === i+1 ? 'active' : ''}`} onClick={() => { setPage(i + 1) }} key={i}>{i + 1}</button>)
        )}
        <button onClick={handleNext}>Next</button>
    </div>
    )
}
export default PaginationComponent;