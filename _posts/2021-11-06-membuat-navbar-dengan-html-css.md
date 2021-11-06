---
layout: post
title: "Cara Membuat Navbar dengan HTML dan CSS"
date: 2021-11-06 07:00:00 +0700
cover: navbar-html-css.png
thumb: navbar-html-css.png
categories: css
---

[Navbar]({{ page.url }}) - Navbar adalah sebuah komponen navigasi pada website, yang berisi __menu/link__ ke suatu halaman.

Navbar merupakan salah satu elemen penting yang harus ada pada halaman website, untuk memudahkan pengunjung pada saat **berpindah** dari satu halaman ke halaman lainya.

Tampilan navbar pun harus dibuat semenarik mungkin, sehingga pengunjung menjadi nyaman ketika menggunakan navbar tersebut.

Langsung saja, berikut adalah langkah-langkah membuat navbar dengan HTML dan CSS.

## Membuat Kerangka Navbar

Untuk membuat navbar, gunakan tag __nav__. Di dalamnya isi dengan beberapa menu.

```html
<nav>
  <div class="nav-item">
    <a class="nav-link" href="beranda.html">Beranda</a>
  </div>
  <div class="nav-item">
    <a class="nav-link" href="tentang.html">Tentang</a>
  </div>
  <div class="nav-item">
    <a class="nav-link" href="kontak.html">Kontak</a>
  </div>
</nav>
```

***

![Kerangka Navbar]({{ site.baseurl }}/assets/img/css/navbar/kerangka.png)

***

## Menambah Style CSS

Selanjutnya kita tambah style css pada navbar.

### Style Body

Kita beri style css pada elemen _body_-nya dulu, dan mengganti _font_-nya.

Tambahkan kode font di dalam tag `<head>`.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;700&display=swap" rel="stylesheet"> 
```

Lalu, tambahkan kode cssnya.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-size: 16px;
}
```

***

![Style Body]({{ site.baseurl }}/assets/img/css/navbar/body.png)

***

### Style Navbar

Lanjut, kita beri style css pada elemen `nav`.

```css
nav {
  background-color: #FFFFFF;
  border-bottom: 1px solid #E7E6E1;
  display: flex;
}
```

***

![Style Nav]({{ site.baseurl }}/assets/img/css/navbar/nav.png)

***

### Style Navbar Item

Lanjut, kita beri style css pada isi navbar-nya.

```css
.nav-item {
  position: relative;
}
.nav-link {
  display: block;
  padding: 20px 15px;
  margin: 0;
  color: #314E52;
  text-decoration: none;
}
```

***

![Style Nav Item]({{ site.baseurl }}/assets/img/css/navbar/nav-item.png)

***

Navbar sudah jadi, selanjutnya kita tambah beberapa efek lainya untuk mempercantik navbar.

## Menambah Efek Hover dan Menu Aktif

Selanjutnya, tambahkan kode css berikut untuk memberikan efek menu aktif dan hover.

```css
.nav-link:after {
  content: "";
  display: none;
  height: 2px;
  width: 100%;
  position: absolute;
  bottom: -1px;
  left: 0;
  background-color: #11698E;
}
.nav-link.active, .nav-link:hover {
  color: #11698E;
}
.nav-link.active:after, .nav-link:hover:after {
  display: block;
}
```

Untuk menggunakanya, tambahkan class aktif pada salah satu menu nav.

```html
<a class="nav-link active" href="beranda.html">Beranda</a>
```

***

![Efek Aktif dan Hover]({{ site.baseurl }}/assets/img/css/navbar/efek.png)

***

## Menambah Menu Dropdown

Dropdown adalah __menu tambahan__ yang hanya tampil pada kondisi tertentu, misalnya ketika kursor diarahkan ke menu, atau ketika menu diklik.

Dengan css, kita dapat memanfaatkan efek __hover__ untuk membuat dropdown.

Tambahkan sebuah menu lagi di navbarnya, yang berisi menu _dropdown_-nya.

```html
<div class="nav-item">
  <a href="" class="nav-link">Menu</a>

  <div class="nav-dropdown">
    <a href="">Blog</a>
    <a href="">Halaman</a>
    <a href="">Video</a>
  </div>
</div>
```

Lalu tambahkan kode css dropdown-nya.

```css
.nav-item:hover .nav-dropdown {
  display: block;
}
.nav-dropdown {
  position: absolute;
  display: none;
  z-index: 999;
  top: 58px;
  left: 0px;
  width: 200px;
  padding-bottom: 10px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #E8E8E8;
}
.nav-dropdown a {
  display: block;
  padding: 10px;
  color: #314E52;
  text-decoration: none;
}
.nav-dropdown a:hover {
  background-color: #F6F6F6;
}
```

***

![Dropdown]({{ site.baseurl }}/assets/img/css/navbar/dropdown.png)

***

## Mengubah Warna Navbar

Untuk mengganti warna navbar, tambahkan **class baru** dengan rincian warnanya, disini saya menambahkan class biru untuk __mengubah warna__ navbar menjadi biru.

```css
nav.biru {
  background-color: #325288; /* warna bg navbar */
  border-color: #325288; /* warna bg navbar */
}
nav.biru .nav-link:after {
  background-color: #F2A154; /* warna border bawah navbar */
}
nav.biru .nav-link {
  color: #F4EEE8; /* warna teks navbar */
}
```

Lalu saya gunakan class tersebut pada navbar-nya.

```html
<nav class="biru">
  <!-- Isi Navbar -->
</nav>
```

***

![Mengubah Warna]({{ site.baseurl }}/assets/img/css/navbar/biru.png)

***

## Source Code

Anda dapat mengunduh source code navbar diatas pada tautan berikut.

<a href="https://github.com/narakode/navbar/" target="_blank">Source Code Navbar</a>