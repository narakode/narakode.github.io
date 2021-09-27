---
layout: post
title: "Aturan Penulisan Kode CSS"
date: 2021-09-28 05:00:00 +0700
cover: aturan-penulisan-kode-css.png
thumb: aturan-penulisan-kode-css.png
categories: css
---

[Aturan Penulisan Kode CSS]({{ page.url }}) - Dalam menuliskan kode CSS, terdapat beberapa aturan yang harus kita pahami, agar kode CSS dapat berjalan dengan semestinya.

Berikut beberapa aturan saat menuliskan kode CSS yang sudah saya rangkum.

## Property Dituliskan Di Dalam Kurung Kurawal

Setelah penulisan selector, semua property ditulis di dalam kurung kurawal buka dan kurung kurawal tutup.

```css
selector {
  /* Property */
}
```

## Titik Koma Diantara Property

Diantara property satu dengan lainya, dipisahkan dengan __titik koma__.

```css
selector {
  property1: value;
  property2: value;
}
```

Ada tambahan, untuk property yang berada pada baris paling akhir, kita boleh __mengabaikan titik koma__ pada akhir penulisannya.

```css
selector {
  property1: value;
  property2: value;
  property3: value
}
```

## Titik Dua Diantara Property dan Value

Diantara property dan value, dipisahkan dengan __titik dua__.

```css
selector {
  property: value;
}
```

## Penulisan Komentar

Komentar pada CSS digunakan untuk __menonaktifkan blok kode CSS__.

Kode CSS yang diberikan komentar tidak akan dijalankan browser dan tidak dapat digunakan.

Penggunaan komentar cocok untuk menonaktifkan kode sementara tapi tidak ingin menghapusnya.

Penulisanya diawali dengan simbol `/*` dan diakhiri `*/`.

```css
p {
  color: red;
  /* font-size: 35px; */
}
```