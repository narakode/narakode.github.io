---
layout: post
title: "Mengenal Attribute Selector Pada CSS"
date: 2021-10-03 07:00:00 +0700
cover: attribute-selector-css.png
thumb: attribute-selector-css.png
categories: css
---

[Attribute Selector]({{ page.url }}) - Masih membahas mengenai selector pada CSS, kali ini selector yang tak kalah penting yaitu __attribute selector__.

Mari kita mulai mengenal attribute selector dari pengertianya dulu.

## Pengertian Attribute Selector

Attribute Selector adalah selector yang digunakan untuk memilih elemen berdasarkan **nama atribut** atau **nilai atribut** yang ditentukan.

Attribute Selector biasa digunakan pada kondisi tertentu, seperti:

* Memilih elemen yang memiliki atribut `title`.
* Memilih input dengan nilai atribut type `checkbox`.
* dll.

## Syntax

Attribute Selector dituliskan dengan tanda **kurung siku buka dan tutup** yang mengapit nama atau nilai atributnya.

```css
[atribut="value"] {
  property: value;
}
```

## Macam-Macam Attribute Selector

Ada beberapa macam jenis attribute selector. Berikut daftarnya.

### [attribute]

Digunakan untuk memilih elemen dengan atribut yang telah ditentukan.

Contoh memilih seluruh elemen yang memiliki atribut `title`.

```css
[title] {
  color: red;
}
```

Untuk lebih spesifik, juga dapat dicantumkan nama elemenya.

```css
a[title] {
  color: red;
}
```

Artinya memilih seluruh tag `<a>` yang memiliki atribut `title`.

### [attribute="value"]

Digunakan untuk memilih elemen dengan atribut dan nilai yang telah ditentukan.

```css
[title="judul"] {
  color: red;
}
```

Artinya memilih seluruh elemen yang memiliki atribut `title` dengan nilai `judul`.

<h3>[attribute~="value"]</h3>

Digunakan untuk memilih elemen dengan atribut yang sesuai dan nilainya **mengandung** teks/kata yang telah ditentukan.

Nilai disini dipisahkan dengan **tanda spasi**.

```css
[title~="judul"] {
  color: red;
}
```

Artinya memilih elemen dengan atribut title yang nilainya mengandung `judul`. Contoh 

* `<a title="judul">`
* `<a title="judul satu">`
* `<a title="satu judul">`

Karena aturan nilainya dipisahkan dengan tanda spasi, maka elemen yang nilainya mengandung `judul` tapi **tidak dipisahkan dengan spasi** tidak akan terpilih. Contoh `title="judul-satu"`, `title="judulpertama"` tidak akan terpilih.

<h3>[attribute*="value"]</h3>

Digunakan untuk memilih elemen dengan atribut yang sesuai dan nilainya **mengandung** teks/kata yang telah ditentukan.

Selector ini memilih elemen degan nilai yang mengandung teks/kata **tanpa memerhatikan** adanya spasi atau tanda lain.

```css
[title*="judul"] {
  color: red;
}
```

Artinya memilih elemen dengan atribut `title` yang nilainya mengandung `judul`. Contoh

* `<a title="judul satu">`
* `<a title="judul-satu">`
* `<a title="judulsatu">`

<h3>[attribute|="value"]</h3>

Digunakan untuk memilih elemen dengan atribut yang sesuai dan nilainya **diawali** dengan teks/kata yang telah ditentukan.

Nilai yang diambil adalah nilai yang dipisahkan dengan **tanda penghubung** (`-`).

```css
[title|="judul"] {
  color: red;
}
```
Artinya memilih elemen yang beratribut `title` dengan nilainya diawali `judul` dan dipisahkan dengan tanda hubung. Contoh

* `<a title="judul"`>
* `<a title="judul-satu"`>
* `<a title="judul-dua"`>

Karena aturan nilanya dipisahkan dengan tanda hubung, maka elemen yang nilainya diawali `judul` tapi **tidak dipisahkan tanda hubung** tidak akan terpilih. Contoh `title="judulsatu"`.

<h3>[attribute^="value"]</h3>

Digunakan untuk memilih elemen dengan atribut yang sesuai dan nilainya **diawali** dengan teks/kata yang telah ditentukan.

Nilai yang diambil **tanpa memerhatikan** adanya tanda hubung atau tanda lainya.

```css
[title^="judul"] {
  color: red;
}
```

Artinya memilih elemen dengan atribut `title` yang nilainya diawai `judul`. Contoh

* `<a title="judul satu">`
* `<a title="judulsatu">`
* `<a title="judul-satu">`

<h3>[attribute$="value"]</h3>

Digunakan untuk memilih elemen dengan atribut yang sesuai dan nilainya **diakhiri** dengan teks/kata yang telah ditentukan.

```css
[title$="judul"] {
  color: red;
}
```

Artinya memilih elemen dengan atribut `title` yang nilainya diakhiri dengan `judul`. Contoh

* `<a href="satu judul">`
* `<a href="satu-judul">`
* `<a href="satujudul">`

## Rerefensi

Untuk penjelasan lebih lanjut, anda dapat membacanya pada tautan berikut.

<a href="https://www.w3schools.com/css/css_attribute_selectors.asp" target="_blank">CSS Attribute Selector</a>