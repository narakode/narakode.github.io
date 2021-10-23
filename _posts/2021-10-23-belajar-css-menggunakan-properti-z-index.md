---
layout: post
title: "Belajar CSS : Menggunakan Properti Z-Index"
date: 2021-10-23 07:30:00 +0700
cover: menggunakan-properti-z-index-css.png
thumb: menggunakan-properti-z-index-css.png
categories: css
---

[Properti Z-Index]({{ page.url }}) - Pada postngan sebelumnya, kita sudah membahas mengenai __position__ pada CSS.

Beberapa jenis posistion akan membuat elemen tersebut menjadi melayang atau menumpuk diatas elemen lain, seperti position `relative`, `absolute`, `fixed`, dll.

Untuk mengatur *order* atau urutan tumpukan elemen tersebut, anda dapat menggunakan properti __z-index__.

Langsung saja, mari kita simak penggunaanya berikut.

## Menggunakan Properti Z-Index

Properti Z-Index digunakan untuk __mengatur *order* atau urutan__ dari tumpukan elemen, konsepnya seperti *layer* pada desain.

Dengan properti `z-index` anda dapat mengatur posisi elemen menjadi paling atas, paling bawah, dsb.

Properti z-index dapat bernilai **angka positif** maupun **negatif**, semakin besar angkanya semakin atas posisinya.

Contoh.

```html
<div class="kotak-biru">Kotak Biru</div>
<div class="kotak-hijau">Kotak Hijau</div>
```

```css
div {
  width: 200px;
  height: 200px;
  padding: 10px;
  position: absolute;
}
.kotak-biru {
  background-color: blue;
  top: 40px;`.
  left: 40px;
  z-index: 1;
}
.kotak-hijau {
  background-color: green;
  top: 20px;
  left: 20px;
  z-index: 2;
}
```

***

![Z Index]({{ site.baseurl }}/assets/img/css/z-index/1.png)

***

Karena `.kotak-hijau` nilai `z-index`-nya lebih besar dari `.kotak-biru`, maka ia tampil diatas `.kotak-biru`.

Sekarang coba kita balik nilai `z-index`-nya.

```css
.kotak-biru {
  background-color: blue;
  top: 40px;`.
  left: 40px;
  z-index: 2;
}
.kotak-hijau {
  background-color: green;
  top: 20px;
  left: 20px;
  z-index: 1;
}
```

***

![Z Index]({{ site.baseurl }}/assets/img/css/z-index/2.png)

***

Posisinya akan berbalik, `.kotak-biru` menjadi diatas `.kotak-hijau`.

## Referensi

Untuk pembahasan lebih lanjut, anda dapat mengunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_z-index.asp" target="_blank">CSS Z-Index</a>