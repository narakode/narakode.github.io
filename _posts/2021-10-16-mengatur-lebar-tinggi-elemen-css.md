---
layout: post
title: "Belajar CSS : Mengatur Lebar Dan Tinggi Elemen"
date: 2021-10-16 07:00:00 +0700
cover: mengatur-lebar-dan-tinggi-css.png
thumb: mengatur-lebar-dan-tinggi-css.png
categories: css
---

[Lebar dan Tinggi]({{ page.url }}) - Sebuah elemen HTML memiliki lebar dan tinggi pada spesifikasinya.

Lebar dan Tinggi tersebut dapat diatur dengan css menggunakan properti __width__ untuk lebar, dan __height__ untuk tinggi.

Langsung saja berikut penjelasanya.

## Property Width

Property `width` digunakan untuk mengatur lebar elemen HTML.

Untuk nilainya dapat berupa satuan ukuran seperti px, %, dll.

Contoh.

```css
div {
  height: 50px;
  margin: 20px;
}
.kotak-1 {
  width: 200px;
  background: red;
}
.kotak-2 {
  width: 400px;
  background: blue;
}
```

***

![Width]({{ site.baseurl }}/assets/img/css/width-height/width.png)

***

## Property Height

Property `height` digunakan untuk mengatur tinggi elemen HTML.

Untuk nilainya dapat berupa satuan ukuran seperti px, %, dll.

Contoh.

```css
div {
  margin: 20px;
}
.kotak-1 {
  width: 200px;
  height: 100px;
  background: red;
}
.kotak-2 {
  width: 400px;
  height: 200px;
  background: blue;
}
```

***

![Height]({{ site.baseurl }}/assets/img/css/width-height/height.png)

***

## Referensi

Untuk penjelasan lebih lengkap, anda dapat mengunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_dimension.asp" target="_blank">CSS Dimension</a>