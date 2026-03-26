import NavBar from './components/navBar'
import HOME from './components/home'
import Footer from './components/footer'

function App() {

  return (
    <div  className="d-flex flex-column min-vh-100">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main content */}
      <div className="flex-grow-1">
        {/* <h1 className="text-center mt-5">Main Content</h1> */}
        <HOME />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d949238.4586701337!2d81.2431527555758!3d21.66530718347842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b3c438b8b81%3A0xfc65aaaed727c0be!2sTiwari%20Physiotherapy%20Clinic!5e0!3m2!1sen!2sin!4v1774532816446!5m2!1sen!2sin"