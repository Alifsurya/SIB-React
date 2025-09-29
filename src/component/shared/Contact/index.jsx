export default function Contact(){
    return(
        <>
        <section id="kontak" className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bold">Hubungi Kami</h1>
              <p className="lead text-body-secondary">
                Punya pertanyaan atau masukan untuk kami? Jangan ragu, kami siap mendengar! Sapa kami melalui sosial media, kunjungi toko kami, atau langsung isi form di bawah ini ya.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3 bg-light">
                    <h4 className="my-0 fw-normal">Media Sosial</h4>
                  </div>
                  <div className="card-body text-start">
                    <p className="card-text">Ikuti Bookstore di platform berikut:</p>
                    <ul className="list-unstyled d-flex flex-column gap-2">
                      <li>
                        <a href="#" rel="noreferrer" className="text-decoration-none">
                          <i className="fab fa-instagram fa-lg me-2 text-danger"></i> @bookstore.official
                        </a>
                      </li>
                      <li>
                        <a href="#" rel="noreferrer" className="text-decoration-none">
                          <i className="fab fa-facebook fa-lg me-2 text-primary"></i> fb.com/bookstoreofficial
                        </a>
                      </li>
                      <li>
                        <a href="#" rel="noreferrer" className="text-decoration-none">
                          <i className="fab fa-twitter fa-lg me-2 text-info"></i> @bookstoreofficial
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3 bg-light">
                    <h4 className="my-0 fw-normal">Alamat & Kontak</h4>
                  </div>
                  <div className="card-body text-start">
                    <p className="card-text mb-2">
                      <i className="fas fa-map-marker-alt me-2 text-danger"></i>JJl. Raya Pos Pengumben No.10B 4, RT.4/RW.5, Jakarta Selatan
                    </p>
                    <p className="card-text mb-2">
                      <i className="fas fa-envelope me-2 text-primary"></i>contact@bookstore.com
                    </p>
                    <p className="card-text">
                      <i className="fas fa-phone me-2 text-success"></i>+62 812-7781-0920
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-4 rounded-3 shadow-sm h-100">
                  <div className="card-header py-3 bg-light">
                    <h4 className="my-0 fw-normal">Saran & Pertanyaan</h4>
                  </div>
                  <div className="card-body text-start">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Nama</label>
                        <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Masukkan email Anda" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Pesan</label>
                        <textarea className="form-control" rows="3" placeholder="Tulis pesan Anda di sini"></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary w-100">
                        Kirim
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}