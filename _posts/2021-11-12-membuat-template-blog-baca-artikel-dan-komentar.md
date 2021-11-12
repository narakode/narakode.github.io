---
layout: post
title: "Cara Membuat Template Blog : Baca Artikel dan Komentar"
date: 2021-11-12 10:00:00 +0700
cover: membuat-template-blog-pagination-footer.png
thumb: membuat-template-blog-pagination-footer.png
categories: css
---

[Baca Artikel dan Komentar]({{ page.url }}) - Baca Artikel merupakan salah satu halaman penting dalam sebuah blog.

Halaman baca artikel berisi **informasi penuh** dari suatu artikel yang dipilih.

Komentar adalah **masukan pengguna** mengenai suatu informasi atau konten pada blog tersebut.

Kali ini kita akan lanjut belajar membuat template blog, bagian baca artikel dan komentar.

Berikut langkah-langkahnya.

## Persiapan

Pastikan anda sudah memiliki source code template sebelumnya.

Jika belum, anda dapat mengunduhnya pada tautan berikut.

<a href="https://github.com/narakode/template-blog/blob/main/index.html" target="_blank">Source Code Template Blog</a>.

## Membuat Bagian Baca Artikel

Pertama kita buat bagian __baca artikelnya__ terlebih dahulu.

Buat sebuah file **html baru**, isinya sama seperti halaman daftar artikel pada source code diatas.

Ganti seluruh kode HTML daftar artikel dengan kode HTML baca artikel berikut.

```html
<div class="container">
  <main>
    <section class="posts">
      <!-- Baca Artikel -->
      <div class="post-single">
        <img src="post-5.jpg" alt="" class="post-banner">
        <div class="post-content">
          <h1 class="post-title">Properti CSS Untuk Mengatur Font</h1>
          <div class="post-meta">
            <time>22 Mei 2020</time> - oleh <span>Narakode</span> | <a href="">HTML</a>, <a href="">CSS</a>
          </div>
          <div class="post-text">
           <!-- Isi Artikel -->
          </div>
        </div>
      </div>
    </section>

    <aside>
      <!-- Sidebar -->
    </aside>
  </main>
</div>
```

***

![Baca Artikel]({{ site.baseurl }}/assets/img/css/blog/read/article.png)

***

### Tambahkan Style CSS

Tambahkan style CSS pada bagian baca artikel, seperti mengganti ukuran teks, jarak, dll.

```css
.post-single, .comments {
  border: 1px solid #ecf0f1;
  border-radius: 5px;
  margin-bottom: 1.5rem;
}
.post-banner {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.post-content, .comments {
  padding: 1.5rem;
}
.post-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}
.post-meta {
  margin-bottom: 0.8rem;
  color: #7f8c8d;
}
.post-meta a {
  color: #2980b9;
}
.post-text {
  font-size: 1.1rem;
}
.post-text h2 {
  margin-top: 2rem;
}
.post-text h2, .post-text p, .post-text img {
  margin-bottom: 1rem;
}
```

***

![Baca Artikel Style]({{ site.baseurl }}/assets/img/css/blog/read/article-style.png)

***

## Membuat Form Komentar

Lanjut kita buat __bagian komentar__.

Pertama kita buat form komentarnya terlebih dahulu.

Taruh kode form komentar berikut di bawah kotak baca artikel.

```html
<div class="container">
  <main>
    <section class="posts">
      <div class="post-single">
        <!-- Artikel -->
      </div>

      <!-- Form Komentar -->
      <div class="comments">
        <h1 class="comment-title">Komentar Baru</h1>
        <div class="comment-form">
          <label>Nama</label>
          <input type="text" class="comment-input" placeholder="Nama">
        </div>
        <div class="comment-form">
          <label>Komentar</label>
          <textarea class="comment-input" placeholder="Komentar" rows="5"></textarea>
        </div>
        <div class="comment-form">
          <button class="comment-button">Kirim</button>
        </div>
      </div>
    </section>

    <aside>
      <!-- Sidebar -->
    </aside>
  </main>
</div>
```

***

![Form Komentar]({{ site.baseurl }}/assets/img/css/blog/read/form-komentar.png)

***

### Tambahkan Style CSS

Kemudian, tambahkan style css pada form komentar.

Atur padding, ukuran, warna dll.

```css
.comment-title {
  margin-bottom: 1.5rem;
}
.comment-form {
  margin-bottom: 1rem;
}
.comment-input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  margin-top: 10px;
}
.comment-input:focus {
  outline: none;
  border-color: #3498db;
}
.comment-button {
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
}
```

***

![Form Komentar Style]({{ site.baseurl }}/assets/img/css/blog/read/form-komentar-style.png)

***

## Membuat Daftar Komentar

Lanjut, kita buat __daftar komentarnya__.

Tambahkan kode berikut di bawah form komentar.

```html
<div class="comments">
  <h1 class="comment-title">Komentar (4)</h1>

  <div class="comment">
    <img src="post-1.jpg" class="comment-img">
    <div class="comment-content">
      <h4>Hadi Wadi</h4>
      <time class="comment-date">2 jam yang lalu</time>
      <p>Lorem ipsum dolor, sit amet consectetur...</p>
    </div>
  </div>

  <!-- Komentar 2, dst -->
</div>
```

***

![Daftar Komentar]({{ site.baseurl }}/assets/img/css/blog/read/daftar-komentar.png)

***

### Tambahkan Style CSS

Kemudian, kita tambahkan style CSS pada daftar artikelnya.

Atur ukuran gambar, warna, jarak, dll.

```css
.comment {
  display: flex;
  margin-bottom: 1.25rem;
}
.comment .comment-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
}
.comment .comment-date {
  font-size: .9rem;
  color: #7f8c8d;
}
.comment .comment-content {
  padding: 0px 10px;
}
```

***

![Daftar Komentar Style]({{ site.baseurl }}/assets/img/css/blog/read/daftar-komentar-style.png)

***

## Selanjutnya

Selanjutnya kita akan mengatur layout agar menjadi __responsive__, yang akan saya buat pada postingan selanjutnya.

Sekian postigan kali ini, untuk __source code__ anda dapat mengunduhnya pada tautan berikut. 

<a href="https://github.com/narakode/template-blog" target="_blank">Source Code Template Blog</a>