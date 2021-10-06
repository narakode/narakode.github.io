---
layout: post
title: "6 Jenis Nilai Warna Pada CSS"
date: 2021-10-06 08:00:00 +0700
cover: jenis-nilai-warna-css.png
thumb: jenis-nilai-warna-css.png
categories: css
---

[Nilai Warna]({{ page.url }}) - Pada postingan sebelumnya kita sudah membahas mengenai property-property CSS yang nilainya berupa warna.

Seperti `color` dan `background-color`.

Pada postingan tersebut saya mencontohkan nilai warna dengan nama warnanya.

Pada CSS terdapat __6 jenis nilai warna__ termasuk nama warna tersebut.

Langsung saja berikut daftarnya.

## Nama Warna

Jenis ini yang paling mudah digunakan, yaitu dengan menuliskan nama yang akan digunakan.

Contohnya, warna merah berarti `red`, biru `blue`, hijau `green`, dsb.

```css
p {
  color: red;
}
```

Ada sekitar 140 nama warna yang dapat digunakan pada CSS. Untuk daftar lengkapnya kunjungi tautan berikut.

<a href="https://www.w3schools.com/colors/colors_names.asp" target="_blank">Colors Names</a>

## Warna Heksadesimal

Heksadesimal adalah sistem bilangan yang menggunakan 16 simbol, angka **0 - 9** dan huruf **A - F**.

Heksadesimal dapat digunakan sebagai warna, dengan penulisannya menggunakan tanda pagar (`#`) sebelum kodenya.

Kode Heksadesimal dapat terdiri dari 6 atau 3 digit.

```css
p {
  background-color: #000;
  color: #FF0000;
}
```

Tiap-tiap angka pada kode heksadesimal menentukan warna yang ditampilkan (`#RRGGBB` atau `#RGB`).

Anda dapat membuat warna heksadesimal dengan bantuan <a href="https://www.w3schools.com/colors/colors_hexadecimal.asp" target="_blank">_hex calculator_</a>.

## Warna RGB

Warna RGB pada CSS dibuat dengan fungsi `rgb()` dengan tiga parameter berisi angkanya, `red`, `green`, `blue`.

Nilai angkanya dimulai dari angka **0 - 255**.

```css
p {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 0, 0);
}
```

Anda dapat mencoba <a href="https://www.w3schools.com/colors/colors_rgb.asp" target="_blank">_RGB calculator_</a> untuk membuat warna RGB.

## Warna RGBA

Fungsi jenis ini sama seperti RGB, dengan penambahan parameter `A` yang berarti _alpha_, untuk mengatur transaparansi warna.

Nilai angkanya dimulai dari **0.1** - **1.0**.

```css
body {
  background-color: rgb(255, 0, 0, 0.5);
}
```

## Warna HSL

Warna HSL terdiri dari _hue_, _saturation_, dan _lightness_.

```css
hsl(hue, saturation, lightness);
```

* Nilai _hue_ dimulai dari **0 - 360**.
* Nilai _saturation_ dan _lightness_ menggunakan persen dimulai dari **1 - 100**.

Contoh.

```css
body {
  background-color: hsl(0, 100%, 50%);
}
```

## Warna HSLA

Fungsi jenis ini sama seperti HSL, dengan penambahan parameter `A` yang berarti _alpha_, untuk mengatur transaparansi warna.

```css
body {
  background-color: hsl(0, 100%, 50%, 0.5);
}
```

## Referensi

Saya sudah menyediakan referensi yang berisi penjelasan lengkap mengenai warna, mulai dari __jenis warna__, kalkulator warna, konverter warna, sampai psikologi warna. Berikut tautanya.

<a href="https://www.w3schools.com/colors/default.asp" target="_blank">Colors Tutorial</a>