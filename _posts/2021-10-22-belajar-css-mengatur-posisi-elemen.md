---
layout: post
title: "Belajar CSS : Mengatur Posisi Elemen"
date: 2021-10-22 06:50:00 +0700
cover: mengatur-posisi-elemen.png
thumb: mengatur-posisi-elemen.png
categories: css
---

[Mengatur Posisi Elemen]({{ page.url }}) - Posisi elemen dapat diatur dengan CSS.

CSS sudah menyediakan properti khusus untuk posisi elemen, yaitu __position__.

Langsung saja mari kita simak pembahasanya berikut.

## Mengatur Posisi Elemen

Untuk mengatur posisi elemen, gunakan properti __position__.

Properti Position adalah properti yang berfungsi untuk __mengatur sifat/tipe posisi__ sebuah elemen.

Properti position memiliki beberapa nilai, antara lain:

* `static`
* `relative`
* `absolute`
* `fixed`
* `sticky`

Biasanya properti position dipadukan dengan properti-properti untuk mengatur koordinat posisi elemen, yaitu:

* `top`, mengatur koordinat atas
* `bottom`, mengatur koordinat bawah
* `left`, mengatur koordinat kiri
* `right`, mengatur koordinat kanan

Nilai koordinat tersebut dapat berupa angka biasa atau satuan ukuran.

Selanjutnya kita akan membahas mengenai jenis-jenis position.

### Position Static

Position Static mengatur posisi elemen menjadi statis, yang berarti posisinya **tetap** pada posisi awal, tidak berpindah-pindah.

Position static merupakan nilai *default* setiap elemen HTML.

```html
<div class="biru">Biru</div>
<div class="hijau">Hijau</div>
```

```css
div {
  position: static;
  padding: 10px;
}
.biru {
  background-color: blue;
}
.hijau {
  background-color: green;
}
```

***

![Position Static]({{ site.baseurl }}/assets/img/css/position/static.png)

***

### Position Relative

Posistion Relative mengatur posisi elemen menjadi relatif, **dapat dipindahkan** ke arah yang ditentukan.

Untuk mengatur arah pemindahanya gunakan properti koordinat yang sudah dijelaskan di atas.

```html
<div class="biru">Biru</div>
<div class="hijau">Hijau</div>
```

```css
div {
  position: relative;
  padding: 10px;
}
.biru {
  background-color: blue;
  top: 10px;
  right: 10px;
}
.hijau {
  background-color: green;
  top: 20px;
  left: 20px;
}
```

***

![Position Relative]({{ site.baseurl }}/assets/img/css/position/relative.png)

***

### Position Absolute

Position Absolute mengatur posisi elemen menjadi absolut, **dapat dipindahkan** ke arah yang ditentukan.

Berbeda dengan postion relatif, elemen absolute akan **berpindah relatif** terhadap elemen induknya yang posisinya relatif.

```html
<div class="relatif">
  <div class="biru">Biru</div>
  <div class="hijau">Hijau</div>
</div>
```

```css
div {
  padding: 10px;
}
.relatif {
  position: relative;
  border: 1px solid red;
  height: 200px;
}
.biru {
  position: absolute;
  bottom: 0px;
  left: 20px;
  background-color: blue;
}
.hijau {
  background-color: green;
}
```

***

![Position Absolute]({{ site.baseurl }}/assets/img/css/position/absolute.png)

***


### Position Fixed

Position Fixed mengatur posisi elemen menjadi fixed, **posisinya tetap** meskipun halaman di-*scroll*.

Elemen fixed dapat dipindahkan posisinya ke arah yang ditentukan **relatif terhadap layar**.

```html
<div class="biru">Biru</div>
<p>...</p>
```

```css
.biru {
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 10px;
  background-color: blue;
}
```

***

![Position Fixed]({{ site.baseurl }}/assets/img/css/position/fixed.png)

***

Ketika halaman di-*scroll* posisi kotak biru akan tetap di pojok kiri bawah.

### Position Sticky

Position Sticky mengatur elemen menjadi sticky, sifat posisinya bergantung pada **posisi scroll**.

Jika posisi elemen belum terkena scroll, elemen tersebut akan bersifat __relatif__, jika elemen tersebut sudah terkena scroll akan berubah menjadi __fixed__.

```html
<div class="biru">Biru</div>
<p>...</p>
```

```css
.biru {
  position: sticky;
  top: 0;
  left: 0;
  padding: 10px;
  background-color: blue;
}
```

***

![Position Sticky]({{ site.baseurl }}/assets/img/css/position/sticky.png)

***

Ketika belum di-*scroll* posisi kotak biru akan __relative__, ketika halaman di-*scroll* kotak biru akan menjadi __fixed__.

## Referensi

Untuk penjelasan lebih lanjut, anda dapat mengunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_positioning.asp" target="_blank">CSS Positioning</a>