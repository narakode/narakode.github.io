---
layout: post
title: "Cara Menampilkan Gambar di HTML"
date: 2021-04-11 08:09:00 +0700
cover: menampilkan-gambar-html.png
thumb: menampilkan-gambar-html-thumb.png
categories: html
---

Dalam sebuah halaman website, gambar merupakan komponen penting yang sering dijumpai.

Untuk itu mari kita belajar tentang cara menampilkan gambar di HTML.

## Menampilkan Gambar

Untuk menampilkan gambar di HTML, kita dapat menggunakan tag `img`.

Tag ini adalah salah satu tag di HTML yang tidak memerlukan tag penutup.

Agar gambar dapat ditampilkan, di tag ini juga kita harus menyertakan atribut `src` yang diisi dengan alamat atau file gambar.

Contoh

```html
<img src="burger.jpg">
```

Hasilnya

***

![Menampilkan Gambar]({{ site.baseurl }}/assets/img/tag-img.png)

***

Contoh diatas menggunakan alamat url gambar yang relatif, anda juga dapat menampilkan gambar yang ada di website lain dengan menggunakan alamat url yang absolut.

Penjelasanya dapat dilihat di postingan sebelumnya.

## Atribut Alt

Salah satu atribut di tag `img` yang tidak kalah penting adalah atribut `alt`.

Atribut ini berfungsi untuk memberikan alternatif pada gambar berupa teks yang muncul jika gambar tersebut tidak dapat ditampilkan.

Contoh

```html
<img src="burgere.jpg" alt="Gambar Burger">
```

Hasilnya

***

![Atribut Alt]({{ site.baseurl }}/assets/img/atribut-alt.png)

***

Dikarenakan salah penulisan nama file gambar, sehingga gambarnya pun tidak muncul, tapi dengan adanya atribut `alt` munculah sebuah teks sebagai alternatif dari gambar yang tidak muncul tersebut.

## Atribut Width dan Height

Selanjutnya ada atribut width dan height, yang berfungsi untuk mengatur ukuran lebar dan tinggi gambar.

Width untuk lebarnya, height untuk tingginya.

Contoh

```html
<img src="burger.jpg" width="400px" height="400px">
```

Hasilnya

***

![Atribut Width dan Height]({{ site.baseurl }}/assets/img/atribut-width-dan-height.png)

***

Untuk satuanya kalian bisa menggunakan px, em, rem, persen, dll.