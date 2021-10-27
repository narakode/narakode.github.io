---
layout: post
title: "Belajar CSS : Membuat Efek Bayangan (Shadow)"
date: 2021-10-27 08:00:00 +0700
cover: membuat-efek-bayangan-css.png
thumb: membuat-efek-bayangan-css.png
categories: css
---

[Efek Bayangan (Shadow)]({{ page.url }}) - Efek bayangan (shadow) merupakan salah satu teknik desain yang cukup sering digunakan.

Anda juga dapat membuat efek bayangan pada elemen HTML menggunakan css.

Ada dua properti CSS yang digunakan untuk membuat bayangan, __box-shadow__ dan __text-shadow__.

Langsung saja, mari kita simak penjelasanya.

## Membuat Bayangan Pada Kotak

Untuk membuat bayangan pada kotak, gunakan properti __box-shadow__.

Berikut _syntax_-nya.

```css
box-shadow: x y z warna;
```

* Nilai `x` untuk arah bayangan horizontal
* Nilai `y` untuk arah bayangan vertikal
* Nilai `z` untuk tingkat keburaman (blur)

Nilai `xyz` dapat berupa angka dan satuan ukuran positif maupun negatif.

Contoh.

```css
.kotak {
  width: 400px;
  height: 200px;
  background-color: red;
  /* Box Shadow */
  box-shadow: 10px 20px 10px gray;
}
```

***

![Box Shadow]({{ site.baseurl }}/assets/img/css/shadow/box-shadow.png)

***

## Membuat Bayangan Pada Teks

Untuk membuat bayangan pada teks, gunakan properti __text-shadow__.

Berikut _syntax_-nya.

```css
text-shadow: x y z warna;
```

* Nilai `x` untuk arah bayangan horizontal
* Nilai `y` untuk arah bayangan vertikal
* Nilai `z` untuk tingkat keburaman (blur)

Nilai `xyz` dapat berupa angka dan satuan ukuran positif maupun negatif.

Contoh.

```css
h1 {
  text-shadow: 10px 10px 5px red;
}
```

***

![Text Shadow]({{ site.baseurl }}/assets/img/css/shadow/text-shadow.png)

***

## Referensi

Untuk pembahasan lebih lanjut, kunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css3_shadows.asp" target="_blank">CSS Shadow Effect</a>