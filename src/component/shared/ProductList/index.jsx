export default function ProductList(){
    return(
        <>
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
        </>
    )
}