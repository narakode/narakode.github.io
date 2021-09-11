---
layout: post
title: "Mengenal Jenis-jenis Satuan Ukuran di CSS"
date: 2021-04-18 10:08:00 +0700
cover: jenis-satuan-ukuran-css.png
thumb: jenis-satuan-ukuran-css.png
categories: css
---

CSS memiliki property-property yang bernilai ukuran/unit, Seperti `width`, `height`, `margin`, dll. 

Untuk mengisi nilai dari property tersebut kita dapat menggunakan satuan ukuran yang disediakan CSS.

Berikut jenis-jenis satuan ukuran di CSS.

## Pixel (px)

Satuan ini adalah satuan yang sering digunakan. Satuan ini menghitung ukuran piksel pada layar.

```css
.kotak {
  width: 200px;
}
```

Nilai pada satuan *pixel* bersifat absolut, artinya nilai ini tidak dipengaruhi ukuran layar atau element induknya.

## Persen (%)

Satuan ini menghitung nilai berdasarkan presentase ukuran dari element induknya.

```css
.kotak {
  width: 50%;
}
```

## REM

Satuan ini menghitung nilai berdasarkan ukuran `font-size` pada *root element* yaitu `<html>`.

Misal ukuran `font-size` pada elemen root `16px`, maka `2rem` bernilai `32px`.

```css
html {
  font-size: 16px;
}
.kotak {
  width: 20rem;
}
```

## EM

Satuan ini menghitung nilai berdasarkan ukuran `font-size` pada elemen target.

Misal ukuran `font-size` pada elemen target `20px`, maka `2em` bernilai `40px`.

```css
.kotak {
  font-size: 20px;
  width: 20em;
}
```

## VH dan VW

Satuan ini menghitung nilai realtif terhadap `viewport`.

* VH ukurannya relatif terhadap tinggi viewport, `1vh` setara `1/100` tinggi viewport.
* VW ukurannya relatif terhadap lebar viewport, `1vw` setara `1/100` lebar viewport.

```css
.kotak {
  width: 50vw;
  height: 100vh;
}
```

***

Untuk jenis lainya silahkan kunjungi [https://www.w3schools.com/cssref/css_units.asp](https://www.w3schools.com/cssref/css_units.asp)