---
layout: post
title: "Cara Membuat Template Blog : Membuat Template Menjadi Responsive"
date: 2021-11-13 07:30:00 +0700
cover: template-blog-responsive.png
thumb: template-blog-responsive.png
categories: css
---

[Template Responsive]({{ page.url }}) - Pengunjung sebuah website tidak hanya datang dari satu **perangkat** saja.

Ada yang dari _laptop_, _smartphone_, _tablet_, dll.

Pada pembuatan template sebelumnya, template tersebut hanya dapat tampil dengan apik di ukuran **layar desktop** saja.

Ketika dibuka di perangkat yang lebih kecil seperti tablet atau smartphone, tampilanya menjadi **hancur**.

***

![Tidak Responsive]({{ site.baseurl }}/assets/img/css/blog/responsive/unresponsive.png)

***

Pada postingan kali ini, kita akan mengatur template blog agar menjadi responsive di berbagai perangkat.

Langsung saja, berikut langkah-langkahnya.

## Mengatur Responsive Di Layar Desktop Kecil

Pertama, atur template ketika dibuka di ukuran layar dibawah `1024px`, atau pada ukuran __desktop kecil__.

Sebelumnya, artikel dan sidebar ditampilkan **sejajar** dalam bentuk **kolom**, ketika layar mengecil kolom menjadi semakin sempit dan __tidak responsive__.

Untuk itu kita atur tampilan artikel dan sidebar menjadi **penuh** ketika dibuka di layar desktop kecil.

```css
@media screen and (max-width: 1024px) {
  main {
    flex-wrap: wrap;
  }
  section.posts, aside {
    width: 100%;
  }
  .pagination {
    margin-bottom: 1.5rem;
  }
}
```

***

![Responsive di Layar Desktop Kecil]({{ site.baseurl }}/assets/img/css/blog/responsive/desktop.png)

***

## Mengatur Responsive Di Layar Tablet

Ada dua elemen yang tidak responsive ketika dibuka di layar tablet, **header** dan **daftar artikel**.

Pertama, kita **sembunyikan** daftar link pada header ketika dibuka di layar tablet.

Kemudian, atur tampilan daftar artikel menjadi **baris** antara gambar thumbnail dan informasi artikel.

```css
@media screen and (max-width: 768px) {
  header .header-link {
    display: none;
  }

  article {
    flex-wrap: wrap;
  }
  article .post-thumbnail {
    width: 100%;
    max-height: 300px;
  }
}
```

***

![Responsive di Layar Tablet]({{ site.baseurl }}/assets/img/css/blog/responsive/tablet.png)

***

## Mengatur Responsive Di Layar Smartphone

Disini saya hanya mengatur navbar, agar dapat di- __scroll horizontal__ ketika dibuka di _smartphone_.

```css
@media screen and (max-width: 480px) {
  nav .nav-link {
    overflow-x: scroll;
  }
}
```

***

![Responsive di Layar Smartphone]({{ site.baseurl }}/assets/img/css/blog/responsive/phone.png)

***

## Selanjutnya

Selanjutnya, anda dapat berkereasi lebih banyak secara mandiri, seperti membuat halaman form kontak, daftar kategori, dll.

Sekian postigan kali ini, untuk __source code__ anda dapat mengunduhnya pada tautan berikut. 

<a href="https://github.com/narakode/template-blog" target="_blank">Source Code Template Blog</a>