---
layout: post
title: "Pengertian Selector, Property, dan Value Pada CSS"
date: 2021-09-27 05:30:00 +0700
cover: pengertian-selector-property-value-css.png
thumb: pengertian-selector-property-value-css.png
categories: css
---

[Selector, Property dan Value Pada CSS]({{ page.url }}) - Terdapat tiga istilah yang digunakan dalam penulisan kode css, yaitu selector, property, dan value.

Ketiga istilah tersebut yang akan menjadi pembangun dari keseluruhan kode css.

Masing-masing istilah tersebut memiliki fungsinya masing-masing, berikut penjelasanya.

## Selector

Selector adalah __pemilih__ atau __pencari__.

Selector digunakan untuk memilih atau mencari bagian dari halaman website untuk dimanipulasi atau diberi gaya. Bagian tersebut dapat berupa tag, class, id, dll.

Terdapat beberapa jenis selector yang dapat digunakan dalam css.

Contoh selector.

```css
h1 { /* Selector H1 */
  color: red;
}
.judul { /* Selector .judul */
  color: blue;
}
#judul-konten { /* Selector #judul-konten */
  color: yellow;
}
```

Pada contoh kode di atas `h1`, `.judul`, `#judul-kontent`, adalah selector.

## Property

Property adalah __jenis style__ yang akan diubah pada selector tertuju.

Property digunakan untuk menentukan bagian apa dari selector yang akan diubah, seperti jenis font, ukuran font, warna teks, dll.

Terdapat ratusan property yang dapat digunakan pada css.

Contoh Property.

```css
h1 {
  font-family: sans-serif;
  font-size: 30px;
  text-align: center;
  color: red;
}
```

Pada contoh di atas, terdapat 4 jenis property pada selector `h1`, yaitu.

* `font-family`, untuk mengatur jenis font
* `font-size`, untuk mengatur ukuran font
* `text-align`, untuk mengatur posisi teks
* `color`, untuk mengatur warna teks

## Value

Value adalah __nilai__ dari property.

Misalkan property `color` yang digunakan untuk mengatur warna teks, maka value yang dapat digunakan adalah red, blue, white, black, dll.

Contoh

```css
h1 {
  font-family: sans-serif;
  font-size: 30px;
  text-align: center;
  color: red;
}
```

Berikut penjelasan kode di atas.

* Property `font-family`, memiliki value `sans-serif`
* Property `font-size`, memiliki value `30px`
* Property `text-align`, memiliki value `center`
* Property `color`, memiliki value `red`

## Kesimpulan

Pemahaman mengenai selector, property, dan value adalah hal dasar yang harus dipahami ketika akan belajar CSS.

Karena ketiga istilah tersebut akan selalu tersirat dalam penulisan kode CSS.