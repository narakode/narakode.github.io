---
layout: post
title: "Belajar CSS Flexbox : Menggunakan Flexbox"
date: 2021-10-30 07:30:00 +0700
cover: font-awesome.png
thumb: font-awesome.png
categories: css
---

[Flexbox]({{ page.url }}) - Flexbox merupakan salah satu fitur CSS yang wajib anda kuasai.

Karena dengan flexbox anda dapat menyeselaikan berbagai macam permasalahan pada halaman web, seperti mengatur tata letak halaman, mengatur posisi elemen, dll.

Langsung saja, mari kita mulai belajar flexbox dari mengenalnya terlebih dahulu.

## Mengenal Flexbox

Flexbox adalah fitur CSS untuk __mengatur__ atau __menata elemen__.

Elemen pada flexbox disimbolkan dengan __box__ (kotak), yang dapat diatur arah, ukuran, dan posisinya, pada elemen *container*.

Flexbox terdiri dari beberapa properti dengan fungsi yang berbeda-beda.

Berikut adalah beberapa __fungsi flexbox__:

* Menata Elemen
* Mengatur Posisi Elemen
* Mengatur Tata Letak Halaman
* Membuat Tata Letak Responsif
* dll.

## Menggunakan Flexbox

Langsung saja, berikut adalah __cara menggunakan flexbox__.

### Membuat Container

Langkah pertama, buatlah sebuah *container* untuk menjadi wadah dari *flexbox*.

```html
<div class="container">
  <!-- Isi Flexbox -->
</div>
```

### Menambahkan Style Pada Container

Tambahkan beberapa style css dasar pada *container*.

```css
.container {
  width: 600px;
  height: 400px;
  border: 1px solid black;
}
```

***

![Container]({{ site.base_url }}/assets/img/css/flexbox/1/container.png)

***

### Mengisi Container

Isi kontainer yang sudah dibuat dengan beberapa elemen.

```html
<div class="container">
  <div class="kotak kotak-1"></div>
  <div class="kotak kotak-2"></div>
  <div class="kotak kotak-3"></div>
  <div class="kotak kotak-4"></div>
  <div class="kotak kotak-5"></div>
</div>
```

### Menambahkan Style Pada Isian Container

Tambahkan style css pada isian _container_ agar dapat dilihat hasilnya.

```css
.kotak {
  width: 100px;
  height: 100px;
}
.kotak-1 { background-color: red }
.kotak-2 { background-color: blue }
.kotak-3 { background-color: yellow }
.kotak-4 { background-color: green }
.kotak-5 { background-color: black }
```

***

![Isi]({{ site.base_url }}/assets/img/css/flexbox/1/isi.png)

***

### Menggunakan Flexbox

Pada hasil sebelumnya kotak-kotak tampak berantakan, untuk merapikanya gunakan __flexbox__.

Dengan cara menambahkan properti `display` dengan nilai `flex` pada *container*.

```css
.container {
  width: 600px;
  height: 400px;
  border: 1px solid black;
  /* Flexbox */
  display: flex;
}
```

***

![Flexbox]({{ site.base_url }}/assets/img/css/flexbox/1/flexbox.png)

***

Tampilan kotak berubah menjadi menyamping.

## Selanjutnya

Masih banyak properti dan penggunaan __flexbox__ yang akan saya bahas pada postingan selanjutnya.

Anda juga dapat membacanya pada tautan berikut.

<a href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank">CSS Flexbox</a>