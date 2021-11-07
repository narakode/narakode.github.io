---
layout: post
title: "Cara Membuat Layout Responsive dengan HTML dan CSS"
date: 2021-11-07 08:00:00 +0700
cover: layout-responsive-html-css.png
thumb: layout-responsive-html-css.png
categories: css
---

[Layout Responsive]({{ page.url }}) - Layout atau __tata letak__ adalah sebuah kerangka komponen HTML yang disatukan menjadi sebuah halaman website.

Mendesain layout merupakan salah satu langkah awal pada saat __mendesain website__.

Tentukan terlebih dahulu komponen apa saja yang ada pada website, lalu atur tata letaknya, dan langkah terakhir mengatur layout menjadi __responsive__.

## Apa itu Layout Responsive?

Layout responsive artinya layout tersebut dapat __tampil baik__ sesuai fungsinya pada layar perangkat apapun.

Contoh penggunaan layout responsive, ketika halaman dibuka di _desktop_ maka tampilan konten akan menjadi **dua kolom**, ketika dibuka di _mobile_ tampilan konten menjadi **satu kolom**.

## Membuat Layout

Langsung saja, berikut langkah-langkah membuat layout dengan HTML dan CSS.

### Membuat Kerangka Layout

Pertama buat kerangka layout dengan HTML, yang berisi, header, navbar sidebar, content, dan footer.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Layout Responsive</title>
</head>
<body>
  <div class="container">
    <header> <!-- Header -->
      <h1>Narakode</h1>
      <p class="subtitle">Lorem ipsum dolor...</p>
    </header>

    <nav> <!-- Navbar -->
      <a href="">Beranda</a>
      <a href="">Tentang Kami</a>
      <a href="">Hubungi Kami</a>
    </nav>

    <main>
      <article> <!-- Artikel/konten -->
        <div class="content">
          <h2>Belajar Layout</h2>
          <p>Lorem ipsum, dolor...</p>
          <p>Lorem ipsum, dolor...</p>
          <p>Lorem ipsum, dolor...</p>
        </div>
      </article>
      
      <aside> <!-- Sidebar -->
        <div class="content">
          <h3>Sidebar</h3>
          <p>Lorem ipsum dolor...</p>
        </div>
        <div class="content">
          <h3>Menu</h3>
          <p>Lorem ipsum dolor...</p>
        </div>
      </aside>
    </main>

    <footer class="content">Narakode - &copy; 2021</footer> <!-- Footer -->
  </div>
</body>
</html>
```

***

![Kerangka Layout]({{ site.baseurl }}/assets/img/css/layout/layout.png)

***

### Memberi Style Body

Lanjut kita beri style badan halamannya dulu, dengan css.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 18px;
  background-color: #ecf0f1;
  color: #34495e;
}
```

***

![Style Body]({{ site.baseurl }}/assets/img/css/layout/body.png)

***

### Mengganti Font

Ganti font halaman, disini saya menggunakan font dari Google Font, anda dapat menggantinya sesuai keinginan anda.

Taruh kode link berikut di dalam tag `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;700&display=swap" rel="stylesheet"> 
```

Lalu, pasang font tersebut pada css elemen body.

```css
body {
  font-family: 'Zen Kaku Gothic New', sans-serif;
  /* Isi Style Body */
}
```

***

![Font]({{ site.baseurl }}/assets/img/css/layout/font.png)

***

### Mengatur Container

Container adalah __wadah layout__, fungsi menggunakan container agar layout menjadi lebih tertata rapih.

```css
.container {
  max-width: 1000px;
  width: 100%;
  margin: 30px auto;
  padding: 0 1rem;
}
```

***

![Container]({{ site.baseurl }}/assets/img/css/layout/container.png)

***

### Mendesain Header dan Navbar

Lanjut, kita mulai desain header dan navbar.

```css
header {
  margin-bottom: 15px;
}
nav {
  background-color: #3498db;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
nav a {
  color: #ecf0f1;
  text-decoration: none;
  padding: 10px;
}
nav a:hover, nav a.active {
  background-color: #2980b9;
}
```

Tambahkan class `active` pada salah satu item nav untuk menggunakan efek nav aktif.

```html
<nav>
  <a href="" class="active">Beranda</a>
  <a href="">Tentang Kami</a>
  <a href="">Hubungi Kami</a>
</nav>
```

***

![Header dan Nav]({{ site.baseurl }}/assets/img/css/layout/header-dan-nav.png)

***

### Mendesain Konten dan Sidebar

Lanjut kita beri style css pada konten dan sidebar.

```css
main {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}
article, aside {
  padding: 0 10px;
}
article {
  width: 75%;
}
article h2, article p {
  margin-bottom: 10px;
}
aside {
  width: 25%;
}
.content {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
}
```

***

![Konten dan Sidebar]({{ site.baseurl }}/assets/img/css/layout/konten.png)

***

## Mengatur Resposnsive

Coba kita kecilkan layar halaman menjadi seukuran layar handphone.

***

![Layout Mobile]({{ site.baseurl }}/assets/img/css/layout/mobile.png)

***

Dapat dilihat sidebar menjadi __tidak responsive__, kontenya menjadi berantakan karena memaksakan ukuran yang tidak sesuai dengan layar perangkat.

Untuk mengatasinya, gunakan css __media-query__.

```css
@media screen and (max-width: 768px) {
  article, aside {
    width: 100%;
  }
}
```

Ketika ukuran layar dibawah `768px`, maka lebar konten dan sidebar menjadi `100%` atau full.

***

![Responsive]({{ site.baseurl }}/assets/img/css/layout/responsive.png)

***

## Source Code

Anda dapat mengunduh source code layout responsive diatas pada tautan berikut.

<a href="" target="_blank">Source Code Layout Responsive</a>