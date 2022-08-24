const DashBoard = ({user}) =>{
    return (
        <section className="section">
            <h4>Hello {user?.name}</h4>
        </section>
    )
}

export default DashBoard

