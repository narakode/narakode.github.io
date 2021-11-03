---
layout: post
title: "Belajar CSS : Menggunakan Properti Box Sizing"
date: 2021-11-03 08:00:00 +0700
cover: menggunakan-properti-box-sizing.png
thumb: menggunakan-properti-box-sizing.png
categories: css
---

[Box Sizing]({{ page.url }}) - Salah satu properti yang penting pada CSS namun jarang dipahami adalah __box-sizing__.

Box-Sizing memiliki peran penting dalam mengatur ukuran sebuah elemen HTML.

Lalu, apa fungsi properti box-sizing tersebut? Mari kita simak pembahasanya berikut.

## Permasalahan

Misal disini saya punya dua buah kotak div, dengan ukuran lebar dan tinggi yang sama, dan warna border yang berbeda.

```html
<div class="kotak-1">Kotak 1</div>
<div class="kotak-2">Kotak 2</div>
```

```css
div {
  width: 400px;
  height: 100px;
  margin-bottom: 20px;
}
.kotak-1 {
  border: 2px solid red;
}
.kotak-2 {
  border: 2px solid blue;
}
```

***

![Persiapan]({{ site.base_url }}/assets/img/css/box-sizing/persiapan.png)

***

Masih belum ada masalah, sekarang saya tambahkan __padding__ pada _kotak-2_.

```css
.kotak-2 {
  border: 2px solid blue;
  padding: 20px;
}
```

***

![Masalah]({{ site.base_url }}/assets/img/css/box-sizing/masalah.png)

***

Muncul masalah, lebar _kotak-2_ menjadi **lebih besar** dari _kotak-1_.

Padahal jika dilihat dari ukuran lebarnya sama **400px**.

### Mengapa ini bisa terjadi?

Jawabanya adalah karena ukuran lebar sebuah elemen **tidak dihitung** dari nilai properti width, tapi dari __kalkulasi beberapa properti__ lainya, yaitu.

```
lebar-elemen = width + padding kanan + padding kiri + border kanan + border kiri + margin kanan + margin kiri
```

Nah, untuk mengatasinya gunakanlah properti __box-sizing__.

## Mengatasi Permasalahan Dengan Box-Sizing

Box-Sizing mengatur agar ukuran elemen dihitung berdasarkan properti __width__ dan __height__ saja.

Untung menggunakanya, anda hanya perlu menambahkan properti __box-sizing__ dengan nilai __border-box__ pada elemen yang dituju.

Contoh.

```css
div {
  width: 400px;
  height: 100px;
  margin-bottom: 20px;
  /* box-sizing */
  box-sizing: border-box;
}
```

***

![Border Box]({{ site.base_url }}/assets/img/css/box-sizing/border-box.png)

***

Dapat dilihat hasilnya, lebar kedua kotak menjadi sama, walaupun kotak-2 sudah diberi padding.

## Kesimpulan

Selain lebar elemen, perhitungan tinggi elemen juga memiliki konsep dan aturan yang sama.

Untuk penjelasanya, anda dapat mengunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css3_box-sizing.asp" target="_blank">CSS Box Sizing</a>