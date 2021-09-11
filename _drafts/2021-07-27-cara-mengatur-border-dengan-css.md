---
layout: post
title: "Cara Mengatur Border Dengan CSS"
date: 2021-07-27 20:18:00 +0700
cover: mengatur-border-dengan-css.png
thumb: mengatur-border-dengan-css.png
categories: css
---

Border pada CSS adalah property yang digunakan untuk mengatur garis tepi dari sebuah elemen HTML.

Garis tersebut dapat diatur mulai dari warnanya, jenisnya, ketebalanya, dll.

Mari kita bahas masing-masing property pada border tersebut, satu persatu.

## Border Style

Property `border-style` digunakan untuk mengatur jenis garis tepi pada elemen tertuju.

Terdapat beberapa jenis yang dapat kita gunakan, yaitu.

* `dotted`, garis titik-titik
* `dashed`, garis dengan tanda pisah
* `solid`, garis lurus
* `double`, garis dobel
* dll.

Contoh.

```css
.kotak1 {
  border-style: dotted;
}
.kotak2 {
  border-style: solid;
}
```

Hasilnya

![Border Style]({{ site.baseurl }}/assets/img/border-style.png)

## Border Width

Property ini digunakan untuk mengatur ketabalan garis tepi.

Nilai dari ketebalan bisa `px`, `rm`, `%`, dll.

Contoh.

```css
.kotak1 {
  border-style: dotted;
  border-width: 2px;
}
.kotak2 {
  border-style: solid;
  border-width: 5px;
}
```

Hasilnya

![Border Width]({{ site.baseurl }}/assets/img/border-width.png)

## Border Color

Property ini digunakan untuk mengatur warna garis tepi.

Contoh.

```css
.kotak1 {
  border-style: dotted;
  border-color: red;
}
.kotak2 {
  border-style: solid;
  border-color: blue;
}
```

Hasilnya

![Border Color]({{ site.baseurl }}/assets/img/border-color.png)

## Border Radius

Property ini digunakan untuk memberi lengkungan pada garis tepi.

Nilai property ini bisa `px`, `rem`, `%`, dll.

Contoh.

```css
.kotak1 {
  border-style: solid;
  border-radius: 10px;
}
.kotak2 {
  border-style: solid;
  border-radius: 30px;
}
```

Hasilnya

![Border Radius]({{ site.baseurl }}/assets/img/border-radius.png)

## Shorthand

Kita juga dapat mengatur border dengan satu baris kode, yaitu dengan menggunakan *shorthand*, berikut *syntax*-nya.

```css
border: ketebalan(px) jenis(solid) warna(red);
```

Contoh.

```css
.kotak {
  border: 1px solid red;
}
```

Hasilnya

![Border Shorthand]({{ site.baseurl }}/assets/img/border-shorthand.png)

***

Masih ada beberapa cara dan property lainya yang bisa digunakan untuk mengatur border, silahkan bereksperimen sendiri.