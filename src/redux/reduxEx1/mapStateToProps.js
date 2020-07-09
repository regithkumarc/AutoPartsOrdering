export const mapStateToProps = (state) => {
    // console.log("hello mapStateToProps")
    // // store state object 
    // console.log("Store to Props calling")
    console.log("getdata : ",state.counter.count)
    return {
        count: state.counter.count,
        data : state.data.data
    }
}