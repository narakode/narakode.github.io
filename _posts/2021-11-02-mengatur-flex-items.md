---
layout: post
title: "Belajar CSS Flexbox : Mengatur Flex Items"
date: 2021-11-02 07:00:00 +0700
cover: mengatur-flex-items.png
thumb: mengatur-flex-items.png
categories: css
---

[Flex Items]({{ page.url }}) - Flex items adalah __elemen__ atau __isi__ dari flexbox.

Flex items memiliki properti-properti yang berfungsi mengatur bagaimana ia ditampilkan.

Contohnya seperti mengatur nomor urutan, mengatur posisi, dll.

Langusng saja, mari kita simak pembahasanya berikut.

## Properti Order

Properti Order berfungsi untuk __mengatur nomor urut__ flex items.

Nilainya berupa angka, semakin kecil angka semakin awal nomor urutnya.

```css
.container { display: flex; }
.kotak-1 { order: 2; }
.kotak-2 { order: 3; }
.kotak-3 { order: 5; }
.kotak-4 { order: 4; }
.kotak-5 { order: 1; }
```

![Flex Order]({{ site.base_url }}/assets/img/css/flexbox/4/order.png)

## Properti Flex-Grow

Properti flex-grow berfungsi untuk mengatur berapa besar __pelebaran elemen__ dalam mengisi ruang kosong _container_.

Nilainya berupa angka, semakin besar angka semakin besar pelebaran elemen.

```css
.container { display: flex; }
.kotak-1 { flex-grow: 1; }
.kotak-2 { flex-grow: 2; }
.kotak-3 { flex-grow: 3; }
.kotak-4 { flex-grow: 4; }
.kotak-5 { flex-grow: 5; }
```

![Flex Grow]({{ site.base_url }}/assets/img/css/flexbox/4/flex-grow.png)

## Properti Flex-Shrink

Properti flex-shrink berfungsi untuk mengatur berapa besar __penyusutan elemen__ ketika _container_ penuh.

Nilainya berupa angka, semakin kecil angka semakin kecil pelebaran elemen.

```css
.container { display: flex; }
.kotak-1 { flex-shrink: 0; }
.kotak-2 { flex-shrink: 1; }
.kotak-3 { flex-shrink: 2; }
.kotak-4 { flex-shrink: 3; }
```

![Flex Shrink]({{ site.base_url }}/assets/img/css/flexbox/4/flex-shrink.png)

## Properti Flex-Basis

Properti flex-basis berfungsi untuk __menentukan ukuran awal__ flex-items.

Jika `flex-direction` _container_ bernilai `row`, maka ukuran yang ditentukan __lebarnya__, jika bernilai `column`, ukuran yang ditentukan __tingginya__.

```css
.container { display: flex }
.kotak { flex-basis: 100px }
```

![Flex Basis]({{ site.base_url }}/assets/img/css/flexbox/4/flex-basis.png)

## Properti Align-Self

Properti align-self berfungsi untuk __mengatur posisi__ flex-items itu sendiri.

Properti ini fungsi dan nilainya sama seperti `align-items` pada `container`, bedanya `align-self` hanya mengatur posisi dari **flex-items yang dituju** saja.

```css
.container {
  display: flex;
  align-items: stretch;
}
.kotak-2 { align-self: flex-start }
.kotak-3 { align-self: center }
.kotak-4 { align-self: flex-end }
```

![Align Self]({{ site.base_url }}/assets/img/css/flexbox/4/align-self.png)

## Referensi

Untuk pembahasan lebih lanjut, kunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css3_flexbox_items.asp" target="_blank">CSS3 Flexbox Items</a>