---
layout: post
title: "Cara Menampilkan Gambar Pada HTML"
date: 2021-09-18 09:30:00 +0700
cover: menampilkan-gambar-html.png
thumb: menampilkan-gambar-html-thumb.png
categories: html
---

[Gambar Pada HTML]({{ page.url }}) - Gambar merupakan salah satu elemen penting yang kerap kali muncul pada halaman website.

Gambar berguna untuk menampilkan informasi lebih lanjut maupun sebagai pelengkap konten pada halaman website.

Untuk itu, mari kita simak cara-cara untuk menampilkan gambar pada halaman website berikut. 

## Menampilkan Gambar

Untuk menampilkan gambar di HTML, kita dapat menggunakan tag `img` (*image*).

Tag ini tidak memerlukan tag penutup pada penulisanya.

Agar gambar dapat ditampilkan, tag ini memerlukan atribut `src` yang diisi dengan alamat file gambar.

Contoh

```html
<img src="burger.jpg">
```

Hasilnya

***

![Menampilkan Gambar]({{ site.baseurl }}/assets/img/tag-img.png)

***

## Memberikan Alternatif Teks

Pada tag `img` terdapat sebuah atribut `alt` yang memiliki fungsi khusus.

Fungsi dari atribut `alt` untuk memberikan __alternatif teks__, yang akan muncul jika gambar tersebut tidak dapat ditampilkan.

Contoh

```html
<img src="burgere.jpg" alt="Gambar Burger">
```

Hasilnya

***

![Alternatif Teks]({{ site.baseurl }}/assets/img/atribut-alt.png)

***

Dikarenakan salah penulisan nama file gambar, sehingga gambarnya pun tidak muncul, namun dengan adanya atribut `alt`, munculah sebuah teks sebagai alternatif dari gambar yang tidak muncul tersebut.

## Mengubah Ukuran Gambar

Untuk mengubah ukuran pada gambar, kita dapat menggunakan atribut `width` dan `height`.

`Width` untuk mengatur lebarnya, dan `height` untuk mengatur tingginya.

Contoh

```html
<img src="burger.jpg" width="400px" height="400px">
```

Hasilnya

***

![Mengubah Ukuran Gambar]({{ site.baseurl }}/assets/img/atribut-width-dan-height.png)

***

Untuk satuanya kita bisa menggunakan px, em, rem, persen, dsb

## Menambahkan Bingkai/Border Pada Gambar

Untuk menambahkan bingkai pada gambar, kita dapat menggunakan atribut `border`, yang diisi dengan nilai ketebalan bingkainya.

Contoh

```html
<img src="enak.jpg" border="3">
```

Hasilnya

***

![Menambahkan Bingkai Pada Gambar]({{ site.baseurl }}/assets/img/border-gambar.png)

***

## Mengatur Posisi Gambar

Untuk mengatur posisi gambar, kita dapat menggunakan atribut `align`, yang diisi dengan posisinya.

Terdapat beberapa jenis posisi pada atribut `align`, antara lain:

* left (Kiri)
* right (Kanan)
* middle (Tengah)
* dsb

Contoh

```html
<img src="enak.jpg" align="right">
```

Hasilnya

***

![Mengatur Gambar]({{ site.baseurl }}/assets/img/posisi-gambar.png)

***

## Referensi

Untuk referensi, anda dapat mengunjungi link berikut yang berisi penjelasan lebih lengkap.

<a href="https://www.w3schools.com/html/html_images.asp" target="_blank">HTML Images</a>