// sử dụng để kết nối api
const customerList = [
    {
        name: "Trí1",
        phone: "0359694849",
        email: "votantri2006@gmail",
    },
    {
        name: "Trí2",
        phone: "0359694849",
        email: "votantri2006@gmail",
    },
    {
        name: "Trí3",
        phone: "0359694849",
        email: "votantri2006@gmail",
    },
]

export function getAllCustomer() {
    // kết nối API của back-end
    return customerList;
}
export function addNewCustomer(customer) {
    // kết nối API để thêm mới
    customerList.push(customer);
}