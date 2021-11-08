---
layout: post
title: "Cara Membuat Template Blog : Bagian Header dan Navbar"
date: 2021-11-08 09:00:00 +0700
cover: membuat-template-blog-header-navbar.png
thumb: membuat-template-blog-header-navbar.png
categories: css
---

[Header dan Navbar]({{ page.url }}) - Blog terdiri atas sekumpulan komponen/elemen, di antaranya header dan navbar.

Header adalah bagian blog yang menampilkan __identitas blog__ tersebut, seperti judul, deskripsi, dsb.

Navbar adalah bagian blog yang menampilkan __navigasi__ menuju menu atau halaman yang ada pada blog tersebut.

Keduanya umumnya berada di bagian atas blog, maka dari itu mendesain keduanya menjadi langkah pertama dalam __membuat template blog__.

Langsung saja, berikut adalah langkah-langkahnya.

## Membuat Kerangka HTML

Buat sebuah file HTML, isi dengan struktur HTML dasar.

Disini saya menggunakan font dari _google-font_.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Teknologi</title>

  <!-- Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet">
</head>
<body> 
  <!-- Template -->
</body>
</html>
```

### Tambahkan Style Dasar

Tambakan style dasar pada halaman website.

```css
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'PT Sans', sans-serif;
  color: #2c3e50;
}
a {
  text-decoration: none;
  color: inherit;
}
.container {
  max-width: 1140px;
  margin: auto;
  padding: 0 1rem;
}
```

## Membuat Header

Selanjutnya, kita buat __header__-nya terlebih dahulu, dengan menggunakan tag `<header>`.

Di dalamnya isi dengan beberapa elemen, seperti _logo_, _link_, dan _kotak pencarian_.

```html
<div class="container">
  <header>
    <div class="left">
      <a href="" class="logo">Blog Teknologi</a>
      <div class="header-link">
        <a href="" class="active">Beranda</a>
        <a href="">Tentang</a>
        <a href="">Kontak</a>
      </div>
    </div>

    <div class="right">
      <input type="search" placeholder="Cari Artikel" class="header-search">
    </div>
  </header>
</div>
```

***

![Header]({{ site.baseurl }}/assets/img/css/blog/header.png)

***

### Mendesain Header

Kemudian __desain header__ dengan menggunakan CSS.

```css
header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}
header .left {
  display: flex;
  align-items: center;
}
header .logo {
  margin-right: 1.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: #2c3e50;
}
header .header-link {
  display: flex;
}
header .header-link a {
  margin-right: 1rem;
  color: #34495e;
}
header .header-link a:hover, header .header-link a.active {
  color: #2c3e50;  
}
header .header-search {
  padding: .8rem;
  border: 1px solid #ecf0f1;
  border-radius: 5px;
}
header .header-search:focus {
  padding: .8rem;
  outline: none;
  border-color: #3498db;
}
```

***

![Header Style]({{ site.baseurl }}/assets/img/css/blog/header-style.png)

***

## Membuat Navbar

Selanjutnya, kita buat __navbar__-nya, dengan menggunakan tag `<nav>`

Didalamnya, berisi link-link menu yang ada pada website.

```html
<nav>
  <div class="container">
    <div class="nav-link">
      <a href="">HTML</a>
      <a href="">CSS</a>
      <a href="">Javascript</a>
      <a href="">PHP</a>
      <a href="">Bootstrap</a>
    </div>
  </div>
</nav>
```

***

![Navbar]({{ site.baseurl }}/assets/img/css/blog/navbar.png)

***

### Mendesain Navbar

Kemudian, __desain navbar__ dengan CSS.

```css
nav {
  background-color: #3498db;
}
nav .nav-link {
  display: flex;
  margin: 0 -1rem;
}
nav a {
  color: #ecf0f1;
  padding: 1rem;
  position: relative;
}
nav a:after {
  content: '';
  background-color: #f1c40f;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  display: none;
}
nav a:hover:after {
  display: block;
}
```

***

![Navbar Style]({{ site.baseurl }}/assets/img/css/blog/navbar-style.png)

***

## Selanjutnya

Selanjutnya kita akan membuat bagian **daftar artikel** dan **sidebar**, yang akan saya buat pada postingan selanjutnya.

Sekian postigan kali ini, untuk __source code__ anda dapat mengunduhnya pada tautan berikut. 

<a href="https://github.com/narakode/template-blog" target="_blank">Source Code Template Blog</a>