---
layout: post
title: "Belajar CSS : Pemformatan Teks"
date: 2021-10-17 07:00:00 +0700
cover: pemformatan-teks-css.png
thumb: pemformatan-teks-css.png
categories: css
---

[Pemformatan Teks]({{ page.url }}) - Pemformatan teks adalah cara untuk mengubah gaya atau tampilan pada sebuah teks. Seperti mengubah posisi teks, warna teks, dll.

Dengan melakukan pemformatan teks, konten pada halaman web akan lebih nyaman dan menarik untuk dibaca pengunjung.

Langsung saja, mari kita simak pembahasanya berikut.

## Mengubah Warna Teks

Untuk mengubah warna teks, gunakan properti `color` dengan nilai warnanya.

Contoh.

```css
h1 {
  color: red;
}
h2 {
  color: #0000FF;
}
```

***

![Color]({{ site.baseurl }}/assets/img/css/pemformatan-teks/color.png)

***

## Mengatur Posisi Teks

Untuk mengatur posisi teks, gunakan properti `text-align`, dengan nilai:

* `left`, rata kiri
* `right`, rata kanan
* `center`, rata tengah
* `justify`, rata kanan kiri

Contoh.

```css
.paragraf-1 {
  text-align: right;
}
.paragraf-2 {
  text-align: center;
}
.paragraf-3 {
  text-align: justify;
}
```

***

![Text Align]({{ site.baseurl }}/assets/img/css/pemformatan-teks/text-align.png)

***

## Menambah Dekorasi Teks

Untuk menambah dekorasi teks, gunakan properti `text-decoration`, dengan nilai:

* `underline`, dekorasi garis bawah
* `overline`, dekorasi garis atas
* `line-through`, dekorasi garis coret

Contoh.

```css
.judul-1 {
  text-decoration: underline;
}
.judul-2 {
  text-decoration: overline;
}
.judul-3 {
  text-decoration: line-through;
}
```

***

![Text Decoration]({{ site.baseurl }}/assets/img/css/pemformatan-teks/text-decoration.png)

***

## Mengubah Kapitalisasi Teks

Untuk mengubah kapitalisasi teks, gunakan properti `text-transform`, dengan nilai:

* `uppercase`, teks dengan huruf besar
* `lowercase`, teks dengan huruf kecil
* `capitalize`, huruf pertama besar 

Contoh.

```css
.judul-1 {
  text-transform: uppercase;
}
.judul-2 {
  text-transform: lowercase;
}
.judul-3 {
  text-transform: capitalize;
}
```

***

![Text Transform]({{ site.baseurl }}/assets/img/css/pemformatan-teks/text-transform.png)

***

## Mengatur Indentasi Teks

Untuk mengatur indentasi teks, gunakan properti `text-indent`, dengan nilai satuan ukuran seperti px, rem, dll.

Contoh.

```css
.paragraf-1 {
  text-indent: 50px;
}
.paragraf-2 {
  text-indent: 20px;
}
```

***

![Text Indent]({{ site.baseurl }}/assets/img/css/pemformatan-teks/text-indent.png)

***

## Referensi

Untuk pembahasan lebih lengkap, kunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_text.asp" target="_blank">CSS Text</a>