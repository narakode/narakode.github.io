---
layout: post
title: "Belajar CSS : Mengatur Margin Pada CSS"
date: 2021-10-13 08:00:00 +0700
cover: mengatur-margin-css.png
thumb: mengatur-margin-css.png
categories: css
---

[Margin]({{ page.url }}) - Terdapat dua properti unuk mengatur jarak elemen pada CSS, yaitu __margin__ dan __padding__.

Margin untuk mengatur jarak keluar elemen, padding mengatur jarak kedalam elemen.

Pada postingan ini, saya akan membahas mengenai properti margin terlebih dahulu.

Langsung saja, berikut pembahasanya.

## Margin

Margin adalah properti CSS untuk mengatur jarak keluar elemen.

Terdapat 4 jenis margin berdasarkan sisinya, yaitu:

* `margin-top`: Jarak ke atas luar
* `margin-right`: Jarak ke kanan luar
* `margin-bottom`: Jarak ke bawah luar
* `margin-left`: Jarak ke kiri luar

Untuk nilainya dapat menggunakan satuan ukuran seperti px, rem, %, dll.

Contoh.

```css
p {
  border: 1px solid red;
}
.paragraf-1 {
  margin-top: 40px;
  margin-right: 40px;
  margin-bottom: 20px;
  margin-left: 40px;
}
.paragraf-2 {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
```

***

![Margin]({{ site.baseurl }}/assets/img/css/margin-padding/margin.png)

***

### Nilai Auto

Properti margin memiliki nilai selain satuan ukuran, yaitu __auto__.

Nilai _auto_ berfungsi untuk mengatur posisi elemen agar berada di tengah secara horizontal.

Contoh.

```css
p {
  border: 1px solid red;
  width: 200px;
  margin: auto;
}
```

***

![Margin Auto]({{ site.baseurl }}/assets/img/css/margin-padding/margin-auto.png)

***

## Shorthand

Margin memiliki **shorthand** untuk menuliskan kode _margin_ dalam satu baris, yaitu dengan properti `margin`.

Contoh.

```css
p {
  border: 1px solid red;
}
.paragraf-1 {
  margin: 20px;
}
.paragraf-2 {
  margin: 20px 40px;
}
.paragraf-3 {
  margin: 20px 40px 10px 50px;
}
```

***

![Margin Shorthand]({{ site.baseurl }}/assets/img/css/margin-padding/margin-shorthand.png)

***

Berikut penjelasanya.

* `margin` dengan 1 nilai, maka semua sisi margin akan bernilai sama.
* `margin` dengan 2 nilai, nilai pertama untuk `margin-top` dan `margin bottom`, nilai kedua untuk `margin right` dan `margin left`.
* `margin` dengan 4 nilai, maka nilai pertama untuk `margin-top`, nilai kedua untuk `margin right`, nilai ketiga untuk `margin left`, dan nilai keempat untuk `margin bottom`.

## Referensi

Silakan kunjungi tautan berikut untuk penjelasan lebih lanjut.

<a href="https://www.w3schools.com/css/css_margin.asp" target="_blank">CSS Margin</a>