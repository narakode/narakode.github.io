---
layout: post
title: "Mengenal 5 Jenis Nilai Warna pada CSS"
date: 2021-04-18 09:33:00 +0700
cover: jenis-nilai-warna-css.png
thumb: jenis-nilai-warna-css.png
categories: css
---

Dalam menuliskan property bernilai warna di CSS, kita dapat mengisinya dengan berbagai jenis nilai yang sudah disediakan.

Jenis nilai warna tersebut digunakan pada property yang bernilaikan warna pada css, seperti `background-color`, `color`, dll.

Terdapat banyak jenis nilai warna pada css, dan kali ini saya akan membagikan 5 jenisnya.

## Hekadesimal

Jenis warna heksadesimal dituliskan dengan format `#RRGGBB`.

* `RR` merupakan nilai warna merah
* `GG` merupakan nilai warna hijau
* `BB` merupakan nilai warna biru

Masing-masing nilai tersebut diisi dengan angka `00` sampai `FF`.

```css
.merah {
  color: #FF0000; /* Merah */
}
.hijau {
  color: #00FF00; /* Hijau */
}
.biru {
  color: #0000FF; /* Biru */
}
```

## RGB

Jenis warna RGB dituliskan dengan menggunakan fungsi `rgb()`. Dengan syntax berikut.

```
rgb(merah, hijau, biru);
```

Masing-masing nilai tersebut ditulis dengan angka 0 - 255 atau 0% - 100%.

```css
.merah {
  color: rgb(255, 0, 0); /* Merah */
}
.hijau {
  color: rgb(0, 255, 0); /* Hijau */
}
.biru {
  color: rgb(0, 0, 255); /* Biru */
}
```

## RGBA

Jenis ini merupakan lanjutan dari jenis sebelumnya, dengan nilai tambahan `alpha` yang digunakan untuk mengatur transparasi warna.

Jenis ini ditulis dengan fungsi `rgba()`, dengan syntax berikut. 

```
rgba(merah, hijau, biru, transparasi);
```

Nilai transparasi ditulis dengan angka 0.0 sampai 1.0

```css
.merah {
  color: rgba(255, 0, 0, 0.5); /* Merah */
}
.hijau {
  color: rgba(0, 255, 0, 0.2); /* Hijau */
}
.biru {
  color: rgba(0, 0, 255, 0.9); /* Biru */
}
```

## Nama Warna

Jenis ini dituliskan dengan nama warnanya.

CSS memiliki 140+ lebih nama warna yang bisa digunakan.

```css
.merah {
  color: red; /* Merah */
}
.hijau {
  color: green; /* Hijau */
}
.biru {
  color: blue; /* Biru */
}
```

Untuk lebih lengkapnya nama-nama warnanya dapat dilihat di [https://developer.mozilla.org/en-US/docs/CSS/color_value](https://developer.mozilla.org/en-US/docs/CSS/color_value)

## Transparent

Nilai ini digunakan untuk membuat warna transparan.

```css
.transparan {
  color: transparent; /* Merah */
}
```

***

Masih banyak jenis nilai warna pada CSS, silahkan cek [https://www.w3schools.com/cssref/css_colors_legal.asp](https://www.w3schools.com/cssref/css_colors_legal.asp), untuk jenis warna yang lebih lengkap.