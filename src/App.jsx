function App() {
  const customStyles = `
    .team-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: none; /* Menghilangkan border default kartu */
    }

    .team-card:hover {
      transform: translateY(-10px); /* Efek terangkat saat hover */
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important; /* Bayangan lebih jelas */
    }

    .team-card .card-img-top {
      height: 350px;
      object-fit: cover; /* Mencegah gambar gepeng/distorsi */
      object-position: center; /* Memastikan fokus gambar di tengah */
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="container" style={{ paddingTop: '80px' }}>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom fixed-top bg-white shadow-sm">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 link-body-emphasis text-decoration-none">
            <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
            <span className="ms-2 fs-4 fw-bold">Bookstore</span>
          </a>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#beranda" className="nav-link px-2 link-secondary">Beranda</a></li>
            <li><a href="#buku" className="nav-link px-2 link-secondary">Buku</a></li>
            <li><a href="#tim" className="nav-link px-2 link-secondary">TIM</a></li>
            <li><a href="#kontak" className="nav-link px-2 link-secondary">Kontak</a></li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Masuk</button>
            <button type="button" className="btn btn-primary">Daftar</button>
          </div>
        </header>

        {/* Hero */}
        <div id="beranda" className="container my-3">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h3 className="display-4 fw-bold lh-1 text-body-emphasis">
                Bookstore: Belanja Buku Praktis
              </h3>
              <p className="lead">
                Rasakan kemudahan membeli buku secara cepat, aman, dan nyaman. Tanpa ribet, semua kebutuhan bacaanmu tersedia hanya dengan satu sentuhan.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                  Beli Sekarang
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                  Lihat Selengkapnya...
                </button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg m-2 rounded-3 mb-4 ">
              <img
                className="rounded-lg-3"
                src="https://printondemand.co.id/wp-content/uploads/2014/10/cover-buku-collorfull.jpg"
                alt="Hero"
                width="600"
                height="350"
              />
            </div>
          </div>
        </div>

        {/* Product List */}
        <section id="buku" className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bold">Buku Terlaris</h1>
              <p className="lead text-body-secondary">
                Kantongi Ribuan Buku Dalam Sekali Bayar
              </p>
            </div>
          </div>
          <div className="album py-0 bg-body-tertiary">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">

                {/* Produk 1: Sherlock Holmes */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img
                      className="card-img-top"
                      src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/9786020631653_Penelusuran-Benang-Merah-A-Study-In-Scarlet.jpg"
                      alt="Sherlock Holmes"
                      style={{ objectFit: "contain", height: "225px", padding: "10px" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <p className="card-text fw-bold text-start flex-grow-1">Sherlock Holmes: A Study in Scarlet</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="fa-solid fa-eye me-1"></i> Lihat
                          </button>
                          <button className="btn btn-sm btn-primary">
                            <i className="fa-solid fa-cart-shopping me-1"></i> Beli
                          </button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 2: Harry Potter */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img
                      className="card-img-top"
                      src="https://upload.wikimedia.org/wikipedia/id/c/c3/Harry_Potter_and_the_Sorcerer%27s_Stone_Poster.jpg"
                      alt="Harry Potter"
                      style={{ objectFit: "contain", height: "225px", padding: "10px" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <p className="card-text fw-bold text-start flex-grow-1">Harry Potter and the Sorcerer's Stone</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="fa-solid fa-eye me-1"></i> Lihat
                          </button>
                          <button className="btn btn-sm btn-primary">
                            <i className="fa-solid fa-cart-shopping me-1"></i> Beli
                          </button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 3: The Hobbit */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img
                      className="card-img-top"
                      src="https://pictures.abebooks.com/isbn/9780345339683-us.jpg"
                      alt="The Hobbit"
                      style={{ objectFit: "contain", height: "225px", padding: "10px" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <p className="card-text fw-bold text-start flex-grow-1">The Hobbit</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="fa-solid fa-eye me-1"></i> Lihat
                          </button>
                          <button className="btn btn-sm btn-primary">
                            <i className="fa-solid fa-cart-shopping me-1"></i> Beli
                          </button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 4: Dune */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img
                      className="card-img-top"
                      src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg"
                      alt="Dune"
                      style={{ objectFit: "contain", height: "225px", padding: "10px" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <p className="card-text fw-bold text-start flex-grow-1">Dune (Frank Herbert)</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="fa-solid fa-eye me-1"></i> Lihat
                          </button>
                          <button className="btn btn-sm btn-primary">
                            <i className="fa-solid fa-cart-shopping me-1"></i> Beli
                          </button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 5: The Lord of the Rings */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img
                      className="card-img-top"
                      src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0895373faf04734bf3ca88e10e112f6cc8dff1c287f87a9dcbb626c528ee85f0._RI_V_TTW_.jpg"
                      alt="The Lord of the Rings"
                      style={{ objectFit: "contain", height: "225px", padding: "10px" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <p className="card-text fw-bold text-start flex-grow-1">The Fellowship of the Ring</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="fa-solid fa-eye me-1"></i> Lihat
                          </button>
                          <button className="btn btn-sm btn-primary">
                            <i className="fa-solid fa-cart-shopping me-1"></i> Beli
                          </button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 6: Percy Jackson */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img
                      className="card-img-top"
                      src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1400602609i/28187.jpg"
                      alt="Percy Jackson"
                      style={{ objectFit: "contain", height: "225px", padding: "10px" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <p className="card-text fw-bold text-start flex-grow-1">Percy Jackson: The Lightning Thief</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="fa-solid fa-eye me-1"></i> Lihat
                          </button>
                          <button className="btn btn-sm btn-primary">
                            <i className="fa-solid fa-cart-shopping me-1"></i> Beli
                          </button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 7: The Hunger Games */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img
                      className="card-img-top"
                      src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052._SY475_.jpg"
                      alt="The Hunger Games"
                      style={{ objectFit: "contain", height: "225px", padding: "10px" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <p className="card-text fw-bold text-start flex-grow-1">The Hunger Games</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="fa-solid fa-eye me-1"></i> Lihat
                          </button>
                          <button className="btn btn-sm btn-primary">
                            <i className="fa-solid fa-cart-shopping me-1"></i> Beli
                          </button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Produk 8: Pride and Prejudice */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img
                      className="card-img-top"
                      src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg"
                      alt="Pride and Prejudice"
                      style={{ objectFit: "contain", height: "225px", padding: "10px" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <p className="card-text fw-bold text-start flex-grow-1">Pride and Prejudice</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="fa-solid fa-eye me-1"></i> Lihat
                          </button>
                          <button className="btn btn-sm btn-primary">
                            <i className="fa-solid fa-cart-shopping me-1"></i> Beli
                          </button>
                        </div>
                        <small className="text-body-secondary">Terlaris</small>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="tim" className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bold">Tim Pembuat</h1>
              <p className="lead text-body-secondary">
                Kepuasan Anda adalah prioritas utama kami.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 team-card">
                <img src="https://image.idntimes.com/post/20230515/gambar-profil-wa-keren-41d3732660868cf4a36d801d1301f672.jpg" className="card-img-top" alt="Alif Surya" />
                <div className="card-body">
                  <h5 className="card-title">Alif Surya Pratama - Project Manager & UI/UX Designer</h5>
                  <p className="card-text">Memimpin keseluruhan proyek pengembangan website dari konsep hingga peluncuran. Bertanggung jawab atas desain antarmuka (UI) dan pengalaman pengguna (UX) untuk memastikan navigasi yang intuitif dan pengalaman berbelanja yang menyenangkan.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 team-card">
                <img src="https://i.pinimg.com/736x/c2/f7/68/c2f768c1115750777a00a74ec27e9165.jpg" className="card-img-top" alt="Siti Sadiyah" />
                <div className="card-body">
                  <h5 className="card-title">Siti Sadiyah - Back-End Developer</h5>
                  <p className="card-text">Mengembangkan sisi server, mengelola database, dan membangun logika aplikasi. Bertugas memastikan data buku, akun pengguna, dan proses transaksi berjalan dengan aman, cepat, dan efisien di balik layar.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 team-card">
                <img src="https://image.idntimes.com/post/20230515/anime-lovers-b2134414d7608e67c18a883b34344c38.jpg" className="card-img-top" alt="Jimmy" />
                <div className="card-body">
                  <h5 className="card-title">Jimmy Al Fingky - Front-End Developer</h5>
                  <p className="card-text">Menerjemahkan desain UI/UX menjadi kode interaktif yang dilihat oleh pengguna. Bertugas membangun semua elemen visual, memastikan website tampil responsif di berbagai perangkat, dan fungsionalitas berjalan lancar di sisi browser.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
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

        {/* Footer */}
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
      </div>
    </>
  );
}

export default App;