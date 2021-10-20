---
layout: post
title: "Belajar CSS : Mengatur Transparansi Elemen"
date: 2021-10-20 11:00:00 +0700
cover: mengatur-transparansi-elemen-css.png
thumb: mengatur-transparansi-elemen-css.png
categories: css
---

[Transparansi Elemen]({{ page.url }}) - Transparansi Elemen dapat diatur dengan CSS melalui properti __opacity__.

Transparansi elemen sering digunakan untuk mengatur efek visual seperti animasi, transisi, dll.

Langsung saja mari kita simak pembahasanya berikut.

## Mengatur Transparansi Elemen

Untuk mengatur transparansi elemen, gunakan properti __opacity__ dengan nilai angka `0 - 1.0`.

Semakin kecil nilainya maka semakin transparan elemen tersebut.

Nilai 0 akan membuat elemen __transparan__/tidak terlihat.

Contoh.

```html
<img src="gambar.png" class="gambar-1">
<img src="gambar.png" class="gambar-2">
<img src="gambar.png" class="gambar-3">
```

```css
.gambar-1 {
  opacity: 0.2;
}
.gambar-2 {
  opacity: 0.7;
}
.gambar-3 {
  opacity: 1;
}
```

***

![Opacity]({{ site.baseurl }}/assets/img/css/opacity/opacity.png)

***

## Efek Hover Transparan

Dengan menggunakan properti `opacity` pada selector `:hover`, akan menghasilkan efek visual transparansi yang berubah ketika kursor diarahkan ke elemen.

Contoh.

```html
<img src="gambar.png" />
```

```css
img {
  opacity: 0.5;
}
img:hover {
  opacity: 1;
}
```

## Background Transparan

Ketika menggunakan `opacity`, elemen beserta isi elemen di dalamnya seperti teks akan ikut transparan.

Untuk mengatur agar _background_-nya saja yang transparan, anda dapat menggunakan properti `backround-color` dengan nilai `rgba`.

Contoh.

```html
<div class="kotak">Teks di dalam kotak transparan</div>
```

```css
.kotak {
  background-color: rgba(0,0,255,0.5);
}
```

***

![RGBA]({{ site.baseurl }}/assets/img/css/opacity/rgba.png)

***

## Referensi

Untuk pembahasan lebih lanjut, kunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_image_transparency.asp" target="_blank">CSS Image Transparancy</a>