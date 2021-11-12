---
layout: post
title: "Cara Membuat Template Blog : Pagination dan Footer"
date: 2021-11-10 07:30:00 +0700
cover: membuat-template-blog-pagination-footer.png
thumb: membuat-template-blog-pagination-footer.png
categories: css
---

[Pagination dan Footer]({{ page.url }}) - Pagination adalah proses __membagi halaman__ menjadi beberapa bagaian.

Ketika daftar konten/artikel ada banyak, daftar tersebut umumnya dibagi menjadi beberapa bagian pada setiap halaman.

Footer adalah __bagian bawah__ halaman website, footer biasanya berisi deskripsi website, atau navigasi website.

Untuk membuat pagination dan footer, ikuti langkah-langkah pembuatanya berikut.

## Persiapan

Sebelum membuat pagination dan footer, pastikan anda sudah memiliki source code bagian header, navbar, sidebar dan daftar artikel.

Berikut link source codenya jika anda belum memilikinya.

<a href="https://github.com/narakode/template-blog/blob/main/daftar-artikel.html" target="_blank">Template Blog Bagian Daftar Artikel</a>.

## Membuat Pagination

Untuk membuat pagination, gunakan tag `div` dengan class `pagination`.

Di dalamnya, isi dengan daftar nomor halaman.

Taruh kode pagination di bawah __daftar artikel__.

```html
 <div class="container">
  <main>
    <section class="posts">
      <!-- Daftar Artikel -->

      <!-- Pagination -->
      <div class="pagination">
        <span class="pagination-link active">1</span>
        <a class="pagination-link" href="">2</a>
        <a class="pagination-link" href="">3</a>
        <a class="pagination-link" href="">3</a>
        <a class="pagination-link" href="">Next</a>
      </div>

    </section>

    <aside>
      <!-- Sidebar -->
    </aside>

  </main>
</div>
```

***

![Pagination]({{ site.baseurl }}/assets/img/css/blog/footer/pagination.png)

***

### Tambahkan Style Pagination

Tambahkan style css pada pagination.

Di sini, saya mengatur tata letak daftar, warna, dll.

```css
.pagination {
  display: flex;
}
.pagination-link {
  padding: 10px 15px;
  border: 1px solid #ecf0f1;
  border-right-width: 0;
}
.pagination-link:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.pagination-link:last-child {
  border-right-width: 1px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.pagination-link.active {
  background-color: #3498db;
  border-color: #3498db;
  color: #fff;
}
.pagination-link:hover, span.pagination-link {
  background-color: #ecf0f1;
}
```

***

![Pagination Style]({{ site.baseurl }}/assets/img/css/blog/footer/pagination-style.png)

***

## Membuat Footer

Lanjut, kita buat bagian footer menggunakan tag `footer`.

Isi dengan daftar link navigasi footer.

Taruh kode berikut di bawah **container daftar artikel**.

```html
<!-- Daftar Artikel -->

<!-- Footer -->
<footer>
  <div class="container">
    <div class="footer-link">
      <a href=""><b>&copy; 2021 - Narakode</b></a>
      <a href="">Tentang</a>
      <a href="">Kontak</a>
      <a href="">Dukung</a>
    </div>
  </div>
</footer>
```

***

![Footer]({{ site.baseurl }}/assets/img/css/blog/footer/footer.png)

***

### Tambahkan Style Footer

Tambahkan style CSS pada footer.

Di sini, saya mnegatur tata letak, warna, dll.

```css
footer {
  background-color: #34495e;
  color: #ecf0f1;
  padding: 1.5rem 0;
}
.footer-link {
  display: flex;
  margin: 0 -0.5rem;
}
.footer-link a {
  padding: 0 0.5rem;
}
```

***

![Footer Style]({{ site.baseurl }}/assets/img/css/blog/footer/footer-style.png)

***

## Hasil Akhir

Berikut adalah hasil akhir dari pembuatan pagination dan footer pada template blog.

***

![Hasil Akhir]({{ site.baseurl }}/assets/img/css/blog/footer/hasil.png)

***

## Selanjutnya

Selanjutnya kita akan membuat bagian **baca artikel**, yang akan saya buat pada postingan selanjutnya.

Sekian postigan kali ini, untuk __source code__ anda dapat mengunduhnya pada tautan berikut. 

<a href="https://github.com/narakode/template-blog" target="_blank">Source Code Template Blog</a>