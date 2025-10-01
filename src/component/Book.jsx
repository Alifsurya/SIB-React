import React, { useState } from "react";
import booksData from "../Utils/books.js";
import styles from "../styles/Books.module.css";

function Books() {
  const [booksList, setBooksList] = useState([...booksData]);

  const handleClick = () => {
    const newBook = {
      id: booksList.length + 1,
      title: "Atomic Habits",
      author: "James Clear",
      year: 2018,
      description: "Panduan praktis untuk membangun kebiasaan baik dan menghentikan kebiasaan buruk.",
      image: "https://perpustakaan.ummi.ac.id/uploads/images/page_20241210_092700_600.jpg",
    };
    setBooksList((prevList) => [...prevList, newBook]);
    alert("Buku Berhasil Ditambahkan!");
  };

  return (
    <div className={styles.booksContainer}>
      <h1 className={styles.title}>Daftar Buku</h1>
      <div className={styles.cardContainer}>
        {booksList.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Penulis: {item.author}</p>
            <p>Tahun: {item.year}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button onClick={handleClick} className={styles.addButton}>
        Tambah Buku Baru
      </button>
    </div>
  );
}

export default Books;
