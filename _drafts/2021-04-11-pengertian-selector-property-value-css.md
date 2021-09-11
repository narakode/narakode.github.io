---
layout: post
title: "Pengertian Selector, Property, dan Value Pada CSS"
date: 2021-04-11 19:05:00 +0700
cover: pengertian-selector-property-value-css.png
thumb: pengertian-selector-property-value-css.png
categories: css
---

Terdapat tiga istilah yang digunakan dalam penulisan kode css, yaitu selector, property, dan value.

Ketiga istilah inilah yang akan menjadi pembangun dari sebuah kode css.

Mari kita pelajari satu persatu istilah-istilah tersebut.

## Selector

Selector adalah pemilih atau pencari.

Selector digunakan untuk memilih atau mencari bagian dari halaman website untuk dimanipulasi. Bagian tersebut bisa berupa tag, class, id, dll.

Terdapat beberapa jenis selector yang dapat digunakan dalam css.

Contoh selector.

```css
h1 {
  color: red;
}
.judul {
  color: blue;
}
#judul-konten {
  color: yellow;
}
```

Pada contoh kode diatas `h1`, `.judul`, `#judul-kontent`, adalah selector.

Untuk penjelasan lebih lanjut mengenai selector pada css silahkan baca postingan dibawah ini.

[Mengenal 5 Macam Selector pada CSS]({{ site.url }}/menegenal-selector-css)

## Property

Property adalah jenis style yang berfungsi untuk memberikan perubahan pada selector.

Terdapat ratusan property yang dapat digunakan di css.

Contoh Property.

```css
h1 {
  font-family: sans-serif;
  font-size: 30px;
  text-align: center;
  color: red;
}
```

Pada contoh diatas, terdapat 4 jenis property yaitu.

* `font-family`, untuk mengatur jenis font
* `font-size`, untuk mengatur ukuran font
* `text-align`, untuk mengatur penempatan teks
* `color`, untuk mengatur warna teks

## Value

Value adalah nilai dari property.

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

Berikut penjelasan kode diatas.

* Property `font-family`, memiliki value `sans-serif`
* Property `font-size`, memiliki value `30px`
* Property `text-align`, memiliki value `center`
* Property `color`, memiliki value `red`