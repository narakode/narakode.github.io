---
layout: post
title: "Mengenal Jenis Satuan Ukuran Pada CSS"
date: 2021-10-09 15:00:00 +0700
cover: jenis-satuan-ukuran-css.png
thumb: jenis-satuan-ukuran-css.png
categories: css
---

[Satuan Ukuran]({{ page.url }}) - Pada CSS terdapat beberapa property yang nilainya berupa ukuran/unit, seperti `width`, `height`, `margin`, dsb.

Untuk mengisi nilai tersebut anda dapat menggunakan satuan ukuran yang sudah disediakan CSS.

Satuan tersebut dikelompokan berdasarkan jenis yang memiliki fungsi dan cara penggunaanya masing-masing.

Langsung saja berikut daftar __jenis satuan ukuran pada CSS__.

## Pixel (px)

Satuan ini adalah satuan yang paling umum digunakan. Satuan ini menghitung ukuran pixel pada layar.

```css
.kotak {
  width: 200px;
}
```

Nilai satuan *pixel* bersifat __absolut__, artinya tidak dipengaruhi ukuran layar atau elemen induknya.

## Persen (%)

Satuan ini menghitung nilai berdasarkan presentase elemen induknya.

```css
.kotak {
  width: 200px;
}
.kotak > .lingkaran {
  width: 50%; /* 100px */;
}
```

Nilai dari selector `.lingkaran` adalah setengah dari selector `.kotak` yaitu `100px`.

## REM

Satuan ini menghitung nilai berdasarkan nilai `font-size` dari root elemen `html`.

Misal ukuran `font-size` elemen `html` adalah `16px`, maka:

* 1rem = 16px
* 2rem = 32px
* 3rem = 48px
* dst.

```css
html {
  font-size: 20px;
}
.paragraf1 {
  font-size: 1rem; /* 20px */
}
.paragraf2 {
  font-size: 2rem; /* 40px */
}
.paragraf3 {
  font-size: 3rem; /* 60px */
}
```

## EM

Satuan ini menghitung nilai berdasarkan nilai `font-size` dari elemen tersebut.

Misal ukuran `font-size` elemen `p` adalah `20px`, maka:

* 1em = 20px
* 2em = 40px
* 3em = 60px
* dst.

```css
p {
  font-size: 40px;
  width: 1em; /* 40px */;
  height: 2em; /* 80px */; 
}
```

## VH & VW

Satuan ini menghitung nilai berdasarkan ukuran `viewport` (area yang terlihat pada halaman web).

* VH (Viewport Height), relatif terhadap tinggi viewport, `1vh` setara `1/100` tinggi viewport
* VW (Viewport Width), relatif terhadap lebar viewport, `1wh` setara `1/100` lebar viewport

Contoh ukuran lebar viewport `1366px` dan tinggi `652px`, maka:

* 50vw = 683px
* 50vh = 326px

```css
.kotak {
  width: 50vw;
  height: 70vh;
}
```

## Jenis Lainya

Untuk jenis lainya anda dapat membacanya pada tautan berikut.

<a href="https://www.w3schools.com/cssref/css_units.asp" target="_blank">CSS Units</a>