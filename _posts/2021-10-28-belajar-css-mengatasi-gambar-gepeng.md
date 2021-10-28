---
layout: post
title: "Belajar CSS : Mengatasi Gambar Gepeng"
date: 2021-10-28 07:00:00 +0700
cover: mengatasi-gambar-gepeng-css.png
thumb: mengatasi-gambar-gepeng-css.png
categories: css
---

[Gambar Gepeng]({{ page.url }}) - Salah satu elemen penting dalam halaman web adalah __gambar__.

Gambar ditampilkan dengan ukuran apa adanya, dan juga dapat diatur dengan properti `width` dan `height`.

Permasalahan pun muncul ketika ukuran lebar atau tinggi gambar lebih besar dari ukuran yang diatur, yaitu gambar menjadi __gepeng__.

***

![Kucing Gepeng]({{ site.baseurl }}/assets/img/css/gepeng/contoh.png)

***

Untuk mengatasinya, anda dapat menggunakan properti __Object Fit__.

Bagaimana caranya? Mari kita simak penjelasannya berikut.

## Mengatasi Gambar Gepeng

Untuk mengatasi gambar gepeng, gunakan properti __Object Fit__ dengan nilai __cover__.

Contoh.

```css
img {
  width: 400px;
  height: 200px;
  object-fit: cover;
}
```

***

![Object Fit]({{ site.baseurl }}/assets/img/css/gepeng/object-fit.png)

***

Gambar pun menjadi tidak gepeng.

### Cara Kerja Object Fit

Properti Object-Fit mempertahankan rasio aspek gambar dengan **memotong gambar** sesuai dengan ukuran yang ditentukan.

Sehingga gambar pun menjadi tidak gepeng.

## Mengatur Posisi Potongan Gambar

Seperti yang sudah dijelaskan diatas, object-fit akan **memotong gambar** agar tetap proposional tidak gepeng, potongan tersebut biasanya dimulai dari tengah.

Anda juga dapat mengatur posisi potongannya, dengan properti __object-position__, nilainya top, left, right, bottom, dan satuan ukuran.

Contoh.

```css
img {
  width: 400px;
  height: 200px;
  object-fit: cover;
  object-position: bottom
}
```

***

![Object Position]({{ site.baseurl }}/assets/img/css/gepeng/object-position.png)

***

Potongan pun dimulai dari bawah gambar.

## Referensi

Sekian postingan kali ini, anda dapat membaca lebih lanjut mengenai __object-fit__ pada tautan berikut.

<a href="https://www.w3schools.com/css/css3_object-fit.asp" target="_blank">CSS Object Fit Property</a>