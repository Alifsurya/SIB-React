export default function Footer(){
    return(
        <>
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#beranda" className="nav-link px-2 text-body-secondary">Home</a>
              </li>
              <li className="nav-item">
                <a href="#buku" className="nav-link px-2 text-body-secondary">Book</a>
              </li>
              <li className="nav-item">
                <a href="#tim" className="nav-link px-2 text-body-secondary">Team</a>
              </li>
              <li className="nav-item">
                <a href="#kontak" className="nav-link px-2 text-body-secondary">Contact</a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">&copy; © 2025 NF Academy. Created by Alif Surya Pratama. All rights reserved.</p>
          </footer>
        </div>
        </>
    )
}