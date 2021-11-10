---
layout: post
title: "Cara Membuat Template Blog : Daftar Artikel dan Sidebar"
date: 2021-11-09 07:00:00 +0700
cover: membuat-template-blog-artikel.png
thumb: membuat-template-blog-artikel.png
categories: css
---

[Daftar Artikel]({{ page.url }}) - Sebuah blog terdiri dari kumpulan artikel, artikel tersebut biasanya ditampilkan dalam bentuk __daftar__ di halaman beranda.

Daftar artikel umumnya memuat informasi dasar seputar artikel tersebut, seperti judul, gambar thumbnail, dan konten sekilas.

Pada kali ini kita akan belajar membuat template blog bagian __daftar artikel__, berikut langkah-langkahnya.

## Persiapan

Sebelum membuat bagian daftar artikel, pastikan anda sudah memiliki source code bagian header dan navbar.

<a href="https://github.com/narakode/template-blog/blob/main/navbar-dan-header.html" target="_blank">Template Blog Header dan Navbar</a>.

Kode bagian daftar artikel akan diletakan **di bawah navbar**.

## Membuat Daftar Artikel

Tambahkan kotak **container** sebagai wadah utama, isi dengan tag **main** sebagai penanda elemen ini adalah bagian utama dari blog.

```html
<div class="container">
  <main>
    <!-- Daftar Artikel -->
  </main>
</div>
```

Setiap artikel dibuat dengan tag **article**, kemudian dikumpulan di tag **section**.

```html
<div class="container">
  <main>
    <section class="posts">
      <h2 class="heading">Postingan Terbaru</h2>

      <article>
        <img class="post-thumbnail" src="post-1.jpg">
        <div class="post-content">
          <a href="" class="post-link">Belajar HTML : Mengenal HTML</a>
          <div class="post-meta">
            <time>22 Mei 2020</time> - <span>oleh Narakode</span>
          </div>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </article>

      <!-- Artikel 3, Artikel 4, dst. -->
    </section>
  </main>
</div>
```

***

![Daftar Artikel]({{ site.baseurl }}/assets/img/css/blog/content/article.png)

***

### Menambahkan Style CSS

Dapat dilihat hasil sebelumnya tampilan masih berantakan.

Kita mulai dengan memberikan _flexbox_ pada main, mengatur ukuran gambar, mengatur judul, dan mengatur lebar daftar artikel.

```css
main {
  display: flex;
  margin: 2rem -1rem;
}
img {
  max-width: 100%;
}
section.posts {
  padding: 0 1rem;
  width: 75%;
}
.posts .heading {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}
```

***

![Main Style]({{ site.baseurl }}/assets/img/css/blog/content/main.png)

***

Kemudian kita beri style CSS untuk **mengatur daftar artikelnya**.

```css
article {
  display: flex;
  margin: 0 -0.5rem 1.5rem -0.5rem;
}
article .post-thumbnail {
  width: 30%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 10px;
  padding: 0 0.5rem;
}
article .post-content {
  padding: 0.5rem;
}
article .post-link {
  font-weight: bold;
  font-size: 1.5rem;
  color: #2c3e50;
  display: block;
  margin-bottom: 0.7rem;
}
article .post-meta {
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}
p {
  line-height: 1.8;
}
```

***

![Content Style]({{ site.baseurl }}/assets/img/css/blog/content/content.png)

***

## Menambahkan Sidebar

Selanjutnya, kita tambahkan sidebar menggunakan tag **sidebar**.

Di dalamnya isi dengan daftar kategori dan postingan populer.

```html
<div class="container">
  <main>
    <section class="posts">
      <!-- Daftar Artikel -->
    </section>

    <aside>
      <div class="sidebar-content">
        <h2>Kategori</h2>
        <ul>
          <li>
            <i class="fa fa-folder sidebar-icon"></i>
            <a href="">HTML</a>
          </li>
          <!-- Daftar Lainya -->
        </ul>
      </div>
      <div class="sidebar-content">
        <h2>Post Populer</h2>
        <ul>
          <li>
            <i class="fa fa-angle-right sidebar-icon"></i>
            <a href="" class="post-link">Belajar HTML : Mengenal HTML</a>
          </li>
          <!-- Postingan Populer Lainnya -->
        </ul>
      </div>
    </aside>
  </main>
</div>
```

***

![Sidebar]({{ site.baseurl }}/assets/img/css/blog/content/sidebar.png)

***

### Menambahkan Ikon Sidebar

Pada kode sidebar di atas, saya menggunakan ikon dari _font-awesome_. Untuk menggunakanya, tambahkan kode link _font-awesome_ berikut di dalam tag **head**.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```

***

![Sidebar Icon]({{ site.baseurl }}/assets/img/css/blog/content/sidebar-icon.png)

***

### Menambahkan Style CSS

Tambahkan style CSS untuk mengatur **sidebar**.

Di sini saya mengatur ukuran sidebar, lalu menambahkan border pada kotak sidebar, dan mengatur jarak sidebar.

```css
aside {
  padding: 0 1rem;
}
aside {
  width: 25%;
}
.sidebar-content {
  padding: 1rem;
  border: 1px solid #ecf0f1;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.sidebar-content ul {
  list-style: none;
  padding: 1rem 0;
}
.sidebar-content li {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
}
.sidebar-icon {
  margin-right: 15px;
  margin-top: 2px;
}
```

***

![Sidebar Style]({{ site.baseurl }}/assets/img/css/blog/content/sidebar-style.png)

***

## Hasil Akhir

Berikut adalah hasil akhir dari pembuatan daftar artikel pada template blog.

***

![Hasil Akhir]({{ site.baseurl }}/assets/img/css/blog/content/hasil.png)

***

## Selanjutnya

Selanjutnya kita akan membuat bagian **pagination** dan **footer**, yang akan saya buat pada postingan selanjutnya.

Sekian postigan kali ini, untuk __source code__ anda dapat mengunduhnya pada tautan berikut. 

<a href="https://github.com/narakode/template-blog" target="_blank">Source Code Template Blog</a>