

function Outlook() {
  return (
    <div>
        <Navbar />
        <div className ='container p-4 bg-success min-vh-100'>
          <Outlet />
        </div>

        <Footer />
    </div>
  
  )
}

export default Outlook