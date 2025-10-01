export default function Team(){
    return(
        <>
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
                  <h5 className="card-title">Siti Sadiyah - Web Developmet</h5>
                  <p className="card-text">Mengembangkan sisi server, mengelola database, dan membangun logika aplikasi. Bertugas memastikan data buku, akun pengguna, dan proses transaksi berjalan dengan aman, cepat, dan efisien di balik layar.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 team-card">
                <img src="https://image.idntimes.com/post/20230515/anime-lovers-b2134414d7608e67c18a883b34344c38.jpg" className="card-img-top" alt="Jimmy" />
                <div className="card-body">
                  <h5 className="card-title">Jimmy Al Fingky - AI Engineer</h5>
                  <p className="card-text">Bertugas mengembangkan dan mengimplementasikan model kecerdasan buatan pada sistem Booksales. Fokus pekerjaannya meliputi pengolahan data buku dan perilaku pengguna, membangun algoritma rekomendasi untuk membantu pengguna menemukan buku yang relevan, serta memastikan model AI berjalan efisien dan mendukung pengalaman belanja yang lebih personal dan cerdas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}